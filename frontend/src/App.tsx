import '@fontsource/roboto/400.css';
import {Button} from "@mui/material";

function App(){
    return(
        <div>
            <h1 className="text-3xl font-bold underline m-8">
                IQchnia
            </h1>
            <Button variant="contained" color="error" sx={{
                marginTop: '10px'
            }}>IQChnia Entry</Button>
        </div>
    );
}

export default App
