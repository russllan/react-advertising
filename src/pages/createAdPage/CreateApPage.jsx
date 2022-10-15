import { useState } from 'react';
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { base_url } from '../../constants';

function CreateApPage() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("")

    const submit = (e) => {
        e.preventDefault();
        fetch(base_url + 'houses', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: name,
                imgUrl: imgUrl,
                price: price,
                description: description
            })
        })
    }

    const handleInputChange = (e) => setName(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleTextChange = (e) => setDescription(e.target.value);
    const handleFotoChange = (e) => setImgUrl(e.target.value);


  return (
    <div className='page'>
        <Title position="Center">Создать объявления</Title>
        <form onSubmit={submit}>
            <Input title="Название" placeholder="Введите название" type="text" value={name} onChange={handleInputChange}/>
            <Input title="Цена" placeholder="Введите цену" type="Number"  value={price} onChange={handlePriceChange}/>
            <Input title="Описание" placeholder="Введите описание" type="text"  value={description} onChange={handleTextChange}/>
            <Input title="Фото" placeholder="picture" type="text"  value={imgUrl} onChange={handleFotoChange}/>
            <button className='btn-primary'>+ Создать</button>
        </form>
    </div>
  )
}

export default CreateApPage