import React from 'react'

// Interface Import
import { ITool } from '@/interfaces/ITool';

// Material UI Components import
import { Box, Button, Grid, Modal, Typography } from '@mui/material';

// Styles import
import { ModalContent, ModalStyle } from './styles';
import Image from 'next/image';
import ToolsCard from '../Card';

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
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


// TODO: diminuir esse component (separar em funções que retornam JSX, talvez sub componentes)
const ToolModal = ({ open, handleCloseModal, tool, recentlyViewedTools }: IProp): JSX.Element => {
    console.log("recentlyViewedTools", recentlyViewedTools)
    return (
        <ModalStyle>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalContent color={tool.color}>
                        <Grid container spacing={5} justifyContent="center">
                            <Grid item>
                                <Image width={150} height={150} src={tool.icon} alt={tool.name} className="iconStyle" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h2"> {tool.name} </Typography>
                                <Button target="_blank" variant="contained" href={tool.link}>Acessar</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={5} justifyContent="left">
                            <Grid item>
                                <Typography variant="h5"> Vizualiados Recentemente </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={5} justifyContent="Center">
                            {
                                recentlyViewedTools.length >= 1 ? 
                                    recentlyViewedTools.map((tool) => (
                                        <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
                                            <ToolsCard tool={tool} />
                                        </Grid>
                                    ))
                                :
                                    <h1> Ainda não abriu nenhum :/</h1>
                            }
                        </Grid>
                    </ModalContent>
                </Box>
            </Modal>
        </ModalStyle>
    )
}

export default ToolModal;