"use client"
import ProjectCard from "@/components/ProjectCard";
import ShadowAnimation from "@/components/shadowAnimation";
import { useRef } from "react";

const projects = [
    {
        title: "PaaTur",
        description: "This project involves creating a website for a tour guide specializing in team-building adventures for groups and companies across the country. The site will showcase available tours, pricing, and all essential information customers need to plan their experience.",
        occupation: "Guided Outdoor Experiences",
        img: "/paatur.png",
        link: "https://paatur.dk"
    },
    {
        title: "UNAI",
        description: "This is a mockup for a Fine Dining restaurant, created as part of my portfolio using React, Next.js, and Framer Motion.",
        occupation: "Restaurant",
        img: "/unai.png",
        link: "https://unairestaurant.netlify.app/"
    },
    {
        title: "Leloh Lab.",
        description: "Leloh Lab is a live and functional Shopify webshop.",
        occupation: "Webshop",
        img: "/leloh.png",
        link: "https://lelohlab.com/"
    },
    {
        title: "Lost Hut",
        description: "This is a mockup for a Chinese Eatery, created as part of my portfolio using React, Next.js, and Framer Motion.",
        occupation: "Chinese Eatery",
        img: "/losthut.png",
        link: "https://losthut.netlify.app/"
    },
    {
        title: "Hair By Sonne",
        description: "This is a complete website for a hairdresser, designed to provide customers with all the essential information, including pricing and service details, as well as easy access to the booking system.",
        occupation: "Hairdresser",
        img: "/hairbysonne.png",
        link: "https://hairbysonne.dk"
    },
    {
        title: "WACKO",
        description: "This is a mockup for a crazy bistro concept, created as part of my portfolio using React, Next.js, and Framer Motion.",
        occupation: "Bistro",
        img: "/wackobistro.png",
        link: "https://wackobistro.netlify.app/"
    },
    {
        title: "Sonne Body & Balance",
        description: "This is a complete website for a body therapist, designed to provide customers with all the essential information, including pricing and service details, as well as easy access to the booking system.",
        occupation: "Body Therapist",
        img: "/sonnebb.png",
        link: "https://sonnebb.netlify.app"
    },

    // {
    //     title: "WILLUM.",
    //     description: "Pellentesque tempus in lorem eu mollis. Phasellus placerat massa ipsum, at molestie purus commodo nec...",
    //     occupation: "Project Management & Construction Consultancy",
    //     img: "/willum.png",
    //     link: "https://willum.netlify.app"
    // },
];

export default function Projects() {
    const projectRef = useRef(null)


    return (
        <section id="projects" className="pt-32 overflow-hidden">

            <div className="headingContainer">
                <h2 className="sectionHeading">projects</h2>
                <h3 className="sectionDescription">Find my latest projects here</h3>
            </div>
            <div ref={projectRef} className="max-w-5xl mx-auto relative border-2 border-accentGreen bg-inherit px-5 lg:px-0 rounded-sm flex flex-col items-center py-5">
                <ShadowAnimation
                    className="absolute left-0 top-1/4 -z-10"
                    color="#0ea5e950"
                    blur="500px"
                    spread="200px"
                    scrollTargetRef={projectRef}
                />

                <ShadowAnimation
                    className="absolute right-0 top-3/4 translate-x-1/2 transform -z-10"
                    color="#dc2626FF"
                    blur="500px"
                    spread="200px"
                    scrollTargetRef={projectRef}
                />
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description} // Use `description` here for the `content`
                        occupation={project.occupation} // Pass `occupation` if ProjectCard uses it
                        img={project.img}
                        link={project.link}
                        position={index % 2 === 0 ? 'left' : 'right'} // Position for styling
                    />
                ))}
            </div>
        </section>
    );
}
