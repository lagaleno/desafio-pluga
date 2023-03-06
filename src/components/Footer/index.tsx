import React from 'react'

// MUI components import
import { Box, Grid, Typography } from '@mui/material';

import { FooterStyle } from './styles';

const Footer = (): JSX.Element => {
    return ( 
        <Box sx={{ m: 2 }}>
            <FooterStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="overline" display="block" align="right">
                            Feito por: <a href="https://github.com/lagaleno"> @lagaleno </a>
                        </Typography>
                    </Grid>
                </Grid>
            </FooterStyle>
        </Box>
    )
}

export default Footer;
