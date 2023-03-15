import { Container, Link, Toolbar, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import Footer from 'src/views/landing/Footer'

export default function ComplaintsProcedure() {
  return (
    <div
      style={{
        background: '#f3f3f3',
        minHeight: '100vh',
        height: '100%',
        fontFamily:
          'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
      }}
    >
      <Container>
        <Toolbar />
        <Typography variant='h4' sx={{ my: 8, fontWeight: 'bold', textAlign: 'center' }}>
          Complaints procedure
        </Typography>
        <section>
          <p>
            Our single operational objective is to delight customers, so we take all complaints seriously. If there are
            any issues and you are a customer, your Relationship Manager should be your first port of call. If you are
            unsatisfied with the outcome, you can follow our formal complaints procedure outlined below.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Stage one
          </Typography>
          <p>Please get in touch with us at the earliest opportunity by logging your complaint via:</p>
          <ul>
            <li>Telephone – 01926 942170</li>
            <li>
              Email – <Link href='mailto:complaints@landlordsrescue.com'>complaints@landlordsrescue.com</Link>
            </li>
            <li>Post – Landlords Rescue -Fullford House, Newbold Terrace, Leamington Spa, Warwickshire, CV32 4EA</li>
          </ul>
        </section>

        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Stage two
          </Typography>
          <p>
            Your enquiry will be handled by an appropriate senior member in the relationship management team who will
            get in touch to discuss the complaint. We will aim to respond to your enquiry within 10 working days, with a
            resolution as soon as possible.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Stage three
          </Typography>
          <p>
            If you are unhappy with the resolution, you may wish to lodge an appeal. Please raise this with the
            appropriate senior member within 28 calendar days of receiving a response from them. Include the grounds of
            your appeal. The appeal will then be considered by a Directors of the organisation for final internal
            review.
          </p>
        </section>
      </Container>
      <Toolbar />
      <Footer />
    </div>
  )
}

ComplaintsProcedure.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

ComplaintsProcedure.guestGuard = true
