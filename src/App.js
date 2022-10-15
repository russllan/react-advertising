import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ProductPage from './pages/productPage/ProductPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/loginPage/LoginPage'
import {useEffect, useState } from 'react'
import {base_url} from './constants'
import ErrorBlock from './components/errorBlock/ErrorBlock';
import CreateApPage from './pages/createAdPage/CreateApPage';

function App() {

  const [housesArray, setHousesArray] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(base_url + "houses")
      .finally(()=>{
        setLoading(false);
      })
      .then((resp) => resp.json() )
      .then(data => {
        console.log(data)
        setHousesArray(data);
      })
      .catch(()=>{});
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage isLoadnig={isLoading} housesArray={housesArray}/>}/>
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/DashboardPage" element={<DashboardPage isLoadnig={isLoading} housesArray={housesArray}/>} />
        <Route path='*' element={<ErrorBlock text="Page not found"/>} />
        <Route path='/create-ad' element={<CreateApPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
