import React from 'react'
import Image from 'next/image'

export const LargeImage = ({ imgRef, imgSrc, title }) => {
    return (
        <div className="pt-4 pb-12 w-full">
            <div className="flex flex-row md:flex-col gap-5 w-full">
                <a
                    href={imgRef}
                    className="bg-zinc-800 rounded-lg overflow-hidden w-full"
                    target='_blank'
                >
                    <Image
                        key={title}
                        alt="img"
                        className='w-full h-36 md:h-48 object-cover'
                        src={imgSrc}
                        width={1000}
                        height={1000}
                    />
                    {imgRef !== '' && (
                        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold w-full p-5 text-gray-300">
                            {title}
                        </h3>
                    )}
                </a>
            </div>
        </div>
    )
}

