'use client'

import { dotSpacing, glowSizeInPixel, glowSpreadInPixel } from '@/theme/consts'
import { useEffect } from 'react'

const size = 50
const Glower = () => {
  useEffect(() => {
    function mouseListener(this: Document, event: MouseEvent) {
      const x = event.clientX
      const y = event.clientY

      const glow = document.querySelector<HTMLElement>('.glow')
      if (glow) {
        glow.style.top = `${
          Math.round((y - glowSizeInPixel / 2) / dotSpacing) * dotSpacing - 5
        }px`
        glow.style.left = `${
          Math.round((x - glowSizeInPixel / 2) / dotSpacing) * dotSpacing - 5
        }px`
      }
    }

    document.addEventListener('mousemove', mouseListener)

    return () => {
      document.removeEventListener('mousemove', mouseListener)
    }
  }, [])

  return (
    <div
      className="glow"
      style={{
        width: `${glowSizeInPixel}px`,
        height: `${glowSizeInPixel}px`,
        boxShadow: `0 0  ${glowSpreadInPixel}px ${glowSpreadInPixel / 2}px`,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        background: 'red',
      }}
    ></div>
  )
}

export default Glower
