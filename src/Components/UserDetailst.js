import React from "react";
import BaseApp from "../Core/Base";
import { useParams } from "react-router-dom";

export default function UserDetailst({ usert }) {
    const { tid } = useParams()
    const person = usert[tid]

    return (
        <BaseApp title={"TEACHER DETAILS"}>
            <div className="user-content">
                <div className="user-card">
                    <h1>{person.tname}</h1>
                    <p>BATCH : {person.tbatch}</p>
                    <p>EMAIL : {person.temail}</p>
                    <p>CLASS TIMING : {person.texperience}</p>

                </div>


            </div>

        </BaseApp>
    )
}