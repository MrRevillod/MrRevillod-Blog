import React from 'react'

export const Footer = () => {
	return (
		<div className="py-5 bg-zinc-800 text-center text-gray-300 rounded-t-lg">
			<a
				href="mailto:lrevillod2022@alu.uct.cl"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				lrevillod2022@alu.uct.cl
			</a>
			<p className="text-xs mt-2 text-gray-300">
				© MrRevillod {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	)
}

