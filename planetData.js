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
                overview: "As Technical Director and Co-Founder I led a multifaceted team of game engine programmers, game designers, scriptwriters, among others. I mapped out system architecture and mitigated potential issues, tailored U.I./U.X. to experience goals using Q.A. feedback data, and aided game programming/designing when needed.",
                projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
                skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"],
                size: 4,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/inProgress.gif'
            },
            {
                name: "Cat Counselor",
                description: "Sloan Grant application | 2023-24",
                visitability: "Demo Only",
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
                overview: "I was tasked with building a more technologically robust Preliminary Script Scorer model for a startup that leverages NLP to empower screenwriters with data-driven feedback. It is set up to train itself further using human feedback within a web application and deduce which patterns are most indicative of a decorated screenplay.",
                projectDesc: "This system combines TF-IDF text vectorization, multiple regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and feature engineering to predict movie critic scores from a curated dataset of 1455 screenplay's text and metadata. This model iteration was able to improve its accuracy by 24.41% from the legacy model to now be able topredict a screenplay's critic reception within a single point (out of 10), 97% of the time. 85% of the model's predictions were within 0.5 points of the actual score.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Web Development", "U.I./U.X. Design", "User Analytics", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Genre Distribution Coefficients (GDC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "I found that boolean genre tags were not enough to capture the nuances of a screenplay's genre. I decided to create a NLP model that would quantify the distribution of genres within a screenplay by clustering narrative flow patterns and determining varience, using the same 1455 labeled script dataset as the PSS model.",
                projectDesc: "N-gram, Bag of Words, and TF-IDF text vectorization based models were used to determine the alignment of a screenplay's narrative flow to major genre tags. After experimenting with the different models, I was both shocked and delighted to find that the Bag of Words model was all that was needed to determine genre related insigts, while the remaining models provide impressive, yet unecessary detail.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 4.2,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Target Audience Calculator (TAC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "With the PSS and GDC models in hand, I set out to design a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. This tool helped with the financial planning of film produciton, as it aimed to qunatify the total addressible market to the ticket count using the multimodal input of the screenplay's logline and historical demographic and market data.",
                projectDesc: "I experimented with a range of models to determine the optimal granularity of features based on my limited sample set from the THEME Reports, historical market and demographic data. After iterating through the approaches, I found that Partial Least Squares Regression was the most effective model from the sample size. After expanding my model and doing extensive data analysis into the relevence of the features, as well as introducing the Loglines of the films as a standin for the screenplay's contents, I was able to get the model's confidence interval to give sensible results.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 4.5,
                position: 360,
                texture: './images/earth.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Cast & Crew Payments (CCP), Non-Personnel Cost Projection (NCP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "To help my collegue with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data as well as my collegue's robust interactive financial planner. The Non-Personnel Cost Projection was deduced from the difference of the predicted budget and the standard rates of the cast and crew found by my collegue's research.",
                projectDesc: "After downloading nearly the entirety of IMDb, I was able to design a model that took in the cast and crew's estimated internet prevelence using Google Trends data prior to the film's release. Then in a joint effort with my collegue, we were able seperate the cast into brackets of expected payments, and then used historical industry rates to fill in all needed crew and investor returns. There is further work to be done to automate this process from the script alone, but this was a great starting point.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Financial Budgeting", "Microsoft Excel"],
                size: 3.8,
                position: 480,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Funding vs Revenue Graph (FRG)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "With the goal of being able to visualize all of the possible financial outcomes of a film, I designed one graph to plot the relationship between not just the budget and projected but the confidence interval, min and max projections, break even point, max return on investment, year of release, and genres to market it under as well.",
                projectDesc: "With the help of my collegue's financial planner interface's structure, I designed the backend to populate the graph using a substancial self-curated dataset of 3062 films, with 1455 screenplays. I compared XGBoost, Random Forest, and Gradient Boosting Regressor, and found that a comination of models was the most effective predictor. I was able to train a simple network on the model's predictions on how to weight each model based on the context of the screenplay, which improved the model's accuracy further by X% to an R^2 of 0.Y.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "Financial Budgeting", "Microsoft Excel"],
                size: 4.2,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Reader Sentiment Estimator (RSE) & Reader Retention Estimator (RRE)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "INTERDEPENDENT Studios is a startup that leverages real human feedback using an assortment of embedded telemetry and survies to train our machine learning models to build greenlighting confidence from the script alone. The two most prevelent forms of this telemetry are Reader Senitment and Retention, so I took it upon myself to design a model that would predict the likelihood of a reader's sentiment and retention based on the screenplay's contents, without the need of human feedback.",
                projectDesc: "While I did set up a model that uses X, Y, and Z to predict the likelihood of a reader's sentiment and retention, we have yet to amass a large enough sample set of labeled human feedback to confirm the accuracy with statistical significance.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "User Analytics", "U.I./U.X. Design"],
                size: 4.5,
                position: 360,
                texture: './images/mercury.jpg',
                gif: './images/new_tower.png'
            },
            {
                name: "Theatrical Localization Prioritization (TLP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "I was tasked designing a model that would list the highest priority theatrical markets to target for each film based on all the models and screenplay data amassed thus far. This tool would help the marketing team prioritize their time and resources to maximize the impact of their work down to the theatre.",
                projectDesc: "The hardest part of this project was to get the granularity that was requested of me, without the needed theatre data to do so. For the time being, I was able to use Partial Least Squares Regression to determine the ratio of the screenplay's target market and use historical census data to determine the confidence of the a city being an optimal market to show the film. The next steps would be to curate a dataset of real world theatres with the most granular data to determine the optimal market for each film.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Microsoft Excel"],
                size: 3.8,
                position: 480,
                texture: './images/mars.jpg',
                gif: './images/new_tower.png'
            },
        ]
    },
    
    yellow: {
        name: "Physics Simulations & Game Engines",
        sunTexture: './images/yellow.png',
        planets: [
            {
                name: "Physics Simulations & Game Engines",
                description: "Projects Timeline",
                visitability: "",
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
                name: "Fluid Sim",
                description: "Personal project | 2025+",
                visitability: "",
                overview: "This project provided a foundation in simulating realistic fluid behaviors, improving my understanding of physics-based rendering and dynamics programming.",
                projectDesc: "Followed tutorials online to self-instruct basics on fluid dynamics simulations, along with course work on physics programming and rendering for game engines. Not yet at a stage of completion.",
                skills: ["C# for Unity", "Physics Programming", "Simulation Development"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: './images/inProgress.gif'
            },
            {
                name: "Quant.io",
                description: "Harvard Quantumn Shorts Submission | 2025",
                visitability: "",
                overview: "3D multiplayer .io game inspired by Agar.io, incorporating quantum mechanics principles into its core gameplay. The goal is to teach quantum mechanics in a fun and engaging way through strategic interactions.",
                projectDesc: "Prospective submission to the Harvard Quantumn Shorts Contest, which has yet to be announced for 2025. Not yet at a stage of completion.",
                skills: ["C# for Unity", "Game Design/Development", "Physics Programming", "Quantum Mechanics", "Simulation Development", "Technical Writing/Documentation"],
                size: 5.8,
                position: 270,
                texture: './images/venus.jpg',
                gif: './images/quant.gif'
            },
            {
                name: "Three-body Portfolio",
                description: "Portfolio Website | 2024+",
                visitability: "",
                overview: "Designed, programmed, and deployed--this was my first attempt at making a perfesional website from scratch. This project taught me the basics of both web development and simulating complex celestial systems.",
                projectDesc: "Developed from scratch using modern web technologies, this website showcases my ability to integrate 3D simulations with three.js while building a (hopefully) clean and responsive portfolio.",
                skills: ["Blender Modeling", "Full Stack Web Development", "Physics Programming", "Post-Processing and Shaders", "Three.js", "U.I./U.X. Design"],
                size: 6,
                position: 360,
                texture: './images/earth.jpg',
                gif: './images/inProgress.gif'
            },
            {
                name: "Sims & DI",
                description: "USC Rocket Propulsion Lab | 2024+",
                visitability: "",
                overview: "Refactor dated code to be more concise and efficient within modern infrastructure, generated simulations for engine combustion based on fuel composition, and updated online materials ordering service for the engineering teams.",
                projectDesc: "Membership in this club at my university has tasked me with familarizing myself with git, collaborative coding enviroments, and aerospace engineering in general.",
                skills: ["Collaborative Coding", "Full Stack Web Development", "Git Workflows", "Physics Programming", "Simulation Development", "U.I./U.X. Design"],
                size: 4,
                position: 480,
                texture: './images/mars.jpg',
                gif: './images/inProgress.gif'
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
