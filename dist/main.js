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
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
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
    map: textureLoader.load('./images/sun.jpg')  // Link
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

const planetNames = [
    "Game Design", 
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

const overviewDescriptions = [
    "",
    "A 2-4 hour long branching slasher horror game with 33 endings that draws inspiration from both Until Dawn and Mean Girls. I designed, directed, and led a team of 20 to make this sick experience that popped off THIS much.",
    "Advised by educational pyschologist Dr. Eun Park, designed with the lasting impact of equipping kids with coping mechanisms to better traverse anxiety. It follows a retired psychologist who finds comfort in teaching struggling animals how to manage their stress.",
    "A branching story following a girl moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie. Made alongside amazing film, game art, and screenwriting students.",
    "My first game conquest, made with Roblox Studio with Lua. It follows a intergalactic newspaper boy on a quest to save his robot companion, collecting memory fragmanets along the way. Combined, they reveal he is in a coma being read his favorite space storybook by his mother."
]

const skills = [
    "",
    "C++, C#.",
    "Lua, Python.",
    "Storytelling, Level Design.",
    "Gamification and gayme sustems."
]

function updateText() {
    document.getElementById('planetName').textContent = planetNames[ci];
    document.getElementById('planetDesc').textContent = planetDescriptions[ci];
    document.getElementById('overviewDesc').textContent = overviewDescriptions[ci];
    document.getElementById('skillList').textContent = skills[ci];
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

const mercuryGif = document.getElementById('gif1'); // Link ?
const venusGif = document.getElementById('gif2'); // Link ?
const earthGif = document.getElementById('gif3'); // Link ?
const marsGif = document.getElementById('gif4'); // Link ?
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
        document.getElementById('overview').textContent = "Overview";
        document.getElementById('skills').textContent = "Skills";
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

    if (ci == 0) { // sun
        camera.position.set(150, 0, 0);
        camera.lookAt(0, 0, 0);
        mercury.mesh.remove(camera);
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

// ---------------------------- 
/*

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

const geometry = new THREE.BoxGeometry(10, 10, 10);
        
//set the color of the basic material in the object parameters `{}`
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;

const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);

scene.add(icoMesh);

icoMesh.position.z= -15;
icoMesh.position.x= 15;

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(ambientLight);

// Orbit Control
const controls = new OrbitControls(camera, renderer.domElement)

function animate() {

  requestAnimationFrame( animate );

  // slowly rotate the cube:
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // rotate the icosahedron a little faster in the opposite direction:
  icoMesh.rotation.z += -0.01
  icoMesh.rotation.y += -0.01

  // ALLOWS YOUR ORBIT CONTROLS TO UPDATE LIVE IN REAL-TIME:
  controls.update()

  renderer.render( scene, camera );
}

animate();

// Background
const spaceTexture = new THREE.TextureLoader().load('images/night_sky.jpg');
scene.background = spaceTexture; */