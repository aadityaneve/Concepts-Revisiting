import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlatResidents from './FlatResidents';

export default function FlatCard({
    flat,
    setFlatId,
    flatId,
    getFlatResidentData,
    residentsOfFlat,
}) {
    const { picture, flat_type, flat_number, flat_in_block, user_id } = flat;

    const navigate = useNavigate();

    const handleFlatCard = (id) => {
        console.log('id:', id);
        setFlatId(id);
        getFlatResidentData(id);
        navigate(`/residents-of-flat`);
    };

    return (
        <Card onClick={() => handleFlatCard(flat._id)} sx={{ maxWidth: 345 }}>
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
