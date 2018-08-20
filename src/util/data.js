/* eslint-disable */
import { spaceman, telescope, rocket, twinkle, halfmoon, ufo } from '../images/icon/index';

const profile = {
  title: 'Profile',
  subtitle: 'Front End Software Developer looking for new opportunities in Dublin, Ireland. My area of expertise lies in Javascript and React but I have passion for interface technologies beyond the browser.',
  text: `
        I am a maker at heart who is happiest covered head to toe in glitter, paint and LEDs.
        The most important thing for me is to work with smart and creative people who inspire me. 
        I genuinely enjoy peer programming and code reviews as part of a healthy and happy team.
        A day in my perfect role would have lots of opportunities for collaboration with two way learning and teaching.  `,
  icon: spaceman,
  isListing: false,
  fullSize: true,
};

const experience = {
  title: 'Experience',
  text: [
    `I’ve had an unconventional journey; I have an undergraduate degree in Fine Art and Art History and an MSc. in Computer Science.`,
    `In 2016 took a role as a Software Engineer at Accenture’s new state of the art Research and Development centre in Grand Canal Dock. It's a role that required me to be highly collaborative and innovative. Although I technically lived in the Front End Guild, every day was different and I found myself working with everything from 3D printing to Voice UI to IOT to Wearables.`,
    `It was through Accenture that I started mentoring with Coder Dojo. I am incredibly proud of my work with the Dojo; two ninjas I mentored went on to win European Digital Girl of the year in 2017 and in May 2018 I spoke on a panel at Coolest Projects.`,
    `I’m passionate about technology and reaching out to the next generation of women in Tech. I’ve written some blogs about my experiences so far  which you can read below.`
  ],
  icon: rocket
};

const education = {
  title: 'Education',
  text: [
    {
      role: 'MSc. Interactive Digital Media',
      location: 'School of Computer Science and Statistics, Trinity College Dublin',
      dates: '2014 - 2015',
    },
    {
      role: 'BA(Hons) Fine Art and Art History',
      location: 'School of Art, Design and Architecture, Kingston University, UK',
      dates: '2011 - 2014',
    }
  ],
  icon: telescope,
  isListing: true,
  fullSize: true
};

const networkBlog = {
  href: 'https://coderdojo.com/news/2017/05/30/building-a-network-to-support-female-mentors-and-ninjas/',
  title: 'Building a Network to Support Female Mentors and Ninjas',
  id:'30/05/2018'
}
const environmentBlog = {
  href: 'https://coderdojo.com/news/2017/07/01/creating-an-environment-to-support-female-ninjas/',
  title: 'Creating an Environment to Support Female Ninjas',
  id:'01/07/2017'
}
const creativityBlog = {
  href: 'https://www.accenture.com/ie-en/blogs/blogs-inspiring-childlike-creativity',
  title: 'Inspiring Childlike Creativity',
  id:'01/01/2017'
}
const wwcBlog = {
  href: 'https://www.womenwhocode.com/blog/dotjs-2017',
  title: 'Vising dotJS 2017 in Paris with Women Who Code',
  id:'14/12/2017'
}

export const blogsArray = [creativityBlog, networkBlog, environmentBlog, wwcBlog];

export const skillsObject = {
  title: 'Development',
  icon: twinkle,
  skills: [
    {
      label: 'JavaScript',
      value: 75
    },
    {
      label: 'React',
      value: 75
    },
    {
      label: 'Angular 2+',
      value: 60
    },
    {
      label: 'ECMAScript',
      value: 70
    },
    {
      label: 'TypeScript',
      value: 75
    },
    {
      label: 'Python',
      value: 60
    },
    {
      label: 'Voice UI',
      value: 50
    },
    {
      label: 'HTML5',
      value: 100
    },
    {
      label: 'CSS/SCSS',
      value: 80
    },
    {
      label: 'Bootstrap',
      value: 90
    }
  ],
  fullSize: false
};

export const designObject = {
  title: 'Design',
  icon: halfmoon,
  skills: [
    'Sketch', 'Illustrator', 'Premiere Pro', 'Final Cut', 'Photoshop', '3D Modelling',
    'Web Design', 'User Experience Design', 'User Interface Design', 'Voice Interface Design',
    'Hand Lettering'
  ],
  fullSize: false
};

export const otherObject = {
  title: 'Other things I know about',
  icon: ufo,
  skills: [
    'Agile and Scrum Methodologies', 'Critical Thinking', 'Problem Solving', 'Excellent Writing Skills', 'Design Thinking',
    'Raspberry Pi', 'Arduino', 'Adafruit', 'Sensor Technologies', 'IOT', '3D Printing', 'TCP/IP Networks', 'Fine Art'
  ],
  fullSize: false
};

export const sectionsArray = [profile, experience, education];