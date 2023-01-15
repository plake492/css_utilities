import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import postcssNested from 'postcss-nested'
import postcssCombineMediaQuery from 'postcss-combine-media-query'
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import postcssSortMediaQueries from 'postcss-sort-media-queries'

import fs from 'fs'

fs.readFile('./dist/index.css', (err, css) => {
  postcss([
    autoprefixer,
    postcssNested,
    postcssCombineMediaQuery,
    postcssCombineDuplicatedSelectors,
    postcssSortMediaQueries({ sort: 'mobile-first' })
  ])
    .process(css, { from: './dist/index.css', to: './dist/index.css' })
    .then(result => {
      fs.writeFile('./dist/index.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('./dist/index.css.map', result.map.toString(), () => true)
      }
    })
})
