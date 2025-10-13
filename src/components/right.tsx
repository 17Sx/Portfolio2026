import { About } from './about';
import { BlurFadeIn } from './BlurFadeIn';
import { SectionBar } from './ui/SectionBar';
import { Stats } from './Stats';
import { Projects } from './Projects';
import { Cv } from './Cv';
import { Footer } from './Footer';

export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-full overflow-y-auto scrollbar-hide">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-full px-6 md:px-50 mt-20 md:mt-30">
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
                <Footer />
            </div>
        </div>
    )
}
