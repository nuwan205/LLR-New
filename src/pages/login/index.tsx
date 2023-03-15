// ** React Imports
import { ReactNode, useRef, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Components
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'

// import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
// import Google from 'mdi-material-ui/Google'
// import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// ** Configs
// ** Layout Import
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

// import useMediaQuery from '@mui/material/useMediaQuery'
import toast from 'react-hot-toast'
import errorHandler from 'src/utils/errorHandler'
import ReCAPTCHA from 'react-google-recaptcha'
import { Toolbar } from '@mui/material'

// import { useRouter } from 'next/router'

// ** Demo Imports

// ** Styled Components

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

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

const defaultValues = {
  password: '',
  email: ''
}

interface FormData {
  email: string
  password: string
}

const LoginPage = () => {
  // ** States
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const auth = useAuth()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // const overSmSize = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  // const router = useRouter()
  const showRecaptcha = process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === 'true'

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    const token = recaptchaRef.current?.getValue() || ''

    recaptchaRef.current?.reset()

    const { email, password } = data
    auth.login({ email, password, token }, err => {
      toast.error(errorHandler(err))
    })
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
      <Toolbar />
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
            <TypographyStyled variant='h5'>Welcome</TypographyStyled>
            <Typography variant='body2'>Please login to your account</Typography>
          </Box>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    label='Email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    placeholder='david@llri.com'
                  />
                )}
              />
              {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                Password
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    value={value}
                    onBlur={onBlur}
                    label='Password'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    error={Boolean(errors.password)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onMouseDown={e => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: 'error.main' }} id=''>
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel
                label='Remember Me'
                control={<Checkbox />}
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
              />
              <Link passHref href='/forgot-password'>
                <Typography component={MuiLink} variant='body2' sx={{ color: 'primary.main' }}>
                  Forgot Password?
                </Typography>
              </Link>
            </Box>
            {showRecaptcha && (
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 4, justifyContent: 'center' }}>
                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''} />
              </Box>
            )}

            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              {auth.isLogging ? 'Loading...' : 'Login'}
            </Button>

            {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
              <Typography>
                <Link passHref href='/register'>
                  <Typography component={MuiLink} sx={{ color: 'primary.main' }}>
                    Create an account
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ mt: 5, mb: 7.5, '& .MuiDivider-wrapper': { px: 4 } }}>or</Divider> */}
            {/* <Box
              sx={{
                display: 'flex',
                flexDirection: overSmSize ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Link href='/' passHref>
                <Button
                  sx={{ color: '#497ce2', mr: overSmSize ? 10 : 0 }}
                  component='a'
                  onClick={(e: MouseEvent<HTMLElement>) => {
                    e.preventDefault()
                    window.open(`${process.env.NEXT_PUBLIC_BACK_END_API}/facebook`)
                  }}
                  startIcon={<Facebook />}
                >
                  Facebook
                </Button>
              </Link>
              <Link href='/' passHref>
                <Button
                  component='a'
                  sx={{ color: '#db4437', mt: overSmSize ? 0 : 4, ml: overSmSize ? 10 : 0 }}
                  onClick={(e: MouseEvent<HTMLElement>) => {
                    e.preventDefault()
                    window.open(`${process.env.NEXT_PUBLIC_BACK_END_API}/google`)
                  }}
                  startIcon={<Google />}
                >
                  Google
                </Button>
              </Link>
            </Box> */}
          </form>
        </BoxWrapper>
      </Box>
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

LoginPage.guestGuard = true

export default LoginPage
