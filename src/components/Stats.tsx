import { BlurFadeIn } from "./BlurFadeIn";
import GitHubCalendar from "react-github-calendar";
import { GitHubStreaks } from "./GitHubStreaks";

export function Stats() {
    const username = "17Sx";

    return (
        <div id="stats" className='flex flex-col gap-6'>
            <BlurFadeIn duration={1} delay={0.8}>
                <h2 className="text-white/50 text-2xl font-light">Activity</h2>
            </BlurFadeIn>

            <BlurFadeIn duration={1} delay={0.9}>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <GitHubStreaks username={username} />
                    </div>
                    <div className="overflow-hidden bg-transparent">
                        <GitHubCalendar
                            username={username}
                            colorScheme="dark"
                            theme={{
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            blockSize={12}
                            fontSize={14}
                        />
                    </div>
                </div>
            </BlurFadeIn>
        </div>
    )
}