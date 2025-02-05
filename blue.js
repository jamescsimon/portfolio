//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // render min distance
    1000 // render max distance
);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const ambLight = new THREE.AmbientLight(0x404040, 1.5); 
scene.add(ambLight);

const textureLoader = new THREE.TextureLoader();

let shootingStars = [];
let deltaElev = 25;
const glowTexture = textureLoader.load('./images/cometTrail.png');
const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, color: 0xffffff, blending: THREE.AdditiveBlending });

function createComet(size, elevation) {
    const cometGeo = new THREE.SphereGeometry(size / 2, 6, 6);
    const cometMat = new THREE.MeshBasicMaterial({ map: textureLoader.load('./images/white.png') });
    const comet = new THREE.Mesh(cometGeo, cometMat);
    comet.position.set(-100, elevation - 5, 0);
    scene.add(comet);

    const glowSprite = new THREE.Sprite(glowMaterial); // Reuse material
    glowSprite.scale.set(100 * size, 2.5 * size, size);
    glowSprite.position.copy(comet.position);
    scene.add(glowSprite);

    shootingStars.push({ star: comet, light: glowSprite });
}

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load('./images/blue.png')  // Link
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

function createPlanet(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if (ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = position;
    return { mesh, obj };
}

const mercury = createPlanet(3.2, './images/mercury.jpg', 119); // Link
const venus = createPlanet(5.8, './images/venus.jpg', 270); // Link
const earth = createPlanet(6, './images/earth.jpg', 360); // Link
const mars = createPlanet(4, './images/mars.jpg', 480); // Link

// camera vars
let ci = 0; // camera index
let cmax = 4; // camera max (num planets)

function initializeSkillsSection() {
    // Get the query string parameters
    const urlParams = new URLSearchParams(window.location.search);
    const ciNew = urlParams.get('ci'); // Retrieve the ci value

    console.log('CI from query string:', ciNew); // Debugging

    if (ciNew) {

        if(ciNew == 1){
            window.camNext();
        }
        else{
            window.camNext();

            ci = parseInt(ciNew, 10); // Ensure it's an integer
            console.log('Global CI set to:', ci); // Debugging

            ci -= 1;
            window.camNext();
        }
        
    }

}

window.addEventListener('DOMContentLoaded', initializeSkillsSection);
document.getElementById('skills').textContent = 'Skills';

const planetNames = [
    "Interactive Media Design", 
    "BREAK",
    "Cat Counselor", 
    "Butterflies", 
    "Blackout"
];

const planetDescriptions = [
    "Projects Timeline", 
    "Passion project | 2023+", 
    "Sloan Grant application | 2023-24", 
    "First game on Steam! | 2023", 
    "First passion project | 2019-23"
];

const visitability = [
    "",
    "In Progress",
    "Demo Only",
    "Visit",
    "Visit"
]

const overviewDescriptions = [ // job overview
    "",
    "As Technical Director and Co-Founder I led a multifaceted team of game engine programmers, game designers, scriptwriters, among others. I mapped out system architecture and mitigated potential issues, tailored U.I./U.X. to experience goals using Q.A. feedback data, and aided game programming/designing when needed.",
    "Advised by educational pyschologist Dr. Eun Park, I wrote out a detailed design document outlining all facets of the mobile game. I used this document as reference to make a Unity game alongside a game artist to develop a demo.",
    "Made alongside amazing film, game art, and screenwriting students as part of school curriculum to construct a transmedia project. I designed the game mechanics, programmed the game in Unity with C#, and integrated playtester feedback to best meet user experience goals. From this opertunity we were allowed to present at a showcase event.",
    "My first game conquest, made in Roblox Studio with Lua, saw me write up a design document, make assets in Blender, familarize myself with post-processessing and shader programming, and the semantics of game development as a whole. I give much credit to this project for unlocking my passions for game design/development and gameplay programming, even if it was horribly overscoped."
]

const projectDesc = [ // project description
    "",
    "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
    "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",    
    "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
    "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading a storybook at the hospital."
]

const skills = [
    [], // • bullet point 
    ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"],
    ["C# for Unity", "Game Design/Development", "iOS Mobile App Development", "Project Planning/Management", "Technical Writing/Documentation", "U.I./U.X. Design",],
    ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Q.A. Testing & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
    ["Blender Modeling", "Lua for Roblox Studio", "Game Design/Development", "Post-Processing and Shaders","Technical Writing/Documentation", "U.I./U.X. Design"]
]

function updateText() {
    document.getElementById('planetName').textContent = planetNames[ci];
    document.getElementById('planetDesc').textContent = planetDescriptions[ci];
    document.getElementById('visitability').textContent = visitability[ci];
    document.getElementById('overviewDesc').textContent = overviewDescriptions[ci];
    document.getElementById('projectDesc').textContent = projectDesc[ci];
    const skillList = document.getElementById('skillList');
    skillList.innerHTML = '';
    skills[ci].forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillList.appendChild(listItem);
    });    
}

function animate() {
    // Self-rotation
    sun.rotateY(0.00125);
    mercury.mesh.rotateY(0.002);
    venus.mesh.rotateY(0.003);
    earth.mesh.rotateY(0.004);
    mars.mesh.rotateY(0.0045);

    // Around-sun-rotation
    mercury.obj.rotateY(0.001);
    venus.obj.rotateY(0.0015);
    earth.obj.rotateY(0.001);
    mars.obj.rotateY(0.0008);

    renderer.render(scene, camera);

    if (ci == 0) { // sun
        camera.position.set(150, 0, 0);
        camera.lookAt(0, 0, 0);
        mercury.mesh.remove(camera);
        document.getElementById('overview').textContent = "";
        document.getElementById('description').textContent = "";
        document.getElementById('skillList').style.zIndex = '-101';
        document.getElementById('overviewDesc').style.zIndex = '-101'; 
        document.getElementById('skills').textContent = "";
    } 

    composer.render();
    requestAnimationFrame(animate);

    let n = Math.random(); 
    
    if (n < 0.001) { 
        createComet(n * 1000, (-1 * deltaElev) + (n * 100000)); 
    } 
    
    shootingStars = shootingStars.filter(comet => {
        if (comet.star.position.x > 75) {
            scene.remove(comet.star);
            scene.remove(comet.light);
            return false; // Remove from the array
        }
        comet.star.position.x += 1;
        comet.light.position.copy(comet.star.position);
        return true; // Keep in the array
    });  
}
animate();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', function (event) { 
    if (event.code === 'Space') { 
        const size = Math.random() * 0.5 + 0.1; 
        const elevation = Math.random() * 40 - 20; 
        createComet(size, elevation); 
    }
});

const monitor = document.getElementById('monitor'); 
const bonus = document.getElementById('bonus'); 
const sights = document.getElementById('sight'); 
const launchButton = document.getElementById('launch'); 
const lArrow = document.getElementById('leftArrow'); 
const rArrow = document.getElementById('rightArrow');

const mercuryGif = document.getElementById('gif1'); 
const venusGif = document.getElementById('gif2'); 
const earthGif = document.getElementById('gif3'); 
const marsGif = document.getElementById('gif4'); 

monitor.style.zIndex = '-101';
bonus.style.zIndex = '-101';
sights.style.zIndex = '-101';
launchButton.style.zIndex = '-101';
lArrow.style.zIndex = '101'; 
rArrow.style.zIndex = '101';

mercuryGif.style.zIndex = '-100'; 
venusGif.style.zIndex = '-100'; 
earthGif.style.zIndex = '-100'; 
marsGif.style.zIndex = '-100'; 

window.camNext = function () {
    if (ci < cmax) {
        ci += 1;
        console.log("ci=", ci);
        updateText();
    }

    if (ci == 1) { // mercury
        camera.position.set(-30, 0, 40);
        camera.lookAt(0, 0, 0);
        mercury.mesh.add(camera);
        document.getElementById('skillList').style.zIndex = '101';
        document.getElementById('overviewDesc').style.zIndex = '101'; 
        document.getElementById('overview').textContent = "Job Overview";
        document.getElementById('description').textContent = "Project Description";
        document.getElementById('skills').textContent = "Skills";
        monitor.style.zIndex = '90';
        sights.style.zIndex = '90';
        bonus.style.zIndex = '90';
        launchButton.style.zIndex = '90';
        mercuryGif.style.zIndex = '100'; 
    } else if (ci == 2) { // venus
        venus.mesh.add(camera);
        mercury.mesh.remove(camera);
        mercuryGif.style.zIndex = '-100';
        venusGif.style.zIndex = '100';
    } else if (ci == 3) { // earth
        earth.mesh.add(camera);
        venus.mesh.remove(camera);
        venusGif.style.zIndex = '-100'; 
        earthGif.style.zIndex = '100'; 
    } else if (ci == 4) { // mars
        mars.mesh.add(camera);
        earth.mesh.remove(camera);
        earthGif.style.zIndex = '-100'; 
        marsGif.style.zIndex = '100'; 
    }
};

window.camPrev = function () {
    if (ci > 0) {
        ci -= 1;
        console.log("ci=", ci);
        updateText();
    }
    else if (ci == 0) {
        window.location.href = "index.html";
    }

    if (ci == 0) { // sun
        camera.position.set(150, 0, 0);
        camera.lookAt(0, 0, 0);
        mercury.mesh.remove(camera);
        monitor.style.zIndex = '-101';
        sights.style.zIndex = '-101';
        document.getElementById('skillList').style.zIndex = '-101';
        document.getElementById('overviewDesc').style.zIndex = '-101'; 
        bonus.style.zIndex = '-101';
        launchButton.style.zIndex = '-101';
        mercuryGif.style.zIndex = '-100'; 
    } else if (ci == 1) { // mercury
        mercury.mesh.add(camera);
        venus.mesh.remove(camera);
        venusGif.style.zIndex = '-100';
        mercuryGif.style.zIndex = '100';  
    } else if (ci == 2) { // venus
        venus.mesh.add(camera);
        earth.mesh.remove(camera);
        earthGif.style.zIndex = '-100';
        venusGif.style.zIndex = '100';  
    } else if (ci == 3) { // earth
        earth.mesh.add(camera);
        mars.mesh.remove(camera);
        marsGif.style.zIndex = '-100';
        earthGif.style.zIndex = '100';  
    } 
};

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
