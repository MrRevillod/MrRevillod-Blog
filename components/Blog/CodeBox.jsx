import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const useCodeBoxImageClass = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1048

    return isMobile ? '' : 'md:w-6 md:h-6'
}

export const CodeBox = ({ text }) => {
    const [copied, setCopied] = useState(false)
    const imageClass = useCodeBoxImageClass()

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset copied status after 2 seconds
    }

    return (
        <div className="relative rounded-md bg-zinc-800 p-4 my-4">
            <div className="absolute top-3.5 right-3 cursor-pointer" onClick={handleCopy}>
                <div className="max-w-full">
                    <Image
                        src="http://pillan.inf.uct.cl/~lrevillod/Blog/assets/icons/copiar_img.png"
                        alt="Copy to clipboard"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <pre className="text-gray-100 font-mono text-sm max-w-full overflow-x-auto">$ {text}</pre>
        </div>
    )
}
