import Link from "next/link"
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "./ui/button";
import Logo from "./logo";


export default function Footer() {
	return (
		<footer>
			<div className="py-1 max-w-full">
				<div className="container mx-auto py-7 border-t-2 border-gray-500">
					<div>
						<div className="flex flex-col justify-center items-center md:justify-between md:flex-row">

							{/* Left side */}
							<div className="flex flex-col items-center md:items-start mb-10 md:mb-0">

								{/* Logo */}
								<Logo />
							</div>

							{/* Right side */}
							<div className="flex mb-10 md:mb-0">

								<a href="https://github.com/quangnvo" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Github />
									</Button>
								</a>

								<a href="https://www.linkedin.com/in/quangnguyen0528/" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Linkedin />
									</Button>
								</a>

								<a href="https://twitter.com/quangvonguyen" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Twitter size={25} />
									</Button>
								</a>
							</div>
						</div>

						<div className="text-center flex justify-center items-center ">
							<p>© 2024 Quang Nguyen. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
