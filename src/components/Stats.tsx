import { BlurFadeIn } from "./BlurFadeIn";
import GitHubCalendar from "react-github-calendar";
import { GitHubStreaks } from "./GitHubStreaks";
import { useState, useEffect } from "react";

export function Stats() {
    const username = "17Sx";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id="stats" className='flex flex-col gap-6'>
            <BlurFadeIn duration={1} delay={0.8}>
                <div className="flex flex-col gap-3">
                    <blockquote className="text-white/40 text-sm md:text-lg font-light italic border-l-2 border-white/20 pl-4">
                        ❝Always grinding — 24/7, no breaks, no excuses.❞
                    </blockquote>
                </div>
            </BlurFadeIn>

            <BlurFadeIn duration={1} delay={0.9}>
                <div className="flex flex-col gap-4">
                    <div className="overflow-x-hidden bg-transparent -mx-8 px-8 md:mx-0 md:px-0">
                        <div className="min-w-max md:min-w-0">
                            <GitHubCalendar
                                username={username}
                                colorScheme="dark"
                                theme={{
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                                blockSize={isMobile ? 6 : 14}
                                fontSize={isMobile ? 12 : 14}
                            />
                        </div>
                    </div>
                    <div className="flex items-center overflow-x-auto -mx-8 px-8 md:mx-0 md:px-0">
                        <GitHubStreaks username={username} />
                    </div>
                </div>
            </BlurFadeIn>
        </div>
    )
}