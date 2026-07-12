import React, { useEffect, useRef } from 'react'

export default function GlobalEffects() {
    const canvasRef = useRef(null)

    useEffect(() => {
        // Scroll Progress
        const progressBar = document.querySelector('.scroll-progress')
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            if (progressBar) progressBar.style.width = progress + '%'
        }
        window.addEventListener('scroll', handleScroll)

        // Custom Cursor
        const dot = document.querySelector('.cursor-dot')
        const outline = document.querySelector('.cursor-outline')
        let mouseX = 0, mouseY = 0, outX = 0, outY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            if (dot) {
                dot.style.left = mouseX + 'px'
                dot.style.top = mouseY + 'px'
            }
        }
        window.addEventListener('mousemove', handleMouseMove)

        let animFrameId
        const animateCursor = () => {
            outX += (mouseX - outX) * 0.15
            outY += (mouseY - outY) * 0.15
            if (outline) {
                outline.style.left = outX + 'px'
                outline.style.top = outY + 'px'
            }
            animFrameId = requestAnimationFrame(animateCursor)
        }
        animateCursor()

        // Hover states for cursor
        const addHover = () => outline?.classList.add('hovering')
        const removeHover = () => outline?.classList.remove('hovering')

        const attachHoverListeners = () => {
            document.querySelectorAll('a, button, .tech-card, .app-screen-card, .process-step, .faq-item summary, .app-card, .blog-card, .value-card, .nav-link').forEach(el => {
                el.addEventListener('mouseenter', addHover)
                el.addEventListener('mouseleave', removeHover)
            })
        }
        attachHoverListeners()
        const hoverInterval = setInterval(attachHoverListeners, 2000)

        // Ember Canvas
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let W, H, particles = []

        const resize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const makeParticle = () => ({
            x: Math.random() * W,
            y: H + Math.random() * 100,
            r: Math.random() * 1.5 + 0.3,
            vy: -(Math.random() * 0.4 + 0.2),
            vx: (Math.random() - 0.5) * 0.3,
            life: 0,
            maxLife: 300 + Math.random() * 200,
            hue: 20 + Math.random() * 30
        })

        for (let i = 0; i < 60; i++) {
            const p = makeParticle()
            p.y = Math.random() * H
            p.life = Math.random() * p.maxLife
            particles.push(p)
        }

        let canvasAnimId
        const tick = () => {
            ctx.clearRect(0, 0, W, H)
            particles.forEach((p, i) => {
                p.x += p.vx + Math.sin(p.life * 0.03) * 0.2
                p.y += p.vy
                p.life++
                const alpha = Math.max(0, 1 - p.life / p.maxLife) * 0.5
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
                grad.addColorStop(0, `rgba(255,${140 + p.hue * 2},66,${alpha})`)
                grad.addColorStop(0.4, `rgba(251,86,7,${alpha * 0.5})`)
                grad.addColorStop(1, `rgba(251,86,7,0)`)
                ctx.fillStyle = grad
                ctx.beginPath()
                ctx.arc(p.x, p.y, Math.max(0.1, p.r * 6), 0, Math.PI * 2)
                ctx.fill()
                if (p.life >= p.maxLife || p.y < -20) {
                    particles[i] = makeParticle()
                }
            })
            canvasAnimId = requestAnimationFrame(tick)
        }
        tick()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animFrameId)
            cancelAnimationFrame(canvasAnimId)
            clearInterval(hoverInterval)
        }
    }, [])

    return (
        <>
            <div className="scroll-progress"></div>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
            <div className="bg-ambient"></div>
            <div className="bg-noise"></div>
            <div className="bg-grid"></div>
            <canvas id="embers" ref={canvasRef}></canvas>
        </>
    )
}