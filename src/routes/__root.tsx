import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { BlurFadeIn } from '../components/BlurFadeIn'
import { Button } from '../components/ui/button'

function NotFound() {
  return (
    <div className="relative flex h-screen w-full bg-[#1e1e1e] items-center justify-center">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        <ShaderGradient
          type="waterPlane"
          animate="on"
          uSpeed={0.3}
          uStrength={2.5}
          uDensity={1.2}
          uFrequency={4}
          color1="#2a2a2a"
          color2="#3d3d3d"
          color3="#1e1e1e"
          brightness={0.9}
          grain="on"
          lightType="3d"
          cDistance={4}
          cPolarAngle={90}
          cAzimuthAngle={180}
          reflection={1}
        />
      </ShaderGradientCanvas>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <BlurFadeIn duration={1} delay={0}>
          <div className="flex items-baseline gap-4">
            <h1 className="text-8xl md:text-9xl font-light text-white/80">404</h1>
          </div>
        </BlurFadeIn>

        <BlurFadeIn duration={1} delay={0.2}>
          <h2 className="text-2xl md:text-4xl font-light text-white/70">
            Page not found
          </h2>
        </BlurFadeIn>

        <BlurFadeIn duration={1} delay={0.4}>
          <p className="text-lg md:text-xl text-white/50 max-w-md font-normal">
            This page doesn't exist or has been moved.
          </p>
        </BlurFadeIn>

        <BlurFadeIn duration={1} delay={0.6}>
          <Link to="/">
            <Button
              className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 text-base font-normal px-8 py-6"
            >
              Back to home
            </Button>
          </Link>
        </BlurFadeIn>

        <BlurFadeIn duration={1} delay={0.8}>
          <div className="flex gap-6 text-sm text-white/40 mt-4">
            <Link
              to="/"
              className="hover:text-white/70 transition-colors"
            >
              Projects
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/"
              className="hover:text-white/70 transition-colors"
            >
              CV
            </Link>
            <span className="text-white/20">|</span>
            <a
              href="mailto:noa.obringer@gmail.com"
              className="hover:text-white/70 transition-colors"
            >
              Contact
            </a>
          </div>
        </BlurFadeIn>
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-screen w-full bg-[#111111]">
      <Outlet />
    </div>
  ),
  notFoundComponent: NotFound,
})
