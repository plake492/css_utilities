import BackgroundColors from '../components/BackgroundColors'
import Borders from '../components/Borders'
import Containers from '../components/Containers'
import Columns from '../components/Columns'
import Flex from '../components/Flex'
import Typography from '../components/Typography'
import Images from '../components/Images'
import Videos from '../components/Videos'
import BoxShadows from '../components/BoxShadows'
import RowScroll from '../components/RowScroll'
import Cards from '../components/Cards'
import Positions from '../components/Positions'
import Introduction from '../components/Introduction'
import { isEven } from '../utils'

export const pages = [
  {
    title: 'Introduction',
    Component: Introduction,
  },
  { title: 'Typography', Component: Typography },
  {
    title: 'Containers',
    Component: Containers,
    container: null,
  },
  {
    title: 'Cards',
    Component: Cards,
  },
  {
    title: 'Background Colors',
    Component: BackgroundColors,
  },
  { title: 'Columns', Component: Columns },
  { title: 'RowScroll', Component: RowScroll },
  {
    title: 'Flex',
    Component: Flex,
    subSections: [
      { title: 'Justify' },
      { title: 'Justify (Col)' },
      { title: 'Align Items' },
    ],
  },
  { title: 'Positions', Component: Positions },
  { title: 'Borders', Component: Borders },
  { title: 'Box Shadows', Component: BoxShadows },
  // { title: 'Cards', Component: Cards },
  {
    title: 'Images',
    Component: Images,
    subSections: [
      { title: '3 / 4' },
      { title: '1 / 1' },
      { title: '4 / 3' },
      { title: '3 / 2' },
      { title: '16 / 9' },
    ],
  },
  // { title: 'Videos', Component: Videos }
].map((o, i) => ({
  ...o,
  bgColor: isEven(i) ? 'bg-secondary' : '',
}))
