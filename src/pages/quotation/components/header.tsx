import { Grid, Typography } from "@mui/material";

const Header = () => {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant='h5' color={'black'} sx={{ mt: 6, fontWeight: 700 }}>
                    Landlord Insurance
                </Typography>
                <Typography variant='subtitle2' color={'black'} sx={{ mb: 2, mt: -1 }}>
                    Get a quote in minutes
                </Typography>
            </Grid>
        </>
    );
}

export default Header;