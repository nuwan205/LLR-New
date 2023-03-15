// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import Banner from 'src/views/landing/Banner'
import InformationCards from '../views/landing/InformationCards'
import WhatIsToolkit from '../views/landing/WhatIsToolkit'
import RentGuarantee from '../views/landing/RentGuarantee'
import HomeEmergency from 'src/views/landing/HomeEmergency'

// import LandlordBuilding from 'src/views/landing/LandlordBuilding'
// import LandlordContent from 'src/views/landing/LandLordContent'
// import LandlordProperty from 'src/views/landing/LandlordProperty'
import Footer from 'src/views/landing/Footer'

function Landing() {
  return (
    <Box>
      <Banner />
      <InformationCards />
      <WhatIsToolkit />
      <RentGuarantee />
      <HomeEmergency />
      {/* <LandlordBuilding /> */}
      {/* <LandlordContent /> */}
      {/* <LandlordProperty /> */}
      <Footer />
    </Box>
  )
}

Landing.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

Landing.authGuard = false

export default Landing
