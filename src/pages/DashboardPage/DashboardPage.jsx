import css from '../homepage/HomePage.module.css';
import Carts from '../../components/carts-item/Carts'
import Title from '../../components/title/Title';
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom';

function DashboardPage({isLoadnig, housesArray}) {


  if(isLoadnig){
    return <Loader />
  }
  return (
    <div className='page'>
        <Title position="center">Мои объявления</Title>
        <Link className='btn-primary' to="/create-ad"> + Create new element </Link>
        <div className={css.cardsWrapper}>
          {/* <Carts text="Продаю дом 6км дом" price="2500"/>
          <Carts text="Продавю 2-ух кмн дом" price="1500"/>
          <Carts text="Продаю 3-ёх км кв" price="350"/>
          <Carts text="Продаю 4-её км кв" price="7832"/>
          <Carts text="Продаю 5-и км кв" price="9102"/> */}
          {
          housesArray.length
          ?
          housesArray.map((item)=>{
            return <Carts 
              text={item.title}
              price={item.price}
              img={item.imgUrl}
              key={item.id}
              id = {item.id}
              admin={true}
            />
          })
          :<h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
          }
        </div>
    </div>
  )
}

export default DashboardPage;