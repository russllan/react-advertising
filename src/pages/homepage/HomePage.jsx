import css from './HomePage.module.css';
import Carts from '../../components/carts-item/Carts'
import Title from '../../components/title/Title';
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux';

function HomePage( ) {

  const { isLoading, housesArray } = useSelector((state) => state.houses)
  if ( isLoading ) {
    return <Loader />
  }
  return (
    <div className='page'>
        <Title >Последние объявления</Title>
        <div className={css.cardsWrapper}>
          {
           housesArray.length
          ? (
           housesArray.map((item)=> (
            <Carts 
              text={item.title}
              price={item.price}
              img={item.imgUrl}
              key={item.id}
              id = {item.id}
            />
          ))
          ) : (<h2 className='waterMark'>К сожалению сейчас нет объявлений</h2> )
          }
        </div>
        <Title>Последние объявления по авто</Title>
    </div>
  )
}

export default HomePage;