import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography, Select, MenuItem, FormControl, SelectChangeEvent, ToggleButton, InputBase, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KingBedIcon from '@mui/icons-material/KingBed';

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


function Qstep2() {
    const theme = useTheme();
    const [age, setAge] = useState<string | number>('');
    const [open, setOpen] = useState(false);

    const [include, setInclude] = useState(1);

    const steps = ['Cover Options', "About your Property", "Agreements", "Your Quote"];
    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const handle_include = (num: any) => {
        setInclude(num);
    }

    return (
        <div>
            <Box>
                <Box sx={{ my: 6 }}>
                    <Stepper activeStep={1} alternativeLabel>
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
                            <CardHeader title="Property details" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent>
                                <Grid container xs={12} sm={6} sx={{}} >
                                    <Grid item xs={12}>
                                        <FormControl fullWidth variant="standard">
                                            <Typography sx={{ fontSize: 13, mt: -5 }} gutterBottom>
                                                What is the postcode of the property you want to insure?
                                            </Typography>
                                            <BootstrapInput defaultValue="Enter Post Code" id="bootstrap-input" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth sx={{ my: 5 }}>
                                            <Typography sx={{ fontSize: 13 }} gutterBottom>
                                                What's your property type (Residential)?
                                            </Typography>
                                            <Select id="select" open={open}
                                                onClose={handleClose}
                                                onOpen={handleOpen}
                                                value={age}
                                                onChange={handleChange}>
                                                <MenuItem value="10">Ten</MenuItem>
                                                <MenuItem value="20">Twenty</MenuItem>
                                                <MenuItem value="30">Twsenty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} sx={{ my: 3 }} spacing={6} >
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard">
                                            <Typography sx={{ fontSize: 13, mt: -5 }} gutterBottom>
                                                How many bathrooms does your property have?
                                            </Typography>
                                            <Stack direction={"row"} spacing={5}>
                                                <FormControl sx={{ m: 1, maxWidth: 80 }}>
                                                    <Select
                                                        labelId="demo-simple-select-autowidth-label"
                                                        id="demo-simple-select-autowidth"
                                                        value={age}
                                                        onChange={handleChange}
                                                        autoWidth
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Twenty</MenuItem>
                                                        <MenuItem value={21}>Twenty one</MenuItem>
                                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <BathtubIcon sx={{ fontSize: 30, textAlign: 'center', alignSelf: 'center', color: 'inherit' }}></BathtubIcon>
                                            </Stack>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="standard" size='medium'>
                                            <Typography sx={{ fontSize: 13, mt: -5 }} gutterBottom>
                                                How many bedrooms does your property have?
                                            </Typography>
                                            <Stack direction={"row"} spacing={5}>
                                                <FormControl sx={{ m: 1, maxWidth: 80 }}>
                                                    <Select
                                                        labelId="demo-simple-select-autowidth-label"
                                                        id="demo-simple-select-autowidth"
                                                        value={age}
                                                        onChange={handleChange}
                                                        autoWidth
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Twenty</MenuItem>
                                                        <MenuItem value={21}>Twenty one</MenuItem>
                                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <KingBedIcon sx={{ fontSize: 30, textAlign: 'center', alignSelf: 'center', color: 'inherit' }}></KingBedIcon>
                                            </Stack>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container xs={12} sx={{ my: 6 }}>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth>
                                                    <Typography sx={{ fontSize: 13 }} gutterBottom>
                                                        When was your property built?
                                                    </Typography>
                                                    <Select id="select" open={open}
                                                        onClose={handleClose}
                                                        onOpen={handleOpen}
                                                        value={age}
                                                        onChange={handleChange}>
                                                        <MenuItem value="10">Ten</MenuItem>
                                                        <MenuItem value="20">Twenty</MenuItem>
                                                        <MenuItem value="30">Twsenty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 8 }}>
                                                <FormControl fullWidth sx={{}}>
                                                    <Typography sx={{ fontSize: 13 }} gutterBottom>
                                                        How long have you owned this property?
                                                    </Typography>
                                                    <Select id="select" open={open}
                                                        onClose={handleClose}
                                                        onOpen={handleOpen}
                                                        value={age}
                                                        onChange={handleChange}>
                                                        <MenuItem value="10">Ten</MenuItem>
                                                        <MenuItem value="20">Twenty</MenuItem>
                                                        <MenuItem value="30">Twsenty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Your tenants" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent sx={{ my: -3 }}>
                                <Grid container xs={12} sx={{ mb: 12 }} >
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: 13, fontWeight: 400, my: 3 }}>
                                            The entire property will be occupied when the policy starts.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} >
                                        <MuiToggleButton value="1" selected={include == 1 ? true : false} onChange={() => {
                                            handle_include(1)
                                        }} sx={{
                                            borderRadius: 0.5, textTransform: 'none', px: 16, color: '#0063cc', borderColor: '#0062cc'
                                        }}>
                                            I agree
                                        </MuiToggleButton>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} sx={{
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
                                <Grid container xs={12} sm={6} sx={{ my: 6 }}>
                                    <FormControl fullWidth sx={{ width: '95%' }} >
                                        <Typography sx={{ fontSize: 13, mt: -5 }}>What type of tenants will live in this property?</Typography>
                                        <Select id="select1" open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            value={"3"}
                                            onChange={handleChange}>
                                            <MenuItem value="10">Ten</MenuItem>
                                            <MenuItem value="20">Twenty</MenuItem>
                                            <MenuItem value="30">Twsenty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container xs={12} sx={{ mb: 12 }} >
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: 13, fontWeight: 400, my: 3 }}>
                                            Checks are carried out on prospective tenants before any tenancy agreement is signed.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} >
                                        <MuiToggleButton value="1" selected={include == 1 ? true : false} onChange={() => {
                                            handle_include(1)
                                        }} sx={{
                                            borderRadius: 0.5, textTransform: 'none', px: 16, color: '#0063cc', borderColor: '#0062cc'
                                        }}>
                                            I agree
                                        </MuiToggleButton>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} sx={{
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={'#0A3360'} sx={{ mt: 6, fontWeight: 400, fontSize: 17 }}>
                            Which checks are carried out?
                        </Typography>
                        <Stack direction={"row"} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Background and identity checks" />
                                <FormControlLabel control={<Checkbox />} label="Independent references obtained" />
                                <FormControlLabel control={<Checkbox />} label="Credit checks on prospective tenants or their guarantor" />
                                <FormControlLabel control={<Checkbox />} label="Other" />
                            </FormGroup>
                        </Stack>
                        <StepLink prev="1" next="3" ></StepLink>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Qstep2
