import { Button, Typography, Box, CircularProgress, Toolbar } from '@mui/material'
import { TypographyProps } from '@mui/material/Typography'
import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { BoxProps } from '@mui/material/Box'
import { useRouter } from 'next/router'
import errorHandler from 'src/utils/errorHandler'
import { api } from 'src/utils/api'
import { setItem } from 'src/utils/localStorageHelper'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

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

const EmailVerify = () => {
  const [customError, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    const { token, userId } = router.query
    if (typeof token === 'string' && typeof userId === 'string') {
      api
        .post('/user/email-verify', { token, id: userId })
        .then(res => {
          // save local storages
          setItem('accessToken', res.data.accessToken)
          setItem('refreshToken', res.data.refreshToken)
          setItem('userData', JSON.stringify({ email: res.data.profile.email, stage: res.data.stage }))
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          setError(errorHandler(err))
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  if (loading) {
    return (
      <Box
        className='content-right'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress disableShrink sx={{ mt: 6 }} />
      </Box>
    )
  }

  const { toolkit } = router.query
  console.log(router.query)
  let redirectUrl = '/register/payment'
  if (toolkit) {
    redirectUrl = `${redirectUrl}?toolkit=${toolkit}`
  }

  return (
    <div>
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
          <BoxWrapper sx={{ background: 'white' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                minWidth: '300px'
              }}
            >
              <Image alt='logo' src='/images/logos/LLRlogo.svg' width={200} height={60} />
            </Box>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <TypographyStyled variant='h5'>Email Verification</TypographyStyled>
              {!customError && <Typography variant='body2'>You have successflly verified your account</Typography>}
              {customError && (
                <Typography variant='body2' sx={{ color: 'red' }}>
                  {customError}
                </Typography>
              )}
            </Box>
            <Box sx={{ my: 6, textAlign: 'center' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 8 }}>
              <Button type='submit' variant='contained' sx={{ width: '125px' }} onClick={() => router.replace('/')}>
                Cancel
              </Button>
              <Button
                type='submit'
                variant='contained'
                sx={{ width: '125px' }}
                onClick={() => {
                  if (customError) {
                    router.replace('/login')
                  }
                  window.location.replace(redirectUrl)
                }}
              >
                {customError ? 'Login' : 'Continue'}
              </Button>
            </Box>
          </BoxWrapper>
        </Box>
      </Box>
    </div>
  )
}
EmailVerify.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

EmailVerify.guestGuard = true

export default EmailVerify
