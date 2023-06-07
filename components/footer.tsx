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

								<Link href="https://github.com/quangnvo">
									<Button variant="ghost">
										<Github />
									</Button>
								</Link>

								<Link href="https://www.linkedin.com/in/quangnguyen0528/">
									<Button variant="ghost">
										<Linkedin />
									</Button>
								</Link>

								<Link href="https://twitter.com/quangvonguyen">
									<Button variant="ghost">
										<Twitter size={25} />
									</Button>
								</Link>
							</div>
						</div>

						<div className="text-center flex justify-center items-center ">
							<p>© 2023 Quang Nguyen. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
