// ** React Imports
import { ReactNode, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import * as yup from 'yup'

// ** MUI Components
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

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
import { yupResolver } from '@hookform/resolvers/yup'
import { FormControl } from '@mui/material'

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

const defaultValues = {
  password: '',
  confirmPassword: ''
}

const schema = yup.object().shape({
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().min(6).required()
})

const ResetPassword = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [modal, setModal] = useState(false)

  const router = useRouter()

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

  const onSubmit = async (data: { password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords not matched')
    }
    setLoading(true)
    const { userId, token } = router.query
    await api
      .post('/reset-password', { password: data.password, id: userId, token })
      .then(() => {
        setLoading(false)
        reset()
        setModal(true)
      })
      .catch(err => {
        setLoading(false)
        toast.error(errorHandler(err))
      })
  }

  return (
    <div>
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
              <TypographyStyled variant='h5'>Reset Password 🔒</TypographyStyled>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>
                )}
              </FormControl>

              <Button fullWidth size='large' type={loading ? 'button' : 'submit'} variant='contained' sx={{ my: 7 }}>
                {loading ? 'Loading...' : 'Reset Password'}
              </Button>
            </form>

            <ModalComponent
              open={modal}
              onClose={() => {
                setModal(false)
                router.replace('/')
              }}
              title={'Reset Password'}
              subHeader={'Your password reset successfully.'}
            >
              <Button fullWidth variant='contained' onClick={() => router.replace('/')} sx={{ mt: 6 }}>
                Close
              </Button>
            </ModalComponent>
          </BoxWrapper>
        </Box>
      </Box>
    </div>
  )
}

ResetPassword.guestGuard = true
ResetPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ResetPassword
