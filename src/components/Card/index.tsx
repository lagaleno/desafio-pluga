import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Interface Import
import { ITool } from '@/interfaces/ITool';

// Components Import
import ToolModal from '../Modal';

// Styles import
import { CardStyle, CardImageStyle } from "./styles";

interface IProps {
  tool: ITool;
}

const ToolsCard = ({ tool }: IProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <CardStyle>
        <Card sx={{ maxWidth: "100%", height: "280px", overflow: "auto" }}>
          <CardActionArea onClick={handleOpenModal}>
            <CardImageStyle color={tool.color}>
              <CardMedia
                component="img"
                height="140"
                image={tool.icon}
                alt={tool.name}
              />
            </CardImageStyle>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {tool.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardStyle>
      <ToolModal open={showModal} handleCloseModal={handleCloseModal} tool={tool}/>
    </>
  );
}

export default ToolsCard;