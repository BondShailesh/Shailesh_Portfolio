import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  link = "#", // Default link to prevent errors if not provided
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> 
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400 cursor-pointer" onClick={() => window.open(link, "_blank")}>{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "SDE",
      company: "Omind Technologies",
      period: "Nov 2023 - Present",
      description:
        "At Omind Technologies, I’ve contributed to enhancing the efficiency of QA and BPO audit workflows by developing and deploying several key features. These include setting up a secure SFTP server on AWS, automating audio file processing, and integrating CRM systems for seamless Excel uploads. I’ve also designed a powerful Excel filtering system and created an intuitive Test interface for agents and admins. Additionally, I developed an AI co-pilot to aid QA in call auditing using Deepgram and Langchain, streamlining the evaluation of call content. All of this is supported by a robust Docker and AWS infrastructure.",
      link: "https://www.omind.ai/", // Add a link property
    },
    {
      icon: Code2,
      title: "SDE",
      company: "Resure (US based Startup)",
      period: "Jan 2023 - Oct 2023",
      description:
        "At Resure, I developed a comprehensive file management system (Resure Drive) to handle PDF uploads, extraction, and text search, improving document retrieval. I also created a PDF editing tool for users to annotate property brochures directly on the website. Additionally, I built a Document feature for managing and editing data-rich real estate documents, while ensuring seamless front-end and secure back-end integration. I also designed a Notepad feature to help users streamline property research. Throughout, I collaborated with the team to maintain high website performance and resolve any issues swiftly.",
      link: "https://resure.realestate/",
    },
    {
      icon: Code2,
      title: "Associate Software Engineer",
      company: "Cartificer",
      period: "May 2021 - Dec 2022",
      description:
        "At Cartificer, I led the setup and maintenance of the online store, enhancing customer engagement by simplifying access to car services like cleaning and repairs. I implemented a real-time feedback system to improve service quality and ensure customer satisfaction. Additionally, I optimized the payment process, making it secure and seamless, which boosted customer trust. I also helped create a mobile-friendly platform that allowed users to easily book appointments, view services, and access special offers, ultimately improving service accessibility and business growth.",
      link: "https://www.linkedin.com/company/cartificer/",
    },
  ];

  // Wrap ExperienceCard in a clickable link if link exists
  const ExperienceCardWrapper = (props) =>
    props.link ? (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:shadow-2xl transition-shadow duration-300"
        style={{ textDecoration: "none" }}
      >
        <ExperienceCard {...props} />
      </a>
    ) : (
      <ExperienceCard {...props} />
    );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              Turning innovative ideas into digital solutions, one project at a time.
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
