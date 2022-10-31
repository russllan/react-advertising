import css from './HomePage.module.css';
import Carts from '../../components/carts-item/Carts'
import Title from '../../components/title/Title';
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux';

function HomePage( ) {

  const { isLoading, housesArray } = useSelector((state) => state.houses)
  const { data: carsData } = useSelector((state) => state.cars)

  const renderCards = (d) => {
    return d.length ? (
      d.map((item) => (
        <Carts 
          key = {item.id}
          text = {item.title}
          price = {item.price}
          img = {item.imgUrl}
          id = {item.id}
        />
      ))
    ) : (
      <h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
    )
  }

  if ( isLoading ) {
    return <Loader />
  }
  return (
    <div className='page'>
        <Title >Последние объявления</Title>
        <div className={css.cardsWrapper}>
          {
            renderCards(housesArray)
          }
        </div>
        <br />
        <br />
        <Title>Последние объявления по авто</Title>
        <div>
          { renderCards(carsData) }
        </div>
    </div>
  )
}

export default HomePage;