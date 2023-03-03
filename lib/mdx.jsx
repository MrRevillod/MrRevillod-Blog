import fs from 'fs'
import path from 'path'

import matter from "gray-matter"
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, 'posts'))

export const getFilesBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(
        path.join(root, 'posts', `${slug}.mdx`),
        'utf8'
    )

    // metadata => contenido oculto
    // content => cuerpo del mdx

    const { metadata, content } = await matter(mdxSource)
    const source = await serialize(content, {})

    return {
        source,
        frontmatter: {
            slug,
            ...metadata
        }
    }
}

export const getAllMetaData = () => {
    const files = getFiles()

    return files.reduce((allPost, postSlug) => {

        const mdxSource = fs.readFileSync(
            path.join(root, 'posts', postSlug),
            'utf8'
        )

        const { data } = matter(mdxSource)

        return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost]

    }, [])
}