import React from 'react'

import { SkillsData } from '../../data/SkillsData'
import { SectionTitle } from '../SectionTitle'
import { SkillCard } from './SkillCard'

export const Skills = () => {

    return (
        <div className="py-10">

            <SectionTitle>Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                {SkillsData.map(({ title, img, description }) => (

                    <SkillCard
                        key={title}
                        title={title}
                        icon={img}
                        description={description}
                    />

                ))}

            </div>

        </div>
    )
}