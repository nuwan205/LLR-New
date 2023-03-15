// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

type Props = {
  id: number
}
const CardTenant = ({ id }: Props) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: 150 }} image='/images/banner-poster.jpeg' />
      <Avatar
        alt='Robert Meyer'
        src={`/images/avatars/${id}.png`}
        sx={{
          top: 80,
          left: 20,
          width: 78,
          height: 78,
          position: 'absolute',
          border: theme => `5px solid ${theme.palette.common.white}`
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 5.25,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>Robert Meyer</Typography>
            <Typography variant='caption'>London, UK</Typography>
          </Box>
          <Button variant='contained'>Send a Reminder</Button>
        </Box>
        {/*<Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>*/}
        {/*  <Typography variant='caption' sx={{ whiteSpace: 'nowrap' }}>*/}
        {/*    18 mutual friends*/}
        {/*  </Typography>*/}
        {/*  <AvatarGroup max={4}>*/}
        {/*    <Avatar src='/images/avatars/6.png' alt='Alice Cobb' />*/}
        {/*    <Avatar src='/images/avatars/5.png' alt='Jeffery Warner' />*/}
        {/*    <Avatar src='/images/avatars/4.png' alt='Howard Lloyd' />*/}
        {/*    <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />*/}
        {/*    <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />*/}
        {/*    <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />*/}
        {/*    <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />*/}
        {/*  </AvatarGroup>*/}
        {/*</Box>*/}
      </CardContent>
    </Card>
  )
}

export default CardTenant
