import React from 'react'
import Image from 'next/image'

export const ReferenceCard = ({ title, author, urlRef, imgUrl }) => {
    return (
        <a
            href={urlRef}
            className="bg-zinc-800 rounded-lg overflow-hidden"
            target='_blank'
        >
            <Image
                alt="post"
                className="w-full h-36 md:h-48 object-cover"
                src={imgUrl}
                width={1000}
                height={1000}
            />

            <div className="w-full p-5 text-gray-300 ">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {author}
                </p>
            </div>
        </a>
    )
}

