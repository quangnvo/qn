import React from 'react'
import Image from "next/image"

const About = () => {
	return (
		<section id='about' className="grid grid-cols-1 lg:grid-cols-12 mt-14 mb-20 md:my-32">
			<div className="col-span-7 flex items-center justify-start">
				<div className="w-full text-center md:text-left ">

					{/* Title */}
					<h2 className=" scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
						About me
					</h2>

					{/* Text */}
					<div className="text-base md:text-lg mt-5 lg:w-11/12" style={{ lineHeight: '35px' }}>
						<p className='my-4'>
							Hey there 👋!
						</p>
						<p className='my-4'>
							I'm Ray, a passionate learner currently embarking on an exciting career transition from biotechnology to web development, particularly focusing on React and Next.js.
						</p>
						<p className='my-4'>
							As I dive deeper into front-end development, I am captivated by the ability to bring designs to life, create intuitive user interfaces, and craft engaging web experiences.
						</p>
					</div>
				</div>
			</div>


			<div className=" col-span-5 flex items-center justify-center">
				<Image
					src="/images/profile-picture.png"
					alt='profile picture'
					width={500}
					height={500}
				/>
			</div>
		</section>
	)
}

export default About