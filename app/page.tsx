import Link from "next/link"
import Image from "next/image"
import BackToTop from "@/components/BackToTop"
import About from "@/components/About"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

import {
	Card,
	CardDescription,
	CardHeader,
} from "@/components/ui/card"

import {
	Html5Icon,
	CSSIcon,
	BootstrapIcon,
	TailwindIcon,
	JavascriptIcon,
	ReactIcon,
	NextJSIcon,
	ReduxIcon,
	NodeJSIcon,
	ExpressIcon,
	MongoDBIcon,
	SassIcon,
	GitIcon
} from "@/components/ui/icons-skill"
import { Button } from "@/components/ui/button"

const listSkill = [
	{
		skillComponent: Html5Icon,
		skillName: "HTML5"
	},
	{
		skillComponent: CSSIcon,
		skillName: "CSS3"
	},
	{
		skillComponent: BootstrapIcon,
		skillName: "Bootstrap"
	},
	{
		skillComponent: TailwindIcon,
		skillName: "Tailwind"
	},
	{
		skillComponent: JavascriptIcon,
		skillName: "Javascript"
	},
	{
		skillComponent: ReactIcon,
		skillName: "React"
	},
	{
		skillComponent: NextJSIcon,
		skillName: "NextJS"
	},
	{
		skillComponent: ReduxIcon,
		skillName: "Redux"
	},
	{
		skillComponent: NodeJSIcon,
		skillName: "NodeJS"
	},
	{
		skillComponent: ExpressIcon,
		skillName: "ExpressJS"
	},
	{
		skillComponent: MongoDBIcon,
		skillName: "MongoDB"
	},
	{
		skillComponent: SassIcon,
		skillName: "SASS"
	},
	{
		skillComponent: GitIcon,
		skillName: "Git"
	},
]

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


				{/* ---------- Section skills ---------- */}
				<section id="skills" className="mt-14 mb-20 md:my-32">

					{/* Title */}
					<h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
						Skills
					</h2>

					{/* Skill list */}
					<div className="w-full grid grid-cols-3 gap-4 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6">
						{listSkill.map((skill, index) => {
							return renderSkillCard(skill, index)
						})}
					</div>
				</section>
				{/* ---------- End section skills ---------- */}


				{/* ---------- Section FAQs ---------- */}
				{/* <section id="faqs" className="mt-14 mb-20 md:my-32">

					<h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
						FAQs about Quang
					</h2>

					<Accordion type="single" collapsible className="w-full text-left">

						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="w-10/12 text-left text-lg md:text-xl">
									What are Quang's plans in a short-term and a long-term?
								</p>

							</AccordionTrigger>
							<AccordionContent className="text-base md:text-lg px-6 rounded-md shadow-md border border-gray-400">
								<p className="my-4">
									In the short term, my focus is on mastering React and Next.js. By building small React applications, I will gain practical experience and reinforce my knowledge. Additionally, I will explore Next.js and its features, including server-side rendering and routing.
								</p>
								<p className="">
									In the long term, I aim to become a full-stack developer capable of creating useful and beautiful websites. I will explore backend development using technologies like Node.js and Express.js, enabling me to build server-side functionality and API endpoints. Understanding database integration will be crucial, and I will delve into databases like MongoDB.
								</p>
							</AccordionContent>
						</AccordionItem>

					</Accordion>
				</section> */}
				{/* ---------- End section FAQs ---------- */}

				{/* ---------- Section Back to top ---------- */}
				<section id="backtotop" className="my-8">
					<BackToTop />
				</section>
				{/* ---------- End section Back to top ---------- */}

			</div >
		</main >
	)
}