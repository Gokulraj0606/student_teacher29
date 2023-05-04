import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddUser({ user, setUser }) {
    const history = useHistory()

    const [name, setName] = useState("")
    const [id, setId] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");

    const addNewUser = () => {
        const newUser = {
            id,
            name,
            batch,
            email,
            experience
        }

        setUser([...user, newUser])
        history.push("/")
        setName("");
        setId("");
        setExperience("");
        setEmail("");
        setBatch("");
    }


    return (
        <BaseApp
            title={"ADD STUDENT DETAILS"}
        >
            <div>
                <input
                    placeholder="Student id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                /> {" "}
                <input
                    placeholder="Student name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                /> {""}
                <input
                    placeholder="Batch"
                    value={batch}
                    onChange={(event) => setBatch(event.target.value)}
                /> {""}
                <input
                    placeholder="Student email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                /> {""}
                <input
                    placeholder="Experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                /> {""}
                <button
                    onClick={addNewUser}
                >ADD</button>
            </div>
        </BaseApp>



    )
}