import React from 'react'
import Image from 'next/image'

export const SkillCard = ({ title, icon, description }) => {
	return (
		<div className="bg-zinc-700 hover:bg-zinc-600 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-300 w-6 h-6 mb-3">
				<Image src={icon} alt="dev-skill" width={25} height={25} />
			</div>
			<h1 className="font-semibold text-lg text-gray-200 mb-1">
				{title}
			</h1>
			<p className="text-md text-gray-300">{description}</p>
		</div>
	)
}