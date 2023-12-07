import Link from "next/link"
import BackToTop from "@/components/BackToTop"
import About from "@/components/About"
import Skills from "@/components/Skills"

import {
	Card,
	CardDescription,
	CardHeader,
} from "@/components/ui/card"



export default function Home() {

	const renderSkillCard = (skill: any, index: any) => {
		const SkillIcon = skill.skillComponent
		return <Card className="bg-light-50 border-gray-400 dark:bg-dark dark:border-gray-700" key={index}>
			<CardHeader className="flex flex-col justify-center items-center">
				<div className="w-10 h-10 md:w-16 md:h-16">
					<SkillIcon className="" />
				</div>
				<CardDescription>{skill.skillName}</CardDescription>
			</CardHeader>
		</Card>
	}

	return (
		<main>
			<div className='container py-5'>

				{/* ---------- Section intro ---------- */}
				<section className="relative flex h-[calc(100vh-72px)] items-center justify-center py-28 mt-0 md:mt-24 lg:mt-0">

					{/* Text */}
					<div className="relative z-10 -mt-14 flex flex-col items-center justify-between gap-5">
						<div className="flex flex-col items-center gap-2 text-center">

							{/* Title */}
							<h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl animate__animated animate__fadeInLeft">
								<span className="mr-3">Hi, I'm</span>
								<span className="text-yellow-300 font-outline">
									Ray
								</span>
							</h1>

							{/* Text */}
							<div className="text-lg md:text-2xl mt-5 animate__animated animate__fadeInLeft" style={{ lineHeight: '35px' }}>
								<p className='my-4 font-semibold'>
									Web developer
								</p>
								<p className='my-4 text-base md:text-xl'>
									I love designing and building websites with an elegant UX
								</p>
							</div>

							{/* Button projects */}
							<div className="relative mt-5 animate__animated animate__fadeInLeft group">
								<div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-400"></div>
								<Link href="/projects">
									<button className='relative text-base md:text-md  shadow-md font-semibold px-6 py-3 rounded-lg border border-gray-600 bg-light hover:bg-gray-200 dark:hover:bg-black bg-light-50 dark:bg-dark'>
										View the websites that I've built 👨‍💻
									</button>
								</Link>
							</div>

						</div>
					</div>
				</section>
				{/* ---------- End section intro ---------- */}

				<section id='about' className="grid grid-cols-1 lg:grid-cols-12 mt-14 mb-20 md:my-32">
					<About />
				</section>

				<section id="skills" className="mt-14 mb-20 md:my-32">
					<Skills />
				</section>

				<section id="backtotop" className="my-8">
					<BackToTop />
				</section>

			</div >
		</main >
	)
}