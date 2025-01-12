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

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load('./images/yellow.png')  // Link
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
        window.camNext();

        ci = parseInt(ciNew, 10); // Ensure it's an integer
        console.log('Global CI set to:', ci); // Debugging

        ci -= 1;
        window.camNext();
    }

}

window.addEventListener('DOMContentLoaded', initializeSkillsSection);
document.getElementById('skills').textContent = 'Skills';

const planetNames = [
    "Physics Simulations & Game Engines", 
    "Clothes Sims",
    "Quantum Engine", 
    "Fluid Sims", 
    "Sim. & Prod. Systems"
];

const planetDescriptions = [
    "Projects Timeline", 
    "Passion project | 2025+", 
    "Harvard Quantumn Shorts Submission | 2025", 
    "Personal project | 2024+", 
    "USC Rocket Propulsion Lab | 2024+"
];

const visitability = [
    "",
    "",
    "",
    "",
    ""
]

const projectDesc = [
    "",
    "Followed tutorials online to self-instruct basics on clothing physics simulations, along with course work on physics programming and rendering for game engines. Not yet at a stage of completion.",
    "Prospective submission to the Harvard Quantumn Shorts Contest, which has yet to be announced for 2025. Not yet at a stage of completion.",
    "Followed tutorials online to self-instruct basics on fluid dynamics simulations, along with course work on physics programming and rendering for game engines. Not yet at a stage of completion.",
    "Membership in this club at my university has tasked me with familarizing myself with git, collaborative coding enviroments, and aerospace engineering in general."
]

const overviewDescriptions = [ // project description
    "",
    "",
    "",
    "",
    "Refactor dated code to be more concise and efficient within modern infrastructure, generated simulations for engine combustion based on fuel composition, and updated online materials ordering service for the engineering teams."
]

const skills = [
    [], // • bullet point 
    [],
    [],
    [],
    ["Coding in Collaborative Enviroments", "Problem Solving/Resourcefulness", "Physics Simulations with Python", "U.I./U.X. Design", "Web Design with HTML, JavaScript, & CSS"]
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
        document.getElementById('skills').textContent = "";
    } 

    composer.render();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
        document.getElementById('description').textContent = "Project Description";
        monitor.style.zIndex = '90';
        bonus.style.zIndex = '90';
        //launchButton.style.zIndex = '90';
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
        sights.style.zIndex = '-101';

    } else if (ci == 4) { // mars
        mars.mesh.add(camera);
        earth.mesh.remove(camera);
        sights.style.zIndex = '90';
        mercuryGif.style.zIndex = '-100'; 
        venusGif.style.zIndex = '-100'; 
        earthGif.style.zIndex = '-100'; 
        marsGif.style.zIndex = '100'; 
        document.getElementById('skills').textContent = "Skills";
        document.getElementById('overview').textContent = "Job Overview";
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
        console.log("camera.position.set(150, 0, 0);")
        camera.lookAt(0, 0, 0);
        console.log("camera.lookAt(0, 0, 0);")
        mercury.mesh.remove(camera);
        monitor.style.zIndex = '-101';
        sights.style.zIndex = '-101';
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
        sights.style.zIndex = '-101';
        document.getElementById('skills').textContent = "";
        document.getElementById('overview').textContent = "";
    } 
};

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;