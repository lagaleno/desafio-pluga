import React from 'react'

// Interface Import
import { ITool } from '@/interfaces/ITool';

// Material UI Components import
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Components import
import ToolsCard from '../Card';

// Styles import
import Image from 'next/image';
import { RecentlyViewedToolsStyles, ToolDetailsStyles } from './styles';


interface IProp {
    open: boolean;
    handleCloseModal: any;
    tool: ITool;
    recentlyViewedTools: ITool[];
}


const mountRecentViewedToolsList = (list: ITool[]) => {
    if (list.length >= 1) {
        return (
            list.map((tool) => (
                <Grid key={tool.app_id} item xs={12} sm={4} md={4}>
                    {/* Se cliclou chama handleCloseModal*/}
                    <ToolsCard tool={tool} />
                </Grid>
            ))
        )
    }
    return (
        <>
            <Typography variant="h6"> Descubra mais sobre outras ferramentas clicando nos cartões  </Typography>
        </>
    )
}

const mountToolDetails = (tool: ITool, fullScreen: boolean) => {
    return (
        <Grid container rowSpacing={1} columnSpacing={5} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} style={{ textAlign: `${fullScreen ? "center" : "right"}` }}>
                <Image width={150} height={150} src={tool.icon} alt={tool.name} className="iconStyle" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} style={{ textAlign: `${fullScreen ? "center" : "left"}` }}>
                <Typography variant="h6"> {tool.name} </Typography>
                <Button target="_blank" variant="contained" href={tool.link}>Acessar</Button>
            </Grid>
        </Grid>
    )
}

const ToolDialog = ({ open, handleCloseModal, tool, recentlyViewedTools }: IProp): JSX.Element => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Dialog
        fullScreen={fullScreen}
        maxWidth={"md"}
        fullWidth={true}
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{ textAlign: "right" }}>
            <IconButton onClick={handleCloseModal}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <ToolDetailsStyles color={tool.color}>
                {
                    mountToolDetails(tool, fullScreen)
                }
            </ToolDetailsStyles>
            <RecentlyViewedToolsStyles>
                <Grid container rowSpacing={2} columnSpacing={5} justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: `${fullScreen ? "center" : "left"}` }}>
                        <Typography variant="h5"> Últimas Ferramentas Visualizadas </Typography>
                    </Grid>
                    {
                        mountRecentViewedToolsList(recentlyViewedTools)
                    }
                </Grid>
            </RecentlyViewedToolsStyles>
        </DialogContent>
      </Dialog>
    )

}

export default ToolDialog;