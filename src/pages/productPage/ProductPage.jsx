import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import css from './ProductPage.module.css'
import Loader from '../../components/Loader/Loader';
import css from './ProductPage.module.css'
import Title from '../../components/title/Title'
import ErrorBlock from '../../components/errorBlock/ErrorBlock';


function ProductPage() {

  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetch("https://632ee37cb56bd6ac45a69446.mockapi.io/db/houses/" + params.id)
      .finally(()=>{
        setLoading(false)
      })
      .then((resp)=> {
        if(!resp.ok){
          setError("Something went wrong. Please try later!")
        }
        return resp.json();
      })
      .then((data) => {setDetail(data)})
  }, [params.id]);  

  if(isLoading || !detail) return <Loader />
  if(error) return <ErrorBlock text={error}/>
  return (
    <div className='page'>
      <div className={css.mainBlock}>
        <div>
          <img className={css.image} src={detail.imgUrl} alt={detail.title} />
        </div>
        <div className={css.info}>
            <Title>{detail.title}</Title>
            <Title>Цена: {detail.price}$</Title>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure?
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;