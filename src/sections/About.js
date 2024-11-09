import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="pt-32 sectionContainer">
            <div className="headingContainer">
                <h2 className="sectionHeading">About</h2>
                <h3 className="sectionDescription">Who am I?</h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                {/* Main content with flex-2 to take 66% width on large screens */}
                <div className="lg:flex-2 space-y-2 text-lg text-balance text-neutral-200 flex-1">
                    <div className="flex gap-5 font-semibold text-xl text-neutral">
                        <div>
                            <p>Name:</p>
                            <p>Age:</p>
                            <p>Location:</p>
                        </div>
                        <div>
                            <p>Andreas Aagaard</p>
                            <p>28 Years Old</p>
                            <p>Copenhagen</p>
                        </div>
                    </div>
                    <div className="textCtn">
                        <p>
                            I’m a newly graduated Front-end Developer with a passion for creating clean, user-friendly websites. I’ve always been interested in how websites work, and as I began learning web development, I realized that I really enjoy putting together both the technical and creative parts of building a site. In my spare time, I like to take on personal projects, which helps me continue learning and exploring new technologies. I also enjoy helping others create the visual identity they want for their businesses or ideas.
                        </p>
                        <p>
                            Over the last few years, I’ve faced some challenges and uncertainty, but once I started studying web development, everything started to make sense. It was like finding something that clicked for me, and now I’m always thinking about new ideas for projects or ways to improve my skills. I really enjoy learning and pushing myself to get better at what I do.
                        </p>
                        <p>
                            Outside of development, I enjoy keeping a balance by doing things I love, like cooking and trying out new restaurants. I also like to stay active by playing football and attending sports events. These activities help me stay energized and give me a chance to step away from the screen for a bit.
                        </p>
                        <p>
                            As I continue to grow in this field, I’m looking forward to taking on new challenges and learning even more. My goal is to work on projects that help others and make a difference, while always improving my own skills along the way.
                        </p>
                    </div>
                </div>

                <div className="relative h-[450px] md:h-[700px] w-full sm:w-3/5 lg:flex-1">
                    <Image
                        src="/cv_profile.png"
                        fill
                        className="rounded-lg border-accent border-2 object-cover"
                        alt="Responsive Image"
                    />
                </div>
            </div>
        </section>
    );
}
