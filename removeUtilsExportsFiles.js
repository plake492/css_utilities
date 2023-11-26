import path from 'path'
import { readdirSync, unlink } from 'fs'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirPath = path.join(__dirname, './src/utils-exports')

const unlinkAsync = promisify(unlink)

const removeUtilsFiles = async () => {
  const files = readdirSync(dirPath)
  if (!files.length) return

  Promise.all(
    await files.map(async (file) => {
      const filePath = path.join(dirPath, file)
      await unlinkAsync(filePath)
      return filePath
    })
  )
}

removeUtilsFiles()
