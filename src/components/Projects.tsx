import CardSwap, { Card } from './CardSwap'
import { useState, useRef } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card as UICard, CardContent } from './ui/card'
import { ExternalLinkIcon, GithubIcon, LockIcon, type GithubIconHandle, type ExternalLinkIconHandle, type LockIconHandle } from './ui/icons/index'

interface Project {
    id: number
    title: string
    description: string
    image: string
    demoLink: string
    githubLink: string
    tech: string[]
    isOpenSource?: boolean
    isDemo?: boolean
}

const projects: Project[] = [
    {
        id: 1,
        title: "Altiora - In Development",
        description: "SaaS platform empowering users to optimize trading, build better habits, achieve goals, and master time management—all in one place.",
        image: "/projects/altiora.png",
        demoLink: "https://altiora.pro",
        githubLink: "",
        tech: [
            "Next.js",
            "Drizzle ORM",
            "Stripe",
            "TRPC",
            "Better Auth",
            "Neon Postgres"
        ],
        isOpenSource: false,
        isDemo: true
    },
    {
        id: 2,
        title: "BKM Poker - 2025",
        description: "SaaS platform for poker players to manage their entire bankroll efficiently.",
        image: "/projects/bkm.png",
        demoLink: "https://bkm-nine.vercel.app/",
        githubLink: "https://github.com/17Sx/BKM-Poker",
        tech: ["React",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Supabase"
        ],
        isOpenSource: true,
        isDemo: true
    },
    {
        id: 3,
        title: "YH Trading - 2025",
        description: "A trading platform for traders to manage their entire trades with tracker and statistics.",
        image: "/projects/yhtrading.png",
        demoLink: "https://yhtrading.vercel.app",
        githubLink: "https://github.com/17Sx/YH-Trading",
        tech: ["TypeScript",
            "Next.js",
            "TailwindCSS",
            "Supabase"
        ],
        isOpenSource: true,
        isDemo: true

    },
    {
        id: 4,
        title: "TodoList - 2024",
        description: "A basic todo list app built with JS.",
        image: "/projects/todo.png",
        demoLink: "",
        githubLink: "https://github.com/17Sx/ToDoList_IIMA2/",
        tech: ["TypeScript",
            "JavaScript",
            "CSS",
            "Supabase"
        ],
        isOpenSource: true,
        isDemo: false
    }
]

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const githubIconRef = useRef<GithubIconHandle>(null)
    const externalLinkIconRef = useRef<ExternalLinkIconHandle>(null)
    const lockIconRef = useRef<LockIconHandle>(null)

    return (
        <div id="projects" className='flex flex-col gap-4 w-full'>
            <h2 className='text-white/50 text-2xl font-light'>Projects</h2>

            <div className="flex gap-12 justify-between w-full">
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <h3 className="text-white text-lg font-semibold">{projects[currentProjectIndex].title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                        {projects[currentProjectIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {projects[currentProjectIndex].tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-1.5 py-0.5 bg-white/10 text-white/80 text-xs rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ height: '500px', position: 'relative', width: '700px' }}>
                    <CardSwap
                        width={700}
                        height={400}
                        cardDistance={60}
                        verticalDistance={70}
                        delay={3000}
                        pauseOnHover={true}
                        onCardClick={(idx) => {
                            setSelectedProject(projects[idx])
                        }}
                        onOrderChange={(frontIndex) => {
                            setCurrentProjectIndex(frontIndex)
                        }}
                    >
                        {projects.map((project) => (
                            <Card key={project.id} className="cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover border border-black"
                                />
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>

            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent
                    showCloseButton={true}
                    className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#111111] border-none rounded-none"
                >
                    {selectedProject && (
                        <>
                            <DialogHeader className="space-y-4">
                                <DialogTitle className="text-2xl font-bold text-white">
                                    {selectedProject.title}
                                </DialogTitle>
                                <DialogDescription className="text-white/70">
                                    {selectedProject.description}
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                                <UICard className="bg-transparent border-none rounded-none">
                                    <CardContent className="p-0">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-64 object-cover"
                                        />
                                    </CardContent>
                                </UICard>

                                <div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-white">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className="bg-white/10 text-white/90 hover:bg-white/2"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    {selectedProject.isDemo ? (
                                        <Button
                                            asChild
                                            className="bg-white text-black hover:bg-white/90"
                                            onMouseEnter={() => externalLinkIconRef.current?.startAnimation()}
                                            onMouseLeave={() => externalLinkIconRef.current?.stopAnimation()}
                                        >
                                            <a
                                                href={selectedProject.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                                            >
                                                <ExternalLinkIcon ref={externalLinkIconRef} size={16} />
                                                Live Demo
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="secondary"
                                            disabled
                                            className="bg-white/20 cursor-not-allowed text-black"
                                            onMouseEnter={() => lockIconRef.current?.startAnimation()}
                                            onMouseLeave={() => lockIconRef.current?.stopAnimation()}
                                        >
                                            <LockIcon ref={lockIconRef} size={16} className="mr-2" />
                                            Demo Unavailable
                                        </Button>
                                    )}

                                    {selectedProject.isOpenSource ? (
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-white/20 text-black hover:scale-105 transition-all duration-300"
                                            onMouseEnter={() => githubIconRef.current?.startAnimation()}
                                            onMouseLeave={() => githubIconRef.current?.stopAnimation()}
                                        >
                                            <a
                                                href={selectedProject.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <GithubIcon ref={githubIconRef} size={16} />
                                                View Code
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            disabled
                                            className="cursor-not-allowed text-black"
                                            onMouseEnter={() => lockIconRef.current?.startAnimation()}
                                            onMouseLeave={() => lockIconRef.current?.stopAnimation()}
                                        >
                                            <LockIcon ref={lockIconRef} size={16} className="mr-2" />
                                            Private Repository
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}