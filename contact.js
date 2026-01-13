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

// Track field states for sound effects
let fieldStates = {
    name: false,
    email: false,
    message: false
};

// Wrench sounds - one of each type played simultaneously when field is filled
const socketWrenchSounds = [
    new Audio('./sounds/socket-wrench1.mp3'),
    new Audio('./sounds/socket-wrench2.mp3'),
    new Audio('./sounds/socket-wrench3.mp3')
];
const airWrenchSounds = [
    new Audio('./sounds/air-wrench1.mp3'),
    new Audio('./sounds/air-wrench2.mp3'),
    new Audio('./sounds/air-wrench3.mp3')
];
const airImpactWrenchSounds = [
    new Audio('./sounds/air-impact-wrench1.mp3'),
    new Audio('./sounds/air-impact-wrench2.mp3'),
    new Audio('./sounds/air-impact-wrench3.mp3')
];

// Set volume for all wrench sounds
socketWrenchSounds.forEach(sound => sound.volume = 0.3);
airWrenchSounds.forEach(sound => sound.volume = 0.3);
airImpactWrenchSounds.forEach(sound => sound.volume = 0.3);

function playWrenchSounds() {
    // Always play socket wrench (randomly choose which one)
    const socketSound = socketWrenchSounds[Math.floor(Math.random() * socketWrenchSounds.length)];
    
    // Randomly choose either air wrench OR air impact wrench
    const useAirWrench = Math.random() < 0.5;
    let secondSound;
    if (useAirWrench) {
        secondSound = airWrenchSounds[Math.floor(Math.random() * airWrenchSounds.length)];
    } else {
        secondSound = airImpactWrenchSounds[Math.floor(Math.random() * airImpactWrenchSounds.length)];
    }
    
    socketSound.currentTime = 0;
    secondSound.currentTime = 0;
    
    socketSound.play().catch(err => {});
    secondSound.play().catch(err => {});
}

function checkLegs() {
    const nameField = document.getElementById("contName");
    const emailField = document.getElementById("contEmail");
    const messageField = document.getElementById("contMessage");

    // Check name field
    if(nameField.value === ""){
        fieldStates.name = false;
    }
    else {
        if (!fieldStates.name) {
            // Field just became filled, play sounds
            playWrenchSounds();
            fieldStates.name = true;
        }
        scene.getObjectByName("legs").position.set(0, -1, 0);
        scene.getObjectByName("bottom").position.set(0, -1, 0);
        document.getElementById('contactInstructions').textContent = "";
    }

    // Check email field
    if(emailField.value === ""){
        fieldStates.email = false;
    }
    else {
        if (!fieldStates.email) {
            // Field just became filled, play sounds
            playWrenchSounds();
            fieldStates.email = true;
        }
        scene.getObjectByName("mid").position.set(0, -1, 0);
        document.getElementById('contactInstructions').textContent = "";
    }

    // Check message field
    if(messageField.value === ""){
        fieldStates.message = false;
    }
    else {
        if (!fieldStates.message) {
            // Field just became filled, play sounds
            playWrenchSounds();
            fieldStates.message = true;
        }
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
        camera.position.set(-10, 0, 0);
        camera.lookAt(0, 0, 0);
        camera.position.set(-10, 0, 3);
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

// Logo hover and click sounds
const hoverSounds = [
    new Audio('./sounds/hover-planet1.mp3'),
    new Audio('./sounds/hover-planet2.mp3'),
    new Audio('./sounds/hover-planet3.mp3')
];
hoverSounds.forEach(sound => {
    sound.volume = 0.3;
});

const selectSound = new Audio('./sounds/select-planet.mp3');
selectSound.volume = 0.3;

let logoHovered = false;

// Visit sound for launch button
const visitSound = new Audio('./sounds/visit.mp3');
visitSound.volume = 0.3;

window.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('#logo a');
    if (logoLink) {
        // Hover sound for logo
        logoLink.addEventListener('mouseenter', () => {
            if (!logoHovered) {
                logoHovered = true;
                const randomSound = hoverSounds[Math.floor(Math.random() * hoverSounds.length)];
                randomSound.currentTime = 0;
                randomSound.play().catch(err => {});
            }
        });
        
        logoLink.addEventListener('mouseleave', () => {
            logoHovered = false;
        });
        
        // Click sound for logo - wait for sound to finish before redirecting
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = logoLink.getAttribute('href');
            
            selectSound.currentTime = 0;
            selectSound.play().then(() => {
                selectSound.onended = () => {
                    window.location.href = targetUrl;
                };
            }).catch(err => {
                window.location.href = targetUrl;
            });
        });
    }
    
    // Hover and select sounds for navbar tabs
    const navbarLinks = document.querySelectorAll('#navbar li a');
    navbarLinks.forEach(link => {
        let navHovered = false;
        
        link.addEventListener('mouseenter', () => {
            if (!navHovered) {
                navHovered = true;
                const randomSound = hoverSounds[Math.floor(Math.random() * hoverSounds.length)];
                randomSound.currentTime = 0;
                randomSound.play().catch(err => {});
            }
        });
        
        link.addEventListener('mouseleave', () => {
            navHovered = false;
        });
        
        // Click sound for navbar links - wait for sound to finish before redirecting
        link.addEventListener('click', (e) => {
            const targetUrl = link.getAttribute('href');
            // Don't prevent default for download links or external links
            if (targetUrl && !targetUrl.startsWith('#') && !link.hasAttribute('download')) {
                e.preventDefault();
                
                selectSound.currentTime = 0;
                selectSound.play().then(() => {
                    selectSound.onended = () => {
                        window.location.href = targetUrl;
                    };
                }).catch(err => {
                    window.location.href = targetUrl;
                });
            }
        });
    });
    
    // Visit sound for launch button
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (visitSound) {
                visitSound.currentTime = 0;
                visitSound.play().catch(err => {});
            }
            // Let the form submit normally
        });
    }
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
