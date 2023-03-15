// ** React Imports
import { ReactNode, SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

// ** Configs
// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks

// ** Demo Imports
import Image from 'next/image'
import { api } from 'src/utils/api'
import toast from 'react-hot-toast'
import errorHandler from 'src/utils/errorHandler'
import ModalComponent from 'src/@core/components/modal'
import { useRouter } from 'next/router'

// Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)

  const router = useRouter()

  // ** Vars

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setLoading(true)
      await api
        .post('/forgot-password', { email })
        .then(() => {
          setLoading(false)
          setEmail('')
          setModal(true)
        })
        .catch(err => {
          setLoading(false)
          toast.error(errorHandler(err))
        })
    } else {
      toast.error('Invalid email address')
    }
  }

  return (
    <Box
      className='content-right'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          p: 7,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper'
        }}
      >
        <BoxWrapper>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 4
            }}
          >
            <Image alt='logo' src='/images/logos/LLRlogo.svg' width={200} height={60} />
          </Box>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <TypographyStyled variant='h5'>Forgot Password? 🔒</TypographyStyled>
            <Typography variant='body2'>
              Enter your email and we&prime;ll send you instructions to reset your password
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              autoFocus
              type='email'
              label='Email'
              value={email}
              sx={{ display: 'flex', mb: 4 }}
              error={!!email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)}
              onChange={e => setEmail(e.target.value)}
            />
            {loading ? (
              <Button fullWidth size='large' variant='contained' sx={{ mb: 5.25 }}>
                Loading...
              </Button>
            ) : (
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 5.25 }}>
                Send reset link
              </Button>
            )}
            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link passHref href='/login'>
                <Typography
                  component={MuiLink}
                  sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', justifyContent: 'center' }}
                >
                  <ChevronLeft sx={{ mr: 1.5, fontSize: '2rem' }} />
                  <span>Back to login</span>
                </Typography>
              </Link>
            </Typography>
          </form>

          <ModalComponent
            open={modal}
            onClose={() => {
              setModal(false)
              router.replace('/')
            }}
            title={'Password Reset'}
            subHeader={'Check your email for the password reset link.'}
          >
            <Button fullWidth variant='contained' onClick={() => router.replace('/')} sx={{ mt: 6 }}>
              Close
            </Button>
          </ModalComponent>
        </BoxWrapper>
      </Box>
    </Box>
  )
}

ForgotPassword.guestGuard = true
ForgotPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ForgotPassword
