// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Hook
// ** Custom Components Imports
// import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { ApexOptions } from 'apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { useState } from 'react'
import ModalComponent from 'src/@core/components/modal'
import { TenantResponse } from 'src/context/types'
import { api } from 'src/utils/api'
import toast from 'react-hot-toast'
import errorHandler from 'src/utils/errorHandler'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import dayjs from 'dayjs'

type CardCongratulationsJohnTypes = {
  data: TenantResponse
}
const CardCongratulationsJohn = ({ data }: CardCongratulationsJohnTypes) => {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isCreditChecked, setCreditChecked] = useState(false)

  const creditCheck = async () => {
    setLoading(true)
    try {
      await api.post('/credit-check', { tenantId: data.id })
      setLoading(false)
      setModal(true)
      setCreditChecked(true)
    } catch (error) {
      toast.error(errorHandler(error))
      setLoading(false)
    }
  }

  const isDisabled = data.isCreditChecked || data.isCreditPending

  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      theme.palette.error.main,
      theme.palette.warning.main,
      hexToRGBA(theme.palette.success.main, 0.6),
      hexToRGBA(theme.palette.success.main, 0.8),
      theme.palette.success.main
    ],
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: { width: 3, lineCap: 'round', colors: [theme.palette.background.paper] },
    labels: ['Bad', 'Okay', 'Average', 'Good', 'Exccelent'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        endAngle: 130,
        startAngle: -130,
        customScale: 0.9,
        donut: {
          size: '83%',
          labels: {
            show: true,
            name: {
              offsetY: 25
            },
            value: {
              offsetY: -15,
              fontWeight: 'bold',
              fontSize: '32',
              formatter: value => `${value}`
            },
            total: {
              fontWeight: 'bold',
              color: theme.palette.success.main,
              show: true,
              formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}`
            }
          }
        }
      }
    }
  }

  let series = [data.score]
  if (data.score >= 800) {
    series = [200, 200, 200, 200, data.score - 800]
  } else if (data.score >= 600) {
    series = [200, 200, 200, data.score - 600]
  } else if (data.score >= 400) {
    series = [200, 200, data.score - 400]
  } else if (data.score >= 200) {
    series = [200, data.score - 200]
  }

  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6, 4)} !important`, height: '100%' }}>
        <Grid container direction='column' justifyContent='center' alignItems='center'>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ mb: 2, fontWeight: 'bold' }}>
              {data.firstName} {data.lastName}
            </Typography>
            <Typography sx={{ mb: 1 }} variant='subtitle2'>
              Email: {data.email}
            </Typography>
            <Typography variant='subtitle2' sx={{ mb: 1 }}>
              Contact Number: {data.phone}
            </Typography>
            <Typography variant='subtitle2'>Date of birth: {dayjs(data.birthDate).format('YYYY-MM-DD')}</Typography>
            {/* <Typography variant='body2'>You have done more sales today.</Typography> */}
          </Grid>
          <Grid item xs={12}>
            {data.pdf && (
              <a href={data.pdf}>
                <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', my: 2 }}>
                  <PictureAsPdfIcon sx={{ mr: 1 }} /> Download
                </Box>
              </a>
            )}
          </Grid>
          <Grid item xs={12}>
            {!!data.score ? (
              <Box sx={{ m: 'auto', maxWidth: '200px' }}>
                <ReactApexcharts type='donut' options={options} series={series} />
              </Box>
            ) : (
              <Button
                sx={{ mt: 8 }}
                size='large'
                color='success'
                variant='contained'
                onClick={() => {
                  if (!isDisabled) {
                    creditCheck()
                  }
                }}
                disabled={isDisabled || loading}
              >
                {isCreditChecked || data.isCreditPending
                  ? 'Pending'
                  : data.isCreditChecked
                  ? 'Complete'
                  : 'Tenant credit check'}
              </Button>
            )}
          </Grid>
        </Grid>

        <ModalComponent open={modal} onClose={() => setModal(true)} title='Thanks' subHeader='Credit Reference Pending'>
          <Button fullWidth variant='contained' onClick={() => setModal(false)} sx={{ mt: 6 }}>
            Close
          </Button>
        </ModalComponent>
      </CardContent>
    </Card>
  )
}

export default CardCongratulationsJohn
