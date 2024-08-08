import me from "../img/me.png"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock5 from "../img/mock5.png"
import download from "../img/soft.jpg"
import live from "../img/Screenshot 2024-08-08 100558.png"
 

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
 
export let singlePage = false;

/*
     #############    personal information #####################
 */

export const info = {
    firstName: "Karthikeyan",
    lastName: "keyan",
    initials: "Developer",  
    position: "a Full Stack Developer",
    selfPortrait: me, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,  
    baseColor: colors[0],
    resume: "../image/Karthikeyan_Resume.pdf",
    miniBio: [
        {
            emoji: '💻',
            text: 'Full Stack Developer'
        },
        {
            emoji: '🌐',
            text: 'Passionate about web technologies'
        },
        {
            emoji: '🚀',
            text: 'Creating innovative solutions'
        },
        {
            emoji: '📧',
            text: 'karthikeyanvijay70@gmail.com'
        }
    ],
    
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
 

    ],
    bio: "Hello! I'm Karthikeyan, a dedicated MERN Stack Developer with hands-on experience in web development. I studied Computer Science and have a passion for coding and problem-solving. Always eager to learn new technologies and improve my skills, I strive to contribute positively to my team and make a significant impact through my work. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react','nextjs', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Nodejs', 'MongoDB'],
            exposedTo: ['nodejs', 'canva', 'figma']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Travel',
            emoji: '✈️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Coding',
            emoji: '💻'
        }
 
    ],
    portfolio: [ 
        {
            title: "My Portfolio",
            live: "https://karthikeyan-my-portfolio.vercel.app",  
            source: "https://github.com/karthikeyanCoder",  
            image: mock11
        },
        {
            title: "Project ",
            live: "https://karthikeyan-my-portfolio.vercel.app",
            source: "https://github.com/karthikeyanCoder",
            image:  mock5
        },
        {
            title: "Project ",
            live: "https://karthikeyan-my-portfolio.vercel.app",
            source: "https://github.com/karthikeyanCoder",
            image:  mock5
        },
        {
            title: "Project ",
            live: "https://karthikeyan-my-portfolio.vercel.app",
            source: "https://github.com/karthikeyanCoder",
            image:  mock5
        },
        {
            title: "Project ",
            live: "https://karthikeyan-my-portfolio.vercel.app",
            source: "https://github.com/karthikeyanCoder",
            image:  mock5
        }
    ]
}