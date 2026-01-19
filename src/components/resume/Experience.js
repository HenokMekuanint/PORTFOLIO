import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - Present
          </p>
          <h2 className="text-4xl font-bold">Teaching & Mentorship</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DSA & Software Development Mentor"
            subTitle="A2SV Coding Bootcamp — Mentor"
            result="Volunteer / Mentor"
            des={`Mentored students in data structures & algorithms, problem solving, and career development. Provided code reviews, interview prep and portfolio feedback.`}
          />

          <ResumeCard
            title="Computer Science Tutor"
            subTitle="Private Tutoring — Programming, DSA, Interview Prep"
            result="Part Time"
            des={`Tutored students in programming fundamentals, data structures & algorithms, and interview preparation; helped build portfolios and prepare for technical interviews.`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
