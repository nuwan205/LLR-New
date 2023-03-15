import React from 'react'
import Image from 'next/image'
import Box, { BoxProps } from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  }
}))

export default function StripePaymentSuccess() {
  const router = useRouter()

  return (
    <div>
      <Box
        className='content-right'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWdith: '300px'
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
          <BoxWrapper mx={{ minWidth: '300px' }}>
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
            <Typography id='transition-modal-title' variant='h6' component='h2' textAlign={'center'} sx={{ mt: 8 }}>
              Confirmed!
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }} textAlign={'center'}>
              You have successfully subscribed
            </Typography>
            <Button fullWidth variant='contained' sx={{ my: 7 }} onClick={() => router.replace('/properties')}>
              Continue
            </Button>
          </BoxWrapper>
        </Box>
      </Box>
    </div>
  )
}
