import React, {useState} from 'react'

function MyConponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const updateAge = () => {
        setAge(age + 1);
    }
    
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }


    return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                
                <p>Age: {age}</p>
                <button onClick={updateAge}>Increment age</button>
                
                <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={toggleEmployedStatus}>Change work</button>
                
            </div>

    );
}

export default MyConponent