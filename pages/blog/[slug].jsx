import React from 'react'
import Head from 'next/head'
import MDXComponents from '@/components/Blog/MDXComponents'

import { Footer } from '@/components/Footer'
import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFilesBySlug } from '@/lib/mdx'

export default function Page({ source, frontmatter }) {

    return (

        <>
            <Head>
                <title>Luciano Revillod - Blog</title>
            </Head>

            <main className='min-h-screen font-inter bg-zinc-900 text-white'>
                <div className="max-w-5xl w-11/12 mx-auto pt-12">

                    <MDXRemote {...source} components={MDXComponents} />

                    <Footer />

                </div>
            </main>
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const { source, frontmatter } = await getFilesBySlug(params.slug)

    return {
        props: { source, frontmatter }
    }
}

export const getStaticPaths = async () => {
    const posts = await getFiles()

    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}
