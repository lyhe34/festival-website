import Login from "./Login";
import Sign from "./Sign";
import '../../styles/UserConnexionPage.css'
import Header from "../Header";

export default function UserConnexionPage() {

    return (
        <>
        <Header/>
        <div className="forms">
            <div className="form">
                <h2>Login</h2>
                <Login />
            </div>
            <div className="form">
                <h2>Sign In</h2>
                <Sign />
            </div>
        </div>
        </>
    )
}