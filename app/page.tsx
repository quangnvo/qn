import Link from "next/link"
import Image from "next/image"
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
		<main className="overflow-hidden">
			<div className='container py-5'>

				{/* ---------- Section intro ---------- */}
				<section className="relative flex h-[calc(100vh-72px)] items-center justify-center py-28">

					{/* <div className="absolute inset-0 z-0">
						<div className="absolute left-1/4 overflow-visible">
							<div className="animate-pulse-slower absolute h-[460px] w-[460px] -translate-x-1/4 rounded-full bg-teal-50/60 mix-blend-multiply blur-3xl filter dark:bg-teal-800/10" />
						</div>
						<div className="absolute left-3/4 overflow-visible">
							<div className="animate-pulse-slower absolute top-20 left-3/4 h-[612px] w-[612px] -translate-x-2/3 rounded-full bg-indigo-100/40 mix-blend-multiply blur-3xl filter dark:bg-indigo-900/20" />
						</div>
					</div> */}

					{/* Background grid */}
					{/* <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
						<svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<pattern id="grid-pattern" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
									<path d="M0 32V.5H32" fill="none" stroke="currentColor" /></pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#grid-pattern)" />
						</svg>
					</div> */}


					{/* Text */}
					<div className="relative z-10 -mt-14 flex flex-col items-center justify-between gap-5">
						<div className="flex flex-col items-center gap-2 text-center">
							{/* Title */}
							<h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-7xl animate__animated animate__fadeInLeft">
								<span className="mr-3">Hi, I'm</span>
								<span className="text-yellow-300 font-outline">
									Quang
								</span>
							</h1>

							{/* Text */}
							<div className="text-lg md:text-2xl mt-5 animate__animated animate__fadeInLeft" style={{ lineHeight: '35px' }}>
								<p className='my-4 font-semibold'>
									Front-end developer
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
										View my projects
									</button>
								</Link>
							</div>

						</div>
					</div>
				</section>
				{/* ---------- End section intro ---------- */}

				{/* ---------- Section about ---------- */}
				<section id='about' className="grid grid-cols-1 xl:grid-cols-12 mt-14 mb-20 md:my-32">

					<div className="col-span-7 flex items-center justify-start">
						<div className="w-full text-center xl:text-left">
							{/* Title */}
							<h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
								About me
							</h2>
							{/* Text */}
							<div className="text-base md:text-lg mt-5 lg:w-11/12" style={{ lineHeight: '35px' }}>
								<p className='my-4'>
									Hey there! I'm Quang, a passionate learner currently embarking on an exciting career transition from biotechnology to front-end development. With a love for coding, I am immersing myself in the world of web development, particularly focusing on front-end technologies like React and Next.js. As I dive deeper into front-end development, I am captivated by the ability to bring designs to life, create intuitive user interfaces, and craft engaging web experiences.
								</p>

								{/* <p className='my-4'>
									Through my <a href="/blogs"><Button variant="default">Blogs</Button></a>, I aim to share my journey of transitioning from biotechnology to front-end development. Whether you're a fellow learner or considering a career change like mine, my blog will provide valuable information and practical advice to help you kick-start your own journey in front-end development. Together, we'll explore the fundamentals, tackle challenges, and celebrate milestones as we grow as developers.
								</p> */}
							</div>
						</div>
					</div>


					<div className=" col-span-5 flex items-center justify-start">
						<Image
							src="/images/profile-picture.png"
							alt='profile picture'
							width={500}
							height={500}
						/>
					</div>

				</section>
				{/* ---------- End section about */}


				{/* ---------- Section skills ---------- */}
				<section id="skills" className="mt-14 mb-20 md:my-32">

					{/* Title */}
					<h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
						Skills
					</h2>

					{/* Skill list */}
					<div className="w-full grid grid-cols-3 gap-4 md:grid-cols-6">
						{listSkill.map((skill, index) => {
							return renderSkillCard(skill, index)
						})}
					</div>
				</section>
				{/* ---------- End section skills ---------- */}


				{/* ---------- Section FAQs ---------- */}
				<section id="faqs" className="mt-14 mb-20 md:my-32">

					{/* Title */}
					<h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
						FAQs about Quang
					</h2>

					{/* FAQs */}
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
									In the long term, I aim to become a full-stack developer capable of creating useful and beautiful websites. I will explore backend development using technologies like Node.js and Express.js, enabling me to build server-side functionality and API endpoints. Understanding database integration will be crucial, and I will delve into databases like MongoDB. Additionally, I will continuously learn and explore advanced concepts in React, authentication and authorization, web performance optimization, and deployment practices to ensure that I can develop robust and scalable applications.
								</p>
							</AccordionContent>
						</AccordionItem>

					</Accordion>
				</section>
				{/* ---------- End section FAQs ---------- */}
			</div >
		</main >
	)
}