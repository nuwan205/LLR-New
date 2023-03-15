import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material'

// import { Controller } from 'react-hook-form'
import { styled } from '@mui/material/styles';



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



function QuoteInd() {
    return (
        <div>
            <Box>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant='h4' sx={{ my: 6 }}>
                            Retrieve a quote or get a new one.
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: 'flex', position: 'relative', py: 2, alignItems: 'center' }}>
                        <Stack direction="row" spacing={7}>
                            <Box>
                                <BootstrapButton size='large' color='primary' variant='outlined' >
                                    <Link sx={{ color: 'inherit' }} href='/quotation/retrieveQuote'>Retrieve quote</Link>
                                </BootstrapButton>
                            </Box>
                            <Box>
                                <BootstrapButton size='large' color='primary' variant='outlined' >
                                    <Link sx={{ color: 'inherit' }} href='/quotation/step1'>Get a quote</Link>
                                </BootstrapButton>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default QuoteInd
