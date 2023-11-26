import path from 'path'
import { readdirSync, unlink } from 'fs'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const newSassUtilPath = path.join(__dirname, '../src/utils-exports')
const newDistPath = path.join(__dirname, '../dist')

const unlinkAsync = promisify(unlink)

const removeUtilsFiles = async () => {
  const files = readdirSync(newSassUtilPath)
  if (!files.length) return

  Promise.all(
    await files.map(async (file) => {
      // Get css name
      const cssFileName = file.replace('_', '').replace('.scss', '.css')
      // Css Path
      const newCssPath = path.join(newDistPath, cssFileName)
      await unlinkAsync(newCssPath)
      // Css Sourece Map Path
      const newCssMapPath = path.join(newDistPath, cssFileName + '.map')
      await unlinkAsync(newCssMapPath)
      // Sass Path
      const filePath = path.join(newSassUtilPath, file)
      await unlinkAsync(filePath)
      return filePath
    })
  )
}

removeUtilsFiles()
