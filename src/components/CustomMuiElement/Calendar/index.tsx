import dayjs from 'dayjs'

import { ReactElement } from 'react'
import { CalendarSelector } from './DateElements/CalendarSelector'
import { CalendarCellsGroup } from './DateElements/CalendarCellsGroup'
import { Box } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') // use the locale globally
/**
 * @component
 * @param {boolean} isMonthNavigator - whenther you want the month navigation functionality or not
 * @description I put "isMonthNavigator" as props because I want make 
   this calendar more scalable without adding the complexity
   to the CalendarProvider
 */
export interface ICalendarSelectorProps {
  isMonthNavigator: boolean
}
const CalendarSx = (theme: Theme): SxProps<Theme> => ({
  ...theme.flexCenter,
  flexDirection: 'column',
  width: '35rem',
  height: '24rem',
  fontSize: '1.6rem',
  margin: '0 auto'
})

export default function Calendar({
  isMonthNavigator
}: ICalendarSelectorProps): ReactElement {
  const theme = useTheme()
  return (
    <Box sx={CalendarSx(theme)}>
      <CalendarSelector isMonthNavigator={isMonthNavigator} />
      <CalendarCellsGroup />
    </Box>
  )
}
