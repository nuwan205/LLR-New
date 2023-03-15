// ** React Imports
// ** Next Imports
// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'

// import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'

// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// ** Icons Imports
// ** Third Party Imports
// ** Configs
// ** Layout Import
// import BlankLayout from 'src/@core/layouts/BlankLayout'
// ** Hooks
import Button from '@mui/material/Button'

// import { useSettings } from 'src/@core/hooks/useSettings'

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

export default function Payment() {
  return (
    <BoxWrapper>
      <Button
        fullWidth
        size='large'
        type='submit'
        variant='contained'
        sx={{ ml: 1, mb: 7 }}
        onClick={() => {
          //  TODO
        }}
      >
        Pay with Stripe
      </Button>
    </BoxWrapper>
  )
}
