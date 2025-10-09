import { BlurFadeIn } from "./BlurFadeIn";
import { GithubIcon, TwitterIcon, LinkedInIcon, MailIcon } from "./ui/icons";

export function Left() {
    return (
        <div className="flex flex-col justify-between h-screen w-1/4 border-r border-white/10">
            <div className="ml-10 mt-60">
                <div className="flex flex-col gap-1 text-white text-2xl font-bold">
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
                        <a href="#about">17Sx</a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.3}
                    >
                        <a href="#projects">Projects</a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.4}
                    >
                        <a href="#contact">Contact</a>
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
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/80 transition-colors"
                        >
                            <LinkedInIcon size={20} />
                        </a>
                        <a
                            href="mailto:contact@17sx.com"
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
