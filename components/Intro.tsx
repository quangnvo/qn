import Link from "next/link"

const Intro = () => {
	return (
		<section className="relative flex h-[calc(100vh-72px)] items-center justify-center py-28 mt-0 md:mt-24 lg:mt-0">

			{/* Text */}
			<div className="relative -mt-14 animate__animated animate__fadeInLeft">
				<div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="currentColor" className="w-8 h-8 absolute top-4 right-14 rotate-12">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
					</svg>
				</div>

				<div className="z-10 flex flex-col items-center justify-between gap-5 p-8">
					<div className="flex flex-col items-center gap-2 text-center">

						{/* Title */}
						<h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
							<span className="mr-3">Hi, I&apos;m</span>
							<span className="text-yellow-300 font-outline">
								Ray
							</span>
						</h1>

						{/* Text */}
						<div className="text-lg md:text-2xl mt-5 animate__animated animate__fadeInLeft" style={{ lineHeight: '35px' }}>
							<p className='my-4 text-base md:text-xl'>
								I love designing and building websites with an elegant UX
							</p>
						</div>

						{/* Button projects */}
						<div className="relative mt-5 animate__animated animate__fadeInLeft group">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-400"></div>
							<Link href="/projects">
								<button className='relative text-base md:text-md  shadow-md font-semibold px-6 py-3 rounded-lg border border-gray-600 bg-light hover:bg-gray-200 dark:hover:bg-black bg-light-50 dark:bg-dark'>
									View the websites that I&apos;ve built 👨‍💻
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Intro