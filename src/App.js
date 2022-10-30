import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ProductPage from './pages/productPage/ProductPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/loginPage/LoginPage'
import {useEffect, useState } from 'react'
import ErrorBlock from './components/errorBlock/ErrorBlock';
import CreateApPage from './pages/createAdPage/CreateApPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Api} from './api/Api';
import PublicRout from './routes/PublicRout';
import PrivateRout from './routes/PrivateRout';


function App() {

  const [housesArray, setHousesArray] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    Api.getHouses()
      .finally(()=>{
          setLoading(false);
      }) 
      .then((res) =>{
        console.log(res);
        setHousesArray(res.data);
      })
    // fetch(base_url + "houses")
    //   .finally(()=>{
    //     setLoading(false);
    //   })
    //   .then((resp) => resp.json() )
    //   .then(data => {
    //     console.log(data)
    //     setHousesArray(data);
    //   })
    //   .catch(()=>{});
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage isLoadnig={isLoading} housesArray={housesArray}/>}/>
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path='/login' element={
          <PublicRout>
            <LoginPage />
          </PublicRout>
        } />
        <Route path="/DashboardPage" element={
          <PrivateRout>
            <DashboardPage isLoadnig={isLoading} housesArray={housesArray}/>
          </PrivateRout>
        } />
        <Route path='*' element={<ErrorBlock text="Page not found"/>} />
        <Route path='/create-ad' element={ 
          <PrivateRout>
            <CreateApPage/>
          </PrivateRout>
        }/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
