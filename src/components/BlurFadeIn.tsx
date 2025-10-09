import type { ReactNode } from 'react';

interface BlurFadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function BlurFadeIn({
    children,
    delay = 0,
    duration = 1,
    className = ''
}: BlurFadeInProps) {
    return (
        <div
            className={`blur-fade-in ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
        >
            {children}
        </div>
    );
}

