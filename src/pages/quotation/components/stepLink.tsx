import { Button, Grid } from "@mui/material";
import { useRouter } from 'next/router'

const StepLink = ({ prev, next }: any) => {
    const router = useRouter()
    
    return (
        <>
            <Grid container xs={12} sx={{ my: 6, display: 'flex', justifyContent: 'space-between' }} >
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button disabled={prev == 0} variant='contained' sx={{ color: '#white', borderRadius: 0.5, textTransform: 'none', px: 10, py: 4, borderColor: '' }} onClick={() => {
                        router.push(`/quotation/step${prev}/`)
                    }}>
                        Back
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='contained' sx={{ color: '#white', borderRadius: 0.5, textTransform: 'none', px: 10, py: 4, borderColor: '' }} onClick={() => {
                        router.push(next == 5 ? '' : `/quotation/step${next}/`)
                    }}>
                        {next == 5 ? 'Get Quote' : 'Continue'}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default StepLink;