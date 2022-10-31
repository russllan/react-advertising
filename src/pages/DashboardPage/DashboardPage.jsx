import css from '../homepage/HomePage.module.css';
import Carts from '../../components/carts-item/Carts'
import Title from '../../components/title/Title';
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DashboardPage( ) {

  const { isLoading, housesArray } = useSelector((state) => state.houses)
  const { data: carsData } = useSelector((state) => state.cars)

  const renderCards = (d, isCars) => {
    return d.length ? (
      d.map((item) => {
        <Carts
          key = {item.id}
          title = {item.title}
          price = {item.price}
          img = {item.imgUrl}
          id = {item.id}
          isAdmin = {true}
          isCars = {isCars}
        />
      })
    ) : (
      <h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
    )
  }

  if(isLoading){
    return <Loader />
  }
  return (
    <div className='page'>
        <Title position="center">Мои объявления</Title>
        <Link className='btn-primary' to="/create-ad"> + Create new element </Link>
        <div className={css.cardsWrapper}>
          {/* <Carts text="Продаю дом 6км дом" price="2500"/>
          <Carts text="Продавю 2-ух кмн дом" price="1500"/>
          <Carts text="Продаю 3-ёх км кв" price="350"/> Здесь статические данные, 
          <Carts text="Продаю 4-её км кв" price="7832"/> нужно чтобы эти данные приходили из бэкэнда
          <Carts text="Продаю 5-и км кв" price="9102"/> */}
          {
          // housesArray.length
          // ?
          // housesArray.map((item)=>{
          //   return <Carts 
          //     text={item.title}
          //     price={item.price}
          //     img={item.imgUrl}
          //     key={item.id}
          //     id = {item.id}
          //     admin={true}
          //   />
          // })
          // :<h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
          // }
            renderCards(housesArray, false)
          }
        </div>
        <br />
        <br />
        <Title>Последние объявления по авто</Title>
        <div>
          {renderCards(carsData, true)}
        </div>
    </div>
  )
}

export default DashboardPage;