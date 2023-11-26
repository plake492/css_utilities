import sass from 'sass'
import path from 'path'
import { readdirSync, readFile, writeFile } from 'fs'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirPath = path.join(__dirname, '../src/utils')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

const template = `
@import '../base-vars';
@import '../base-maps';
@import '../mixins/';
/* @import '../reset/'; */`

const newSassUtilPath = path.join(__dirname, '../src/utils-exports')
const newDistPath = path.join(__dirname, '../dist')

const useRegex = /@use(.*);/

const generateUtilsFiles = async () => {
  const files = readdirSync(dirPath)

  const newPaths = await Promise.all(
    await files.map(async (file) => {
      if (!file.startsWith('_')) return file

      const newSassPath = path.join(newSassUtilPath, file)
      // Construct file path
      const filePath = path.join(dirPath, file)
      // Read file contents
      const fileContents = await readFileAsync(filePath, 'utf8')
      // search for any @use imports
      const useMethods = useRegex.exec(fileContents)

      if (useMethods) {
        // Hoist any @use imports
        const useString = useMethods[0]
        const fileContentsRemovedUse = fileContents.split(useString)[1]
        const filecontentsWithTemplate = `${useString}\n${template}${fileContentsRemovedUse}`
        await writeFileAsync(newSassPath, filecontentsWithTemplate)
      } else {
        const filecontentsWithTemplate = `${template}\n\n${fileContents}`
        await writeFileAsync(newSassPath, filecontentsWithTemplate)
      }

      /* Compile Sass to css here */
      // Get css name
      const cssFileName = file.replace('_', '').replace('.scss', '.css')
      // Construct new dist path
      const newCssPath = path.join(newDistPath, cssFileName)
      const newCssMapPath = path.join(newDistPath, cssFileName + '.map')
      // Compile Sass
      const { css, sourceMap } = sass.compile(newSassPath, {
        style: 'compressed',
        sourceMap: true,
        sourceMapIncludeSources: true,
      })
      // Generate source Link
      const sourceLink = `/*# sourceMappingURL=${cssFileName}.map */`

      await writeFileAsync(newCssPath, `${css}\n${sourceLink}`)

      await writeFileAsync(newCssMapPath, JSON.stringify(sourceMap))
    })
  )
}

generateUtilsFiles()
