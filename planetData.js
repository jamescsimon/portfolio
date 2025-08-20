// Centralized planet data for all solar systems
// This file contains all the project information for each planet in each solar system

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
                name: "BREAK",
                description: "Passion project | 2023+",
                visitability: "In Progress",
                link: null, 
                overview:"As Technical Director and Co-Founder, I led a multifaceted team of 15+ programmers, game designers, scriptwriters, actors, and artists. I architected and programmed the game's branching narrative system, implemented save/load functionality using serialized JSON, and designed the UI/UX based on playtester feedback to optimize alignment to set experience goals.",
                projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
                skills: ["C#", "Game Design/Development", "Project Planning/Management", "Save & Load Systems", "Serialized JSON", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"], 
                size: 4,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/BREAK.gif'
            },
            {
                name: "Cat Counselor",
                description: "Sloan Grant application | 2023-24",
                visitability: "Demo Only",
                link: null, 
                overview: "Advised by educational psychologist Dr. Eun Park, I authored a comprehensive 50-page design document covering game mechanics, user experience, and therapeutic objectives. I then developed the Unity prototype in C#, implementing touch controls, animation systems, and branching dialogue trees to create an engaging therapeutic experience.",
                projectDesc: "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",
                skills: ["C#", "Game Design/Development", "iOS Mobile App Development", "Project Planning/Management", "Quality Assurance & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.3,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/CatCounselor.gif'
            },
            {
                name: "Butterflies",
                description: "First game on Steam! | 2023",
                visitability: "Visit",
                link: null,  
                overview: "Collaborated with amazing film, game art, and screenwriting students to create an innovative transmedia experience. I designed the branching narrative system, programmed the Unity game in C#, and iterated based on playtester feedback, resulting in being displayed at a project showcase where I gave a talk about the project to my whole School of Cinematic Arts cohort.",
                projectDesc: "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
                skills: ["C#", "Game Design/Development", "Project Planning/Management", "Quality Assurance & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.4,
                position: 360,
                texture: './images/earth.jpg',
                gif: './images/ButterfliesTrailer.gif'
            },
            {
                name: "BLACKOUT",
                description: "First passion project | 2019-23",
                visitability: "Visit",
                link: null,
                overview: "My first major game conquest, developed in Roblox Studio with Lua, where I created a complete design document, modeled 3D assets in Blender, implemented post-processing effects and shaders, and gained comprehensive understanding of game development pipelines. This ambitious project taught me valuable lessons about scope management while solidifying my passion for game design and programming.",
                projectDesc: "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading him his favorite space adventure storybook at the hospital.",
                skills: ["Blender Modeling", "Game Design/Development", "Lua", "Post-Processing and Shaders", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.2,
                position: 480,
                texture: './images/mars.jpg',
                gif: './images/blackout.gif'
            },
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
                name: "Preliminary Script Scorer (PSS)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/", 
                overview: "I combined TF-IDF text vectorization, regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and custom feature engineering on a dataset of 1,455 screenplays and their respective metadata. This new model improved accuracy by 24.41% over the legacy version and now predicts critic reception within 1 point (out of 10) for 97% of scripts, with 85% of predictions falling within half a point. To address the heteroscedasticity in this model that led to less accurate predictions for higher scoring scripts, I planned to implement weighted least squares regression and add interaction terms between predictors to better capture the variance structure across different score ranges.",
                projectDesc: "A machine learning model that evaluates screenplay quality and predicts critic reception scores. The model leverages natural language processing to analyze screenplay content and provides studios with a trustworthy greenlighting tool at the preliminary stages, tending to err on the side of caution for quality assurance.",
                skills: ["Bag of Words", "Data Engineering", "Ensemble Methods", "Feature Engineering", "Machine Learning", "N-gram", "Natural Language Processing", "Project Planning/Management", "Python", "Regression Analysis", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation", "TF-IDF", "U.I./U.X. Design", "User Analytics", "Web Development"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/PSS_ex.gif'
            },
            {
                name: "Genre Distribution Coefficients (GDC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "I realized boolean genre tags were not sufficient to capture the nuances of a screenplay's genre, as stories almost always span many. I created an NLP model that quantifies the distribution of genres within a screenplay by clustering narrative flow patterns and determining variance, using the same 1,455 labeled script dataset as the PSS model. I experimented with N-gram, Bag of Words, and TF-IDF text vectorization based models and found that the Bag of Words model alone was sufficient for genre-related insights.",
                projectDesc: "An NLP model that quantifies the distribution of genres within a screenplay by analyzing narrative flow patterns. Unlike traditional boolean genre tags, this model captures the nuanced ways stories span multiple genres, providing more accurate genre classification for film studios.",
                skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
                size: 4.2,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/GDC_ex.gif'
            },
            {
                name: "Target Audience Calculator (TAC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "With the PSS and GDC models in hand, I designed a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. I experimented with a range of models and found that Partial Least Squares Regression was the most effective given the sample size. By expanding the model, doing extensive feature relevance analysis, and introducing loglines as a stand-in for screenplay contents, I was able to bring the model's confidence interval to sensible results.",
                projectDesc: "A machine learning model that predicts the demographic makeup of a script's target audience using screenplay loglines and historical demographic data. This tool helps with financial planning of film production by quantifying the total addressable market and ticket count predictions.",
                skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
                size: 4.5,
                position: 360,
                texture: './images/earth.jpg',
                gif: './images/TAC_ex.gif'
            },
            {
                name: "Cast & Crew Payments (CCP), Non-Personnel Cost Projection (NCP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "To help my colleague with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data combined with internet presence metrics. After downloading nearly the entirety of IMDb, I designed a model that incorporated cast and crew's estimated internet prevalence using Google Trends data prior to release. In collaboration with my colleague, we separated the cast into brackets of expected payments and then used historical industry rates to fill in all needed crew and investor returns.",
                projectDesc: "A machine learning model that predicts film budgets based on cast and crew data and internet presence metrics. The model includes both Cast & Crew Payments (CCP) predictions and Non-Personnel Cost Projection (NCP) calculations, providing a comprehensive budgeting framework for film production planning.",
                skills: ["Data Engineering", "Financial Budgeting", "Full Stack Web Development", "Machine Learning", "Microsoft Excel", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
                size: 3.8,
                position: 450,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Funding vs Revenue Graph (FRG)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "With the goal of being able to visualize all possible financial outcomes of a film, I designed one graph to plot not just budget and projection but also confidence interval, min and max projections, break-even point, maximum return on investment, year of release, and genres for marketing. Using a self-curated dataset of 3,062 films (1,455 with screenplays), I compared XGBoost, Random Forest, and Gradient Boosting Regressor models, and found that a combination of models was most effective. I then trained a simple network on the model predictions to weight them appropriately by screenplay context, improving accuracy by 8% to an R² of 0.58.",
                projectDesc: "A comprehensive financial visualization tool that plots all possible financial outcomes of a film including budget, projections, confidence intervals, break-even points, and return on investment calculations. This tool helps studios visualize and understand the financial risks and potential returns of film projects.",
                skills: ["Data Engineering", "Financial Budgeting", "Machine Learning", "Microsoft Excel", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
                size: 4.2,
                position: 540,
                texture: './images/venus.jpg',
                gif: './images/FRG_ex.png'
            },
            {
                name: "Reader Sentiment Estimator (RSE) & Reader Retention Estimator (RRE)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "Two of the most important signals for greenlighting decisions are reader sentiment and retention, so I designed a model to predict both directly from screenplay content, without requiring human feedback. I developed a model using NLP feature extraction and regression techniques to predict the likelihood of a reader's sentiment and retention. While we do not yet have a large enough labeled dataset to validate accuracy with statistical significance, the framework is ready and will improve as more human feedback is collected.",
                projectDesc: "A machine learning model that predicts reader sentiment and retention directly from screenplay content, eliminating the need for human feedback. This tool helps studios understand how readers will likely respond to scripts before they are read, providing valuable insights for greenlighting decisions.",
                skills: ["Data Engineering", "Machine Learning", "Natural Language Processing", "Project Planning/Management", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design", "User Analytics"],
                size: 4.5,
                position: 630,
                texture: './images/mercury.jpg',
                gif: './images/RSERRE_ex.gif'
            },
            {
                name: "Theatrical Localization Prioritization (TLP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "I was tasked with designing a model to rank theatrical markets for each film based on the screenplay data and prior models, so the marketing team could prioritize resources for maximum impact down to the theatre level. The most difficult challenge was achieving the requested granularity without detailed theater data. I used Partial Least Squares Regression to match a screenplay's target market with city demographics, supported by historical census data to improve confidence. The prototype successfully identified promising markets, with future work focused on adding real-world theater datasets for precision targeting.",
                projectDesc: "A machine learning model that ranks theatrical markets for films based on screenplay data and demographic information. This tool helps marketing teams prioritize resources and target the most promising markets for maximum impact, down to the individual theater level.",
                skills: ["Data Engineering", "Full Stack Web Development", "Machine Learning", "Microsoft Excel", "Python", "Supabase", "Team Collaboration/Communication", "Technical Writing/Documentation"],
                size: 3.8,
                position: 720,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            },
        ]
        
    },
    
    yellow: {
        name: "Web Development & Front-End Design",
        sunTexture: './images/yellow.png',
        planets: [
            {
                name: "Web Development & Front-End Design",
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
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "I built this webapp with modern React/TypeScript stack, providing authenticated users access to a curated library of film screenplays with an interactive PDF reader interface. I implemented phone number OTP authentication, Stripe identity verification for account creation, a modest payment requirement for access, and integrated Adobe PDF Embed SDK for viewing screenplay PDFs with a cinematic-themed UI that enriches the reader's experience and incentivizes telemetry collection.",
                projectDesc: "A client-facing portal for INTERDEPENDENT Studios' greenlighting process, where writers can see the progress of their script and the feedback they have received. The portal also allows readers to submit feedback to writers, which is then used to train machine learning models for greenlighting decisions.",
                skills: ["Adobe PDF Embed SDK", "Authentication", "Full Stack Web Development", "Payment Processing", "React", "Stripe", "Supabase", "Telemetry Collection", "TypeScript", "U.I./U.X. Design"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Interactive Financial Planner",
                description: "INTERDEPENDENT Studios | 2025+",
                visitability: "Visit",
                link: "https://interdependent.studio/",
                overview: "I was tasked with designing a financial planner that would help the studio's clients/agents/producers plan their budgets and see forecasted insights from their scripts as well as plan out any and all things film production. My designing for this application was focused on UX, and I was able to expand upon the style guide of The Mailroom to create a more cohesive and intuitive site. Using Movie Magic Budgeting as a prehistoric reference, I was able to create a more modern interface that would allow for more comfortable budgeting and planning.",
                projectDesc: "A financial planning tool designed to help film studios, agents, and producers plan budgets and see forecasted insights from their scripts. The application provides comprehensive film production budgeting capabilities with a modern, intuitive interface.",
                skills: ["Financial Budgeting", "Full Stack Web Development", "Microsoft Excel", "React", "Supabase", "TypeScript", "U.I./U.X. Design"],
                size: 3.7,
                position: 170,
                texture: './images/venus.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "RPL Ordering System",
                description: "USC Rocket Propulsion Lab | 2024+",
                visitability: "Visit",
                link: "https://www.uscrpl.com/",
                overview: "Building upon the legacy ordering system, I redesigned the frontend to be more user-centric, intuitive, and visually appealing while maintaining full responsiveness. I added a cart system to allow for a mainstreamed ordering experience and designed 'Buy Again' and 'Frequently Bought Together' abilities to add more modern comforts to the site. I developed this as a full-stack Node.js/Express web application with EJS templating, SQLite database integration, and modern Tailwind CSS styling, implementing MVC architecture with dedicated controllers for HTTP request handling, service layer for business logic, and robust database schema for orders, projects, and subteams.",
                projectDesc: "An inventory management system that tracks lab disposables and manages purchase orders for all of USC Rocket Propulsion Lab's subteams and their respective projects. The system supports order approval/rejection by authorized users, archival functionality, and provides a modern e-commerce-like ordering experience.",
                skills: ["CSS", "EJS", "Express", "Full Stack Web Development", "HTML", "JavaScript", "MVC Architecture", "Node.js", "RESTful API", "SQLite", "Tailwind CSS", "U.I./U.X. Design"],
                size: 3.8,
                position: 270,
                texture: './images/earth.jpg',
                gif: './images/OrderingSystemV3.png'
            },
            {
                name: "RPL Sendserver",
                description: "USC Rocket Propulsion Lab | 2024+",
                visitability: "Visit",
                link: "https://www.uscrpl.com/", 
                overview: "I built the SendServer as mission control hosted on the web, aiding in lab simulations and launches by managing complex rocket trajectory optimization and atmospheric wind data analysis for high-performance solid propellant sounding rockets. I developed this as a full-stack web application with Python Flask backend, React frontend, and Redis/Celery for asynchronous task processing, featuring real-time data visualization and automated simulation management. The application enables engineers to input target coordinates, automatically calculate optimal launch angles and azimuths using C++ simulation engines, and scrape real-time atmospheric wind data from external sources.",
                projectDesc: "A comprehensive mission control center web application that manages rocket trajectory optimization and atmospheric wind data analysis for USC Rocket Propulsion Lab's high-performance solid propellant sounding rockets. The system includes advanced features like asynchronous trajectory optimization, automated wind data collection, real-time logging systems, and interactive dashboards for monitoring Alpha and Sigma rocket systems.",
                skills: ["Asynchronous Programming", "C++ Integration", "CSS", "Full Stack Web Development", "HTML", "JavaScript", "Python Flask", "React.js", "Real-time Data Visualization", "Redis/Celery", "RESTful APIs", "Task Queue Management"],
                size: 3.5,
                position: 360,
                texture: './images/mars.jpg',
                gif: './images/RPL.png'
            },
            {
                name: "Three-body Portfolio",
                description: "Portfolio Website | 2024+",
                visitability: "Visit",
                link: "https://jamescsimon.github.io/portfolio/", 
                overview: "I designed, programmed, and deployed this portfolio website from scratch, which was my first attempt at making a professional website. This project taught me the basics of both web development and simulating complex celestial systems. I developed it from scratch using modern web technologies, integrating 3D simulations with three.js while building a clean and responsive portfolio.",
                projectDesc: "A portfolio website that showcases my projects and skills through an interactive 3D solar system simulation. The website features a unique celestial navigation system where each solar system represents a different area of expertise, with planets representing individual projects.",
                skills: ["Blender Modeling", "Full Stack Web Development", "Physics Programming", "Post-Processing and Shaders", "Three.js", "U.I./U.X. Design"],
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
