import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import { RecipeCreate } from './components/RecipeCreate';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<RecipeCreate/>}/>
        <Route path='/detail/:id' element={<RecipeDetail/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
