import css from './HomePage.module.css';
import Carts from '../../components/carts-item/Carts'
import Title from '../../components/title/Title';
import Loader from '../../components/Loader/Loader'

function HomePage({isLoading, housesArray}) {

  if(isLoading){
    return <Loader />
  }
  return (
    <div className='page'>
        <Title >Последние объявления</Title>
        <div className={css.cardsWrapper}>
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
            />
          })
          :<h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
          }
        </div>
    </div>
  )
}

export default HomePage;