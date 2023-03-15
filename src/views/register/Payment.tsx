// ** MUI Imports
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

// type StripeResponse = {
//   error?: StripeError | undefined
//   paymentIntent: any
// }

const Payment = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [apiRes, setApiRes] = useState(null)
  const style = {
    maxWidth: '35rem',
    margin: 'auto',
    marginTop: '5em'
  }

  const stripe = useStripe()
  const elements = useElements()

  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return ''
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setLoading(true)

    const client_secret = 'pi_3LfdFyFW54Zo0YaR2DQel58g_secret_84LaCAihhnfs1LrFsmmltwj47'

    const cardElement = elements.getElement(CardElement)!
    const { error, paymentIntent }: any = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'test user'
        }
      }
    })
    if (error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(error.message)
      setError(error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      console.log(paymentIntent.status)
      setApiRes(paymentIntent.status)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={style}>
        <div>{/* <CardElement /> */}</div>
        <button type='submit' disabled={!stripe || !elements} className={'payButton'}>
          {loading ? 'loading...' : 'Pay'}
        </button>
        {error && <div className='error'>{error}</div>}
        {apiRes && <div className='success'>{apiRes}</div>}
      </form>
    </Box>
  )
}

export default Payment
