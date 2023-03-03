import React from 'react'
import Head from 'next/head'

import { PageTitle } from '@/components/PageTitle'
import { About } from '@/components/Portfolio/About'
import { Skills } from '@/components/Portfolio/Skills'

import { Pages } from '@/components/Portfolio/Pages'
import { Footer } from '@/components/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>Luciano Revillod</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className='min-h-screen font-inter bg-zinc-900'>
				<div className="max-w-5xl w-11/12 mx-auto">

					<PageTitle title={"Hi, I'm Luciano Revillod"} />
					<About />
					<Skills />
					<Pages />
					<Footer />

				</div>
			</main>
		</>
	)
}
