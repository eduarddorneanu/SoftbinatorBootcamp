import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecretMessage from "./components/SecretMessage";

const Secret = () => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onInputChange = (event) => {
        const value = event.target.value;

        if (value === "login") {
            navigate("/login");
        }

        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) === false) {
            setErrorMessage("Email is not valid!");
        } else {
            setErrorMessage("");
        }

        setInputValue(value);
    }

    return (
        <div>
            <label>Enter the email</label>
            <input onChange={onInputChange}  />
            {
                errorMessage !== "" && <p style={{color: "red"}}>{errorMessage}</p>    
            }
        </div>
    )
};

export default Secret;
