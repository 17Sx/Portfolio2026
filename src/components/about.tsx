import { BlurFadeIn } from "./BlurFadeIn";
import { LogoLoop } from "./LogoLoop";
import { useTranslations } from "../i18n/useTranslations";

export function About() {
    const { t } = useTranslations();

    return (
        <div id="about" className='flex flex-col gap-4'>
            <BlurFadeIn
                duration={1}
                delay={0}
            >
                <div className='flex gap-4 mt-2'>
                    <img className='w-12 h-12 md:w-20 md:h-20 mt-2' src="/17sx.png" alt="17Sx" />
                    <h1 className='text-white/80 text-3xl md:text-5xl font-light'>{t('about.title')}</h1>
                </div>
            </BlurFadeIn>
            <BlurFadeIn
                duration={1}
                delay={0.4}
            >
                <p className='text-white/50 text-lg md:text-2xl mt-2 font-medium'>{t('about.subtitle')}</p>
            </BlurFadeIn>
            <BlurFadeIn
                duration={1}
                delay={0.6}
            >
                <p className='text-white/70 text-lg md:text-2xl mt-5 font-light'>{t('about.technologies')}</p>
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
                    speed={40}
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
    )
}