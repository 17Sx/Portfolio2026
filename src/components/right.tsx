import { About } from './about';
import { BlurFadeIn } from './BlurFadeIn';
import { SectionBar } from './ui/SectionBar';
import { Stats } from './Stats';
import { Projects } from './Projects';
import { Cv } from './Cv';

export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-full overflow-y-auto scrollbar-hide">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-6/6 mt-30 pl-50 pr-50">
                <About />
                <BlurFadeIn
                    duration={1}
                    delay={0.7}
                >
                    <SectionBar />
                </BlurFadeIn>
                <Stats />
                <SectionBar />
                <Projects />
                <SectionBar />
                <Cv />
            </div>
        </div>
    )
}
