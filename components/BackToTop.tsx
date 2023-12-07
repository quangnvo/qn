"use client"

import { Button } from "@/components/ui/button"

const BackToTop = () => {

	// No need add any library for using scrollToTop function in this case 😗
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<section id="backtotop" className="my-8">
			<div className='flex justify-center items-center'>
				<Button id="backtotop" onClick={scrollToTop}>Back to top 👆</Button>
			</div>
		</section>
	)
}

export default BackToTop