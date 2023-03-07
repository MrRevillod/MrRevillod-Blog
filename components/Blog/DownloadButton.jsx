import React from 'react'
import Image from 'next/image'

export const DownloadButton = ({ downloadLink, fileName, imgSrc }) => {
    return (
        <a href={downloadLink} target='_blank'>
            <div className='flex items-center space-x-2 p-2 bg-zinc-800 rounded-md w-1/2 my-4'>
                <div className='flex-shrink-0'>
                    <Image
                        key={fileName}
                        alt="img"
                        className='w-10 h-10 object-cover rounded-md'
                        src={imgSrc}
                        width={100}
                        height={100}
                    />
                </div>
                <div className='text-sm font-medium text-gray-200'>
                    <span>{fileName}</span>
                </div>
            </div>
        </a>
    )
}