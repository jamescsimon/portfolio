//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';

// -- project info --
const projects = [

    {
        name: "Blackout",
        description: "First passion project | 2019-23",
        skills: ["Blender Modeling", "Lua for Roblox Studio", "Game Design/Development", "Post-Processing and Shaders", "Problem Solving/Resourcefulness", "Technical Writing/Documentation", "U.I./U.X. Design"],
        pic: 'images/blackout.gif',
        target: 'blue.html',
        ci: 4
    }, 

    {
        name: "Butterflies",
        description: "First game on Steam! | 2023",
        skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Q.A. Testing & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
        pic: 'images/ButterfliesTrailer.gif',
        target: 'blue.html',
        ci: 3
    }, 

    {
        name: "Cat Counselor",
        description: "Sloan Grant application | 2023-24",
        skills: ["C# for Unity", "Game Design/Development", "iOS Mobile App Development", "Problem Solving/Resourcefulness", "Project Planning/Management", "Technical Writing/Documentation", "U.I./U.X. Design"],
        pic: 'images/CatCounselor.gif',
        target: 'blue.html',
        ci: 2
    }, 

    {
        name: "BREAK",
        description: "Passion project | 2023+",
        skills: ["C# for Unity", "Game Design/Development", "Problem Solving/Resourcefulness", "Project Planning/Management", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"],
        pic: 'images/inProgress.gif',
        target: 'blue.html',
        ci: 1
    },

    {
        name: "Simulations and Production Systems",
        description: "USC Rocket Propulsion Lab | 2024+",
        skills: ["Coding in Collaborative Enviroments", "Problem Solving/Resourcefulness", "Physics Simulations with Python", "U.I./U.X. Design", "Web Design with HTML, JavaScript, & CSS"],
        pic: 'images/RPL.png',
        target: 'yellow.html',
        ci: 4
    }

];
// -- project info --

const projectsContainer = document.getElementById('projects-container');
const skillsDropdown = document.getElementById('skillsSearch');

const allSkills = new Set();
projects.forEach(project => project.skills.forEach(skill => allSkills.add(skill)));
allSkills.forEach(skill => {
    const option = document.createElement('option');
    option.value = skill;
    option.textContent = skill;
    skillsDropdown.appendChild(option);
});

function displayProjects(filteredProjects) {
    projectsContainer.innerHTML = '';
    filteredProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.setAttribute('data-target', project.target); // Add target as data attribute
        projectDiv.setAttribute('name', project.name); // Add name as attribute

        projectDiv.innerHTML = `
            <img src="${project.pic}" alt="${project.name}" class="project-pic">
            <div class="project-details">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
    });
}

window.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('.project'); // Get the closest project element
    if (clickedElement) {
        const target = clickedElement.getAttribute('data-target'); // Get the target from the data attribute
        const projName = clickedElement.getAttribute('name'); // Get the name of the project

        console.log('Clicked Project Name:', projName); // Debugging
        console.log('Target Page:', target); // Debugging

        const ci = projects.find(project => project.name === projName)?.ci; // Find the ci property
        console.log('CI Value:', ci); // Debugging

        if (target) {
            // Pass the ci value in the query string
            window.location.href = `${target}?ci=${ci}`;
        }
    }
});

displayProjects(projects);

skillsDropdown.addEventListener('change', () => {
    const selectedSkill = skillsDropdown.value;
    const filteredProjects = selectedSkill === 'all'
        ? projects
        : projects.filter(project => project.skills.includes(selectedSkill));
    displayProjects(filteredProjects);
});

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

//lock camera
controls.update = function() {};
camera.position.set(0, 0, 75);
camera.lookAt(0, 0, 0);

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

let shootingStars = [];
let deltaElev = 25;

const textureLoader = new THREE.TextureLoader();

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

function animate() { 
    renderer.render(scene, camera); 
    controls.update(); 
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

const ambLight = new THREE.AmbientLight(0x404040, 1); 
scene.add(ambLight);

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

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;