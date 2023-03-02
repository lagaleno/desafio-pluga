import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Styles import
import { CardStyle, CardImageStyle } from "./styles";

interface IProps {
  icon: string;
  name: string;
  color: string;
}

const ToolsCard = ({ icon, name, color }: IProps): JSX.Element => {
  return (
    <CardStyle>
      <Card sx={{ maxWidth: "100%", height: "280px", overflow: "auto" }}>
        <CardActionArea>
          <CardImageStyle color={color}>
            <CardMedia
              component="img"
              height="140"
              image={icon}
              alt={name}
            />
          </CardImageStyle>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardStyle>
  );
}

export default ToolsCard;