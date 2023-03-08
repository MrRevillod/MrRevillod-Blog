import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export const CodeBox = ({ text, showImg }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset copied status after 2 seconds
    }

    showImg = showImg === '' || showImg === undefined || showImg === null ? true : showImg = false

    return (
        <div className="relative rounded-md bg-zinc-800 p-4 my-4">
            <div className="absolute top-3.5 right-3 cursor-pointer" onClick={handleCopy}>

                {showImg && (
                    <div className="max-w-full">
                        <Image
                            src="http://pillan.inf.uct.cl/~lrevillod/Blog/assets/icons/copiar_img.png"
                            alt="Copy to clipboard"
                            width={24}
                            height={24}
                        />
                    </div>
                )}
            </div>
            <pre className="text-gray-100 font-mono text-sm max-w-full overflow-x-auto">$ {text}</pre>
        </div>
    )
}
