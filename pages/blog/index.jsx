import React from 'react'
import Head from 'next/head'

import { getAllMetaData } from '@/lib/mdx'

import { Posts } from '@/components/Blog/Posts'
import { Footer } from '@/components/Footer'

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Luciano Revillod - Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className='min-h-screen font-inter bg-zinc-900 text-white'>
                <div className="max-w-5xl w-11/12 mx-auto">
                    <Posts posts={posts} />
                    <Footer />
                </div>
            </main>
        </>
    )
}

export const getStaticProps = async () => {

    const posts = await getAllMetaData()

    return {
        props: { posts }
    }
}
