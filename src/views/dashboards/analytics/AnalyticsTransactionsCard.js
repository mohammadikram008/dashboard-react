// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Avatar from 'src/@core/components/mui/avatar'
import mock from 'src/@fake-db/mock'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// const salesData = [
//   {
//     stats: '245k',
//     title: 'Sales',
//     color: 'primary',
//     icon: <Icon icon='mdi:trending-up' />
//   },
//   {
//     stats: '12.5k',
//     title: 'Customers',
//     color: 'success',
//     icon: <Icon icon='mdi:account-outline' />
//   },
//   {
//     stats: '1.54k',
//     color: 'warning',
//     title: 'Products',
//     icon: <Icon icon='mdi:cellphone-link' />
//   },
//   {
//     stats: '$88k',
//     color: 'info',
//     title: 'Revenue',
//     icon: <Icon icon='mdi:currency-usd' />
//   }
// ]

const renderStats = () => {
  const data = {
    fullName: 'John Doe',
    location: 'Vatican City',
    joiningDate: '23 April 2021',
    profileImg: '/images/avatars/1.png',
    designation: 'WEB Designer',
    coverImg: '/images/pages/profile-banner.png'
  }

  return (
    <Grid item xs={12} sm={3}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ mr: 3, boxShadow: 3, width: 70, height: 70 }} src={data.profileImg} alt='User Avatar' />
        {/* <CustomAvatar variant='rounded'>{data.profileImg}</CustomAvatar> */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6'>{data.designation}</Typography>
          <Typography variant='caption'>{data.joiningDate}</Typography>
          <Typography variant='caption'>{data.location}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

const AnalyticsTransactionsCard = () => {
  const data = {
    fullName: 'John Doe',
    location: 'Vatican City',
    joiningDate: 'April 2021',
    designation: 'UX Designer',
    profileImg: '/public/images/avatars/1.png',
    designationIcon: 'mdi:invert-colors',
    coverImg: '/images/pages/profile-banner.png'
  }

  return (
    <Card>
      <CardHeader
        title={data.fullName}

        // action={
        //   <OptionsMenu
        //     options={['Last 28 Days', 'Last Month', 'Last Year']}
        //     iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
        //   />
        // }
        // subheader={
        //   <Typography variant='body2'>
        //     <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
        //       Total 48.5% growth
        //     </Box>{' '}
        //     😎 this month
        //   </Typography>
        // }
        // titleTypographyProps={{
        //   sx: {
        //     mb: 2.5,
        //     lineHeight: '2rem !important',
        //     letterSpacing: '0.15px !important'
        //   }
        // }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsTransactionsCard
