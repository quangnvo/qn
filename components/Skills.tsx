import React from 'react'

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


const Skills = () => {

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
        <>
            {/* Title */}
            <h2 className="text-center md:text-left scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-10">
                Skills
            </h2>

            {/* Skill list */}
            <div className="w-full grid grid-cols-3 gap-4 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6">
                {listSkill.map((skill, index) => {
                    return renderSkillCard(skill, index)
                })}
            </div>
        </>
    )
}

export default Skills