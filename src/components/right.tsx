import { About } from './about';
import { BlurFadeIn } from './BlurFadeIn';
import { SectionBar } from './ui/SectionBar';
import { Stats } from './Stats';


export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-2/3 overflow-y-auto">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-4/5 mt-30 pb-20">
                <About />
                <BlurFadeIn
                    duration={1}
                    delay={0.7}
                >
                    <SectionBar />
                </BlurFadeIn>
                <Stats />
                <SectionBar />
            </div>
        </div>
    )
}
