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
								<p className='my-4'>
									Front-end developer
								</p>
								<p className='my-4 text-base md:text-xl'>
									I love designing and building websites with an elegant UX
								</p>
							</div>

							{/* Button projects */}
							<Link href="/projects">
								<button className='mt-5 text-base md:text-md animate__animated animate__fadeInLeft shadow-md font-semibold px-6 py-3 rounded-lg border border-gray-600 bg-light hover:bg-gray-200'>
									View my projects
								</button>
							</Link>


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
							<div className="text-base md:text-lg mt-5 md:w-11/12" style={{ lineHeight: '35px' }}>
								<p className='my-4 text-justify'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
							</div>
						</div>
					</div>


					<div className="col-span-5 flex items-center justify-start">
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
							<AccordionTrigger className="text-left">What are Quang's plans in a short-term and a long-term?</AccordionTrigger>
							<AccordionContent>
								aaaaaa
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger>How old is Quang?</AccordionTrigger>
							<AccordionContent>
								bbbb
							</AccordionContent>
						</AccordionItem>

					</Accordion>
				</section>
				{/* ---------- End section FAQs ---------- */}
			</div>
		</main>
	)
}