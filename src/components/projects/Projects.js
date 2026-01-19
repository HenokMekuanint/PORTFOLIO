import { projectFour, projectOne, projectThree, projectTwo } from "../../assets/index";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="A2SV Portal"
          des="A web based academic management portal built to centralize student data and streamline daily academic operations.
I worked as a full stack developer, delivering student profiles, attendance tracking, grading workflows, dashboards, and communication features using React, Next.js, Tailwind CSS, and a Python Django backend."
          src={projectOne}
          live="https://a2sv.org/"
        />
        <ProjectsCard
          title="Amhara Mobile Banking Application"
          des="A cross platform mobile banking application designed to provide secure and reliable financial services for Amhara Bank users.
I worked as a full stack developer, building the Flutter mobile app, scalable Node.js and Express REST APIs, real time features with WebSockets, and deploying the system on AWS."
          src={projectTwo}
          live={
            "https://play.google.com/store/apps/details?hl=en&id=com.amharabank.Aba_mobile_banking"
          }
        />
        <ProjectsCard
          title="RideShare ( Uber Pooing Platform )"
          des="A ride sharing web application inspired by Uber Pooling, built to help commuters share rides efficiently and reduce travel costs.
I worked as a frontend developer, implementing the user interface with Next.js and integrating core features and admin dashboard views with the backend services."
          src={projectThree}
          live={"https://rideshare.a2sv.org/home"}
        />
        <ProjectsCard
          title="PadelBuddy"
          des="A sports analytics mobile application focused on padel players, delivering AI powered match insights and video highlights.
I worked as a Flutter full stack developer, translating Figma designs into responsive Flutter UIs, integrating REST APIs for AI generated analytics and videos, and optimizing performance, caching, and offline support."
          src={projectFour}
          live={"https://padelbuddy.ai/"}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
