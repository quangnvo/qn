"use client"

import { Button } from "@/components/ui/button"

const BackToTop = () => {

	// No need add any library for using scrollToTop function in this case 😗
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<section id="backtotop" className="my-8">
			<div className='flex justify-end items-center'>
				<p
					id="backtotop"
					onClick={scrollToTop}
					className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition duration-300"
				>
					Back to top 👆
				</p>
			</div>
		</section>
	)
}

export default BackToTop