import createProjectCard from "@/components/project-card"

export default function Projects() {
    return (
        <section id="blogs" className='py-20'>
            <div className="container">

                {/* Title */}
                <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl mt-7 mb-20">
                    The websites I've built 🚀
                </h1>

                {/* Render project cards*/}
                {createProjectCard({
                    title: "Vietwander",
                    techStack: ["Next.js", "TailwindCSS"],
                    link: "https://vietwander.vercel.app/",
                    featureImageLink: "/images/projects/vietwander.png",
                    githubLink: "https://github.com/quangnvo/vietwander"
                })}

                {createProjectCard({
                    title: "Vienr Food",
                    techStack: ["Next.js", "TailwindCSS"],
                    link: "https://vienr-food.vercel.app/",
                    featureImageLink: "/images/projects/vienr.png",
                    githubLink: "https://github.com/quangnvo/vienr-project"
                })}
            </div>
        </section>
    )
}
