import React from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FlatCard from './FlatCard';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../urls/url';
import SnackBar from './SnackBar';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import MultipleSelect from './MultipleSelect';
import SortToggleButton from './SortToggleButton';
import { useNavigate } from 'react-router-dom';

const Flats = ({ residentsOfFlat, setResidentsOfFlat }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [flats, setFlats] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);

    const [residentType, setResidentType] = useState('');
    const [sortType, setSortType] = useState('');

    const [flatId, setFlatId] = useState('');

    useEffect(() => {
        getAllFlats(page, limit, residentType, sortType);
    }, [page, limit, residentType, sortType]);

    const getAllFlats = (page, limit, residentType, sortType) => {
        // console.log(`${BASE_URL}/flat?page=${page}&limit=${limit}&type=${residentType}&sort=${sortType}`)
        axios
            .get(
                `${BASE_URL}/flat?page=${page}&limit=${limit}&type=${residentType}&sort=${sortType}`
            )
            .then((response) => {
                setFlats(response.data.flat);
                setTotalPages(response.data.total_pages);
                setSuccessMessage(response.data.status);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const getFlatResidentData = (flatId) => {
        axios
            .get(`${BASE_URL}/flat?flat=${flatId}`)
            .then((response) => {
                setResidentsOfFlat(response.data.flat.user_id);
                console.log('response.data.flat.user_id:', response.data.flat.user_id)
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const handlePage = (e) => {
        setPage(Number(e.target.innerText));
    };

    const classes = {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3.3em',

            width: '80%',
            margin: 'auto',
        },
        cards: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2em',
        },
        buttonGroup: {
            display: 'flex',
            gap: '3em',
        },
    };

    return (
        <Box style={classes.root}>
            {successMessage ? (
                <SnackBar success={true} message={successMessage} />
            ) : error ? (
                <SnackBar success={false} message={error} />
            ) : null}

            <Box style={classes.buttonGroup}>
                <MultipleSelect
                    residentType={residentType}
                    setResidentType={setResidentType}
                    setPage={setPage}
                />
                <SortToggleButton setSortType={setSortType} />
            </Box>

            <Box style={classes.cards}>
                {flats.map((flat) => (
                    <FlatCard
                        key={flat._id}
                        flat={flat}
                        setFlatId={setFlatId}
                        flatId={flatId}
                        getFlatResidentData={getFlatResidentData}
                        residentsOfFlat={residentsOfFlat}
                    />
                ))}
            </Box>
            <Box>
                <Stack spacing={2}>
                    <Pagination
                        onChange={handlePage}
                        page={page}
                        count={totalPages}
                        color='primary'
                    />
                </Stack>
            </Box>
        </Box>
    );
};

export default Flats;
