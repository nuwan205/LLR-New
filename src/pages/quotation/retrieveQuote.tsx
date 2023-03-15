import { Box, Button, Card, CardContent, FormControl, Grid, InputBase, Link, Stack, Typography } from '@mui/material'

// import { Controller } from 'react-hook-form'
import { alpha, styled, useTheme } from '@mui/material/styles';
import router from 'next/router';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '16.5px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0063cc !important',
        color: 'white',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    }
    ,
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


function RetriveQ() {
    const theme = useTheme();
    
    return (
        <div>
            <Box>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography sx={{ my: 6, fontSize: 22, fontWeight: 700 }}>
                            Please enter the following details to access your saved quote.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={12} sm={10} sx={{ mt: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Quote reference number
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Your quote reference number can be found on your quote confirmation email and is made up of letters ‘QTE’ and 9 numbers.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard">
                                            <BootstrapInput placeholder="Enter reference number" id="bootstrap-input" />
                                            <Typography sx={{ fontSize: 13, color: '#0070F3' }} gutterBottom>
                                                <Link sx={{ cursor: 'pointer' }}> Don't know your quote number?</Link>
                                            </Typography>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={10} sx={{ mt: 6 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            First Name
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Enter first name as done on your original quote.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard">
                                            <BootstrapInput placeholder="First Name" id="bootstrap-input" />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={10} sx={{ mt: 6 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Last Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard">
                                            <BootstrapInput placeholder="Last Name" id="bootstrap-input" />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={10} sx={{ mt: 6 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Postcode
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Please enter the postcode for the property you wish to insure.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard">
                                            <BootstrapInput placeholder="Enter Post Code" id="bootstrap-input" />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={10} sx={{ mt: 6 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Date of Birth
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ mb: 12 }}>
                                        <Stack direction={"row"} spacing={4}>
                                            <FormControl fullWidth variant="standard" sx={{
                                                width: '15%', [theme.breakpoints.down('sm')]: {
                                                    width: '25%',
                                                }
                                            }}>
                                                <BootstrapInput type='number' placeholder="DD" id="bootstrap-input" inputProps={{
                                                    style: {
                                                        color: 'black',
                                                        fontWeight: 700,
                                                        textAlign: 'center'
                                                    }
                                                }} />
                                            </FormControl>
                                            <FormControl fullWidth variant="standard" sx={{
                                                width: '15%', [theme.breakpoints.down('sm')]: {
                                                    width: '25%',
                                                }
                                            }}>
                                                <BootstrapInput type='number' placeholder="MM" id="bootstrap-input" inputProps={{
                                                    style: {
                                                        color: 'black',
                                                        fontWeight: 700,
                                                        textAlign: 'center'
                                                    }
                                                }} />
                                            </FormControl>
                                            <FormControl fullWidth variant="standard" sx={{
                                                width: '30%', [theme.breakpoints.down('sm')]: {
                                                    width: '40%',
                                                }
                                            }}>
                                                <BootstrapInput type='number' inputProps={{
                                                    style: {
                                                        color: 'black',
                                                        fontWeight: 700,
                                                        textAlign: 'center'
                                                    }, inputProps: { min: 0, max: 10 }
                                                }} placeholder="YYYY" id="bootstrap-input" />
                                            </FormControl>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                        <Grid container xs={12} sx={{ my: 6, display: 'flex', justifyContent: 'space-between' }} >
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <BootstrapButton variant='contained' sx={{
                                    color: '#0070F3', borderRadius: 0.5, textTransform: 'none', px: 10, py: 4, backgroundColor: 'white', [theme.breakpoints.down('sm')]: {
                                        px: 1,
                                    }
                                }} onClick={() => {
                                    router.push(``)
                                }}>
                                    Retrieve Quote
                                </BootstrapButton>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <BootstrapButton variant='contained' sx={{
                                    color: '#0070F3', borderRadius: 0.5, border: '1px solid #0070F3', textTransform: 'none', px: 10, py: 4, [theme.breakpoints.down('sm')]: {
                                        px: 1,
                                    }
                                }} onClick={() => {
                                    router.push(`/quotation/step1/`)
                                }}>
                                    Get a quote instead
                                </BootstrapButton>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div >
    )
}

export default RetriveQ
