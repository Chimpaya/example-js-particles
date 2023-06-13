import { dotSize, dotSpacing, glowSizeInDots } from '@/theme/consts'
import Glower from './glower'
import Particles from 'react-tsparticles'
import { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import ParticlesBackground from './particles-background'

const style = {
  backgroundImage: `radial-gradient(transparent 1%, #fff 1px)`,
  backgroundPositionX: `${dotSpacing / 2}px`,
  backgroundPositionY: `${dotSpacing / 2}px`,
  backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
  zIndex: 110,
}

const Desktop = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ParticlesBackground />
    </>
  )
}

export default Desktop
