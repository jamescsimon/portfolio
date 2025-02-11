//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js'; 

//scene set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // render min distance
    1000 // render max distance
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//controls
const controls = new OrbitControls(camera, renderer.domElement);

//platform?
const geometry = new THREE.BoxGeometry(4, 0.1, 4);
const material = new THREE.MeshBasicMaterial({ color: 0x202020 });
const platform = new THREE.Mesh(geometry, material);
platform.position.set(0, -2.85, 0);
scene.add(platform);

//load frame with GLBLoader
const loader = new GLTFLoader(); // visable frame (0, -1, 0), invisable frame (0, -10, 0)
loader.load(
    'images/legsShip.glb',
    (gltf) => {
        const legsShip = gltf.scene;
        legsShip.name = "legs"; // Set a name for easy reference
        legsShip.position.set(0, -10, 0);
        scene.add(legsShip);
    },
    (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        console.error('An error occurred:', error);
    }
);

function checkLegs() {

    if(document.getElementById("contName").value === ""){
        //bottom section
    }
    else {
        scene.getObjectByName("legs").position.set(0, -1, 0);
        scene.getObjectByName("bottom").position.set(0, -1, 0);
        document.getElementById('contactInstructions').textContent = "";
    }

    if(document.getElementById("contEmail").value === ""){
        //mid section
    }
    else {
        scene.getObjectByName("mid").position.set(0, -1, 0);
        document.getElementById('contactInstructions').textContent = "";
    }

    if(document.getElementById("contMessage").value === ""){
        //mid section
    }
    else {
        scene.getObjectByName("top").position.set(0, -1, 0);
        document.getElementById('contactInstructions').textContent = "";
    }


}

loader.load(
    'images/bottomShip.glb',
    (gltf) => {
        const bottomShip = gltf.scene;
        bottomShip.name = "bottom"; // Set a name for easy reference
        bottomShip.position.set(0, -10, 0); 
        scene.add(bottomShip);
    },
    (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        console.error('An error occurred:', error);
    }
);

loader.load(
    'images/midShip.glb',
    (gltf) => {
        const midShip = gltf.scene;
        midShip.name = "mid"; // Set a name for easy reference
        midShip.position.set(0, -10, 0);
        midShip.rotation.y = 3;
        scene.add(midShip);
    },
    (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        console.error('An error occurred:', error);
    }
);

loader.load(
    'images/topShip.glb',
    (gltf) => {
        const topShip = gltf.scene;
        topShip.name = "top"; // Set a name for easy reference
        topShip.position.set(0, -10, 0);
        scene.add(topShip);
    },
    (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        console.error('An error occurred:', error);
    }
);

//lock camera
controls.update = function() {};

//position frame
camera.position.set(-10, 0, 0);
camera.lookAt(0, 0, 0);
camera.position.set(-10, 0, 3);

//effects
const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr
const spotLight = new THREE.DirectionalLight(0xffffff, 1, 0, 2);
spotLight.position.set(0, 20, 0);
spotLight.lookAt(0, 0, 0);
scene.add(spotLight);

function animate() {
    renderer.render(scene, camera);
    controls.update();
    composer.render();
    requestAnimationFrame(animate);

    checkLegs();
}
animate();

const ambLight = new THREE.AmbientLight(0x404040, 1); 
scene.add(ambLight);

function adjustCameraForDevice() {
    if (window.innerWidth <= 768) { // mobile
        camera.position.set(-12, 0, 12);  
        camera.lookAt(0, 3, -1);    
        console.log("MOBILE VIEW");
    } else { // PC
        camera.position.set(-10, 0, 3); 
        camera.lookAt(0, 0, 0);
        console.log("PC VIEW")
    }
}

adjustCameraForDevice();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    adjustCameraForDevice(); 
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
