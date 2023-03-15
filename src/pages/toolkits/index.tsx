import { Typography } from '@mui/material'
import Toolkit from 'src/@core/components/toolkit/toolkit'

function Toolkits() {
  return (
    <div>
      <Typography variant='h4' sx={{ my: 6 }}>
        Buy a toolkit before adding a property
      </Typography>
      <Toolkit />
    </div>
  )
}

export default Toolkits
