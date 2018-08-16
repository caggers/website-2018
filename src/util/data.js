import { spaceman, telescope, rocket, twinkle, halfmoon, ufo } from '../images/icon/index';


const blog_00 = 'https://coderdojo.com/news/2017/05/30/building-a-network-to-support-female-mentors-and-ninjas/';
const blog_01 = 'https://coderdojo.com/news/2017/07/01/creating-an-environment-to-support-female-ninjas/';
const blog_02 = 'https://www.accenture.com/ie-en/blogs/blogs-inspiring-childlike-creativity';

const profile = {
  title: 'Profile',
  subtitle: 'Front End Software Developer looking for new opportunities in Dublin, Ireland. My area of expertise lies in Javascript and React but I have passion for interface technologies beyond the browser.',
  text: `
        My background in Fine Art and Computer Science gives me a rich, unique and varied range of skills.
        I am a maker at heart who is happiest covered head to toe in glitter, paint and LEDs.
        The most important thing for me is to work with smart and creative people who inspire me. 
        I genuinely enjoy peer programming and code reviews as part of a healthy and happy team.
        A day in my perfect role would have lots of opportunities for collaboration with two way learning and teaching.  `,
  icon: spaceman,
  isListing: false,
  fullSize: true,
  blogs: [blog_00, blog_01, blog_02]
};

const experience = {
  title: 'Experience',
  text: [
    {
      role: 'Software Engineer',
      location: 'The Dock, Accenture',
      dates: '2016 - Current',
      description: `This role requires me to be multidisciplinary in my skillset, knowledgeable about new technologies and 
                highly collaborative. The Dock is an innovation research and development centre for an entire global business.`
    },
    {
      role: 'Coder Dojo Mentor',
      location: 'Coder Dojo Foundation',
      dates: '2016 - Current',
      description: `I set up the Robotics module for the Silicon Docks Dojo and two of my ninjas are finalists in the Digital Girl of the Year Award. 
                I’ve learnt a lot during my time teaching at the Dojo.`
    }
  ],
  icon: rocket,
  isListing: true,
  fullSize: true
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