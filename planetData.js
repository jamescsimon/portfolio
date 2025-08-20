// Centralized planet data for all solar systems
// This file contains all the project information for each planet in each solar system

export const solarSystemData = {
    blue: {
        name: "Interactive Media Design",
        sunTexture: './images/blue.png',
        planets: [
            {
                name: "Interactive Media Design",
                description: "Projects Timeline",
                visitability: "Explore!",
                link: null, // No link for sun
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
                link: null, // No link for in-progress projects
                overview: "As Technical Director and Co-Founder I led a multifaceted team of game engine programmers, game designers, scriptwriters, among others. I mapped out system architecture and mitigated potential issues, tailored U.I./U.X. to experience goals using Q.A. feedback data, and aided game programming/designing when needed.",
                projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
                skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"],
                size: 4,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/BREAK.gif'
            },
            {
                name: "Cat Counselor",
                description: "Sloan Grant application | 2023-24",
                visitability: "Demo Only",
                link: null, // Add your actual demo link
                overview: "Advised by educational pyschologist Dr. Eun Park, I wrote out a detailed design document outlining all facets of the mobile game. I used this document as reference to make a Unity game alongside a game artist to develop a demo.",
                projectDesc: "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",
                skills: ["C# for Unity", "Game Design/Development", "iOS Mobile App Development", "Project Planning/Management", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.3,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/CatCounselor.gif'
            },
            {
                name: "Butterflies",
                description: "First game on Steam! | 2023",
                visitability: "Visit",
                link: null,  // Add your actual Steam link
                overview: "Made alongside amazing film, game art, and screenwriting students as part of school curriculum to construct a transmedia project. I designed the game mechanics, programmed the game in Unity with C#, and integrated playtester feedback to best meet user experience goals. From this opertunity we were allowed to present at a showcase event.",
                projectDesc: "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
                skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Q.A. Testing & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.4,
                position: 360,
                texture: './images/earth.jpg',
                gif: './images/ButterfliesTrailer.gif'
            },
            {
                name: "Blackout",
                description: "First passion project | 2019-23",
                visitability: "Visit",
                link: null,  // Add your actual Roblox link
                overview: "My first game conquest, made in Roblox Studio with Lua, saw me write up a design document, make assets in Blender, familarize myself with post-processessing and shader programming, and the semantics of game development as a whole. I give much credit to this project for unlocking my passions for game design/development and gameplay programming, even if it was horribly overscoped.",
                projectDesc: "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading a storybook at the hospital.",
                skills: ["Blender Modeling", "Lua for Roblox Studio", "Game Design/Development", "Post-Processing and Shaders", "Technical Writing/Documentation", "U.I./U.X. Design"],
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
                overview: "I was tasked with building a more technologically robust Preliminary Script Scorer model that starts by leveraging NLP but is set up to train itself further using human feedback within a web application and deduce which patterns are most indicative of a decorated screenplay.",
                projectDesc: "I combined TF-IDF text vectorization, regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and custom feature engineering on a dataset of 1,455 screenplays and their respective metadata. This new model improved accuracy by 24.41% over the legacy version and now predicts critic reception within 1 point (out of 10) for 97% of scripts, with 85% of predictions falling within half a point. This gave the studio a much more trustworthy greenlighting tool at the preliminary stages, as it tended to air on the side of caution and be pessimistic. To address the heteroscedasticity in this model that led to less accurate predictions for higher scoring scripts, plans were made to implement weighted least squares regression and add interaction terms between predictors to better capture the variance structure across different score ranges.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Web Development", "U.I./U.X. Design", "User Analytics", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
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
                overview: "I realized boolean genre tags were not sufficient to capture the nuances of a screenplay's genre, as stories almost always span many. I therefore created an NLP model that quantifies the distribution of genres within a screenplay by clustering narrative flow patterns and determining variance, using the same 1,455 labeled script dataset as the PSS model.",
                projectDesc: "N-gram, Bag of Words, and TF-IDF text vectorization based models were used to determine the alignment of a screenplay's narrative flow to major genre tags. After experimenting with the different models, I was both surprised and pleased to find that the Bag of Words model alone was enough to determine genre-related insights, while the other models provided impressive but unnecessary detail.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
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
                overview: "With the PSS and GDC models in hand, I set out to design a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. This tool helped with the financial planning of film production, as it aimed to quantify the total addressable market to the ticket count using the multimodal input of the screenplay's logline and historical demographic and market data.",
                projectDesc: "I experimented with a range of models to determine the optimal granularity of features based on my limited sample set from Comscore's THEME Reports, historical market and demographic data. After iterating through approaches, I found that Partial Least Squares Regression was the most effective model given the sample size. By expanding the model, doing extensive feature relevance analysis, and introducing loglines as a stand-in for screenplay contents, I was able to bring the model’s confidence interval to sensible results.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
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
                overview: "To help my colleague with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data combined with internet presence metrics. The Non-Personnel Cost Projection was derived from the difference between the predicted budget and the standard rates of the cast and crew found by my colleague's research.",
                projectDesc: "After downloading nearly the entirety of IMDb, I designed a model that incorporated cast and crew’s estimated internet prevalence using Google Trends data prior to release. In collaboration with my colleague, we separated the cast into brackets of expected payments and then used historical industry rates to fill in all needed crew and investor returns. While further work is needed to automate this process from the script alone, this provided a strong starting framework.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Financial Budgeting", "Microsoft Excel"],
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
                overview: "With the goal of being able to visualize all possible financial outcomes of a film, I designed one graph to plot not just budget and projection but also confidence interval, min and max projections, break-even point, maximum return on investment, year of release, and genres for marketing.",
                projectDesc: "Using a self-curated dataset of 3,062 films (1,455 with screenplays), I compared XGBoost, Random Forest, and Gradient Boosting Regressor models, and found that a combination of models was most effective. I then trained a simple network on the model predictions to weight them appropriately by screenplay context, improving accuracy by 8% to an R² of 0.58.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "Financial Budgeting", "Microsoft Excel"],
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
                overview: "INTERDEPENDENT Studios is a startup that leverages real human feedback using embedded telemetry and surveys to train machine learning models for greenlighting decisions from the script alone. Two of the most important signals are reader sentiment and retention, so I designed a model to predict both directly from screenplay content, without requiring human feedback.",
                projectDesc: "I developed a model using NLP feature extraction and regression techniques to predict the likelihood of a reader's sentiment and retention. While we do not yet have a large enough labeled dataset to validate accuracy with statistical significance, the framework is ready and will improve as more human feedback is collected.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "User Analytics", "U.I./U.X. Design"],
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
                overview: "I was tasked with designing a model to rank theatrical markets for each film based on the screenplay data and prior models, so the marketing team could prioritize resources for maximum impact down to the theatre level.",
                projectDesc: "The most difficult challenge was achieving the requested granularity without detailed theater data. For now, I used Partial Least Squares Regression to match a screenplay’s target market with city demographics, supported by historical census data to improve confidence. The prototype successfully identified promising markets, with future work focused on adding real-world theater datasets for precision targeting.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Microsoft Excel"],
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
                overview: "INTERDEPENDENT Studios is a startup that leverages real human feedback using embedded telemetry and surveys to train machine learning models for greenlighting decisions from the script alone. The Mailroom is a client-facing portal for the greenlighting process, where the writer can see the progress of their script and the feedback they have received. The portal also allows readers to submit feedback to the writers, which is then also used to train the models.",
                projectDesc: "Built with modern React/TypeScript stack, this webapp provides authenticated users access to a curated library of film screenplays with an interactive PDF reader interface. The application features phone number OTP authentication, Stripe identity verification for account creation, a modest payment requirement for access, and integrates Adobe PDF Embed SDK for viewing screenplay PDFs with a cinematic-themed UI that enriches the reader's experience and incentivizes telemetry collection.",
                skills: ["Full Stack Web Development", "U.I./U.X. Design", "Authentication", "Payment Processing", "Telemetry Collection", "React", "TypeScript", "Stripe", "Adobe PDF Embed SDK", "Supabase"],
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
                overview: "I was tasked with designing a financial planner that would help the studio's clients/agents/producers plan their budgets and see forcasted insights from their scripts as well as plan out any and all things film production.",
                projectDesc: "My designing for this application was focused on UX, and I was able to expand upon the style guide of The Mailroom to create a more cohesive and intuitive site. Using Movie Magic Budgeting as a prehistoric reference, I was able to create a more modern interface that would allow for more confortable budgeting and planning.",
                skills: ["Full Stack Web Development", "U.I./U.X. Design", "Financial Budgeting", "Microsoft Excel", "React", "TypeScript", "Supabase"],
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
                overview: "Building upon the legacy ordering system, I redesigned the frontend to be more user-centric, intuitive, and visually appealing while maintaining full responsiveness. This inventory management system tracks lab disposables and manages purchase orders for all of the lab's subteams and their respective projects, supporting order approval/rejection by authorized users, archival functionality, and I added a cart system to allow for a mainstreamed ordering experience. I also designed 'Buy Again' and 'Frequently Bought Together' abilities to add more modern comforts to the site.",
                projectDesc: "Developed as a full-stack Node.js/Express web application with EJS templating, SQLite database integration, and modern Tailwind CSS styling. Implemented MVC architecture with dedicated controllers for HTTP request handling, service layer for business logic, and robust database schema for orders, projects, and subteams. The frontend JavaScript handles dynamic order management and real-time status updates, complemented by RESTful API endpoints for comprehensive CRUD operations.",
                skills: ["Full Stack Web Development", "U.I./U.X. Design", "Node.js", "Express", "SQLite", "Tailwind CSS", "EJS", "MVC Architecture", "RESTful API", "JavaScript", "HTML", "CSS"],
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
                overview: "The SendServer is mission control hosted on the web, aiding in lab simulations and launches by managing complex rocket trajectory optimization and atmospheric wind data analysis for high-performance solid propellant sounding rockets. It's a full-stack web application built with Python Flask backend, React frontend, and Redis/Celery for asynchronous task processing, featuring real-time data visualization and automated simulation management.",
                projectDesc: "The SendServer serves as a comprehensive mission control center that enables engineers to input target coordinates, automatically calculate optimal launch angles and azimuths using C++ simulation engines, and scrape real-time atmospheric wind data from external sources. It includes advanced features like asynchronous trajectory optimization, automated wind data collection, real-time logging systems, and interactive dashboards for monitoring Alpha and Sigma rocket systems. The application demonstrates enterprise-level architecture with task queues, Redis caching, and a modern React-based UI for complex scientific simulations.",
                skills: ["Full Stack Web Development", "Python Flask", "React.js", "Redis/Celery", "Asynchronous Programming", "RESTful APIs", "Real-time Data Visualization", "Task Queue Management", "JavaScript", "HTML", "CSS", "C++ Integration"],
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
                overview: "Designed, programmed, and deployed--this was my first attempt at making a perfesional website from scratch. This project taught me the basics of both web development and simulating complex celestial systems.",
                projectDesc: "Developed from scratch using modern web technologies, this website showcases my ability to integrate 3D simulations with three.js while building a (hopefully) clean and responsive portfolio.",
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
