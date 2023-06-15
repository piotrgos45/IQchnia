import '@fontsource/roboto/400.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecipePage from './pages/RecipePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
    );
}

export default App
