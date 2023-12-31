import { useContext } from "react";
import { UserContext } from "./UserContext";
import '../../styles/userForm.css';
import { useNavigate } from "react-router";

export default function Login()
{
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const login = (e) =>
    {
        e.preventDefault();
        
        let name = e.target.name.value;
        let password = e.target.password.value;

        const user = JSON.parse(localStorage.getItem(name));

        if(user && user.password === password)
        {
            userContext.setUser(user);

            navigate("/");
        }
        else
        {
            alert("wrong name or password");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={(e) => login(e)}>
                <label>Nom</label>
                <input type="text" name="name"></input>
                <label>Mot de passe</label>
                <input type="password" name="password"></input>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}