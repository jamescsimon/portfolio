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
    "Artificial Intelligence / Machine Learning", 
    "Intro to A.I."

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
    //venus.mesh.rotateY(0.003);
    //earth.mesh.rotateY(0.004);
    //mars.mesh.rotateY(0.0045);

    // Around-sun-rotation
    mercury.obj.rotateY(0.001);
    //venus.obj.rotateY(0.0015);
    //earth.obj.rotateY(0.001);
    //mars.obj.rotateY(0.0008);

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
        camera.position.set(0, 0, 50 * screenScaleFactor);
        camera.lookAt(0.25 * screenScaleFactor, 0.8 * screenScaleFactor, 0); // left, down, ?
        mercury.mesh.add(camera);
        document.getElementById('overview').textContent = "Job Overview";
        document.getElementById('description').textContent = "Project Description";
        document.getElementById('skills').textContent = "Skills";
        document.getElementById('sight').style.display = 'block'; 
        sight.style.zIndex = '90';
        launchButton.style.zIndex = '90';
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
        document.getElementById('skillList').textContent = '';
        document.getElementById('overviewDesc').style.zIndex = '-101'; 
        sight.style.zIndex = '-101';
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

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rB').addEventListener('click', camNext);
  document.getElementById('lB').addEventListener('click', camPrev);
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
