import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: "Hair By Sonne",
        description: "Pellentesque tempus in lorem eu mollis. Phasellus placerat massa ipsum, at molestie purus commodo nec. Ut in mi felis...",
        occupation: "Hairdresser",
        img: "/hairbysonne.png",
        link: "https://hairbysonne.dk"
    },
    {
        title: "Sonne Body & Balance",
        description: "Pellentesque tempus in lorem eu mollis. Phasellus placerat massa ipsum, at molestie purus commodo nec. Ut in mi felis...",
        occupation: "Body Therapist",
        img: "/sonnebb.png",
        link: "https://sonnebb.netlify.app"
    },
    {
        title: "PaaTur",
        description: "Pellentesque tempus in lorem eu mollis. Phasellus placerat massa ipsum, at molestie purus commodo nec...",
        occupation: "Tourguide and Outdoor events",
        img: "/paatur.png",
        link: "https://mppaatur.netlify.app"
    },
    {
        title: "WILLUM.",
        description: "Pellentesque tempus in lorem eu mollis. Phasellus placerat massa ipsum, at molestie purus commodo nec...",
        occupation: "Project Management & Construction Consultancy",
        img: "/willum.png",
        link: "https://willum.netlify.app"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 overflow-hidden">
            <div className="max-w-5xl mx-auto relative border-2 border-neutral-300 rounded-lg flex flex-col items-center py-5">
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
