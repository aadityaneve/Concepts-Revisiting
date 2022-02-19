import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FlatCard({ flat }) {
    const { picture, flat_type, flat_number, flat_in_block, user_id } = flat;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='140'
                    image={picture}
                    alt={flat_number}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {flat_type}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Flat No. {flat_number}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Block No. {flat_in_block}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Residents {user_id.length}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
