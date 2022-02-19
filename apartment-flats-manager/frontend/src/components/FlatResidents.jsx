import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function FlatResidents({ residentsOfFlat }) {
    return (
        <Grid style={{ width: '100%', margin: 'auto' }} container spacing={2}>
            {[darkTheme].map((theme, index) => (
                <Grid item xs={6} key={index}>
                    <ThemeProvider theme={theme}>
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2,
                            }}
                        >
                            {residentsOfFlat.map((resident) => (
                                <Item
                                    style={{ textAlign: 'left' }}
                                    key={resident._id}
                                >
                                    <Typography gutterBottom variant='h5'>
                                        Name: {resident.user_name}
                                    </Typography>
                                    <Typography gutterBottom variant='h5'>
                                        Gender: {resident.gender}
                                    </Typography>
                                    <Typography gutterBottom variant='h5'>
                                        Age: {resident.age}
                                    </Typography>
                                    <Typography gutterBottom variant='h5'>
                                        Phone No: {resident.phone_no}
                                    </Typography>
                                    <hr />
                                </Item>
                            ))}
                        </Box>
                    </ThemeProvider>
                </Grid>
            ))}
        </Grid>
    );
}
