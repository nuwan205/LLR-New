// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Grid container spacing={6} className='match-height' sx={{ my: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mr: 2 }}>{`${themeConfig.templateName} © ${new Date().getFullYear()}`}</Typography>
        </Grid>
        {/*<Grid item xs={12} md={6}>*/}
        {/*  {hidden ? null : (*/}
        {/*    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'align-end', '& :not(:last-child)': { mr: 4 } }}>*/}
        {/*      <Link target='_blank' href='https://themeforest.net/licenses/standard'>*/}
        {/*        License*/}
        {/*      </Link>*/}
        {/*      <Link target='_blank' href='https://1.envato.market/pixinvent_portfolio'>*/}
        {/*        More Themes*/}
        {/*      </Link>*/}
        {/*      <Link*/}
        {/*        target='_blank'*/}
        {/*        href='https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'*/}
        {/*      >*/}
        {/*        Documentation*/}
        {/*      </Link>*/}
        {/*      <Link target='_blank' href='https://pixinvent.ticksy.com/'>*/}
        {/*        Support*/}
        {/*      </Link>*/}
        {/*    </Box>*/}
        {/*  )}*/}
        {/*</Grid>*/}
      </Grid>
    </Box>
  )
}

export default FooterContent
