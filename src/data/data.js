import { FaCode, FaGlobe, FaMobile, FaRobot } from "react-icons/fa";
import { SiAntdesign, SiDocker } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaMobile />,
    title: "Mobile Application Development",
    des: "Building cross-platform mobile applications using Flutter and React Native. Creating responsive, performant apps for iOS and Android with native-like experiences and seamless user interfaces.",
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: "Web Application Development",
    des: "Developing modern, scalable web applications using React, Next.js, and Vue.js. Creating responsive frontends with Tailwind CSS and building interactive user experiences with cutting-edge technologies.",
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Backend Development",
    des: "Designing robust server-side architectures using Node.js, Django, Flask, NestJS, and Go. Building RESTful APIs, GraphQL endpoints, and microservices with database integration and authentication systems.",
  },
  {
    id: 4,
    icon: <SiDocker />,
    title: "Deployment",
    des: "Deploying applications to cloud platforms including GCP, AWS, and Azure. Setting up CI/CD pipelines, containerization with Docker, and ensuring scalable, reliable production environments.",
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "Data Science and LLM Training",
    des: "Developing AI-powered solutions and training Large Language Models. Working with machine learning pipelines, data analysis, and integrating AI capabilities into applications for intelligent automation.",
  },
  {
    id: 6,
    icon: <SiAntdesign />,
    title: "Software Architecture",
    des: "Designing scalable system architectures and clean code structures. Implementing design patterns, microservices, and maintainable codebases that support long-term growth and team collaboration.",
  },
];
