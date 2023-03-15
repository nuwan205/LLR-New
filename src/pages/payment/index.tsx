// ** React Imports
import { ReactNode } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// ** Next Imports
import Image from 'next/image'

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

import PaymentForm from 'src/views/payment/PaymentForm'

const stripePromise = loadStripe(process.env.STRIPE_CLIENT_SECRET || '')

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  }
}))

const clientSecret = 'pi_3LfdpzFW54Zo0YaR1OauST4h_secret_HIZVC5v2G3toizqvQd3d9HHTG'

const PaymentPage = () => {
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

          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm />
          </Elements>
        </BoxWrapper>
      </Box>
    </Box>
  )
}

PaymentPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

PaymentPage.guestGuard = true

export default PaymentPage
