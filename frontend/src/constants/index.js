// All static text on the website will go here

import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  carIn,
  screenIn,
  carDrive,
  carSuspe,
  carWinter,
  carSensor,
  tesblac,
  tesblu,
  tesgra,
  tesred,
  teswhi,
  chasis,
  parkAssist,
  tes_versatile,
  tesDesign,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "All-Rounder",
    content:
      'Named the "Luxury Car of The Year" - Forbes, Motor Trends, CBC and NY Times',
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secure",
    content:
      "Rated as a Grade VI protection vehicle by Automotive Safety Administration of USA.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Future of Cars",
    content:
      'Awarded "Most Likely Car to Replace Planes" by NY Times. The Tonda is the future.',
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "The most premium experience on the market! When safety, performance and comfort meet.",
    name: "Herman Jensen",
    title: "Founder MotorReviews",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "By myself, I feel like a boss. With my family, I'm at ease. That's the Tonda experience.",
    name: "Steve Mark",
    title: "Father of three",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "My girlfriend and I love the Tonda's modern tech approach. Best purchase I've made ever.",
    name: "Kenn Gallagher",
    title: "Citizen",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Horsepower",
    value: "261",
  },
  {
    id: "stats-2",
    title: "For 0-100 km/h",
    value: "5.6s",
  },
  {
    id: "stats-3",
    title: "Years of history",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Popular Vehicles",
    links: [
      {
        name: "GLA500",
        link: "#",
      },
      {
        name: "Stinger",
        link: "#",
      },
      {
        name: "A5",
        link: "#",
      },
      {
        name: "Model T",
        link: "#",
      },
      {
        name: "Tivic",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "About Tonda",
    links: [
      {
        name: "Our Company",
        link: "#",
      },
      {
        name: "Future of Tonda",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const slider1 = [
  {
    id: 0,
    image: carIn,
    text: "Precisely crafted memory-foam leather seats, carefully sewn by world-renowned designers. Supreme leg room supported by ergonomic experts. The Tonda interior is unmatched comfort for both the driver and passengers.",
    title: "beyond comfort.",
  },
  {
    id: 1,
    image: screenIn,
    text: "A 17” touchscreen with left-right tilt, true colors and exceptional responsiveness for gaming, movies and more. Every driver customization you can imagine. Tonda offers the premium techology for peak convenience.",
    title: "unbelievable technology.",
  },
  {
    id: 2,
    image: carDrive,
    text: "Legendary quattro all-wheel drive proactively directs power between axles when needed—offering additional grip before it’s needed, and efficiency when it’s not.",
    title: "quattro",
  },
  {
    id: 3,
    image: carSuspe,
    text: "advanced engine delivers 221 turbo horses from a compact 2.0 litres. Its 258 lb-ft of torque is at your command over a wide range of rpm, for quick response anytime.",
    title: "turbo torque.",
  },
  {
    id: 4,
    image: carWinter,
    text: "The Tonda is equipped with high-sensory steering and unmatched tire grip. Tried and tested in every biome, never doubt your cars ability ever again.",
    title: "take on anything.",
  },
];

export const featured_imgSet = {
  "img-1": chasis,
  "img-2": carSensor,
  "img-3": parkAssist,
};

export const carColours = [
  {
    id: 0,
    colourName: "Midnight Blue",
    colour: "#00246A",
    img: tesblu,
  },
  {
    id: 1,
    colourName: "Slate Black",
    colour: "#242424",
    img: tesblac,
  },
  {
    id: 2,
    colourName: "Ghost Gray",
    colour: "#7A7C81",
    img: tesgra,
  },
  {
    id: 3,
    colourName: "Valiant Red",
    colour: "#AD000E",
    img: tesred,
  },
  {
    id: 4,
    colourName: "Smooth White",
    colour: "#F9FAFA",
    img: teswhi,
  },
];

export const designHighlights = [
  {
    heading: "DESIGN",
    description:
      "The classic proportions and tensed muscle tone of a sport sedan envelop a spacious digital cockpit. A perennial favorite keeps driving into the future, to entice you, engage you, and enthrall you like never before.",
    img: tesDesign,
  },
  {
    heading: "VERSATILITY",
    description:
      "It can take you new places, or make old favorite roads feel fresh. It can take up to six of your friends, or make easy work of the weekend chores. And wherever you take it, it'll outperform to make every drive memorable.",
    img: tes_versatile,
  },
];
