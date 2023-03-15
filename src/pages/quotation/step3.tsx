import { Box, Card, CardContent, CardHeader, Grid, Typography, ToggleButton} from '@mui/material';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// streper
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { ReactNode, useState } from 'react';

//Header
import Header from './components/header';
import StepLink from './components/stepLink';


const MuiToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: '#0070F3'
    }
});

const DMuiToggleButton = styled(ToggleButton)({
    border: 'none',
    fontStyle: 'underline',
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: '#d9534f'
    }
});

function Qstep3() {

    const theme = useTheme();
    const [include, setInclude] = useState(1);
    const steps = ['Cover Options', "About your Property", "Agreements", "Your Quote"];

    const handle_include = (num: any) => {
        setInclude(num);
    }

    return (
        <div>
            <Box>
                <Box sx={{ my: 6 }}>
                    <Stepper activeStep={2} alternativeLabel>
                        {steps.map(label => {
                            const stepProps: { completed?: boolean } = {}
                            const labelProps: { optional?: ReactNode } = {}

                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel  {...labelProps}>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                </Box>
                <Grid container spacing={6}>
                    <Header></Header>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Agreements and Assumptions" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={12} sm={9}>
                                        <Typography sx={{ fontSize: 13, mt: -5 }} gutterBottom>
                                            To make obtaining a quote as straightforward as possible, we have "pre-ticked" a number of frequently asked questions. You may adjust any of these assumptions in this
                                            section if they are incorrect. Select "disagree" to make any revisions, or "agree" to go to the quotes section.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 12 }}>
                                        <Typography sx={{ fontSize: 16, mt: -5 }} gutterBottom lineHeight={2}>
                                            <ol>
                                                <li>The property is built of brick, stone or concrete walls, with a tile or slate roof</li>
                                                <li>No more than 25% of the total roof area is flat.</li>
                                                <li>The property is not used for business purposes, other than occasional clerical work</li>
                                                <li>The property will not be left unoccupied for more than 60 consecutive days</li>
                                                <li>The property is not listed</li>
                                                <li>The home has never suffered from flooding (from external sources such as sea, river, rainfall)</li>
                                                <li>The home has not suffered from subsidence, heave or landslip damage</li>
                                                <li>You or your partner do not have one of the following occupations: Professional entertainer, footballer, boxer, athlete or gambler, a money lender or full time student</li>
                                                <li>No person to be insured has any unspent convictions, police cautions, or has any prosecutions pending. If a conviction is 'spent', you don't need to tell us about it. If you're not sure if a previous conviction is spent, independent assistance is available for convictions in England and Wales at disclosurecalculator.org.uk or by calling Unlock's helpline on 01634 247350.For convictions in Scotland: mygov.scotFor convictions in Northern Ireland: nidirect.gov.ukSee our Privacy Notice section in the Important Information for the product, for more details.</li>
                                                <li>No person to be insured has ever had insurance refused, cancelled or offered with terms imposed</li>
                                            </ol>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Grid container xs={12} sx={{ my: 8, mb: 10 }} >
                            <Grid item xs={12} sm={3}>
                                <Typography sx={{ fontSize: 13, fontWeight: 400, my: 3 }} color='#0A3360'>
                                    Are all assumptions correct?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3} >
                                <MuiToggleButton value="1" selected={include == 1 ? true : false} onChange={() => {
                                    handle_include(1)
                                }} sx={{
                                    borderRadius: 0.5, textTransform: 'none', px: 16, color: '#0063cc', borderColor: '#0062cc'
                                }}>
                                    I agree
                                </MuiToggleButton>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3} sx={{
                                [theme.breakpoints.down('sm')]: {
                                    marginTop: 5,
                                }
                            }}>
                                <DMuiToggleButton sx={{ color: '#d9534f', borderRadius: 0.5, textTransform: 'none', px: 10, textDecoration: 'underline' }} value="2" selected={include == 2 ? true : false} onChange={() => {
                                    handle_include(2)
                                }}>
                                    I disagree
                                </DMuiToggleButton>
                            </Grid>
                        </Grid>
                        <StepLink prev="2" next="4" ></StepLink>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Qstep3
