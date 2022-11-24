import BackgroundColors from '../components/BackgroundColors'
import Borders from '../components/Borders'
import Columns from '../components/Columns'
import Flex from '../components/Flex'
import Typography from '../components/Typography'
import Images from '../components/Images'
import Videos from '../components/Videos'
import BoxShadows from '../components/BoxShadows'
import Cards from '../components/Cards'
import Positions from '../components/Positions'

export const pages = [
  { title: 'Typography', Component: Typography, bgColor: 'bg-priamry' },
  {
    title: 'Background Colors',
    Component: BackgroundColors,
    bgColor: 'bg-secondary'
  },
  {
    title: 'Flex',
    Component: Flex,
    bgColor: 'bg-priamry',
    subSections: [
      { title: 'Justify' },
      { title: 'Justify (Col)' },
      { title: 'Align Items' }
    ]
  },
  { title: 'Borders', Component: Borders, bgColor: 'bg-secondary' },
  { title: 'Columns', Component: Columns, bgColor: 'bg-priamry' },
  { title: 'Box Shadows', Component: BoxShadows, bgColor: 'bg-grey-70' },
  { title: 'Positions', Component: Positions, bgColor: 'bg-priamry' },
  { title: 'Cards', Component: Cards, bgColor: 'bg-grey' },
  {
    title: 'Images',
    Component: Images,
    bgColor: 'bg-secondary',
    subSections: [
      { title: '3 / 4' },
      { title: '1 / 1' },
      { title: '4 / 3' },
      { title: '3 / 2' },
      { title: '16 / 9' }
    ]
  },
  { title: 'Videos', Component: Videos, bgColor: 'bg-priamry' }
]
