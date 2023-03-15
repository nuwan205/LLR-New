// ** MUI Imports
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

export const PaymentForm = () => {
  // ** States
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const style = {
    maxWidth: '35rem',
    margin: 'auto',
    marginTop: '5em'
  }

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      setLoading(false)

      return
    }
    const { error, paymentIntent }: any = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })

    setLoading(false)

    if (error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(error.message)
      setError(error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      console.log(paymentIntent.status)
      setStatus(paymentIntent.status)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={style}>
        <div>
          <PaymentElement />
        </div>
        <Button variant='contained' type='submit' sx={{ width: '100%', mt: 5 }}>
          {loading ? 'loading...' : 'Pay'}
        </Button>
        {error && <div className='error'>{error}</div>}
        {status && <div className='success'>{status}</div>}
      </form>
    </Box>
  )
}

export default PaymentForm
