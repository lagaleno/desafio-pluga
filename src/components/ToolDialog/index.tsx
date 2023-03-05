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
import { ToolDetailsStyles } from './styles';


interface IProp {
    open: boolean;
    handleCloseModal: any;
    tool: ITool;
    recentlyViewedTools: ITool[];
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    // overflow:'scroll',
    bgcolor: 'background.paper',
    p: 4,
  };

const mountRecentViewedTools = (list: ITool[]) => {
    if (list.length >= 1) {
        return (
            list.map((tool) => (
                <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
                    <ToolsCard tool={tool} />
                </Grid>
            ))
        )
    }
    return (
        <>
            <h6> Interja com as ferramentas </h6>
        </>
    )
}

// TODO: diminuir esse component (separar em funções que retornam JSX, talvez sub componentes)
const ToolDialog = ({ open, handleCloseModal, tool, recentlyViewedTools }: IProp): JSX.Element => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
        fullScreen={fullScreen}
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
                <Grid container spacing={5} justifyContent="center">
                    <Grid item>
                        <Image width={150} height={150} src={tool.icon} alt={tool.name} className="iconStyle" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6"> {tool.name} </Typography>
                        <Button target="_blank" variant="contained" href={tool.link}>Acessar</Button>
                    </Grid>
                </Grid>
            </ToolDetailsStyles>
            <Grid container spacing={5} justifyContent="left">
                <Grid item>
                    <Typography variant="h5"> Visualizados Recentemente </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} justifyContent="center">
                {
                    mountRecentViewedTools(recentlyViewedTools)
                }
            </Grid>
        </DialogContent>
      </Dialog>
    )

}

export default ToolDialog;