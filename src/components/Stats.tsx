import { BlurFadeIn } from "./BlurFadeIn";

export function Stats() {
    const username = "17Sx";

    return (
        <div id="stats" className='flex flex-col gap-6'>
            <BlurFadeIn duration={1} delay={0.8}>
                <h2 className="text-white/50 text-2xl font-light">My Activity</h2>
            </BlurFadeIn>

            <BlurFadeIn duration={1} delay={0.9}>
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden bg-transparent p-4">
                        <img
                            src={`https://ghchart.rshah.org/374151/${username}`}
                            alt="GitHub Contribution Calendar"  
                            className="w-full"
                        />
                    </div>
                </div>
            </BlurFadeIn>
        </div>
    )
}