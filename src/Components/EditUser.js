import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditUser = ({ user, setUser }) => {
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");

    const { id } = useParams()

    const selectedUser = user.find((per) => per.id === id);
    const history = useHistory()


    useEffect(() => {
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setBatch(selectedUser.batch)
        setEmail(selectedUser.email)
        setExperience(selectedUser.experience)
    }, [])

    const updateUser = () => {
        const editIndex = user.findIndex(per => per.id === id)
        console.log(editIndex)

        const editedData = {
            id: idx,
            name,
            batch,
            email,
            experience
        }
        user[editIndex] = editedData
        setUser([...user]);
        history.push("/");
    }

    return (
        <BaseApp
            title={"EDIT STUDENT DETAILS"}
        >
            <div>
                <input
                    placeholder="id"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
                />
                <input
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="batch"
                    value={batch}
                    onChange={(event) => setBatch(event.target.value)}
                />
                <input
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    placeholder="experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                />
                <button
                    onClick={updateUser}
                >EDIT</button>
            </div>
        </BaseApp>
    )
}

export default EditUser