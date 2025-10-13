import { useState } from 'react'
import { Left } from './left'

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Bouton Burger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-6 left-6 z-50 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>

            {/* Menu Mobile */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar */}
                <div className={`absolute left-0 top-0 h-full w-64 bg-[#1e1e1e] border-r border-white/10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Left onLinkClick={() => setIsOpen(false)} isMobile={true} />
                </div>
            </div>
        </>
    )
}

