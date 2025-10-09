import { BlurFadeIn } from "./BlurFadeIn";

export function Left() {
    return (
        <div className="flex flex-col h-screen w-1/4 border-r border-white/10">
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
                        <a href="">17Sx</a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.3}
                    >
                        <a href="">Projects</a>
                    </BlurFadeIn>
                    <BlurFadeIn
                        duration={1}
                        delay={0.4}
                    >
                        <a href="">Contact</a>
                    </BlurFadeIn>

                </div>
            </div>
        </div>
    )
}
