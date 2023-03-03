import React from 'react'
import Image from 'next/image'

import myImg from '../../public/MyDesk4.jpg'
import { SectionTitle } from '../SectionTitle'

export const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
            <div className="w-full md:w-6/12">
                <SectionTitle>About Me</SectionTitle>
                <p className="text-md text-gray-300">
                    I'm a second year student in civil engineering in computer science from the Catholic University of Temuco (UCT).
                    I'm enthusiastic about web development and every day I strive to learn new technologies as well as improve the ones I already master.
                </p>
                <a
                    href="mailto:lrevillod2022@alu.uct.cl"
                    className="block mt-3 text-md md:text-lg text-gray-300 underline decoration-1 hover:text-indigo-500 "
                >
                    lrevillod2022@alu.uct.cl
                </a>
            </div>

            <Image src={myImg} alt='About image' className="w-full md:w-6/12 rounded-lg object-cover" />
        </div>
    )
}
