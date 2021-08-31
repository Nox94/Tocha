import 'form.scss';
import {Route} from "react-router-dom";

export default function Form() {
    return (
        <form className="form">
            <Route path={"/signup"}>
                <h2 className="form__heading">Регистрация</h2>
                <input className="form__input"/>
                <input className="form__input"/>
                <input className="form__input"/>
                <input className="form__input"/>
                <button className="form__button">Зарегистрироваться</button>
            </Route>
            <Route path={"/signin"}>
                <h2 className="form__heading">Вход</h2>
                <input className="form__input"/>
                <input className="form__input"/>
                <button className="form__button">Войти</button>
            </Route>
        </form>
    )
}
