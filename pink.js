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
    map: textureLoader.load('./images/pink.png')  // Link
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


const mercury = createPlanet(3.2, './images/mercury.jpg', 119); 
//const venus = createPlanet(5.8, './images/venus.jpg', 270); 
//const earth = createPlanet(6, './images/earth.jpg', 360);
//const mars = createPlanet(4, './images/mars.jpg', 480); 

// camera vars
let ci = 0; // camera index
let cmax = 1; // camera max (num planets)

const planetNames = [
    "Artificial Intelligence / Machine Learning", 
    "Introduction to Artificial Intelligence"

    //"Photorealistic Engine",
    //"Optimal Ad Placement", // in websites
    //"Background Autofill", 
    //"Controllerless Game" // video recording of hand motions
];

const planetDescriptions = [
    "Projects Timeline", 
    "University Course | Spring 2025"

    //"Passion project | 2025+", 
    //"Personal project | 2025+", 
    //"Personal project | 2025+", 
    //"Personal project | 2025+"
];

const visitability = [
    "",
    ""

    //"In Progress",
    //"In Progress",
    //"Visit",
    //"Visit"
]

const overviewDescriptions = [
    "",
    ""
    //"Taking an Intro to Artificial Intelligence course this semester",
    //"",
    //"",
    //"Expanding on a past science fair project, I plan on using "
]

const projectDesc = [ // project description
    "",
    "In this course I will gain experience with training basic python AI models and gain tools to build future projects.",
    // "",
   //  "",
    // ""
]

const skills = [
    [], // • bullet point 
    //[],
    //[],
    //[],
    []
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
    //venus.mesh.rotateY(0.003);
    //earth.mesh.rotateY(0.004);
    //mars.mesh.rotateY(0.0045);

    // Around-sun-rotation
    mercury.obj.rotateY(0.001);
    //venus.obj.rotateY(0.0015);
    //earth.obj.rotateY(0.001);
    //mars.obj.rotateY(0.0008);

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

document.getElementById('overviewDesc').style.zIndex = '-101';

mercuryGif.style.zIndex = '-100'; 
//venusGif.style.zIndex = '-100'; 
//earthGif.style.zIndex = '-100'; 
//marsGif.style.zIndex = '-100'; 

window.camNext = function () {
    if (ci < cmax) {
        ci += 1;
        console.log("ci=", ci);
        updateText();
    }
    else{
        return;
    }

    if (ci == 1) { // mercury
        camera.position.set(-30, 0, 40);
        camera.lookAt(0, 0, 0);
        mercury.mesh.add(camera);
        //document.getElementById('overview').textContent = "Overview";
        document.getElementById('description').textContent = "Project Description";
        //document.getElementById('skills').textContent = "Skills";
        monitor.style.zIndex = '90';
        //sights.style.zIndex = '90';
        bonus.style.zIndex = '90';
        //launchButton.style.zIndex = '90';
        mercuryGif.style.zIndex = '100'; 
    } /*else if (ci == 2) { // venus
        venus.mesh.add(camera);
        mercury.mesh.remove(camera);
        mercuryGif.style.zIndex = '-100';
        //venusGif.style.zIndex = '100';
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
    }*/
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
        bonus.style.zIndex = '-101';
        launchButton.style.zIndex = '-101';
        mercuryGif.style.zIndex = '-100';  
    } else if (ci == 1) { // mercury
        mercury.mesh.add(camera);
        //venus.mesh.remove(camera);
        //venusGif.style.zIndex = '-100';
        mercuryGif.style.zIndex = '100';  
    } /*else if (ci == 2) { // venus
        venus.mesh.add(camera);
        earth.mesh.remove(camera);
        earthGif.style.zIndex = '-100';
        venusGif.style.zIndex = '100';  
    } else if (ci == 3) { // earth
        earth.mesh.add(camera);
        mars.mesh.remove(camera);
        marsGif.style.zIndex = '-100';
        earthGif.style.zIndex = '100';  
    } */
};

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;