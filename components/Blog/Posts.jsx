import React, { useState } from 'react'

import { calcPages, getPaginatedData } from '@/lib/calcPages'

import { PagesBar } from '../PagesBar'
import { PostCard } from './PostCard'


export const Posts = ({ posts }) => {

	const [page, setPage] = useState(1)
	const [numPerPage, setNumPerPage] = useState(4)

	const maxPages = calcPages(posts, numPerPage)
	const data = getPaginatedData(posts, page, numPerPage)

	return (
		<div className="pt-4 pb-4">

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

				{data.map(({ title, date, slug, imgUrl }) => (
					<PostCard
						key={slug}
						title={title}
						slug={slug}
						imgUrl={imgUrl}
						date={date}
					/>
				))}

			</div>

			<PagesBar
				page={page}
				setPage={setPage}
				maxOfTabs={maxPages}
				prevImg="http://pillan.inf.uct.cl/~lrevillod/img/About/assets/icons/chevron-left.png"
				nextImg="http://pillan.inf.uct.cl/~lrevillod/img/About/assets/icons/chevron-right.png"
			/>

		</div>
	)
}
