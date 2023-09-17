// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DialogAddCard from 'src/views/pages/dialog-examples/DialogAddCard'

// import DialogPricing from 'src/views/pages/dialog-examples/DialogPricing'
import DialogReferEarn from 'src/views/pages/dialog-examples/DialogReferEarn'
import DialogCreateApp from 'src/views/pages/dialog-examples/DialogCreateApp'
import DialogAddAddress from 'src/views/pages/dialog-examples/DialogAddAddress'
import DialogShareProject from 'src/views/pages/dialog-examples/DialogShareProject'
import AdminProject from 'src/views/pages/dialog-examples/AdminProject'
import CountryHeads from 'src/views/pages/dialog-examples/CountryHeads'
import Messages from 'src/views/pages/dialog-examples/Messages'
import DialogAuthentication from 'src/views/pages/dialog-examples/DialogAuthentication'
import Notification from 'src/views/pages/dialog-examples/Notification'
import Competition from 'src/views/pages/dialog-examples/Competition'
import BlockUser from 'src/views/pages/dialog-examples/BlockUser'
import CoinResellers from 'src/views/pages/dialog-examples/CoinResellers'

// ** Demo Components Imports
// import AnalyticsTable from 'src/views/dashboards/analytics/AnalyticsTable'
// import AnalyticsTrophy from 'src/views/dashboards/analytics/AnalyticsTrophy'
// import AnalyticsSessions from 'src/views/dashboards/analytics/AnalyticsSessions'
// import AnalyticsTotalProfit from 'src/views/dashboards/analytics/AnalyticsTotalProfit'
// import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'
// import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
// import AnalyticsWeeklyOverview from 'src/views/dashboards/analytics/AnalyticsWeeklyOverview'
// import AnalyticsDepositWithdraw from 'src/views/dashboards/analytics/AnalyticsDepositWithdraw'
// import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsTransactionsCard from 'src/views/dashboards/analytics/AnalyticsTransactionsCard'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <AnalyticsTransactionsCard />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogShareProject />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogAddCard />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Competition />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogReferEarn />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogAddAddress />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogCreateApp />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <DialogAuthentication />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <AdminProject />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <CoinResellers />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <CountryHeads />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Messages />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Notification />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <BlockUser />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
