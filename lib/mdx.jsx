
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"
import { serialize } from 'next-mdx-remote/serialize'

// Obtener la ruta actual del proceso Node.js
const root = process.cwd()

// Obtener una lista de nombres de archivo de todos los archivos en el directorio "posts"
export const getFiles = () => fs.readdirSync(path.join(root, 'posts'))

// Obtener el contenido y los metadatos de un archivo en el directorio "posts" según su "slug"
export const getFilesBySlug = async (slug) => {
    // Leer el archivo con el nombre "slug" en el directorio "posts" y guardar su contenido como una cadena de texto
    const mdxSource = fs.readFileSync(
        path.join(root, 'posts', `${slug}.mdx`),
        'utf8'
    )

    // Obtener los metadatos y el contenido del archivo usando "gray-matter"
    const { metadata, content } = await matter(mdxSource)

    // Serializar el contenido MDX usando "next-mdx-remote"
    const source = await serialize(content, {})

    // Devolver el objeto con el contenido serializado y los metadatos
    return {
        source,
        frontmatter: {
            slug,
            ...metadata
        }
    }
}

// Obtener los metadatos de todos los archivos en el directorio "posts"
export const getAllMetaData = () => {
    // Obtener una lista de nombres de archivo de todos los archivos en el directorio "posts"
    const files = getFiles()

    // Usar "reduce" para iterar a través de cada archivo y extraer los metadatos usando "gray-matter"
    return files.reduce((allPost, postSlug) => {
        // Leer el archivo con el nombre "postSlug" en el directorio "posts" y guardar su contenido como una cadena de texto
        const mdxSource = fs.readFileSync(
            path.join(root, 'posts', postSlug),
            'utf8'
        )

        // Obtener los metadatos del archivo usando "gray-matter"
        const { data } = matter(mdxSource)

        // Agregar el "slug" a los metadatos y agregar el objeto resultante a la lista de metadatos
        return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost]
    }, [])
}
