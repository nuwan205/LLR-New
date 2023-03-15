import { Button, Grid } from '@mui/material'
import React from 'react'

const steps = ['Landlord', 'Property', 'Tenant']

type ActionButtonsProps = {
  activeStep: number
  setActiveStep: (arg0: number) => void
}

export default function ActionButtons({ activeStep, setActiveStep }: ActionButtonsProps) {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ py: 6, textAlign: 'center' }}
    >
      <Grid item>
        <Button
          component='button'
          size='large'
          variant='outlined'
          disabled={activeStep === 0}
          onClick={activeStep === 0 ? undefined : () => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
      </Grid>
      <Grid item>
        {activeStep + 1 === steps.length ? (
          <Button component='button' size='large' color='primary' variant='contained'>
            Proceed to dashboard
          </Button>
        ) : (
          <Button
            type='submit'
            size='large'
            color='primary'
            variant='contained'
            disabled={activeStep + 1 === steps.length}
            onClick={activeStep + 1 === steps.length ? undefined : () => setActiveStep(activeStep + 1)}
          >
            Next
          </Button>
        )}
      </Grid>
    </Grid>
  )
}
