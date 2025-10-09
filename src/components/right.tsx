import { About } from './about';


export function Right() {
    return (
        <div className="flex flex-col items-center h-screen w-2/3">
            <div className="flex flex-col gap-4 text-white text-2xl font-bold w-4/5 mt-30">
                <About />
            </div>
        </div>
    )
}
