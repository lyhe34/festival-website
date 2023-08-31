import { useContext } from "react"
import { UserContext } from "./UserContext"
import '../../styles/userForm.css';
import { useNavigate } from "react-router";

export default function Sign()
{
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const sign = (e) =>
    {
        e.preventDefault();

        let name = e.target.user.value;
        let password = e.target.password.value;

        const user =
        {
            name: name,
            password: password
        }

        if(!localStorage.getItem(name))
        {
            localStorage.setItem(name, JSON.stringify(user));

            userContext.setUser(user);

            navigate("/");
        }
        else
        {
            alert("user already exist");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={(e) => sign(e)}>
                <label>Nom</label>
                <input type="text" name="user"></input>
                <label>Mot de passe</label>
                <input type="password" name="password"></input>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}