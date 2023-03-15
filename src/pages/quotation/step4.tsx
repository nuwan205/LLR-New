import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography, Select, MenuItem, FormControl, SelectChangeEvent, ToggleButton, Link, List, ListItem, ListItemIcon, ListItemText, ToggleButtonGroup } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

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


function Qstep4() {
    const [formats, setFormats] = useState(() => ['bold', 'italic']);

    const theme = useTheme();
    const [age, setAge] = useState<string | number>('');
    const [open, setOpen] = useState(false);

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

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setFormats(newFormats);
    };

    return (
        <div>
            <Box>
                <Box sx={{ my: 6 }}>
                    <Stepper activeStep={3} alternativeLabel>
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
                        <Box sx={{ backgroundColor: "#FFFFFF", border: '1px solid #ECEEF6', py: 3, px: 2, borderRadius: 1 }} >
                            <Stack direction={"row"} sx={{ alignItems: 'center' }} spacing={2}>
                                <CheckCircleIcon sx={{ fontSize: 30 }} color='primary'></CheckCircleIcon>
                                <Stack>
                                    <Typography sx={{ fontSize: 13 }} gutterBottom>
                                        <span style={{ fontWeight: 500, color: 'black' }}>Quote saved</span> - Details have been emailed to you
                                    </Typography>
                                    <Typography sx={{ fontSize: 13 }} gutterBottom>
                                        Your quote reference number is <span style={{ fontWeight: 500, color: 'black' }}>QTE135267972</span> (valid for 90 days until 23 May 2023)
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card >
                            <CardHeader title="One single payment" titleTypographyProps={{ style: { color: '#ECEEF6', textAlign: 'center', fontSize: 16, fontWeight: 400 } }} sx={{ backgroundColor: '#0070F3' }}></CardHeader>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, textAlign: 'center', color: 'black', py: 6 }} gutterBottom>
                                    £234.51
                                </Typography>
                                <Typography sx={{ fontSize: 16, textAlign: 'center', color: '#0070F3', cursor: 'pointer', textDecoration: 'underline' }} gutterBottom>
                                    <Link>
                                        View your premium breakdown
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card >
                            <CardHeader title="12 monthly payments" titleTypographyProps={{ style: { color: '#ECEEF6', textAlign: 'center', fontSize: 16, fontWeight: 400 } }} sx={{ backgroundColor: '#0070F3' }}></CardHeader>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, textAlign: 'center', color: 'black', pt: 6 }} gutterBottom>
                                    £21.53
                                </Typography>
                                <Typography sx={{ fontSize: 13, textAlign: 'center', color: '#808080', }} gutterBottom>
                                    (24.00% APR)
                                </Typography>
                                <Typography sx={{ fontSize: 13, textAlign: 'center', color: '#636578', pt: 1 }} gutterBottom>
                                    Total amount payable £258.34
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 13, color: '#636578', py: 5 }} gutterBottom>
                            Paying monthly is more expensive than paying annually. This price has been calculated using an automated process.
                        </Typography>
                        <Typography sx={{ fontSize: 19, color: '#636578', fontWeight: 700 }} gutterBottom>
                            Your price includes
                        </Typography>
                        <List>
                            <ListItem >
                                <ListItemIcon>
                                    <CheckIcon sx={{ color: "#0070F3" }} />
                                </ListItemIcon>
                                <ListItemText primary="Online policy documents" />
                            </ListItem>
                        </List>
                    </Grid>
                    {/* //cards */}
                    <Grid item xs={12}>
                        <Card >
                            <CardHeader title="Tailor your policy" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={12} >
                                        <Typography sx={{ fontSize: 13, color: '#636578' }} gutterBottom>
                                            Customise your policy to suit your needs with our optional covers and add-ons.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth sx={{ my: 5 }}>
                                            <Typography sx={{ fontSize: 13, color: 'black' }} gutterBottom>
                                                Choose your level of excess
                                            </Typography>
                                            <Select id="select" open={open}
                                                defaultValue="Select excess"
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
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Contents accidental damage cover (Choose the level of cover you need)
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3'
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{
                                                    fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700, [theme.breakpoints.down('sm')]: {
                                                        px: 1,
                                                    }
                                                }} gutterBottom>
                                                    None
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{ border: '2px solid #0070F3', color: '#0070F3' }} value="hold" aria-label="bold">
                                                <Typography sx={{
                                                    fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700, [theme.breakpoints.down('sm')]: {
                                                        px: 1,
                                                    }
                                                }} gutterBottom>
                                                    Limited
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{ border: '2px solid #0070F3', color: '#0070F3' }} value="yold" aria-label="bold">
                                                <Typography sx={{
                                                    fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700, [theme.breakpoints.down('sm')]: {
                                                        px: 1,
                                                    }
                                                }} gutterBottom>
                                                    Extra
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Legal services <span style={{ fontWeight: 700, color: 'black' }}>£30.89 a year</span> (Expert legal support when you need it most)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Expert legal support for you, your domestic partner and any family members living with you. Plus, you get to keep the entire award if you win your case.
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Home emergency cover<span style={{ fontWeight: 700, color: 'black' }}>£76.00 a year</span>(Cover for household emergencies eg. broken boiler)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            When things go wrong, home emergency cover is there to help put them right. Covering things like:
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                        <Typography sx={{ fontSize: 13, my: 2 }} gutterBottom>
                                            You may already have similar cover elsewhere. Please check.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Increased valuable cover (Extra cover if you have valuables totalling over £10,000)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Our standard policy includes cover for valuables up to £10,000 in total, with a maximum item value of £2,000. We class valuables as being stamp, coin or medal collections; pictures and other works of art; items of gold, silver or any other precious metal; jewellery, watches and furs.<span style={{ fontWeight: 700, color: 'black' }}>Additional valuables </span>- if you have more than £10,000 worth of valuables, you need to increase your cover limit up to a maximum of £30,000.You need to make sure your valuable limit is included in your overall contents sum insured limit. E.g. if you choose £50,000 contents sum insured and a £10,000 valuables limit, then we'd pay up to £10,000 for valuables - but not pay more than £50,000 overall for your contents and valuables - if your home contents were completely destroyed.
                                        </Typography>
                                        <Typography sx={{ fontSize: 13, my: 2 }} gutterBottom>
                                            You may already have similar cover elsewhere. Please check.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth sx={{ my: 4 }}>
                                            <Select id="select" open={open}
                                                defaultValue="Select excess"
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
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Contents protected no claim discount (Choose to protect your contents no claim discount)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            If you protect your no claim discount, you can make two claims in a five year period without losing any of your hard-earned discount.
                                            For contents a third claims means your discount will be reduced and if you make a fourth claim you will lose all your contents discount
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ mt: 12 }}>
                            <CardHeader title="Personal items" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Jewellery and watches (Specify jewellery and watches worth over £2,000 each)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Please tell us if you have any jewellery and watches worth £2,000 or more each, in or away from the home. Please add each item separately. If you have other items worth £2,000 or more each, please refer to the section below 'Have an item worth more than £2,000 which isn't listed' and if appropriate, call us to obtain a quote tailored for your specific needs.
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Personal belongings (Cover items taken out of the home worth £2,000 or less)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Personal belongings are items like laptops, tablets, mobile phones, jewellery, clothing and handbags you may take outside the home. This cover protects items worldwide if they're lost, accidentally damaged or stolen (including from a locked and unattended vehicle if the items were out of sight e.g. in a closed glove box or locked in the boot)*. The most we will pay for theft from vehicles (except cycles) is £1,500. A £2,000 limit applies to single items - Higher valued items can be added separately. Certain items (irrespective of value) must be named on your policy to be covered, including contact lenses, hearing aids, specialist sporting equipment and cycles*. Cover for cycles and higher valued jewellery/watches can be added on this page. For anything else call us.
                                        </Typography>
                                        <Typography sx={{ fontSize: 13, my: 2 }} gutterBottom>
                                            *See policy booklet for full details
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            Pedal cycles (Cover for your cycle when you take it away from home)
                                        </Typography>
                                        <Typography sx={{ fontSize: 13 }} gutterBottom>
                                            Pedal cycles are automatically covered under contents cover when they're kept at home (subject to the policy limits and exclusions). If you want to cover your bikes away from home, including on holiday while abroad you will need this additional cover. It does not matter how many bikes you'd like to insure, just choose the amount that is enough to cover your most expensive cycle.
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    Yes
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 16, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 700 }} gutterBottom>
                                                    No
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 22, color: '#636578', py: 5, fontWeight: 700, textAlign: 'center' }} gutterBottom>
                            High value and other special items you need to tell us about
                        </Typography>
                        <hr></hr>
                        <Grid container xs={12} sx={{ px: 6 }}>
                            <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                    Belongings in your home (Contents cover)
                                </Typography>
                                <Typography sx={{ fontSize: 13, my: 6 }} gutterBottom>
                                    To ensure you have the right cover, you will need to tell us about items classed as valuables (stamp, coin or medal collections, pictures, other works of art, items of gold, silver, other precious metal, jewellery, watches or furs) which are worth more than £2,000 (per item or collection).
                                </Typography>
                                <Typography sx={{ fontSize: 13 }}>
                                    You don't need to tell us about other high value contents items such as furniture or TVs.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} sx={{ px: 6 }}>
                            <Grid item xs={12} sm={9} sx={{ my: 4 }}>
                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                    Belongings away from your home (Personal belongings cover)
                                </Typography>
                                <Typography sx={{ fontSize: 13 }} gutterBottom>
                                    If you need cover while outside your home you need to tell us about:
                                </Typography>
                                <Typography sx={{ fontSize: 13 }}>
                                    <ul>
                                        <li>any of the following items (irrespective of value), hearing aids, contact, corneal cap and micro lenses, snowboards, skis (including sticks and bindings), water skis, subaqua equipment, riding tack and pedal cycles.</li>
                                        <li>ANY other type of item worth over £2,000.</li>
                                    </ul>
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                    You can tell us about pedal cycles, jewellery and watches online, for anything else call us on 0800 xxx xxxx
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ mt: 8 }}>
                            <CardHeader title="Your documents" titleTypographyProps={{ style: { fontWeight: '700' } }}></CardHeader>
                            <hr color='#ECEEF6' />
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={12} sm={9} >
                                        <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            How would you like to receive your documents?
                                        </Typography>
                                        <Typography sx={{ fontSize: 13, mb: 12 }} gutterBottom>
                                            Go paperless and you can easily access your documents at any time in MyAviva. If you'd also like to receive them free of charge in the post, just let us know.
                                        </Typography>
                                        <ToggleButtonGroup
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 5,
                                                }
                                            }} value="bold" aria-label="bold">
                                                <Typography sx={{ fontSize: 13, px: 6, textTransform: 'none', color: 'inherit', fontWeight: 600 }} gutterBottom>
                                                    Online Only
                                                </Typography>
                                            </MuiToggleButton>
                                            <MuiToggleButton sx={{
                                                border: '2px solid #0070F3', color: '#0070F3', px: 13, [theme.breakpoints.down('sm')]: {
                                                    px: 2,
                                                }
                                            }} value="yold" aria-label="bold">
                                                <Typography sx={{ fontSize: 13, textTransform: 'none', color: 'inherit', fontWeight: 600 }} gutterBottom>
                                                    Online & Via Post
                                                </Typography>
                                            </MuiToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 22, color: '#636578', py: 5, fontWeight: 700 }} gutterBottom>
                            Your quote
                        </Typography>
                        <hr></hr>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card >
                            <CardHeader title="Your premium breakdown" titleTypographyProps={{ style: { color: '#ECEEF6', textAlign: 'center', fontSize: 16, fontWeight: 400 } }} sx={{ backgroundColor: '#0070F3' }}></CardHeader>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, color: 'black', pt: 6 }} gutterBottom>
                                    <List>
                                        <ListItem >
                                            <ListItemIcon>
                                                <CheckIcon sx={{ color: "#0070F3" }} />
                                            </ListItemIcon>
                                            <Typography ><span style={{ fontWeight: 500, color: 'black' }}>£234.51</span> Contentss (overall) covered for unlimited sum*</Typography>
                                        </ListItem>
                                    </List>
                                    <Typography sx={{ fontSize: 13, color: '#636578', pt: 12 }} gutterBottom>
                                        *Limits apply to certain types of property or claim. You can view limits <Link sx={{ cursor: 'pointer' }}>here</Link> or in your policy documents.
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mb: 10 }}>
                        <Card >
                            <CardHeader title="Excesses and clauses" titleTypographyProps={{ style: { color: '#ECEEF6', textAlign: 'center', fontSize: 16, fontWeight: 400 } }} sx={{ backgroundColor: '#0070F3' }}></CardHeader>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, textAlign: 'center', color: 'black', pt: 6 }} gutterBottom>
                                    £21.53
                                    <List>
                                        <ListItem >
                                            <ListItemIcon>
                                                <CheckIcon sx={{ color: "#0070F3" }} />
                                            </ListItemIcon>
                                            <ListItemText sx={{ fontSize: 16 }}>
                                                <Typography ><span style={{ fontWeight: 500, color: 'black' }}>£200</span> Contents excess</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem >
                                            <ListItemIcon>
                                                <CheckIcon sx={{ color: "#0070F3" }} />
                                            </ListItemIcon>
                                            <ListItemText sx={{ fontSize: 16 }}>
                                                <Typography ><span style={{ fontWeight: 500, color: 'black' }}>£450</span> Escape of water excess*</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Typography>
                                <Typography sx={{ fontSize: 13, textAlign: 'center', color: '#636578', pt: 1 }} gutterBottom>
                                    *Find more information about your excesses <Link sx={{ cursor: 'pointer' }}>here</Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <StepLink prev="3" next="5" ></StepLink>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Qstep4
