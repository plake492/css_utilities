import path from 'path'
import { readdirSync, readFile, writeFile } from 'fs'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirPath = path.join(__dirname, './src/utils')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

const template = `
@import '../base-vars';
@import '../base-maps';

@import '../mixins/';
@import '../reset/';
/* @import '../base/' */;
`
const newRootPath = path.join(__dirname, './src/utils-exports')

const generateUtilsFiles = async () => {
  const files = readdirSync(dirPath)

  Promise.all(
    await files.map(async (file) => {
      if (!file.startsWith('_')) return file
      const filePath = path.join(dirPath, file)
      const fileContents = await readFileAsync(filePath, 'utf8')
      const filecontentsWithTemplate = `${template}\n\n${fileContents}`
      const newPath = path.join(newRootPath, file)
      await writeFileAsync(newPath, filecontentsWithTemplate)
      return newPath
    })
  )
}

generateUtilsFiles()
