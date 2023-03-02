import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Styles import
import { CardStyle } from "./styles";

interface IProps {
  icon: string;
  name: string;
}

const ToolsCard = ({ icon, name }: IProps): JSX.Element => {
  return (
    <CardStyle>
      <Card sx={{ maxWidth: "20%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={icon}
            alt="green iguana"
            className="image"
          />
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