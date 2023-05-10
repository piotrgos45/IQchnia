import '@fontsource/roboto/400.css';
import IngredientsSearch from "./IngredientsSearch";

function App(){
    return(
        <div className="container flex justify-center flex-col items-center mx-auto">
            <h1 className="text-3xl font-bold underline mb-2 mt-2">
                IQchnia
            </h1>
            <IngredientsSearch/>
        </div>
    );
}

export default App
