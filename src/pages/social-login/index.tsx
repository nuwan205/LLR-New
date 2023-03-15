import { Backdrop, Button, Fade, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { useAuth } from 'src/hooks/useAuth'
import { PROVIDERS, STAGE } from 'src/utils/constants'
import errorHandler from 'src/utils/errorHandler'
import { setItem } from 'src/utils/localStorageHelper'
import userStageRedirect from 'src/utils/userstageRedirect'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border: 'none',
  p: 8
}

type LookupUser = {
  stage: string
  isVerified: boolean
  providerType: 'LOCAL' | 'FACEBOOK' | 'GOOGLE'
  accessToken: string | null
  refreshToken: string | null
}

function SocialLogin() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState<LookupUser | null>(null)

  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    lookupUser()
  }, [])

  useEffect(() => {
    if (user?.stage === STAGE.PAYMENT && user.providerType !== PROVIDERS.LOCAL) {
      router.push('/register/payment')
    } else {
      setOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const lookupUser = async () => {
    // const data = await axios.get('http://localhost:4010/api/v1/identity-login')
    fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/identity-login`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
      .then(response => {
        if (response.status === 200) return response.json()
        throw new Error('authentication has been failed!')
      })
      .then(res => {
        setUser(res)
        if (res.providerType !== PROVIDERS.LOCAL) {
          setItem('accessToken', res.accessToken)
          setItem('refreshToken', res.refreshToken)
          setItem('userData', JSON.stringify({ email: res.email, stage: res.stage }))
          const loggedUser = {
            id: res.id,
            email: res.email,
            stage: res.stage,
            name: res.firstName,
            imageUrl: null,
            isAdmin: false
          }
          auth.setUser(loggedUser)
          userStageRedirect(res.stage, router)
        } else {
          setOpen(true)
        }
      })
      .catch(err => {
        toast.error(errorHandler(err))
      })
  }
  if (!user) return null

  const isLocalUser = user.providerType === PROVIDERS.LOCAL

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Image alt='logo' src='/images/logos/LLRlogo.svg' width={100} height={30} />
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              textAlign={'center'}
              sx={{ margin: '1rem 0 ' }}
            >
              {isLocalUser ? 'User already registered' : 'Thank you for registering'}
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }} textAlign={'center'}>
              {isLocalUser ? 'User already exists,Please go to login page' : 'Registration successful'}
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }} textAlign={'center'}>
              {!user.isVerified && isLocalUser && 'Your email is not verified '}
            </Typography>
            {user.isVerified ? (
              <Button
                variant='contained'
                sx={{ mt: 6 }}
                onClick={() => {
                  if (!isLocalUser) {
                    router.push('/register/payment')
                  } else {
                    router.push('/login')
                  }
                }}
              >
                {isLocalUser ? 'Login' : 'Continue'}
              </Button>
            ) : (
              <Button
                variant='contained'
                sx={{ mt: 6 }}
                onClick={() => {
                  // TODO resend verification
                }}
              >
                Resend verification
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

SocialLogin.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

SocialLogin.guestGuard = true

export default SocialLogin
