import React, { useState } from 'react'

import { calcPages } from '@/lib/calcPages'

import { PagesBar } from '../PagesBar'
import { PostCard } from './PostCard'

export const Posts = ({ posts }) => {

	const [page, setPage] = useState(1)
	const [numPerPage, setNumPerPage] = useState(4)

	const maxPages = calcPages(posts, numPerPage)
	const dataSlice = posts.slice((page - 1) * numPerPage, (page - 1) * numPerPage + numPerPage)

	return (
		<div className="pt-4 pb-4">

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

				{dataSlice.map(({ title, date, slug, imgUrl }) => (

					<PostCard
						key={slug}
						title={title}
						slug={slug}
						imgUrl={imgUrl}
						date={date}
					/>

				))}

			</div>

			<PagesBar page={page}
				setPage={setPage}
				maxOfTabs={maxPages}
				prevImg='ldaskjd'
				nextImg='asdlkasdkj'
			/>

		</div>
	)
}
