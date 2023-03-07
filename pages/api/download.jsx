import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    const filePath = req.body.filePath

    if (!filePath) {
        res.status(400).send('La solicitud es incorrecta.')
        return
    }

    const fullPath = path.join(process.cwd(), 'data', filePath)

    if (!fs.existsSync(fullPath)) {
        res.status(404).send('El archivo no existe.')
        return
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    res.setHeader('Content-Disposition', `attachment filename=${filePath}`)
    res.status(200).json(JSON.parse(fileContents))
}
