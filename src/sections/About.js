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
                <div className="lg:flex-2 space-y-2 text-lg text-balance text-neutral-200">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                            laudantium quia fuga cum enim consequuntur soluta hic. At, debitis
                            veniam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                            illo inventore pariatur nulla exercitationem eaque odio delectus,
                            nihil eos debitis, eius libero tempore explicabo numquam magni
                            consectetur aliquid dolorum non ea quis quasi? Laborum, vel?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            reiciendis explicabo nostrum officia. Cum, iure quis?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                            illo inventore pariatur nulla exercitationem eaque odio delectus,
                            nihil eos debitis, eius libero tempore explicabo numquam magni
                            consectetur aliquid dolorum non ea quis quasi? Laborum, vel?
                        </p>
                    </div>
                </div>

                {/* Image container with flex-1 to take 33% width on large screens */}
                <div className="relative h-[400px] w-full sm:w-3/5 ">
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
