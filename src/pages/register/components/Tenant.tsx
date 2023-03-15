// ** React Imports
// ** Next Imports
// ** MUI Components
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

// import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'

// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// ** Icons Imports
// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

// ** Configs
// ** Layout Import
// import BlankLayout from 'src/@core/layouts/BlankLayout'
// ** Hooks

// import { useSettings } from 'src/@core/hooks/useSettings'

const defaultValues = {
  first_name: '',
  last_name: '',
  address: ''
}

// interface FormData {
//   email: string
//   terms: boolean
//   username: string
//   password: string
// }

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

export default function Tenant() {
  // ** Vars
  // const { skin } = settings
  const schema = yup.object().shape({
    first_name: yup.string().min(3).required(),
    last_name: yup.string().min(3).required(),
    address: yup.string().min(3).required()
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

  const onSubmit = () => {
    //  TODO
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
                label="Tenant's First Name"
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
                label="Tenant's Last Name"
                onChange={onChange}
                placeholder='ex: Doe'
                error={Boolean(errors.last_name)}
              />
            )}
          />
          {errors.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.last_name.message}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth>
          <Controller
            name='address'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label="Tenant's Address"
                onChange={onChange}
                placeholder='ex: '
                error={Boolean(errors.address)}
              />
            )}
          />
          {errors.address && <FormHelperText sx={{ color: 'error.main' }}>{errors.address.message}</FormHelperText>}
        </FormControl>
      </form>
    </BoxWrapper>
  )
}
