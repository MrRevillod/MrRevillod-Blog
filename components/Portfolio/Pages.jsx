import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SectionTitle } from '../SectionTitle'
import { PagesData } from '@/data/PagesData'

export const PagesCard = ({ title, imgUrl, pageUrl, targetLink }) => {
    return (
        <Link
            href={pageUrl}
            target={targetLink}
            rel="noreferrer"
            className="bg-zinc-800 rounded-lg overflow-hidden"
        >
            <Image
                src={imgUrl}
                alt="work"
                className="w-full h-36 md:h-48 object-cover"
                width={1000}
                height={1000}
            />

            <div className="w-full p-5 text-gray-300 ">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
            </div>
        </Link>
    )
}

export const Pages = () => {
    return (
        <div className="py-12">

            <SectionTitle id="works">Pages</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {PagesData.map((page) => (
                    <PagesCard
                        key={page.title}
                        imgUrl={page.imgUrl}
                        title={page.title}
                        pageUrl={page.pageUrl}
                        targetLink={page.targetLink}
                    />
                ))}
            </div>

        </div>
    )
}
