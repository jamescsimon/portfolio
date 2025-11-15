// Centralized planet data for all solar systems
// This file contains all the project information for each planet in each solar system

// export const solarSystemData = {
//     blue: {
//         name: "Game Design & Interactive Media",
//         sunTexture: './images/blue.png',
//         planets: [
//             {
//                 name: "Game Design & Interactive Media",
//                 description: "Projects Timeline",
//                 visitability: "Explore!",
//                 link: null,
//                 overview: "",
//                 projectDesc: "",
//                 skills: [],
//                 size: 16,
//                 position: 0,
//                 texture: './images/blue.png',
//                 gif: null,
//                 isSun: true
//             },
//             {
//                 name: "BREAK",
//                 description: "Passion project | 2023+",
//                 visitability: "In Progress",
//                 link: null, 
//                 overview:"As Technical Director and Co-Founder, I led a multifaceted team of 15+ programmers, game designers, scriptwriters, actors, and artists. I architected and programmed the game's branching narrative system, implemented save/load functionality using serialized JSON, and designed the UI/UX based on playtester feedback to optimize alignment to set experience goals.",
//                 projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
//                 skills: ["C#", "Game Design/Development", "Project Planning/Management", "Save & Load Systems", "Serialized JSON", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"], 
//                 size: 4,
//                 position: 119,
//                 texture: './images/mercury.jpg',
//                 gif: './images/BREAK.gif'
//             },
//             {
//                 name: "Cat Counselor",
//                 description: "Sloan Grant application | 2023-24",
//                 visitability: "Demo Only",
//                 link: null, 
//                 overview: "Advised by educational psychologist Dr. Eun Park, I authored a comprehensive 50-page design document covering game mechanics, user experience, and therapeutic objectives. I then developed the Unity prototype in C#, implementing touch controls, animation systems, and branching dialogue trees to create an engaging therapeutic experience.",
//                 projectDesc: "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",
//                 skills: ["C#", "Game Design/Development", "iOS Mobile App Development", "Project Planning/Management", "Quality Assurance & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
//                 size: 4.3,
//                 position: 270,
//                 texture: './images/venus.jpg',
//                 gif: './images/CatCounselor.gif'
//             },
//             {
//                 name: "Butterflies",
//                 description: "First game on Steam! | 2023",
//                 visitability: "Visit",
//                 link: null,  
//                 overview: "Collaborated with amazing film, game art, and screenwriting students to create an innovative transmedia experience. I designed the branching narrative system, programmed the Unity game in C#, and iterated based on playtester feedback, resulting in being displayed at a project showcase where I gave a talk about the project to my whole School of Cinematic Arts cohort.",
//                 projectDesc: "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
//                 skills: ["C#", "Game Design/Development", "Project Planning/Management", "Quality Assurance & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
//                 size: 4.4,
//                 position: 360,
//                 texture: './images/earth.jpg',
//                 gif: './images/ButterfliesTrailer.gif'
//             },
//             {
//                 name: "BLACKOUT",
//                 description: "First passion project | 2019-23",
//                 visitability: "Visit",
//                 link: null,
//                 overview: "My first major game conquest, developed in Roblox Studio with Lua, where I created a complete design document, modeled 3D assets in Blender, implemented post-processing effects and shaders, and gained comprehensive understanding of game development pipelines. This ambitious project taught me valuable lessons about scope management while solidifying my passion for game design and programming.",
//                 projectDesc: "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading his favorite space adventure storybook to him at the hospital.",
//                 skills: ["Blender Modeling", "Game Design/Development", "Lua", "Post-Processing and Shaders", "Technical Writing/Documentation", "U.I./U.X. Design"],
//                 size: 4.2,
//                 position: 480,
//                 texture: './images/mars.jpg',
//                 gif: './images/blackout.gif'
//             },
//         ]
//     },
    
//     pink: {
//         name: "Artificial Intelligence / Machine Learning",
//         sunTexture: './images/pink.png',
//         planets: [
//             {
//                 name: "Artificial Intelligence / Machine Learning",
//                 description: "Projects Timeline",
//                 visitability: "",
//                 link: null, 
//                 overview: "",
//                 projectDesc: "",
//                 skills: [],
//                 size: 16,
//                 position: 0,
//                 texture: './images/pink.png',
//                 gif: null,
//                 isSun: true
//             },
//             {
//                 name: "Preliminary Script Scorer (PSS)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/", 
//                 overview: "I combined TF-IDF text vectorization, regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and custom feature engineering on a dataset of 1,455 screenplays and their respective metadata. This new model improved accuracy by 24.41% over the legacy version and now predicts critic reception within 1 point (out of 10) for 97% of scripts, with 85% of predictions falling within half a point. To address the heteroscedasticity in this model that led to less accurate predictions for higher scoring scripts, I planned to implement weighted least squares regression and add interaction terms between predictors to better capture the variance structure across different score ranges.",
//                 projectDesc: "A machine learning model that evaluates screenplay quality and predicts critic reception scores. The model leverages natural language processing to analyze screenplay content and provides studios with a trustworthy greenlighting tool at the preliminary stages, tending to err on the side of caution for quality assurance.",
//                 skills: ["Bag of Words", "Data Engineering", "Ensemble Methods", "Feature Engineering", "Machine Learning", "N-gram", "Natural Language Processing", "Project Planning/Management", "Python", "Regression Analysis", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation", "TF-IDF", "U.I./U.X. Design", "User Analytics", "Web Development"],
//                 size: 3.2,
//                 position: 119,
//                 texture: './images/mercury.jpg',
//                 gif: './images/PSS_ex.gif'
//             },
//             {
//                 name: "Genre Distribution Coefficients (GDC)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "I realized boolean genre tags were not sufficient to capture the nuances of a screenplay's genre, as stories almost always span many. I created an NLP model that quantifies the distribution of genres within a screenplay by clustering narrative flow patterns and determining variance, using the same 1,455 labeled script dataset as the PSS model. I experimented with N-gram, Bag of Words, and TF-IDF text vectorization based models and found that the Bag of Words model alone was sufficient for genre-related insights.",
//                 projectDesc: "An NLP model that quantifies the distribution of genres within a screenplay by analyzing narrative flow patterns. Unlike traditional boolean genre tags, this model captures the nuanced ways stories span multiple genres, providing more accurate genre classification for film studios.",
//                 skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
//                 size: 4.2,
//                 position: 270,
//                 texture: './images/venus.jpg',
//                 gif: './images/GDC_ex.gif'
//             },
//             {
//                 name: "Target Audience Calculator (TAC)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "With the PSS and GDC models in hand, I designed a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. I experimented with a range of models and found that Partial Least Squares Regression was the most effective given the sample size. By expanding the model, doing extensive feature relevance analysis, and introducing loglines as a stand-in for screenplay contents, I was able to bring the model's confidence interval to sensible results.",
//                 projectDesc: "A machine learning model that predicts the demographic makeup of a script's target audience using screenplay loglines and historical demographic data. This tool helps with financial planning of film production by quantifying the total addressable market and ticket count predictions.",
//                 skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
//                 size: 4.5,
//                 position: 360,
//                 texture: './images/earth.jpg',
//                 gif: './images/TAC_ex.gif'
//             },
//             {
//                 name: "Cast & Crew Payments (CCP), Non-Personnel Cost Projection (NCP)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "To help my colleague with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data combined with internet presence metrics. After downloading nearly the entirety of IMDb, I designed a model that incorporated cast and crew's estimated internet prevalence using Google Trends data prior to release. In collaboration with my colleague, we separated the cast into brackets of expected payments and then used historical industry rates to fill in all needed crew and investor returns.",
//                 projectDesc: "A machine learning model that predicts film budgets based on cast and crew data and internet presence metrics. The model includes both Cast & Crew Payments (CCP) predictions and Non-Personnel Cost Projection (NCP) calculations, providing a comprehensive budgeting framework for film production planning.",
//                 skills: ["Data Engineering", "Financial Budgeting", "Full Stack Web Development", "Machine Learning", "Microsoft Excel", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
//                 size: 3.8,
//                 position: 450,
//                 texture: './images/mars.jpg',
//                 gif: './images/new_tower.png'
//             },
//             {
//                 name: "Funding vs Revenue Graph (FRG)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "With the goal of being able to visualize all possible financial outcomes of a film, I designed one graph to plot not just budget and projection but also confidence interval, min and max projections, break-even point, maximum return on investment, year of release, and genres for marketing. Using a self-curated dataset of 3,062 films (1,455 with screenplays), I compared XGBoost, Random Forest, and Gradient Boosting Regressor models, and found that a combination of models was most effective. I then trained a simple network on the model predictions to weight them appropriately by screenplay context, improving accuracy by 8% to an R² of 0.58.",
//                 projectDesc: "A comprehensive financial visualization tool that plots all possible financial outcomes of a film including budget, projections, confidence intervals, break-even points, and return on investment calculations. This tool helps studios visualize and understand the financial risks and potential returns of film projects.",
//                 skills: ["Data Engineering", "Financial Budgeting", "Machine Learning", "Microsoft Excel", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
//                 size: 4.2,
//                 position: 540,
//                 texture: './images/venus.jpg',
//                 gif: './images/FRG_ex.png'
//             },
//             {
//                 name: "Reader Sentiment Estimator (RSE) & Reader Retention Estimator (RRE)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "Two of the most important signals for greenlighting decisions are reader sentiment and retention, so I designed a model to predict both directly from screenplay content, without requiring human feedback. I developed a model using NLP feature extraction and regression techniques to predict the likelihood of a reader's sentiment and retention. While we do not yet have a large enough labeled dataset to validate accuracy with statistical significance, the framework is ready and will improve as more human feedback is collected.",
//                 projectDesc: "A machine learning model that predicts reader sentiment and retention directly from screenplay content, eliminating the need for human feedback. This tool helps studios understand how readers will likely respond to scripts before they are read, providing valuable insights for greenlighting decisions.",
//                 skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design", "User Analytics"],
//                 size: 4.5,
//                 position: 630,
//                 texture: './images/mercury.jpg',
//                 gif: './images/RSERRE_ex.gif'
//             },
//             {
//                 name: "Theatrical Localization Prioritization (TLP)",
//                 description: "AI Engineer Internship | Summer 2025",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "I was tasked with designing a model to rank theatrical markets for each film based on the screenplay data and prior models, so the marketing team could prioritize resources for maximum impact down to the theatre level. The most difficult challenge was achieving the requested granularity without detailed theater data. I used Partial Least Squares Regression to match a screenplay's target market with city demographics, supported by historical census data to improve confidence. The prototype successfully identified promising markets, with future work focused on adding real-world theater datasets for precision targeting.",
//                 projectDesc: "A machine learning model that ranks theatrical markets for films based on screenplay data and demographic information. This tool helps marketing teams prioritize resources and target the most promising markets for maximum impact, down to the individual theater level.",
//                 skills: ["Data Engineering", "Full Stack Web Development", "Machine Learning", "Microsoft Excel", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
//                 size: 3.8,
//                 position: 720,
//                 texture: './images/mars.jpg',
//                 gif: './images/new_tower.png'
//             },
//         ]
        
//     },
    
//     yellow: {
//         name: "Full-Stack Software Development",
//         sunTexture: './images/yellow.png',
//         planets: [
//             {
//                 name: "Web Development & Front-End Design",
//                 description: "Projects Timeline",
//                 visitability: "",
//                 link: null, 
//                 overview: "",
//                 projectDesc: "",
//                 skills: [],
//                 size: 16,
//                 position: 0,
//                 texture: './images/yellow.png',
//                 gif: null,
//                 isSun: true
//             },
//             {
//                 name: "The Mailroom",
//                 description: "INTERDEPENDENT Studios | 2025+",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "I built this webapp with modern React/TypeScript stack, providing authenticated users access to a curated library of film screenplays with an interactive PDF reader interface. I implemented phone number OTP authentication, Stripe identity verification for account creation, a modest payment requirement for access, and integrated Adobe PDF Embed SDK for viewing screenplay PDFs with a cinematic-themed UI that enriches the reader's experience and incentivizes telemetry collection.",
//                 projectDesc: "A client-facing portal for INTERDEPENDENT Studios' greenlighting process, where writers can see the progress of their script and the feedback they have received. The portal also allows readers to submit feedback to writers, which is then used to train machine learning models for greenlighting decisions.",
//                 skills: ["Adobe PDF Embed SDK", "Authentication", "Full Stack Web Development", "Payment Processing", "React", "Stripe", "Supabase", "Telemetry Collection", "TypeScript", "U.I./U.X. Design"],
//                 size: 3.2,
//                 position: 119,
//                 texture: './images/mercury.jpg',
//                 gif: './images/new_tower.png'
//             },
//             {
//                 name: "Interactive Financial Planner",
//                 description: "INTERDEPENDENT Studios | 2025+",
//                 visitability: "Visit",
//                 link: "https://interdependent.studio/",
//                 overview: "I was tasked with designing a financial planner that would help the studio's clients/agents/producers plan their budgets and see forecasted insights from their scripts as well as plan out any and all things film production. My designing for this application was focused on UX, and I was able to expand upon the style guide of The Mailroom to create a more cohesive and intuitive site. Using Movie Magic Budgeting as a prehistoric reference, I was able to create a more modern interface that would allow for more comfortable budgeting and planning.",
//                 projectDesc: "A financial planning tool designed to help film studios, agents, and producers plan budgets and see forecasted insights from their scripts. The application provides comprehensive film production budgeting capabilities with a modern, intuitive interface.",
//                 skills: ["Financial Budgeting", "Full Stack Web Development", "Microsoft Excel", "React", "Supabase", "TypeScript", "U.I./U.X. Design"],
//                 size: 3.7,
//                 position: 170,
//                 texture: './images/venus.jpg',
//                 gif: './images/new_tower.png'
//             },
//             {
//                 name: "RPL Ordering System",
//                 description: "USC Rocket Propulsion Lab | 2024+",
//                 visitability: "Visit",
//                 link: "https://www.uscrpl.com/",
//                 overview: "Building upon the legacy ordering system, I redesigned the frontend to be more user-centric, intuitive, and visually appealing while maintaining full responsiveness. I added a cart system to allow for a mainstreamed ordering experience and designed 'Buy Again' and 'Frequently Bought Together' abilities to add more modern comforts to the site. I developed this as a full-stack Node.js/Express web application with EJS templating, SQLite database integration, and modern Tailwind CSS styling, implementing MVC architecture with dedicated controllers for HTTP request handling, service layer for business logic, and robust database schema for orders, projects, and subteams.",
//                 projectDesc: "An inventory management system that tracks lab disposables and manages purchase orders for all of USC Rocket Propulsion Lab's subteams and their respective projects. The system supports order approval/rejection by authorized users, archival functionality, and provides a modern e-commerce-like ordering experience.",
//                 skills: ["CSS", "EJS", "Express", "Full Stack Web Development", "HTML", "JavaScript", "MVC Architecture", "Node.js", "RESTful API", "SQLite", "Tailwind CSS", "U.I./U.X. Design"],
//                 size: 3.8,
//                 position: 270,
//                 texture: './images/earth.jpg',
//                 gif: './images/OrderingSystemV3.png'
//             },
//             {
//                 name: "RPL Sendserver",
//                 description: "USC Rocket Propulsion Lab | 2024+",
//                 visitability: "Visit",
//                 link: "https://www.uscrpl.com/", 
//                 overview: "I built the SendServer as mission control hosted on the web, aiding in lab simulations and launches by managing complex rocket trajectory optimization and atmospheric wind data analysis for high-performance solid propellant sounding rockets. I developed this as a full-stack web application with Python Flask backend, React frontend, and Redis/Celery for asynchronous task processing, featuring real-time data visualization and automated simulation management. The application enables engineers to input target coordinates, automatically calculate optimal launch angles and azimuths using C++ simulation engines, and scrape real-time atmospheric wind data from external sources.",
//                 projectDesc: "A comprehensive mission control center web application that manages rocket trajectory optimization and atmospheric wind data analysis for USC Rocket Propulsion Lab's high-performance solid propellant sounding rockets. The system includes advanced features like asynchronous trajectory optimization, automated wind data collection, real-time logging systems, and interactive dashboards for monitoring Alpha and Sigma rocket systems.",
//                 skills: ["Asynchronous Programming", "C++ Integration", "CSS", "Full Stack Web Development", "HTML", "JavaScript", "Python Flask", "React.js", "Real-time Data Visualization", "Redis/Celery", "RESTful APIs", "Task Queue Management"],
//                 size: 3.5,
//                 position: 360,
//                 texture: './images/mars.jpg',
//                 gif: './images/RPL.png'
//             },
//             {
//                 name: "Three-body Portfolio",
//                 description: "Portfolio Website | 2024+",
//                 visitability: "Visit",
//                 link: "https://jamescsimon.github.io/portfolio/", 
//                 overview: "I designed, programmed, and deployed this portfolio website from scratch, which was my first attempt at making a professional website. This project taught me the basics of both web development and simulating complex celestial systems. I developed it from scratch using modern web technologies, integrating 3D simulations with three.js while building a clean and responsive portfolio.",
//                 projectDesc: "A portfolio website that showcases my projects and skills through an interactive 3D solar system simulation. The website features a unique celestial navigation system where each solar system represents a different area of expertise, with planets representing individual projects.",
//                 skills: ["Blender Modeling", "Full Stack Web Development", "Physics Programming", "Post-Processing and Shaders", "Three.js", "U.I./U.X. Design"],
//                 size: 3.4,
//                 position: 480,
//                 texture: './images/mercury.jpg',
//                 gif: './images/here.png'
//             }
//         ]
//     }
// };

export const solarSystemData = {

    blue: {
        name: "Game Design & Interactive Media",
        sunTexture: './images/blue.png',
        planets: [
            {
                name: "Game Design & Interactive Media",
                description: "Projects Timeline",
                visitability: "Explore!",
                link: null,
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/blue.png',
                gif: null,
                isSun: true
            },
            {
                name: "super(position) mario bros!",
                description: "Harvard Quantum Initiative Contest | 2025",
                year: 2025,
                visitability: "Visit",
                link: null,
                overview: "As Creative Developer and Science Communicator, I submitted a creative video to Harvard Quantum Initiative's 2025 Quantum Shorts Contest (200+ entries) and collaborated with USC Quantum Physics department head through QEE/Q^3 developing educational content. I wrote a script explaining quantum superposition, wave function collapse, and entanglement via Mario, visualizing complex quantum concepts (amplitudes, interference, phase) through game mechanics. I created an educational narrative demonstrating the uncertainty principle, tunneling, and Zeno effect creatively, designing an engaging science communication piece making quantum physics accessible to ages 14-19. I produced the video under 90 seconds balancing scientific accuracy with humor and accessibility.",
                projectDesc: "An educational video project that teaches quantum physics concepts through the lens of Super Mario Bros. The creative narrative uses familiar game mechanics to explain complex quantum phenomena including superposition, entanglement, and wave function collapse in an engaging and accessible way.",
                skills: ["Academic Collaboration", "Animation", "Collaboration", "Creative Writing", "Educational Content", "Educational Outreach", "Entanglement", "Game Design", "Game Development", "Physics", "Physics Education", "Public Outreach", "Quantum Computing", "Quantum Interference", "Quantum Mechanics", "Quantum Physics", "Science Communication", "Script Writing", "STEM Education", "Storytelling", "Superposition", "Technical Communication", "Video Production", "Visual Communication", "Wave Function"],
                size: 3.9,
                position: 119,
                texture: './images/venus.jpg',
                gif: './images/quantum_mario.gif'
            },
            {
                name: "Cat Counselor",
                description: "Sloan Grant application | 2023-24",
                year: 2024,
                visitability: "Demo Only",
                link: null,
                overview: "As Game Director and Lead Programmer, I built a CBT mobile app in Unity with backend database for user tracking and therapy progress. Advised by educational psychologist Dr. Eun Park, I led 5 subteams (programming, art, audio, writing, design) to meet project deliverables and collaborated with my scientific advisor to implement evidence-based CBT therapeutic techniques. I authored a comprehensive 50-page design document covering game mechanics, user experience, and therapeutic objectives. I then developed the Unity prototype in C#, implementing touch controls, animation systems, branching dialogue trees, and save/load functionality with encrypted data serialization to create an engaging therapeutic experience. I optimized UI rendering achieving 60 FPS performance on mobile devices with accessibility features and conducted comprehensive QA testing including functional, usability, and user acceptance testing with target users.",
                projectDesc: "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",
                skills: ["Accessibility", "Backend Development", "C#", "CBT", "Cloud Integration", "Database Design", "Design Patterns", "Documentation", "Frontend Development", "Game Design/Development", "Healthcare Technology", "iOS Mobile App Development", "Leadership", "Mobile Development", "MVVM", "Performance Optimization", "Project Management", "Psychology", "Quality Assurance & Data Analysis", "QA", "Software Architecture", "Software Testing", "Team Collaboration/Communication", "Team Management", "Technical Writing/Documentation", "UI/UX Design", "Unity", "User Testing"],
                size: 4.3,
                position: 210,
                texture: './images/venus.jpg',
                gif: './images/CatCounselor.gif'
            },
            {
                name: "BREAK",
                description: "Passion project | 2023+",
                year: 2023,
                visitability: "In Progress",
                link: null,
                overview: "As Technical Director and Co-Founder, I led a multifaceted team of 15+ programmers, game designers, scriptwriters, actors, and artists. I designed scalable game engine architecture for narrative-heavy gameplay with modular systems and facilitated team collaboration through standups, sprint planning, and conflict resolution. I simulated photorealistic environments in Unity with AI-driven agents and branching narratives, implemented save/load functionality using serialized JSON, and designed the UI/UX based on playtester feedback to optimize alignment to set experience goals. I conducted technical feasibility analysis, debugged complex integration issues across teams, established a unit testing framework, and profiled and optimized the game loop to achieve consistent frame rates and performance targets. I also implemented automated build pipelines and CI/CD workflows to streamline development.",
                projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
                skills: ["3D Graphics", "Agile Development", "C#", "CI/CD", "Code Review", "Conflict Resolution", "Cross-functional Leadership", "DevOps", "Game Development", "Git", "Innovation", "Leadership", "Performance Optimization", "Problem Solving", "Project Management", "Save & Load Systems", "Serialized JSON", "Simulation", "Software Architecture & Development", "Software Engineering", "Sprint Planning", "System Architecture", "System Design", "Team Collaboration/Communication", "Team Management", "UI/UX Design", "Unity", "Unit Testing", "User Testing", "Version Control"],
                size: 4,
                position: 300,
                texture: './images/mercury.jpg',
                gif: './images/BREAK.gif'
            },
            {
                name: "Butterflies",
                description: "First game on Steam! | 2023",
                year: 2023,
                visitability: "Visit",
                link: null,
                overview: "As Lead Programmer and QA Tester, I was the sole programmer and QA tester for an 8-person USC Games team building a narrative-driven game. I collaborated with amazing film, game art, and screenwriting students to create an innovative transmedia experience. I designed the branching narrative system in Unity supporting multiple story outcomes and endings, programmed the Unity game in C#, and implemented a dialogue tree parser, rendering system, and character relationship tracking. I created a narrative scripting language enabling designers to write branching dialogue flows and built player choice tracking, consequence system, and save/load functionality for progress. I conducted comprehensive QA testing, debugging complex state issues, and regression testing, ultimately presenting the game at a USC Games showcase where I gave a live demo and technical Q&A to judges for my whole School of Cinematic Arts cohort.",
                projectDesc: "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
                skills: ["Algorithm Development", "Branching Logic", "Bug Tracking", "C#", "Data Persistence", "Data Structures", "Debugging", "Dialogue Systems", "File I/O", "Game Design/Development", "Individual Contribution", "Language Design", "Narrative Design", "Parser Development", "Presentation Skills", "Problem Solving", "Product Demo", "Programming", "Public Speaking", "QA", "Quality Assurance & Data Analysis", "Regression Testing", "Software Testing", "State Management", "System Design", "Team Collaboration/Communication", "Technical Communication", "Technical Writing/Documentation", "Time Management", "Tool Development", "UI/UX Design", "Unity"],
                size: 4.4,
                position: 390,
                texture: './images/earth.jpg',
                gif: './images/ButterfliesTrailer.gif'
            },
            {
                name: "BLACKOUT",
                description: "First passion project | 2019-23",
                year: 2023,
                visitability: "Visit",
                link: null,
                overview: "As Sole Developer, I developed a complete Roblox game in Lua over a 4-year period reaching 10,000+ players. This was my first major game conquest where I created a complete design document, modeled 100+ assets in Blender including characters, weapons, and environments with textures, and created custom shaders for water, glass, atmospheric effects, and dynamic lighting systems. I implemented particle systems for explosions, weather effects, and post-processing effects including bloom and depth of field. I designed and balanced combat systems, character abilities, and progression mechanics while optimizing the rendering pipeline and performance for low-end devices and mobile platforms. I also managed community feedback, bug reports, and live updates based on player analytics. This ambitious project taught me valuable lessons about scope management while solidifying my passion for game design and programming.",
                projectDesc: "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading his favorite space adventure storybook to him at the hospital.",
                skills: ["3D Modeling", "Analytics", "Animation", "Asset Creation", "Blender Modeling", "Character Animation", "Community Management", "Game Design/Development", "Graphics Programming", "Lighting Systems", "Long-term Project Management", "Lua", "Performance Optimization", "Post-Processing and Shaders", "Programming", "Rigging", "Roblox", "Technical Art", "Technical Writing/Documentation", "Texturing", "UI/UX Design", "User Testing", "UV Mapping", "VFX", "Particle Systems"],
                size: 4.2,
                position: 480,
                texture: './images/mars.jpg',
                gif: './images/blackout.gif'
            },
            {
                name: "Roblox Hunger Games",
                description: "Studio Lead | 2017-2019",
                year: 2019,
                visitability: "Completed",
                link: null,
                overview: "As Lead Developer and Studio Lead, I led a small indie dev studio developing a battle royale game on the Roblox platform online. I managed a team of developers, designers, and artists across remote collaboration workflows and designed economy systems, progression mechanics, and player retention features using analytics. I published and maintained the live game with continuous updates based on telemetry and feedback, coordinated playtesting sessions, and iterated on game mechanics based on user research. I created technical documentation covering mechanics, story, and system architecture specs while optimizing game performance across devices and managing in-game economy balance.",
                projectDesc: "A battle royale game developed for Roblox that featured complex economy systems, progression mechanics, and player retention features. Led a small indie development studio managing the full lifecycle from development through live operations.",
                skills: ["Analytics", "Community Management", "Data Analysis", "Economy Design", "Feedback Analysis", "Game Design", "Game Development", "Iteration", "Leadership", "Live Operations", "Lua", "Performance Optimization", "Player Engagement", "Product Management", "Progression Systems", "Project Management", "Remote Collaboration", "Roblox", "Systems Design", "Team Management", "Technical Documentation", "User Testing"],
                size: 3.7,
                position: 570,
                texture: './images/mars.jpg',
                gif: './images/roblox_hg.gif'
            }
        ]
    },

    pink: {
        name: "Artificial Intelligence / Machine Learning",
        sunTexture: './images/pink.png',
        planets: [
            {
                name: "Artificial Intelligence / Machine Learning",
                description: "Projects Timeline",
                visitability: "",
                link: null,
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/pink.png',
                gif: null,
                isSun: true
            },
            {
                name: "Uncovering Determinants of Obesity",
                description: "USC Ethical AI Researcher | 2025",
                year: 2025,
                visitability: "Completed",
                link: null,
                overview: "As USC Ethical AI Student Researcher, I developed probability-based obesity risk prediction models using the CDC BRFSS dataset with 100,000+ survey responses. I implemented a dual modeling approach comparing classification (BMI categories) versus regression (continuous BMI prediction), analyzing behavioral, demographic, and socioeconomic factors including smoking, drinking, and physical activity patterns. I evaluated models using comprehensive metrics (accuracy, precision, recall, F1-score, AUC-ROC, MAE, RMSE, R²) and applied survey weights to ensure population-representative analysis aligned with SDG health goals. Through feature importance analysis, I revealed how lifestyle and socioeconomic factors influence obesity risk, building a risk stratification tool that enables healthcare providers to determine optimal intervention timing and intensity for supporting public health initiatives aligned with UN Sustainable Development Goals.",
                projectDesc: "A machine learning research project analyzing obesity risk factors using CDC survey data. The project developed predictive models to identify key determinants of obesity and created tools for healthcare providers to assess patient risk and plan interventions, supporting public health initiatives aligned with UN Sustainable Development Goals.",
                skills: ["AUC-ROC", "BMI Prediction", "BRFSS", "CDC Data", "Classification", "Clinical Decision Support", "Confusion Matrix", "Data Engineering", "Data Visualization", "Feature Engineering", "Feature Importance", "F1-Score", "Healthcare Analytics", "Health Equity", "Jupyter Notebook", "Machine Learning", "MAE", "Model Calibration", "Model Evaluation", "Population Health", "Precision", "Predictive Modeling", "Public Health", "Python", "Recall", "Regression Analysis", "Risk Assessment", "Risk Stratification", "RMSE", "R² Score", "SDG", "Statistical Analysis", "Supabase", "Survey Data Analysis", "Survey Weights", "Sustainable Development Goals"],
                size: 4.3,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/obesity_research.gif'
            },
            {
                name: "Project Spectra",
                description: "Handshake AI Internship | 2025",
                year: 2025,
                visitability: "Completed",
                link: null,
                overview: "During my internship at Handshake, I designed intuitive, on-brand architecture and user interaction pipeline diagrams while spearheading the synthesis of user telemetry to identify behavioral patterns and bottlenecks. I automated failure prediction using Python ML libraries (scikit-learn, pandas), predicted user failure rates, and visualized key trends to inform design decisions. I presented data-driven UX recommendations to cross-functional team leads and iterated on frequent demos integrating LLM/NLP models for user feedback analysis. Additionally, I optimized the frontend UI for accessibility, responsiveness, and professional polish, led quantified QA testing cycles with actionable usability feedback, improved data parsing efficiency in both space and time complexity, and developed JavaScript unit tests to ensure consistent testing of known issues.",
                projectDesc: "An AI-powered platform development project at Handshake focused on improving user experience through machine learning and predictive analytics. The project integrated LLM/NLP models for user feedback analysis, automated failure prediction systems, and comprehensive UI/UX optimization for accessibility and performance.",
                skills: ["Accessibility", "Algorithm Optimization", "Architecture Design", "Cross-Functional Collaboration", "Data Analysis", "Data Visualization", "Frontend Development", "JavaScript", "Large Language Models (LLM)", "Machine Learning", "Natural Language Processing (NLP)", "pandas", "Performance Optimization", "Predictive Analytics", "Presentation Skills", "Python", "Quality Assurance (QA)", "Responsive Design", "scikit-learn", "Technical Documentation", "UI/UX Design", "Unit Testing", "Usability Testing", "User Feedback Analysis", "User Telemetry"],
                size: 4.0,
                position: 210,
                texture: './images/venus.jpg',
                gif: './images/handshake_spectra.gif'
            },
            {
                name: "IBM Quantum Computing Hackathon",
                description: "Hackathon Finalist | 2025",
                year: 2025,
                visitability: "Completed",
                link: null,
                overview: "As a Hackathon Finalist, I simulated PFAS bond dissociation using Variational Quantum Eigensolver (VQE) with UCCSD ansatz in Qiskit Nature, exploring scalability of quantum simulation for environmental remediation applications. I compared quantum computational methods against classical approaches (CCSD, DFT) for modeling fluorine-rich molecular systems, benchmarking quantum vs classical performance across various molecular system sizes. Through quantum circuit optimization, I reduced gate counts to improve computational efficiency while analyzing convergence behavior and accuracy-to-resource tradeoffs. I collaborated with team members on technical implementation and research methodology, ultimately presenting our technical findings to IBM judges and quantum computing experts at the competition.",
                projectDesc: "A quantum computing research project focused on simulating the bond dissociation of PFAS (per- and polyfluoroalkyl substances) using quantum algorithms. The project explored the potential advantages of quantum computation for complex molecular modeling compared to traditional classical methods, with implications for environmental remediation.",
                skills: ["Benchmarking", "CCSD", "Computational Chemistry", "DFT", "Environmental Science", "Innovation", "Performance Analysis", "Presentation Skills", "Problem Solving", "Python", "Qiskit", "Quantum Chemistry", "Quantum Circuit Optimization", "Quantum Computing", "Research", "Scientific Computing", "Technical Communication", "VQE"],
                size: 4.1,
                position: 300,
                texture: './images/earth.jpg',
                gif: './images/quantum_pfas.gif'
            },
            {
                name: "Preliminary Script Scorer (PSS)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, I built an ML model predicting critic reception using TF-IDF, Random Forest, and Gradient Boosting on 1,455 scripts, improving accuracy 24% over the legacy version achieving 97% predictions within ±1 point on a 10-point scale. I combined TF-IDF text vectorization, regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and custom feature engineering, achieving 85% of predictions falling within half a point. To address the heteroscedasticity in this model that led to less accurate predictions for higher scoring scripts, I planned to implement weighted least squares regression and designed interaction terms between predictors to better capture the variance structure across different score ranges. This created a greenlighting tool for studios that provides trustworthy preliminary evaluation, tending to err on the side of caution for quality assurance.",
                projectDesc: "A machine learning model that evaluates screenplay quality and predicts critic reception scores. The model leverages natural language processing to analyze screenplay content and provides studios with a trustworthy greenlighting tool at the preliminary stages, tending to err on the side of caution for quality assurance.",
                skills: ["Bag of Words", "Data Engineering", "Documentation", "Ensemble Methods", "Feature Engineering", "Gradient Boosting", "Heteroscedasticity", "Linear Regression", "Machine Learning", "Model Optimization", "N-gram", "Natural Language Processing", "NLP", "Project Management", "Python", "Random Forest", "Regression Analysis", "Ridge Regression", "Statistical Analysis", "Supabase", "Team Collaboration", "Technical Writing", "TF-IDF", "UI/UX Design", "User Analytics", "Web Development", "Weighted Least Squares"],
                size: 3.2,
                position: 390,
                texture: './images/mercury.jpg',
                gif: './images/PSS_ex.gif'
            },
            {
                name: "Genre Distribution Coefficients (GDC)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, I realized boolean genre tags were not sufficient to capture the nuances of a screenplay's genre, as stories almost always span many. I created an NLP model that quantifies the distribution of genres within a screenplay by clustering narrative flow patterns and determining variance, using the same 1,455 labeled script dataset as the PSS model. I experimented with N-gram, Bag of Words, and TF-IDF text vectorization based models and found that the Bag of Words model alone was sufficient for genre-related insights. This captured multi-genre storytelling patterns that traditional boolean tags couldn't represent accurately, providing studios with accurate genre classification for better marketing and positioning decisions.",
                projectDesc: "An NLP model that quantifies the distribution of genres within a screenplay by analyzing narrative flow patterns. Unlike traditional boolean genre tags, this model captures the nuanced ways stories span multiple genres, providing more accurate genre classification for film studios.",
                skills: ["Bag of Words", "Clustering", "Data Engineering", "Documentation", "Genre Classification", "Machine Learning", "Model Evaluation", "N-gram", "Narrative Analysis", "Natural Language Processing", "NLP", "Project Management", "Python", "Supabase", "Team Collaboration", "Technical Writing", "Text Vectorization", "TF-IDF"],
                size: 4.2,
                position: 480,
                texture: './images/venus.jpg',
                gif: './images/GDC_ex.gif'
            },
            {
                name: "Target Audience Calculator (TAC)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, with the PSS and GDC models in hand, I designed a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. I implemented Partial Least Squares Regression optimized for sample size and feature constraints. I experimented with a range of models and found that Partial Least Squares Regression was the most effective given the sample size. By expanding the model, performing extensive feature relevance analysis, and introducing loglines as a stand-in for screenplay contents, I was able to bring the model's confidence interval to sensible results. This quantified the total addressable market and ticket count predictions, aiding financial planning decisions for film production.",
                projectDesc: "A machine learning model that predicts the demographic makeup of a script's target audience using screenplay loglines and historical demographic data. This tool helps with financial planning of film production by quantifying the total addressable market and ticket count predictions.",
                skills: ["Confidence Intervals", "Data Engineering", "Demographic Analysis", "Documentation", "Feature Engineering", "Feature Selection", "Financial Planning", "Machine Learning", "Market Research", "Natural Language Processing", "NLP", "Partial Least Squares Regression", "PLS Regression", "Project Management", "Python", "Statistical Modeling", "Supabase", "Team Collaboration", "Technical Writing"],
                size: 4.5,
                position: 570,
                texture: './images/earth.jpg',
                gif: './images/TAC_ex.gif'
            },
            {
                name: "Cast & Crew Payments (CCP), Non-Personnel Cost Projection (NCP)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, to help my colleague with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data combined with internet presence metrics. I downloaded and processed nearly the entire IMDb database for comprehensive historical casting data analysis. After downloading nearly the entirety of IMDb, I designed a model that incorporated cast and crew's estimated internet prevalence using Google Trends data prior to release. In collaboration with my colleague, we separated the cast into payment brackets using historical industry rates and internet prevalence metrics, then used historical industry rates to fill in all needed crew and investor returns. This provided studios with accurate pre-production budget estimates for cast, crew, and non-personnel costs.",
                projectDesc: "A machine learning model that predicts film budgets based on cast and crew data and internet presence metrics. The model includes both Cast & Crew Payments (CCP) predictions and Non-Personnel Cost Projection (NCP) calculations, providing a comprehensive budgeting framework for film production planning.",
                skills: ["API Integration", "Budget Planning", "Data Engineering", "Data Processing", "Documentation", "ETL", "Excel", "Financial Budgeting", "Financial Modeling", "Full Stack Web Development", "Google Trends", "IMDb Data", "Machine Learning", "Microsoft Excel", "Predictive Modeling", "Python", "Regression Analysis", "Supabase", "Team Collaboration", "Technical Writing", "Web Development", "Web Scraping"],
                size: 3.8,
                position: 660,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Funding vs Revenue Graph (FRG)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, with the goal of being able to visualize all possible financial outcomes of a film, I designed a comprehensive financial visualization plotting budget, projections, confidence intervals, min and max projections, break-even point, maximum return on investment, year of release, and genres for marketing. I curated a dataset of 3,062 films (1,455 with screenplays) for training revenue prediction models. Using a self-curated dataset, I compared XGBoost, Random Forest, and Gradient Boosting Regressor models, and found that a combination of models was most effective. I then trained a simple neural network on the model predictions to weight them appropriately by screenplay context, improving accuracy by 8% to an R² of 0.58. This created a decision-support tool helping studios visualize and understand the financial risks and potential returns of film projects.",
                projectDesc: "A comprehensive financial visualization tool that plots all possible financial outcomes of a film including budget, projections, confidence intervals, break-even points, and return on investment calculations. This tool helps studios visualize and understand the financial risks and potential returns of film projects.",
                skills: ["Break-even Analysis", "Data Engineering", "Dataset Curation", "Documentation", "Ensemble Methods", "Excel", "Financial Budgeting", "Financial Modeling", "Gradient Boosting", "Machine Learning", "Microsoft Excel", "Model Comparison", "Natural Language Processing", "Neural Networks", "NLP", "Project Management", "Python", "Random Forest", "Revenue Prediction", "ROI Analysis", "Supabase", "Team Collaboration", "Technical Writing", "Data Visualization", "XGBoost"],
                size: 4.2,
                position: 750,
                texture: './images/venus.jpg',
                gif: './images/FRG_ex.png'
            },
            {
                name: "Reader Sentiment Estimator (RSE) & Reader Retention Estimator (RRE)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, two of the most important signals for greenlighting decisions are reader sentiment and retention, so I designed a model to predict both directly from screenplay content, without requiring human feedback. I developed NLP models predicting reader sentiment and retention directly from screenplay content using feature extraction and regression techniques, eliminating the need for human feedback labels. I designed a framework ready for validation as labeled dataset grows with collected human feedback and created a greenlighting signal tool predicting reader response before scripts are read by humans. While we do not yet have a large enough labeled dataset to validate accuracy with statistical significance, I built a scalable architecture that will improve predictions as more feedback data becomes available over time, providing studios early insights into screenplay reception for informed greenlighting decisions.",
                projectDesc: "A machine learning model that predicts reader sentiment and retention directly from screenplay content, eliminating the need for human feedback. This tool helps studios understand how readers will likely respond to scripts before they are read, providing valuable insights for greenlighting decisions.",
                skills: ["Data Engineering", "Documentation", "Feature Extraction", "Machine Learning", "Model Architecture", "Natural Language Processing", "NLP", "Predictive Analytics", "Project Management", "Python", "Regression Analysis", "Scalability", "Sentiment Analysis", "Supabase", "Team Collaboration", "Technical Writing", "UI/UX Design", "User Analytics"],
                size: 4.5,
                position: 840,
                texture: './images/mercury.jpg',
                gif: './images/RSERRE_ex.gif'
            },
            {
                name: "Theatrical Localization Prioritization (TLP)",
                description: "AI Engineer Internship | Summer 2025",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As AI/ML Engineer, I was tasked with designing a model to rank theatrical markets for each film based on the screenplay data and prior models, so the marketing team could prioritize resources for maximum impact down to the theatre level. I implemented Partial Least Squares Regression to match a screenplay's target market with city demographics, supported by historical census data to improve confidence in market predictions and geographic targeting. The most difficult challenge was achieving the requested granularity without detailed theater data. The prototype successfully identified promising markets, enabling marketing teams to prioritize resources for maximum impact in most promising geographic regions. Future work is focused on adding real-world theater datasets for precision targeting and improved accuracy.",
                projectDesc: "A machine learning model that ranks theatrical markets for films based on screenplay data and demographic information. This tool helps marketing teams prioritize resources and target the most promising markets for maximum impact, down to the individual theater level.",
                skills: ["Census Data", "Data Engineering", "Demographic Analysis", "Documentation", "Excel", "Full Stack Web Development", "Geographic Analytics", "Machine Learning", "Market Research", "Marketing Analytics", "Microsoft Excel", "Partial Least Squares Regression", "PLS Regression", "Project Management", "Python", "Resource Optimization", "Statistical Modeling", "Supabase", "Team Collaboration", "Technical Writing", "Web Development"],
                size: 3.8,
                position: 930,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            }
        ]
    },

    yellow: {
        name: "Full-Stack Software Development",
        sunTexture: './images/yellow.png',
        planets: [
            {
                name: "Full-Stack Software Development",
                description: "Projects Timeline",
                visitability: "",
                link: null,
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/yellow.png',
                gif: null,
                isSun: true
            },
            {
                name: "The Mailroom",
                description: "INTERDEPENDENT Studios | 2025+",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As Full-Stack Developer, I built a screenplay portal with React, TypeScript, and Supabase for INTERDEPENDENT Studios' greenlighting process. I implemented phone number OTP authentication and Stripe identity verification for account creation, providing authenticated users access to a curated library of film screenplays. I integrated Adobe PDF Embed SDK providing a cinematic-themed interface for screenplay viewing with a modern React/TypeScript stack. I developed a payment processing system with Stripe requiring a modest payment requirement for access, built a writer dashboard showing script progress, feedback, and reader comments in real-time, and implemented telemetry collection tracking user engagement and reading patterns for ML training. I also designed a reader feedback submission system feeding data into greenlighting ML models, creating a cinematic-themed UI that enriches the reader's experience and incentivizes telemetry collection.",
                projectDesc: "A client-facing portal for INTERDEPENDENT Studios' greenlighting process, where writers can see the progress of their script and the feedback they have received. The portal also allows readers to submit feedback to writers, which is then used to train machine learning models for greenlighting decisions.",
                skills: ["Adobe PDF Embed SDK", "Analytics", "API Integration", "Authentication", "Backend Development", "Cinematic Design", "Dashboard Development", "Data Collection", "Feedback Systems", "Frontend Development", "Full Stack Web Development", "Identity Verification", "JavaScript", "Machine Learning", "ML Integration", "OTP", "Payment Processing", "PDF Processing", "Phone Authentication", "Product Development", "React", "Real-time Systems", "Stripe", "Supabase", "Telemetry", "Telemetry Collection", "TypeScript", "UI/UX Design", "User Engagement", "Web Development"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Interactive Financial Planner",
                description: "INTERDEPENDENT Studios | 2025+",
                year: 2025,
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "As Full-Stack Developer, I was tasked with designing a financial planning tool with React, TypeScript, and Supabase for film production budgeting. I built a modern interface for studios, agents, and producers to plan budgets and forecast insights, expanding The Mailroom style guide to create a cohesive, intuitive UX surpassing Movie Magic Budgeting. My designing for this application was focused on UX, and I was able to expand upon the style guide to create a more modern interface that would allow for more comfortable budgeting and planning. I implemented comprehensive film production budgeting with personnel and non-personnel cost tracking, integrated Excel export functionality for budget reports and financial planning documents, developed a forecasting engine displaying script-based budget predictions and revenue projections, and created a real-time calculation system for dynamic budget scenarios and cost adjustments.",
                projectDesc: "A financial planning tool designed to help film studios, agents, and producers plan budgets and see forecasted insights from their scripts. The application provides comprehensive film production budgeting capabilities with a modern, intuitive interface.",
                skills: ["Backend Development", "Calculation Engine", "Cost Tracking", "Excel Integration", "Export Functionality", "Film Production", "Financial Budgeting", "Financial Modeling", "Financial Planning", "Financial Technology", "FinTech", "Forecasting", "Frontend Development", "Full Stack Web Development", "Intuitive Design", "JavaScript", "Modern UI", "Product Design", "Product Development", "React", "Real-time Systems", "Revenue Projection", "Style Guide Design", "Supabase", "TypeScript", "UI/UX Design", "Web Development", "Data Visualization", "Budget Planning"],
                size: 3.7,
                position: 210,
                texture: './images/venus.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "RPL Ordering System",
                description: "USC Rocket Propulsion Lab | 2024+",
                year: 2024,
                visitability: "Visit",
                link: "https://www.uscrpl.com/",
                overview: "As Full-Stack Developer, I built a full-stack ordering system with React, TypeScript, Express, and SQLite serving 100+ engineering teams. Building upon the legacy ordering system, I redesigned the frontend to be more user-centric, intuitive, and visually appealing while maintaining full responsiveness. I designed a responsive UI with Tailwind CSS featuring cart, archive, and order management pages, implemented bulk approve/deny functionality and order status tracking (pending/approved/denied), and added a cart system to allow for a mainstreamed ordering experience. I created 'Buy It Again' and 'Shop Today's Deals' features with image-based product browsing, built a RESTful API with TypeScript backend handling CRUD operations and status updates, and developed the application as a full-stack Node.js/Express web application with EJS templating, SQLite database integration, and modern Tailwind CSS styling. I implemented MVC architecture with dedicated controllers for HTTP request handling, service layer for business logic, and robust database schema for orders, projects, and subteams. I also containerized the application using Docker and Docker Compose, deployed on AWS for lab infrastructure, and implemented leaderboards tracking spending and order statistics across engineering teams.",
                projectDesc: "An inventory management system that tracks lab disposables and manages purchase orders for all of USC Rocket Propulsion Lab's subteams and their respective projects. The system supports order approval/rejection by authorized users, archival functionality, and provides a modern e-commerce-like ordering experience.",
                skills: ["API Development", "AWS", "Backend Development", "Cloud", "Containerization", "CRUD Operations", "CSS", "Database Design", "Deployment", "DevOps", "Docker", "E-commerce", "EJS", "Express", "Frontend Development", "Full Stack Web Development", "HTML", "Image Upload", "Inventory Systems", "JavaScript", "MVC Architecture", "Node.js", "Order Management", "Product Development", "React", "React Router", "RESTful API", "RESTful APIs", "Responsive Design", "SQLite", "System Architecture", "Tailwind CSS", "TypeScript", "UI/UX Design", "Web Development"],
                size: 3.8,
                position: 300,
                texture: './images/earth.jpg',
                gif: './images/OrderingSystemV3.png'
            },
            {
                name: "RPL Sendserver",
                description: "USC Rocket Propulsion Lab | 2024+",
                year: 2024,
                visitability: "Visit",
                link: "https://www.uscrpl.com/",
                overview: "As Full-Stack Developer, I built mission control web app with Flask, React, Redis/Celery, and C++ simulation engine, aiding in lab simulations and launches by managing complex rocket trajectory optimization and atmospheric wind data analysis for high-performance solid propellant sounding rockets. I integrated C++ FlightOn propulsion simulator with Python backend via FFI for real-time sims, implemented WebSocket connections for real-time telemetry streaming and Redis caching layer, and developed a targeting algorithm using gradient descent for trajectory optimization and landing. I built a Monte Carlo simulation pipeline analyzing trajectory dispersions and weather impacts, created a unified dashboard with Material-UI displaying plots, maps, and real-time logs, and implemented wind analysis tools processing historical data and atmospheric modeling (HRRR). The application enables engineers to input target coordinates, automatically calculate optimal launch angles and azimuths using C++ simulation engines, and scrape real-time atmospheric wind data from external sources, featuring real-time data visualization and automated simulation management.",
                projectDesc: "A comprehensive mission control center web application that manages rocket trajectory optimization and atmospheric wind data analysis for USC Rocket Propulsion Lab's high-performance solid propellant sounding rockets. The system includes advanced features like asynchronous trajectory optimization, automated wind data collection, real-time logging systems, and interactive dashboards for monitoring Alpha and Sigma rocket systems.",
                skills: ["Algorithm Development", "Asynchronous Processing", "Atmospheric Physics", "Backend Development", "C++", "Caching", "Cross-language Integration", "Dashboard Development", "Data Visualization", "Embedded Systems", "FFI", "Flask", "Folium", "Frontend Development", "Full Stack Web Development", "Gradient Descent", "JavaScript", "Material-UI", "Matplotlib", "Monte Carlo Simulation", "Numerical Methods", "Physics", "Plotly", "Python", "Real-time Data Visualization", "Real-time Systems", "React", "Redis", "Celery", "RESTful APIs", "Scientific Computing", "Simulation", "System Integration", "Task Queue Management", "Task Queuing", "Telemetry", "Weather Modeling", "Web Development", "WebSockets"],
                size: 3.5,
                position: 390,
                texture: './images/mars.jpg',
                gif: './images/RPL.png'
            },
            {
                name: "Three-body Portfolio",
                description: "Portfolio Website | 2024+",
                year: 2024,
                visitability: "Visit",
                link: "https://jamescsimon.github.io/portfolio/",
                overview: "As Full-Stack Developer, I designed, programmed, and deployed this portfolio website from scratch, which was my first attempt at making a professional website. I built a personal portfolio with React and Three.js featuring immersive 3D celestial environments, implemented N-body physics simulation with numerical integration and gravitational dynamics, and optimized rendering performance achieving smooth 60 FPS animations with particle effects. This project taught me the basics of both web development and simulating complex celestial systems. I developed a full-stack website with responsive design, dark/light themes, and project showcase, embedded analytics to track user flows and optimize navigation for improved user experience, implemented accessibility features including ARIA labels, keyboard navigation, and SEO best practices, and deployed on Vercel with custom domain, SSL certificates, and optimized assets for fast loading.",
                projectDesc: "A portfolio website that showcases my projects and skills through an interactive 3D solar system simulation. The website features a unique celestial navigation system where each solar system represents a different area of expertise, with planets representing individual projects.",
                skills: ["3D Graphics", "Analytics", "API Integration", "Backend Development", "Blender Modeling", "CI/CD", "Cloud", "CSS", "Deployment", "DevOps", "Frontend Development", "Full Stack Web Development", "Graphics Programming", "HTML", "Numerical Methods", "Particle Systems", "Performance Optimization", "Physics Programming", "Physics Simulation", "Post-Processing and Shaders", "React", "Rendering", "Responsive Design", "SEO", "SSL/TLS", "Three.js", "UI/UX Design", "VFX", "Web Accessibility", "Web Development"],
                size: 3.4,
                position: 480,
                texture: './images/mercury.jpg',
                gif: './images/here.png'
            }
        ]
    }
};

// Helper function to get data for a specific solar system
export function getSolarSystemData(systemName) {
    return solarSystemData[systemName] || null;
}

// Helper function to get planet data for a specific solar system
export function getPlanetData(systemName, planetIndex) {
    const system = solarSystemData[systemName];
    if (system && system.planets[planetIndex]) {
        return system.planets[planetIndex];
    }
    return null;
}

// Helper function to get the number of planets in a solar system
export function getPlanetCount(systemName) {
    const system = solarSystemData[systemName];
    return system ? system.planets.length - 1 : 0; // -1 because first is the sun
}
