import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = ['All', 'A', 'B', 'C', 'D', 'E'];

function getStyles(name, block, theme) {
    return {
        fontWeight:
            block.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SearchByBlock({ block, setBlock, setPage }) {
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setBlock(
            // On autofill we get a stringified value.
            typeof value === 'string' && value !== 'All' ? value : ''
        );
        setPage(1);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id='demo-multiple-name-label'>Block</InputLabel>
                <Select
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    // multiple
                    value={block}
                    onChange={handleChange}
                    input={<OutlinedInput label='Name' />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, block, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
