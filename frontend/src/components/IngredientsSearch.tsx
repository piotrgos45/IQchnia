import {Autocomplete, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function IngredientsSearch(){
    return(
        <Autocomplete
            multiple
            limitTags={2}
            disablePortal
            disableCloseOnSelect
            options={[{title: "Pomidor", id: 1}, {title:"Kukurydza", id: 2}, {title: "Papryka", id: 3}, {title: "Ogórek", id: 4}, {title: "Cebula", id: 5}]}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, {selected}) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            renderInput={(params) => (
                <TextField {...params} label="Wpisz sładniki" placeholder="Składniki"/>
            )}
            sx={{ width: '500px' }}
        />
    );
}

export default IngredientsSearch
