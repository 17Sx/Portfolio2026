import { createFileRoute } from '@tanstack/react-router'
import { Left } from '../components/left'
import { Right } from '../components/right'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="relative flex h-screen w-full bg-[#1e1e1e]">
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
      <div className="relative z-10 flex w-full justify-between">
        <Left />
        <Right />
      </div>
    </div>
  )
}
