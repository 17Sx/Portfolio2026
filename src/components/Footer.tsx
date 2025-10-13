export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 mt-10 py-8">
            <div className="flex flex-col items-center gap-2">
                <p className="text-white/30 text-xs">
                    © {new Date().getFullYear()} 17Sx. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

