import BackgroundColors from '../components/BackgroundColors'
import Borders from '../components/Borders'
import Columns from '../components/Columns'
import Flex from '../components/Flex'
import Typography from '../components/Typography'

export const pages = [
  { title: 'Typography', Component: Typography, bgColors: 'bg-black-10' },
  {
    title: 'Background Colors',
    Component: BackgroundColors,
    bgColors: 'bg-secondary'
  },
  { title: 'Flex', Component: Flex, bgColors: '' },
  { title: 'Borders', Component: Borders, bgColors: 'bg-accent-20' },
  { title: 'Columns', Component: Columns, bgColors: '' }
]
