import React, {useEffect, useState} from "react";
import axios from "axios";
import Login from "./Login";
import MyButton from "./components/UI/button/MyButton"
import MyInput from "./components/UI/input/MyInput";

const Chat = (props) => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        document.title = "Чатик";
    }, []);

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/api/getMessage')
            setMessages(prev => [...prev, data])
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/sendMessage', {
            id: Date.now(),
            message: value,
            name: props.name,
        })
        setValue('')
    }

    return (
        <div className='h-screen p-2'>
            <div className="h-5/6 border-solid border-2 rounded-lg border-indigo-500 overflow-y-auto">
                {messages.map(message =>
                    <div key={message.id} className={'text-neutral-500 px-3 py-1 rounded-xl m-2 break-words w-fit '+(message.name === props.name ? 'bg-purple-800 ml-auto' : 'bg-indigo-800 mr-auto')}>
                        <div className='text-left'>{message.name}</div>
                        <div className='ml-3 text-white'>{message.message}</div>
                    </div>
                )}
            </div>
            <div className="h-1/6">
                <form className='pt-2' onSubmit={sendMessage}>
                    <MyInput
                        value={value}
                        onInput={e => setValue(e.target.value)}
                        placeholder="Введите сообщение"
                        type='text'
                    />
                    <MyButton type='submit'>Отправить</MyButton>
                </form>
            </div>
        </div>
    )

}

export default Chat