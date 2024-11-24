/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cochise Cabau",
  title: "Hi, I'm Cochise!",
  subTitle: emoji(
    "I'm a dedicated Game Developer and Computer Scientist with a passion for making immersive gaming experiences 🚀. With a strong foundation in Unity, Unreal Engine, and programming languages like C#, C++, and Python, I bring ideas to life in the digital world."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XX0mKherWRqS8vRezgnaQ4hH9Vx_hwua/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CochiseDev",
  linkedin: "https://www.linkedin.com/in/cochise-cabau-torres/",
  gmail: "cochise.dev@gmail.com",
  gitlab: "https://gitlab.com/cochise.dev",
  itchio: "https://cochisedev.itch.io",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Bring to the Table",
  subTitle: "Passionate Game Developer and Software Engineer",
  skills: [
    emoji("🎮 Expert in creating engaging games with Unity and Unreal Engine"),
    emoji("🛠️ Proficient in developing optimized game mechanics and systems using C# and C++"),
    emoji("🌐 Strong background in backend development and database management"),
    emoji("🧩 Skilled in problem-solving and designing scalable software architectures")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Unity", fontAwesomeClassname: "fab fa-unity" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Unreal Engine", fontAwesomeClassname: "fas fa-cube" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "CSS/3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Europea",
      logo: require("./assets/images/UELogo.jpg"),
      subHeader: "Double Degree in Computer Science and Game Development",
      duration: "February 2022 - Present",
      desc: "Gained comprehensive knowledge of software development, focusing on game creation.",
      descBullets: [
        "Participated in Game Jams", 
        "Developed 3D multiplayer games independently",
        "Part of the Cyber Security club"
      ]
    },
    {
      schoolName: "University of Kent",
      logo: require("./assets/images/KentLogo.jpg"),
      subHeader: "Computer Science (Cyber Security) + a year in the industry",
      duration: "September 2021 - December 2021",
      desc: "Realised it was too similar to the Cambridge A Levels Computer Science 4 year program I already did.",
      descBullets: ["I wanted to learn more, something new and love making videogames so I decided to move into a double degree"]
    },
    { 
      schoolName: "Morna International College",
      logo: require("./assets/images/MICLogo.png"),
      subHeader: "Primary and Secondary school",
      duration: "September 2006 - June 2021",
      desc: "Acquired most of my Computer Science knowledge from here, starting the Cambridge IGCSE - A Levels four year program at the age of 14.",
      descBullets: ["A* in Computer Science Cambridge International A Levels"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development (Unity & Unreal)", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming Languages (C#, C++, Python)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development (SQL, Java)",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design (HTML, CSS)",
      progressPercentage: "70%"
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "A few Projects I've worked on...",
  subtitle: "SOME UNIVERSITY PROJECTS AND GAME JAMS",
  projects: [
    {
      image: require("./assets/images/GorebeatLogo.png"),
      projectName: "GOREBEAT",
      projectDesc: "Melee Combat Action Rhythm Game",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ryuchempy.itch.io/gorebeat"
        },
        {
          name: "Watch Trailer",
          url: "https://youtu.be/ciw7rujrd5I"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SkythievesLogo.png"),
      projectName: "Skythieves",
      projectDesc: "Multiplayer 3rd Person Shooter With NPCs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cochisedev.itch.io/skythieves"
        }
      ]
    },
    {
      image: require("./assets/images/NatureAppliancesLogo.png"),
      projectName: "Nature Appliances",
      projectDesc: "Adventure Game With A Turn Based Combat System (GameJam)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cochisedev.itch.io/natureappliances"
        }
      ]
    },
    {
      image: require("./assets/images/WatchOutLogo.png"),
      projectName: "WatchOut!",
      projectDesc: "First Person Horror Puzzle Game",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cochisedev.itch.io/watchout"
        },
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=IhI0H71syTI"
        }
      ]
    },
    {
      image: require("./assets/images/AbandonedIslandCover.png"),
      projectName: "Abandoned Island",
      projectDesc: "Intro cutscene",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/l8gZIw07O4U"
        }
      ]
    },
    {
      image: require("./assets/images/StylizedIslandCover.png"),
      projectName: "Stylized Island",
      projectDesc: "2 Cutscenes and a playable character/world",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/ALrW2FcVWfE"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "C++ Programming and Unreal Game Development",
      subtitle:
        "iD Game Dev Academy 2 Weeks Summer Camp in UCLA, during July 2019 at the age of 16. (Using Unreal Engine and C++).",
      image: require("./assets/images/iDTechLogo.png"),
      imageAlt: "iD Game Dev Academy",
      footerLink: [
        {
          name: "Certification Letter",
          url: "https://drive.google.com/file/d/1C8ezGXjA3QqUl3BMX5-Q7nAyU_i8I6yK/view?usp=sharing"
        },
        {
          name: "Official Transcript",
          url: "https://drive.google.com/file/d/1jS7VikppVrUgFHlulnWkkIb0I8R7qH7R/view?usp=sharing"
        }
      ]
    },
    {
      title: "Game Development Program",
      subtitle:
        "Game Experience LA 2 Weeks Summer Camp in UCLA, during July 2018 at the age of 15. (Using C# and Unity).",
      image: require("./assets/images/GameExperienceLALogo.jpg"),
      imageAlt: "Game Experience LA",
      footerLink: [
        { 
          name: "Certificate of Completion",
          url: "https://drive.google.com/file/d/1O6VOqwuN0iy-uVIEQ9AEFbpHus-nAfOz/view?usp=sharing"
        }
      ]
    },

    {
      title: "2nd Place in the UEM 2024 DreamJam",
      subtitle:
        "From Friday evening until Sunday Morning GameJam. Being the smallest team (just 2 people) compared to teams of 4 members and up. We tied up with the first place and ended up second.",
      image: require("./assets/images/DreamJamLogo.png"),
      imageAlt: "DreamJam 2024",
      footerLink: [
        { 
          name: "GameJam Results",
          url: "https://itch.io/jam/uem-dreamjam"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34 638950623",
  email_address: "cochise.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
