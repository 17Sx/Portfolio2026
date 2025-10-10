import { BlurFadeIn } from "./BlurFadeIn";
import GitHubCalendar from "react-github-calendar";
import { GitHubStreaks } from "./GitHubStreaks";

export function Stats() {
    const username = "17Sx";

    return (
        <div id="stats" className='flex flex-col gap-6'>
            <BlurFadeIn duration={1} delay={0.8}>
                <div className="flex flex-col gap-3">
                    <blockquote className="text-white/40 text-lg font-light italic border-l-2 border-white/20 pl-4">
                        ❝Always grinding — 24/7, no breaks, no excuses.❞
                    </blockquote>
                </div>
            </BlurFadeIn>

            <BlurFadeIn duration={1} delay={0.9}>
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden bg-transparent">
                        <GitHubCalendar
                            username={username}
                            colorScheme="dark"
                            theme={{
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            blockSize={14}
                            fontSize={14}
                        />
                    </div>
                    <div className="flex items-center">
                        <GitHubStreaks username={username} />
                    </div>
                </div>
            </BlurFadeIn>
        </div>
    )
}