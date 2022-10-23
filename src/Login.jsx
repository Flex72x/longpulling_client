import React, {useEffect} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const Login = (props) => {
    useEffect(() => {
        document.title = "Выбор никнейма";
    }, []);

    return (
        <div>
            <h1>Введите ваше имя</h1>
            <form onSubmit={() => props.setConnected(true)}>
                <MyInput
                    placeholder='Введите имя'
                    type="text"
                    value={props.name}
                    onInput={e => props.setName(e.target.value)}
                />
                <MyButton type='submit'>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login