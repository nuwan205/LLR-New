// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Container } from '@mui/material'
import { ReactNode } from 'react'

function InformationCards() {
  return (
    <Container>
      <Grid
        container
        spacing={6}
        className='match-height'
        sx={{ pt: theme => `${theme.spacing(10)} !important`, pb: theme => `${theme.spacing(20)} !important` }}
      >
        {cardListData.map((card: CardProps) => getInformationCard(card))}
      </Grid>
    </Container>
  )
}

export default InformationCards

type CardProps = {
  title: string
  imgEl: ReactNode
  content: string
}

function getInformationCard({ title, imgEl, content }: CardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} key={content}>
      <Link href={`#${content}`}>
        <Card>
          <CardContent
            sx={{ cursor: 'pointer', px: 4, py: 6, textAlign: 'center', backgroundColor: '#0070F3', height: '100%' }}
          >
            <Box sx={{ p: 4 }}>{imgEl}</Box>
            <Typography variant='h5' color='white' fontWeight={700}>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

const cardListData = [
  {
    title: 'What is landlord toolkit?',
    content: 'what-is-toolkit',
    imgEl: (
      <svg width='34' height='36' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M3.337 35.713h26.397a3.21 3.21 0 0 0 1.263-.26c.4-.171.764-.422 1.07-.738.307-.317.55-.693.716-1.106.166-.413.251-.857.251-1.304V18.107a8.952 8.952 0 0 0-1.593-5.14 8.5 8.5 0 0 0-4.209-3.198l-1.473-.507c.47-.909.703-1.927.677-2.956a6.102 6.102 0 0 0-.822-2.917 5.86 5.86 0 0 0-2.108-2.119A5.627 5.627 0 0 0 20.66.5h-8.249a5.628 5.628 0 0 0-2.845.771 5.86 5.86 0 0 0-2.108 2.12 6.103 6.103 0 0 0-.822 2.916 6.117 6.117 0 0 0 .677 2.957L5.84 9.77a8.502 8.502 0 0 0-4.208 3.197 8.951 8.951 0 0 0-1.595 5.139v14.198c0 .904.348 1.77.967 2.41a3.248 3.248 0 0 0 2.333.998Zm0-3.408v-10.79h4.95v4.543h3.3v-4.544h9.898v4.544h3.3v-4.544h4.95v10.791H3.336Zm9.074-28.397h8.25c.656 0 1.285.27 1.75.749.463.479.724 1.129.724 1.807 0 .678-.26 1.328-.725 1.807a2.436 2.436 0 0 1-1.75.748h-8.249c-.325 0-.647-.066-.947-.194a2.47 2.47 0 0 1-.803-.554 2.562 2.562 0 0 1-.536-.83 2.628 2.628 0 0 1 0-1.955c.124-.31.306-.592.536-.83a2.47 2.47 0 0 1 .803-.553c.3-.129.622-.195.947-.195Zm-5.5 9.087 1.65-.568H24.51l1.65.568a5.195 5.195 0 0 1 2.593 1.954c.643.919.986 2.024.981 3.158H3.337a5.473 5.473 0 0 1 .97-3.15 5.197 5.197 0 0 1 2.576-1.962h.029Z'
          fill='#FED900'
        />
      </svg>
    )
  },
  {
    title: 'Rent Guarantee',
    content: 'rent-guarantee',
    imgEl: (
      <svg width='31' height='37' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M16.19.402a1.923 1.923 0 0 0-1.38 0L1.248 5.609A1.952 1.952 0 0 0 0 7.434v13.019c0 7.755 6.163 13.468 14.93 16.186.372.116.768.116 1.14 0C24.896 33.904 31 27.514 31 20.453V7.434c0-.81-.497-1.536-1.248-1.825L16.19.402ZM3.875 20.452V8.78L15.5 4.317 27.125 8.78v11.673c0 4.544-4.028 9.727-11.627 12.27-7.65-2.53-11.623-7.133-11.623-12.27Zm18.909-6.54a1.964 1.964 0 0 0-.21-2.753 1.927 1.927 0 0 0-2.733.212l-6.388 7.512-2.396-2.415a1.927 1.927 0 0 0-2.74 0 1.964 1.964 0 0 0 0 2.762l3.876 3.905a1.93 1.93 0 0 0 2.84-.11l7.75-9.112Z'
            fill='#FED900'
          />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h31v37H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Landlord Emergency',
    content: 'landlord-emergency',
    imgEl: (
      <svg width='37' height='37' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M21.096 35.718c-.698.698-1.564 1.047-2.596 1.047-1.033 0-1.898-.349-2.597-1.047L1.283 21.096C.582 20.398.233 19.532.233 18.5s.35-1.898 1.048-2.596L15.903 1.282C16.602.584 17.467.235 18.5.235c1.032 0 1.898.349 2.596 1.047l14.621 14.622c.699.698 1.048 1.564 1.048 2.596s-.35 1.898-1.048 2.596l-14.62 14.622ZM18.5 33.12 33.12 18.5 18.5 3.879 3.878 18.5 18.5 33.121Zm-1.822-12.799h3.644V9.39h-3.644v10.932Zm1.822 5.466c.516 0 .949-.175 1.299-.525.348-.349.523-.78.523-1.297 0-.516-.175-.95-.523-1.3a1.767 1.767 0 0 0-1.3-.522c-.515 0-.948.174-1.296.523-.35.35-.525.783-.525 1.299 0 .516.175.948.524 1.297.35.35.781.525 1.298.525Z'
          fill='#FED900'
        />
      </svg>
    )
  }
  // {
  //   title: 'Landlord Insurance',
  //   content: 'landlord-insurance',
  //   imgEl: (
  //     <svg width='37' height='37' fill='none' xmlns='http://www.w3.org/2000/svg'>
  //       <path
  //         d='M21.096 35.718c-.698.698-1.564 1.047-2.596 1.047-1.033 0-1.898-.349-2.597-1.047L1.283 21.096C.582 20.398.233 19.532.233 18.5s.35-1.898 1.048-2.596L15.903 1.282C16.602.584 17.467.235 18.5.235c1.032 0 1.898.349 2.596 1.047l14.621 14.622c.699.698 1.048 1.564 1.048 2.596s-.35 1.898-1.048 2.596l-14.62 14.622ZM18.5 33.12 33.12 18.5 18.5 3.879 3.878 18.5 18.5 33.121Zm-1.822-12.799h3.644V9.39h-3.644v10.932Zm1.822 5.466c.516 0 .949-.175 1.299-.525.348-.349.523-.78.523-1.297 0-.516-.175-.95-.523-1.3a1.767 1.767 0 0 0-1.3-.522c-.515 0-.948.174-1.296.523-.35.35-.525.783-.525 1.299 0 .516.175.948.524 1.297.35.35.781.525 1.298.525Z'
  //         fill='#FED900'
  //       />
  //     </svg>
  //   )
  // }
]
