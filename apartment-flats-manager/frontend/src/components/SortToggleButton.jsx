import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function SortToggleButton({ setSortType }) {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleClick = (value) => {
        setSortType(value);
    };

    return (
        <ToggleButtonGroup
            color='primary'
            // value={alignment}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton onClick={() => handleClick('asc')} value='asc'>
                <ArrowUpwardIcon fontSize='medium' />
            </ToggleButton>
            <ToggleButton onClick={() => handleClick('des')} value='des'>
                <ArrowDownwardIcon fontSize='medium' />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
