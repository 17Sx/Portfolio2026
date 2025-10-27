import { useState, useRef, useMemo } from 'react'
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
import { useTranslations } from '../i18n/useTranslations'

interface Project {
    id: number
    title: string
    description: string
    image: string
    modalImage?: string
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
        modalImage: "/gif/altiora.gif",
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
        modalImage: "/gif/bkm.gif",
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
        modalImage: "/gif/yh.gif",
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
    },
    {
        id: 5,
        title: "First Portfolio - 2024",
        description: "This project showcases my first personal website portfolio, highlighting my skills and experiences as a developer and my first step to learn ThreeJS.",
        image: "/projects/portfolio24.png",
        demoLink: "https://17sx.github.io/Portfolio_2024/",
        modalImage: "/gif/portfolio24.gif",
        githubLink: "https://github.com/17Sx/Portfolio_2024",
        tech: ["Html", "Scss", "Three.js", "JavaScript"],
        isOpenSource: true,
        isDemo: true
    }
]

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const githubIconRef = useRef<GithubIconHandle>(null)
    const externalLinkIconRef = useRef<ExternalLinkIconHandle>(null)
    const lockIconRef = useRef<LockIconHandle>(null)
    const { t, language } = useTranslations()

    const projectsWithTranslations = useMemo(() => {
        const translations = t('projects.list') as { title: string; description: string }[]
        return projects.map((project, index) => ({
            ...project,
            title: translations[index].title,
            description: translations[index].description
        }))
    }, [language])

    return (
        <div id="projects" className='flex flex-col gap-6 w-full'>
            <h2 className='text-white/50 text-lg md:text-2xl font-light'>{t('projects.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 w-full">
                {projectsWithTranslations.map((project, idx) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`
                            relative overflow-hidden cursor-pointer group
                            col-span-1 h-64
                            ${idx === 0 ? 'md:col-span-5' : idx === 1 ? 'md:col-span-3' : idx === 2 ? 'md:col-span-4' : idx === 3 ? 'md:col-span-2' : 'md:col-span-2'}
                            border border-white/10 transition-all duration-300
                            hover:border-white/30
                        `}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${project.modalImage ? 'group-hover:opacity-0' : ''}`}
                        />
                        {project.modalImage && (
                            <img
                                src={project.modalImage}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-white text-xl font-light mb-2">{project.title}</h3>
                                <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent
                    showCloseButton={true}
                    className="max-w-4xl w-[90vw] md:w-full max-h-[90vh] overflow-y-auto bg-[#111111] border-none rounded-none"
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
                                            src={selectedProject.modalImage || selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-64 object-cover"
                                        />
                                    </CardContent>
                                </UICard>

                                <div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-white">{t('projects.technologies')}</h4>
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
                                                {t('projects.liveDemo')}
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
                                            {t('projects.demoUnavailable')}
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
                                                {t('projects.viewCode')}
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
                                            {t('projects.privateRepo')}
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