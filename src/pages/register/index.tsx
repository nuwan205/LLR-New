// ** React Imports
import { Fragment, ReactNode, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

// ** Next Imports
import Link from 'next/link'

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

// import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

// ** Icons Imports
// import Google from 'mdi-material-ui/Google'
// import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

// ** Configs
// ** Layout Import
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

// ** Hooks
import Image from 'next/image'
import authConfig from 'src/configs/auth'
import errorHandler from 'src/utils/errorHandler'
import { Backdrop, Fade, Modal, Toolbar } from '@mui/material'
import { api } from 'src/utils/api'
import ReCAPTCHA from 'react-google-recaptcha'

const defaultValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  terms: false
}

interface FormData {
  email: string
  terms: boolean
  name: string
  password: string
  confirmPassword: string
}

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
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const steps = ['User Info', 'Payment Info']
const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8
}

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // ** Hooks
  // const overSmSize = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  // ** Vars
  const schema = yup.object().shape({
    password: yup.string().min(6).required(),

    // TODO - confirm password condition
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const showRecaptcha = process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === 'true'

  const onSubmit = async (data: FormData) => {
    const { email, name, password } = data

    const token = recaptchaRef.current?.getValue() || ''

    recaptchaRef.current?.reset()
    setLoading(true)
    try {
      const toolkit = router.query.toolkit

      console.log(router.query)

      await api.post(authConfig.registerEndpoint, {
        email,
        firstName: name,
        password,
        token,
        toolkitId: toolkit || null
      })

      // reset form data
      reset(defaultValues)
      setLoading(false)
      setOpen(true)
    } catch (err) {
      setLoading(false)
      toast.error(errorHandler(err))
    }
  }

  return (
    <>
      <Toolbar />
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
              <TypographyStyled variant='h5'>Sign up</TypographyStyled>
              <Typography variant='body2'>Create an account to join our platform</Typography>
            </Box>
            <Box sx={{ my: 6, textAlign: 'center' }}>
              <Stepper activeStep={0}>
                {steps.map(label => {
                  const stepProps: { completed?: boolean } = {}
                  const labelProps: { optional?: ReactNode } = {}

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </Box>

            {
              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        autoFocus
                        value={value}
                        onBlur={onBlur}
                        label='Name'
                        onChange={onChange}
                        placeholder='johndoe'
                        error={Boolean(errors.name)}
                      />
                    )}
                  />
                  {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        value={value}
                        label='Email'
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.email)}
                        placeholder='user@email.com'
                      />
                    )}
                  />
                  {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
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
                        label='Password'
                        onBlur={onBlur}
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
                  {!errors.password && (
                    <FormHelperText sx={{ mb: 1 }}>Password must be at least 6 characters long</FormHelperText>
                  )}
                  {errors.password && (
                    <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                    Confirm Password
                  </InputLabel>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        value={value}
                        label='Confirm Password'
                        onBlur={onBlur}
                        onChange={onChange}
                        id='auth-login-v2-confirm-password'
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
                  {errors.confirmPassword && (
                    <FormHelperText sx={{ color: 'error.main' }}>{errors.confirmPassword.message}</FormHelperText>
                  )}
                </FormControl>

                <FormControl sx={{ my: 0 }} error={Boolean(errors.terms)}>
                  <Controller
                    name='terms'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <FormControlLabel
                          sx={{
                            ...(errors.terms ? { color: 'error.main' } : null),
                            '& .MuiFormControlLabel-label': { fontSize: '0.875rem' }
                          }}
                          control={
                            <Checkbox
                              checked={value}
                              onChange={onChange}
                              sx={errors.terms ? { color: 'error.main' } : null}
                            />
                          }
                          label={
                            <Fragment>
                              <Typography
                                variant='body2'
                                component='span'
                                sx={{ color: errors.terms ? 'error.main' : '' }}
                              >
                                I agree to{' '}
                              </Typography>
                              <Link href='/privacy-terms' passHref>
                                <Typography
                                  variant='body2'
                                  component={MuiLink}
                                  sx={{ color: 'primary.main' }}
                                  onClick={() => router.push('/privacy-terms')}
                                >
                                  privacy policy & terms
                                </Typography>
                              </Link>
                            </Fragment>
                          }
                        />
                      )
                    }}
                  />
                  {errors.terms && (
                    <FormHelperText sx={{ mt: 0, color: 'error.main' }}>{errors.terms.message}</FormHelperText>
                  )}
                </FormControl>
                {showRecaptcha && (
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 4, justifyContent: 'center' }}>
                    <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''} />
                  </Box>
                )}
                <Button fullWidth size='large' type={loading ? 'button' : 'submit'} variant='contained' sx={{ mb: 7 }}>
                  {loading ? 'Loading...' : 'Proceed to Payment Info'}
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
                  <Typography>
                    <Link passHref href='/login'>
                      <Typography component={MuiLink} sx={{ color: 'primary.main' }}>
                        Sign in instead
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
                {/* <Divider sx={{ mt: 5, mb: 7.5, '& .MuiDivider-wrapper': { px: 4 } }}>or</Divider> */}

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
            }
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              open={open}
              onClose={() => setOpen(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Image alt='logo' src='/images/logos/LLRlogo.svg' width={100} height={30} />
                  <Typography
                    id='transition-modal-title'
                    variant='h6'
                    component='h2'
                    textAlign={'center'}
                    sx={{ margin: '1rem 0 ' }}
                  >
                    Thank you for registering
                  </Typography>
                  <Typography id='transition-modal-description' sx={{ mt: 2 }} textAlign={'center'}>
                    We have sent a verification code to your email address. Please verify your registration by clicking
                    the link
                  </Typography>
                  <Button
                    variant='contained'
                    sx={{ mt: 6 }}
                    onClick={() => {
                      setOpen(false)
                      router.push('/')
                    }}
                  >
                    Close
                  </Button>
                </Box>
              </Fade>
            </Modal>
          </BoxWrapper>
        </Box>
      </Box>
    </>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

Register.guestGuard = true

export default Register
