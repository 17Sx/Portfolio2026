import { BlurFadeIn } from './BlurFadeIn';
import { LogoLoop } from './LogoLoop';


export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-2/3">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-4/5 mt-30">
                <BlurFadeIn
                    duration={1}
                    delay={0}
                >
                    <h1 className="text-6xl font-light">Always grinding — 24/7,<br /> no breaks, no excuses.</h1>
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
                <BlurFadeIn
                    duration={1}
                    delay={0.4}
                >
                    <p className='text-white/40 text-2xl mt-5'>Passionate about entrepreneurship and coding, I try to combine both. I want to give myself the means to make a living from what I love.</p>
                </BlurFadeIn>
                <BlurFadeIn
                    duration={1}
                    delay={0.6}
                >
                    <p className='text-white/40 text-2xl mt-5'>Here are some of the technologies I work with.</p>
                    <LogoLoop
                        logos={[
                            { src: "/logos/react.svg", alt: "React" },
                            { src: "/logos/ts.svg", alt: "TypeScript" },
                            { src: "/logos/next.svg", alt: "Next.js" },
                            { src: "/logos/tailwind-css-svgrepo-com.svg", alt: "Tailwind CSS" },
                            { src: "/logos/node-16-svgrepo-com.svg", alt: "Node.js" },
                            { src: "/logos/vite.svg", alt: "Vite" },
                            { src: "/logos/prisma-svgrepo-com.svg", alt: "Prisma" },
                            { src: "/logos/postgresql-svgrepo-com.svg", alt: "PostgreSQL" },
                            { src: "/logos/stripe-svgrepo-com.svg", alt: "Stripe" },
                        ]}
                        speed={60}
                        direction="left"
                        width="100%"
                        logoHeight={48}
                        gap={32}
                        pauseOnHover={true}
                        fadeOut={false}
                        scaleOnHover={false}
                        ariaLabel="Technologies I work with"
                        className="mt-5 opacity-80"
                    />
                </BlurFadeIn>
            </div>
        </div>
    )
}
