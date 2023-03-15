// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
// import NotificationDropdown from '../shared-components/NotificationDropdown'
import UserDropdown from '../shared-components/UserDropdown'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useAuth } from 'src/hooks/useAuth'
import { useSettings } from 'src/@core/hooks/useSettings'
import { getItem } from 'src/utils/localStorageHelper'
import { STAGE } from 'src/utils/constants'
import userStageRedirect from 'src/utils/userstageRedirect'
import { useRouter } from 'next/router'

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
}))

const Img = styled('img')(({ theme }) => ({
  top: 0,
  bottom: 0,
  left: 0,
  width: 200,
  [theme.breakpoints.down('md')]: {
    width: 200,
    position: 'static'
  },
  [theme.breakpoints.down('sm')]: {
    width: 180,
    margin: theme.spacing(0, 0, 6, 0)
  }
}))

const ToolBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexFlow: 'column nowrap',
    padding: theme.spacing(6, 6)
  }
}))

const BlankLayoutAppBar = () => {
  // ** Hooks
  const theme = useTheme()
  const auth = useAuth()
  const router = useRouter()
  const stage = auth.user?.stage
  const isCompleted = stage === STAGE.COMPLETE

  const { settings } = useSettings()

  return (
    <AppBar elevation={0} color='default' sx={{ position: { xs: 'relative', sm: 'fixed' } }}>
      <ToolBar
        sx={{
          justifyContent: 'space-between',
          p: theme => `${theme.spacing(0, 6)}`
        }}
      >
        <Link href='/' passHref>
          <StyledLink>
            <Img alt='logo' src='/images/logos/LLRlogo.svg' />
          </StyledLink>
        </Link>
        <Box
          className='actions-right'
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: theme.spacing(2, 0),
            justifyContent: 'center'
          }}
        >
          {auth.user === null && !getItem('userData') ? (
            <>
              <Link href='/register'>
                <Button sx={{ borderRadius: 2, minWidth: 130 }} size='large' color='primary' variant='outlined'>
                  Register
                </Button>
              </Link>
              <Box sx={{ p: 1 }} />
              <Link href='/login'>
                <Button
                  sx={{ borderRadius: 2, whiteSpace: 'nowrap', minWidth: 130 }}
                  size='large'
                  color='primary'
                  variant='contained'
                >
                  Sign In
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                sx={{ borderRadius: 2 }}
                size='large'
                color='primary'
                variant='outlined'
                onClick={() => userStageRedirect(stage || '', router)}
              >
                {isCompleted ? 'Goto Dashboard' : 'Continue'}
              </Button>
              <UserDropdown settings={settings} />
            </>
          )}
        </Box>
      </ToolBar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
