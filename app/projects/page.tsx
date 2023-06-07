import createProjectCard from "@/components/project-card"

export default function Projects() {
    return (
        <section id="blogs" className='py-20'>
            <div className="container">

                {/* Title */}
                <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl mt-7 mb-20">
                    Projects
                </h1>

                {/* Render project cards*/}
                {createProjectCard({
                    title: "Vienr Food",
                    description: "aaaaaaa",
                    techStack: ["nextjs", "tailwindcss"],
                    link: "https://vienr-food.vercel.app/",
                    featureImageLink: "/images/projects/vienr-food.png"
                })}
            </div>
        </section>
    )
}
