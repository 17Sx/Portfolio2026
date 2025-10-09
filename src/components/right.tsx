import { BlurFadeIn } from './BlurFadeIn';


export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-2/3">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-4/5 mt-30">
                <BlurFadeIn
                duration={1}
                delay={0}
                >
                    <h1 className="text-6xl">Always grinding — 24/7,<br /> no breaks, no excuses.</h1>
                </BlurFadeIn>
                <BlurFadeIn
                duration={1}
                delay={0.2}
                >
                <div className='flex gap-4 mt-2'>
                    <img className='w-15 h-15 mt-1' src="./public/17sx.png" alt="17Sx" />
                    <p className='text-white/60 text-3xl'>I'm 17Sx, a developer who enjoys <br /> building performant interfaces.</p>
                </div>
                </BlurFadeIn>
            </div>
        </div>
    )
}
