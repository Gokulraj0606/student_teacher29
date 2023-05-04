import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddUsert({ usert, setUsert }) {
    const historyt = useHistory()

    const [tname, setTname] = useState("")
    const [tid, setTid] = useState("");
    const [tbatch, setTbatch] = useState("");
    const [temail, setTemail] = useState("");
    const [texperience, setTexperience] = useState("");

    const addNewUsert = () => {
        const newUsert = {
            tid,
            tname,
            tbatch,
            temail,
            texperience
        }

        setUsert([...usert, newUsert])
        historyt.push("/t")
        setTname("");
        setTid("");
        setTexperience("");
        setTemail("");
        setTbatch("");
    }


    return (
        <BaseApp
            title={"ADD TEACHER DETAILS"}
        >
            <div>
                <input
                    placeholder="Teacher id"
                    value={tid}
                    onChange={(event) => setTid(event.target.value)}
                /> {""}
                <input
                    placeholder="Teacher name"
                    value={tname}
                    onChange={(event) => setTname(event.target.value)}
                /> {""}
                <input
                    placeholder="Teacher Batch"
                    value={tbatch}
                    onChange={(event) => setTbatch(event.target.value)}
                /> {""}
                <input
                    placeholder="Teacher email"
                    value={temail}
                    onChange={(event) => setTemail(event.target.value)}
                /> {""}
                <input
                    placeholder="Class Timing"
                    value={texperience}
                    onChange={(event) => setTexperience(event.target.value)}
                /> {""}
                <button
                    onClick={addNewUsert}
                >ADD</button>
            </div>
        </BaseApp>



    )
}