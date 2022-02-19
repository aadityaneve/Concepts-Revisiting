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

const Flats = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [flats, setFlats] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const [residentType, setResidentType] = useState([]);
    const [sortType, setSortType] = useState('');

    useEffect(() => {
        getAllFlats(residentType);
    }, [page, residentType, sortType]);

    function getAllFlats(residentType) {
        axios
            .get(
                `${BASE_URL}/flat?page=${page}&limit=${4}${
                    residentType === 'Owner'
                        ? '&type=owner'
                        : residentType === 'Tenant'
                        ? '&type=tenant'
                        : null
                }${
                    sortType === 'asc'
                        ? '&sort=asc'
                        : sortType === 'dec'
                        ? '&sort=dec'
                        : null
                }`
            )
            .then((response) => {
                // console.log(response.data);
                setFlats(response.data.flat);
                setTotalPages(response.data.total_pages);
                setSuccessMessage(response.data.status);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    }

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
    };

    return (
        <Box style={classes.root}>
            {successMessage ? (
                <SnackBar success={true} message={successMessage} />
            ) : error ? (
                <SnackBar success={false} message={error} />
            ) : null}

            <MultipleSelect
                residentType={residentType}
                setResidentType={setResidentType}
                setPage={setPage}
            />
            <SortToggleButton setSortType={setSortType} />

            <Box style={classes.cards}>
                {flats.map((flat) => (
                    <FlatCard key={flat._id} flat={flat} />
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
