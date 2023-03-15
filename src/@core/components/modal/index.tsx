import { Backdrop, Fade, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { ReactNode } from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  subHeader?: string
  children: ReactNode
}

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
  p: 8
}

export default function ModalComponent({ open, onClose, title, subHeader, children }: ModalProps) {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Image alt='logo' src='/images/logos/LLRlogo.svg' width={100} height={30} />
          <Typography id='transition-modal-title' variant='h6' component='h2' textAlign={'center'} sx={{ mt: 8 }}>
            {title}
          </Typography>
          {subHeader && (
            <Typography id='transition-modal-description' sx={{ mt: 2 }} textAlign={'center'}>
              {subHeader}
            </Typography>
          )}

          <Box>{children}</Box>
        </Box>
      </Fade>
    </Modal>
  )
}
