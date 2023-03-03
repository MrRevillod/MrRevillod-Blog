import React from 'react'

import { SectionTitle } from '../SectionTitle'
import { PostCard } from './PostCard'

export const Posts = ({ posts }) => {
	return (
		<div className="pt-4 pb-12">

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

				{posts.map(({ title, date, slug, imgUrl }) => (
					<PostCard
						key={slug}
						title={title}
						slug={slug}
						imgUrl={imgUrl}
						date={date}
					/>
				))}

			</div>

		</div>
	)
}
