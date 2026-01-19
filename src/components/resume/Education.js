import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Science — Software Engineering"
            subTitle="Addis Ababa University, Addis Ababa, Ethiopia — 09/2019 - 06/2024"
            result="GPA: 3.42 / 4.0"
            des={`Major: Software Engineering and Computing Technology. Concentration: Software Engineering and Scientific Computing. Relevant coursework: Data Structures & Algorithms, Mobile and Web Application Development, Operating Systems, Machine Learning, Deep Learning, Computer Graphics, Natural Language Processing, Object-Oriented Programming, Database Systems, HCI, SPM, Fundamentals of AI and Cybersecurity.`}
          />

          <ResumeCard
            title="Introduction to Data Structures & Algorithms"
            subTitle="African to Silicon Valley (A2SV) — Addis Ababa, Ethiopia — 09/2022 - 09/2023"
            result="Concentration: Problem Solving & Communication"
            des={`Focused training on problem solving, algorithmic thinking and coding best practices. Relevant coursework: Data Structures & Algorithms.`}
          />

          <ResumeCard
            title="Google IT Professional Certificate"
            subTitle="Google — 06/2025 - 09/2025"
            result="Concentration: IT Support & Systems Administration"
            des={`Core topics: Technical Support Fundamentals, Computer Networking, Operating Systems, System Administration, IT Security, Troubleshooting and Customer Support.`}
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Head of Development & AI Team"
            subTitle="Hamer Technologies — Addis Ababa, Ethiopia — 06/2024 - Present"
            result="Full Time"
            des={`Led software development and AI initiatives across multiple projects from design to deployment. Managed and mentored engineering and AI teams, defined system architecture and AI workflows, and coordinated with product and operations to deliver scalable solutions.`}
          />

          <ResumeCard
            title="Data Scientist (Part-time)"
            subTitle="Turing — Palo Alto, CA, USA — 08/2025 - Present"
            result="Part Time"
            des={`Contributed to AI and LLM evaluation projects focused on data quality and model performance. Designed evaluation workflows, built and refined datasets, and collaborated with cross-functional teams to improve model accuracy and annotation consistency.`}
          />

          <ResumeCard
            title="Senior Flutter Developer (Part-time)"
            subTitle="Octobid — Riyadh, Saudi Arabia — 01/2025 - 08/2025"
            result="Part Time"
            des={`Led development of Octobid's cross-platform mobile app using Flutter. Implemented complex UI/UX flows, integrated REST APIs and real-time updates, and collaborated on authentication and payment workflows.`}
          />

          <ResumeCard
            title="Software Engineer (Part-time)"
            subTitle="Aladia — Brescia, Lombardy, Italy — 07/2024 - 07/2025"
            result="Part Time"
            des={`Spearheaded scalable e-learning modules using Node.js, NestJS, Next.js and MongoDB. Designed backend APIs and microservices, implemented event-driven workflows using GCP Pub/Sub, and led deployment automation and monitoring.`}
          />

          {/* SantimPAY internship removed per request */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
