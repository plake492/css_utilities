import BackgroundColors from '../components/BackgroundColors'
import Borders from '../components/Borders'
import Columns from '../components/Columns'
import Flex from '../components/Flex'
import Typography from '../components/Typography'

export const pages = [
  { title: 'Typography', Component: Typography, bgColor: 'bg-priamry' },
  {
    title: 'Background Colors',
    Component: BackgroundColors,
    bgColor: 'bg-secondary'
  },
  { title: 'Flex', Component: Flex, bgColor: 'bg-priamry' },
  { title: 'Borders', Component: Borders, bgColor: 'bg-secondary' },
  { title: 'Columns', Component: Columns, bgColor: 'bg-priamry' }
]
