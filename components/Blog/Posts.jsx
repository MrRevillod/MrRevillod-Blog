import React, { useState } from 'react'

import { calcPages, getPaginatedData } from '@/lib/calcPages'

import { PagesBar } from './PagesBar'
import { PostCard } from './PostCard'
import { SearchBar } from './SearchBar'
import { PageTitle } from '../PageTitle'

export const Posts = ({ posts }) => {

	const [page, setPage] = useState(1)
	const [numPerPage, setNumPerPage] = useState(4)
	const [searchTerm, setSearchTerm] = useState('')

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const maxPages = calcPages(filteredPosts, numPerPage)
	const data = getPaginatedData(filteredPosts, page, numPerPage)

	return (
		<div className="pt-4 pb-4">

			<div className='flex md:flex-row flex-col w-full my-11 md:gap-0 gap-8'>
				<PageTitle title='Mr. Revillod Blog' />
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>

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
				prevImg="http://pillan.inf.uct.cl/~lrevillod/Blog/assets/icons/chevron-left.png"
				nextImg="http://pillan.inf.uct.cl/~lrevillod/Blog/assets/icons/chevron-right.png"
			/>

		</div>
	)
}