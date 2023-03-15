import { Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { ReactNode } from 'react'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import Footer from 'src/views/landing/Footer'

export default function ModernSlaveryStatement() {
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
          Modern Slavery Statement
        </Typography>
        <section>
          <p>Introduction from the Board of Directors of Landlordsrescue.com</p>
          <p>
            Slavery in the contemporary era and human trafficking are crimes that affect communities and individuals
            worldwide. Landlords Rescue strictly prohibits forced labour and human trafficking in all of its operations
            and supply chains around the world.
          </p>
          <p>
            Landlords Rescue considers it imperative that, as a business, we meet the requirements of the Modern Slavery
            Act 2015 with complete transparency (the Act).
          </p>
          <p>
            The following statement describes Landlords Rescue's compliance with the Act and outlines the steps we take
            to ensure that modern slavery and human trafficking do not occur within the organisation or its supply
            chains.
          </p>
          <p>
            According to our company values, it is Landlords Rescue's fundamental policy to conduct business with
            honesty, integrity, and adherence to the highest ethical standards.
          </p>
          <p>
            We are committed to a continuous review of our practises to ensure that we continue to comply with the Act's
            requirements.
          </p>
          <p>Committee Of Directors</p>
          <div>
            Kul Rai
            <br />
            TGFP Ltd
          </div>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Our Business
          </Typography>
          <p>Landlords Rescue is the leading provider of integrated products for landlords.</p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Similar Corporate Policies
          </Typography>
          <p>
            In accordance with our Speak Up Policy, Landlords Rescue is committed to ensuring that modern slavery and
            human trafficking do not exist in any part of our business or supply chains.
          </p>
          <p>
            Implementing and enforcing effective systems and controls within our organisation and supply chains provides
            protection against modern slavery and human trafficking.
          </p>
          <p>
            When identified, risks associated with the Act are managed in accordance with the Group Risk Management
            Framework. In addition, the Group employs a Speak Up Policy and actively encourages the reporting and
            exposure of unethical conduct.
          </p>
          <p>Procedure of Due Diligence for Modern Slavery and Human Trafficking</p>
          <p>
            Landlords Rescue employees reside in the United Kingdom. Landlords Rescue has a policy against modern
            slavery and human trafficking that is available upon request to any interested party. Our Position is
            documented in accordance with modern slavery and human trafficking laws. Our policy is to exceed the minimum
            legal due diligence requirements for modern slavery and human trafficking.
          </p>
          <p>Supplier Compliance with Our Values and Vetting Procedures</p>
          <p>
            Modern slavery and human trafficking are met with a zero-tolerance policy. To ensure that our suppliers
            adhere to our values, we categorise them based on their value, the type of services they provide, and their
            risk, and we review our most important suppliers to ensure their compliance with the Act and their efforts
            to combat risks of modern slavery.
          </p>
          <p>
            Landlords Rescue evaluates the diligence of the companies with which it collaborates to ensure, to the
            greatest extent practicable, that they have adequate processes in place to prevent modern slavery and human
            trafficking within their organisations.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Training
          </Typography>
          <p>
            To ensure that our employees have a thorough understanding of the risks of modern slavery and human
            trafficking in our organisation and supply chains, we have provided training to raise awareness of this
            issue throughout Landlords Rescue and continue to update this training annually as part of our regulatory
            programme.
          </p>
        </section>
        <Toolbar />
      </Container>
      <Footer />
    </div>
  )
}

ModernSlaveryStatement.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

ModernSlaveryStatement.guestGuard = true
