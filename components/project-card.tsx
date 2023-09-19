import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
    title: string,
    description?: string,
    techStack: string[],
    link: string,
    featureImageLink: string
}

const techStackRender = (techStack: string[]) => {
    return techStack.map((tech, index) => {
        return (
            <span key={index} className='font-semibold border border-blue-gray-100 px-3 py-2 rounded-sm mr-3'>
                {tech}
            </span>
        )
    })
}

export default function createProjectCard({ title, description, techStack, link, featureImageLink }: ProjectProps) {

    return (
        <div
            className="w-full p-6 my-10 rounded-xl border border-gray-300 shadow-sm flex items-center"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 ">

                {/* Project Information */}
                <div className="col-span-6 flex justify-center items-center ">
                    <div className="w-full md:w-11/12">

                        {/* Title */}
                        <h3 className="font-semibold text-xl md:text-3xl mb-0">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {description}
                        </p>

                        {/* Tech */}
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {techStackRender(techStack)}

                        </p>

                        {/* Button view website */}
                        <div className='mb-5 mt-7'>
                            <a href={link} target="_blank" rel="noopener noreferrer" >
                                <Button className='flex justify-center items-center gap-2'>
                                    <span>View website</span>
                                    <ExternalLink className='dark:text-blue-gray-800' />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Feature Image */}
                <div className="col-span-6 mt-4 md:mt-0">
                    <div className='w-full flex justify-end items-center border border-gray-500 rounded-lg overflow-hidden'>
                        <Image
                            src={featureImageLink}
                            alt='project picture'
                            width={1000}
                            height={500}
                            className='object-fill'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}