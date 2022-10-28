import { useState } from 'react';
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { base_url } from '../../constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';

const toastSetting = {
    position: "bottom-right",
    theme: "colored"
}

function CreateApPage() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("")
    const [isSending, setSending] = useState(false);

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        setSending(true);
        toast.info("Start", toastSetting)
        // fetch(base_url + 'houses', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: name,
        //         imgUrl: imgUrl,
        //         price: price,
        //         description: description
        //     })
        // }) Фетч запрос. Переделка на axios

        const data = {
            title: name,
            imgUrl: imgUrl,
            price: price,
            description: description
        }

        Api.postHouse(data)
        .then((res) => {
            if(res.status === 201){
                toast.success("Success",toastSetting)
                navigate('/dashboard')
            }else{
                toast.error("Error", toastSetting)
                setSending(false);
            }
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
            <Input title="Название" placeholder="Введите название" type="text" value={name} onChange={handleInputChange} required/>
            <Input title="Цена" placeholder="Введите цену" type="Number"  value={price} onChange={handlePriceChange} required/>
            <Input title="Описание" placeholder="Введите описание" type="text"  value={description} onChange={handleTextChange} required/>
            <Input title="Фото" placeholder="picture" type="text"  value={imgUrl} onChange={handleFotoChange} required/>
            <button disabled={isSending} className='btn-primary'>+ Создать</button>
        </form>
    </div>
  )
}

export default CreateApPage