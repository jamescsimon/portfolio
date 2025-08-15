//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';

const container = document.getElementById('threejs-container');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    container.clientWidth / container.clientHeight, // aspect ratio
    0.1, // render min distance
    1000 // render max distance
);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth, container.clientHeight),
    1.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

function onResize() {
  const w = container.clientWidth;
  const h = container.clientHeight;
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloomPass.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', onResize);
onResize();

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

const planetName = document.getElementById('planetName');
const planetDesc = document.getElementById('planetDesc');
planetName.classList.add('centered-planet-name');
planetDesc.classList.add('centered-planet-desc');
window.addEventListener('DOMContentLoaded', initializeSkillsSection);
document.getElementById('skills').textContent = 'Skills';

const planetNames = [
    "Physics Simulations & Game Engines", //0
    "Fluid Sim", //1
    "Quant.io", //2
    "Three-body Portfolio", //3
    "Sims & DI" //4
];

const planetDescriptions = [
    "Projects Timeline", 
    "Personal project | 2025+", 
    "Harvard Quantumn Shorts Submission | 2025", 
    "Portfolio Website | 2024+", 
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
    "Followed tutorials online to self-instruct basics on fluid dynamics simulations, along with course work on physics programming and rendering for game engines. Not yet at a stage of completion.",
    "Prospective submission to the Harvard Quantumn Shorts Contest, which has yet to be announced for 2025. Not yet at a stage of completion.",
    "Developed from scratch using modern web technologies, this website showcases my ability to integrate 3D simulations with three.js while building a (hopefully) clean and responsive portfolio.",
    "Membership in this club at my university has tasked me with familarizing myself with git, collaborative coding enviroments, and aerospace engineering in general."
]

const overviewDescriptions = [ // project description
    "",
    "This project provided a foundation in simulating realistic fluid behaviors, improving my understanding of physics-based rendering and dynamics programming.",
    "3D multiplayer .io game inspired by Agar.io, incorporating quantum mechanics principles into its core gameplay. The goal is to teach quantum mechanics in a fun and engaging way through strategic interactions.",
    "Designed, programmed, and deployed--this was my first attempt at making a perfesional website from scratch. This project taught me the basics of both web development and simulating complex celestial systems.",
    "Refactor dated code to be more concise and efficient within modern infrastructure, generated simulations for engine combustion based on fuel composition, and updated online materials ordering service for the engineering teams."
]

const skills = [
    [],
    ["C# for Unity", "Physics Programming", "Simulation Development"],
    ["C# for Unity", "Game Design/Development", "Physics Programming", "Quantum Mechanics", "Simulation Development", "Technical Writing/Documentation"],
    ["Blender Modeling", "Full Stack Web Development", "Physics Programming", "Post-Processing and Shaders", "Three.js", "U.I./U.X. Design"],
    ["Collaborative Coding", "Full Stack Web Development", "Git Workflows", "Physics Programming", "Simulation Development", "U.I./U.X. Design"]
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

function getScreenScaleFactor() {
  const width = window.innerWidth;
  const baseScale = width / 1000;

  let factor = 2 / baseScale;

  // Clamp between 1 and 3.5 normally
  factor = Math.max(Math.min(factor, 3.5), 1);

  // If very narrow screen (portrait phones), scale further back
  if (width < 500) {
    factor += 0.5; // pull farther away on very thin screens
  }

  return factor;
}

let screenScaleFactor = getScreenScaleFactor();

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

    composer.render(scene, camera);

    if (ci == 0) { // sun
        camera.position.set(150 * screenScaleFactor, 0, 0);
        camera.lookAt(0, 0, 0);
        mercury.mesh.remove(camera);
        document.getElementById('sight').style.display = 'none';
        document.getElementById('overview').textContent = "";
        document.getElementById('description').textContent = "";
        document.getElementById('skillList').style.zIndex = '-101';
        document.getElementById('overviewDesc').style.zIndex = '-101'; 
        document.getElementById('skills').textContent = "";
    } 

    composer.render();
    requestAnimationFrame(animate);
    screenScaleFactor = getScreenScaleFactor();
}
animate();

const sight = document.getElementById('petitesight');
const launchButton = document.getElementById('launch'); 
const lArrow = document.getElementById('leftArrow'); 
const rArrow = document.getElementById('rightArrow');

const mercuryGif = document.getElementById('gif1'); 
const venusGif = document.getElementById('gif2'); 
const earthGif = document.getElementById('gif3'); 
const marsGif = document.getElementById('gif4'); 

sight.style.zIndex = '-101';
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
        camera.position.set(0, 0, 50 * screenScaleFactor);
        camera.lookAt(0.25 * screenScaleFactor, 0.8 * screenScaleFactor, 0); // left, down, ?
        mercury.mesh.add(camera);
        document.getElementById('skillList').style.zIndex = '101';
        document.getElementById('overviewDesc').style.zIndex = '101'; 
        document.getElementById('overview').textContent = "Job Overview";
        document.getElementById('description').textContent = "Project Description";
        document.getElementById('skills').textContent = "Skills";
        document.getElementById('sight').style.display = 'block'; 
        sight.style.zIndex = '90';
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

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rB').addEventListener('click', camNext);
  document.getElementById('lB').addEventListener('click', camPrev);
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;

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
        document.getElementById('skillList').textContent = '';
        document.getElementById('overviewDesc').style.zIndex = '-101'; 
        sight.style.zIndex = '-101';
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
