import React from 'react'

const MagicButton = ({
    title, icon, position, className
}: { title: string, icon: React.ReactNode, position: string, handleClick: () => void, className?: string }) => {
    return (
        <>
            <button className={`relative w-full flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none gap-2 ${className}`}>
                <div> {position === "left" && icon}</div>
                <p>{title}</p>
                <div> {position === "right" && icon}</div>

            </button>
        </>
    )
}

export default MagicButton