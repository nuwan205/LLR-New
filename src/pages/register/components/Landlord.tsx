// ** React Imports
import { useState } from 'react'

// ** Next Imports
// ** MUI Components
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

// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

// ** Configs
// ** Layout Import
// import BlankLayout from 'src/@core/layouts/BlankLayout'
// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// import { useSettings } from 'src/@core/hooks/useSettings'

const defaultValues = {
  first_name: '',
  last_name: '',
  address: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false
}

interface FormData {
  first_name: string
  last_name: string
  address: string
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

// const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
//   width: '100%',
//   [theme.breakpoints.up('md')]: {
//     maxWidth: 400
//   },
//   [theme.breakpoints.up('lg')]: {
//     maxWidth: 450
//   }
// }))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

// const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
//   fontWeight: 600,
//   letterSpacing: '0.18px',
//   marginBottom: theme.spacing(1.5),
//   [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
// }))

// const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   '& .MuiFormControlLabel-label': {
//     fontSize: '0.875rem',
//     color: theme.palette.text.secondary
//   }
// }))

export default function Part1() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  // const theme = useTheme()
  const { registerLandlord } = useAuth()

  // const { settings } = useSettings()
  // const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  // const { skin } = settings
  const schema = yup.object().shape({
    first_name: yup.string().min(3).required(),
    last_name: yup.string().min(3).required(),
    address: yup.string().min(3).required(),
    email: yup.string().email().required(),
    username: yup.string().min(5).required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().min(6).required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const {
    control,

    // setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    registerLandlord()

    // const { first_name, last_name, address, email, password, confirmPassword } = data
    // registerLandlord({ first_name, last_name, address, email, password, confirmPassword }, err => {
    //   if (err.first_name) {
    //     setError('first_name', {
    //       type: 'manual',
    //       message: err.first_name
    //     })
    //   }
    //   if (err.last_name) {
    //     setError('last_name', {
    //       type: 'manual',
    //       message: err.last_name
    //     })
    //   }
    //   if (err.last_name) {
    //     setError('address', {
    //       type: 'manual',
    //       message: err.address
    //     })
    //   }
    //   if (err.email) {
    //     setError('email', {
    //       type: 'manual',
    //       message: err.email
    //     })
    //   }
    //   if (err.password) {
    //     setError('password', {
    //       type: 'manual',
    //       message: err.password
    //     })
    //   }
    //   if (err.confirmPassword) {
    //     setError('confirmPassword', {
    //       type: 'manual',
    //       message: err.confirmPassword
    //     })
    //   }
    // })
  }

  return (
    <BoxWrapper>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
            name='first_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                autoFocus
                value={value}
                onBlur={onBlur}
                label='First Name'
                onChange={onChange}
                placeholder='ex: John'
                error={Boolean(errors.first_name)}
              />
            )}
          />
          {errors.first_name && (
            <FormHelperText sx={{ color: 'error.main' }}>{errors.first_name.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
            name='last_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label='Last Name'
                onChange={onChange}
                placeholder='ex: Doe'
                error={Boolean(errors.last_name)}
              />
            )}
          />
          {errors.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.last_name.message}</FormHelperText>}
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
          <Controller
            name='address'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label='Address'
                onChange={onChange}
                placeholder='ex: '
                error={Boolean(errors.address)}
              />
            )}
          />
          {errors.address && <FormHelperText sx={{ color: 'error.main' }}>{errors.address.message}</FormHelperText>}
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
          {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor='auth-login-v2-confirmPassword' error={Boolean(errors.confirmPassword)}>
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
                id='auth-login-v2-confirmPassword'
                error={Boolean(errors.confirmPassword)}
                type={showPassword ? 'text' : 'confirmPassword'}
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
      </form>
    </BoxWrapper>
  )
}
