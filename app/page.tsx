import Intro from "@/components/Intro"
import About from "@/components/About"
import Skills from "@/components/Skills"
import BackToTop from "@/components/BackToTop"

export default function Home() {
	return (
		<main>
			<div className='container py-5'>
				<Intro />
				<About />
				<Skills />
				<BackToTop />
			</div >
		</main >
	)
}