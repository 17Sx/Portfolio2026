import { BlurFadeIn } from "./BlurFadeIn";
import { GithubIcon, TwitterIcon, LinkedInIcon, MailIcon } from "./ui/icons";
import { useEffect, useState } from "react";

interface LeftProps {
    onLinkClick?: () => void;
    isMobile?: boolean;
}

export function Left({ onLinkClick, isMobile = false }: LeftProps = { isMobile: false }) {
    const [activeSection, setActiveSection] = useState<string>('about');

    useEffect(() => {
        const sections = ['about', 'projects', 'cv'];
        let isBottom = false;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isBottom) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-100px 0px -50% 0px'
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        const handleScroll = () => {
            const scrollContainer = document.querySelector('.overflow-y-auto');
            if (scrollContainer) {
                const wasAtBottom = isBottom;
                isBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + 100;

                if (isBottom) {
                    setActiveSection('cv');
                } else if (wasAtBottom && !isBottom) {
                    const projectsElement = document.getElementById('projects');
                    const aboutElement = document.getElementById('about');

                    if (projectsElement) {
                        const container = scrollContainer.getBoundingClientRect();
                        const rect = projectsElement.getBoundingClientRect();
                        if (rect.top >= container.top && rect.top < container.top + container.height * 0.5) {
                            setActiveSection('projects');
                            return;
                        }
                    }
                    if (aboutElement) {
                        const container = scrollContainer.getBoundingClientRect();
                        const rect = aboutElement.getBoundingClientRect();
                        if (rect.top >= container.top && rect.top < container.top + container.height * 0.5) {
                            setActiveSection('about');
                        }
                    }
                }
            }
        };

        const scrollContainer = document.querySelector('.overflow-y-auto');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className={`flex flex-col justify-between h-screen w-full ${isMobile ? '' : 'hidden md:flex md:w-1/6 border-r border-white/10'}`}>
            <div className="ml-10 mt-20 md:mt-60">
                <div className="flex flex-col gap-1 text-white/80 text-2xl font-bold">
                    <BlurFadeIn
                        duration={1}
                        delay={0}
                    >
                        <img className="w-5 h-5" src="/Logo.png" alt="17Sx" />
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.2}
                    >
                        <a
                            href="#about"
                            onClick={onLinkClick}
                            className={`transition-all duration-300 ${activeSection === 'about'
                                ? 'font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                                : 'font-normal text-white/60 hover:text-white/80'
                                }`}
                        >
                            Noa.O
                        </a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.3}
                    >
                        <a
                            href="#projects"
                            onClick={onLinkClick}
                            className={`transition-all duration-300 ${activeSection === 'projects'
                                ? 'font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                                : 'font-normal text-white/60 hover:text-white/80'
                                }`}
                        >
                            Projects
                        </a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.4}
                    >
                        <a
                            href="#cv"
                            onClick={onLinkClick}
                            className={`transition-all duration-300 ${activeSection === 'cv'
                                ? 'font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                                : 'font-normal text-white/60 hover:text-white/80'
                                }`}
                        >
                            CV
                        </a>
                    </BlurFadeIn>
                </div>
            </div>

            <div className="ml-10 mb-10">
                <BlurFadeIn
                    duration={1}
                    delay={0.6}
                >
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/17Sx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/80 transition-colors"
                        >
                            <GithubIcon size={20} />
                        </a>
                        <a
                            href="https://twitter.com/SxSad11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/80 transition-colors"
                        >
                            <TwitterIcon size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/noa-obringer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/80 transition-colors"
                        >
                            <LinkedInIcon size={20} />
                        </a>
                        <a
                            href="mailto:noa.obringer@gmail.com"
                            className="text-white/40 hover:text-white/80 transition-colors"
                        >
                            <MailIcon size={20} />
                        </a>
                    </div>
                </BlurFadeIn>
            </div>
        </div>
    )
}
