import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom"


export default function UserComponentt({ usert, setUsert }) {
    const historyt = useHistory()

    const deleteUsert = (tidx) => {
        const alterListt = usert.filter((per, tid) => per.tid !== tidx)
        setUsert(alterListt)
    }




    return (
        <BaseApp
            title="TEACHER DETAIL LIST">

            <div className="user-content-teacher">

                {usert.map((person, tidx) => (
                    <div key={tidx} className="user-card-teacher">
                        <h1>{person.tname}</h1>
                        <p>BATCH : {person.tbatch}</p>
                        <p>EMAIL : {person.temail}</p>
                        <p>CLASS TIMING: {person.texperience}</p>
                        <div className="btn-group">
                            <button
                                onClick={() => historyt.push(`/editt/${person.tid}`)}
                                className="btn-teacher">EDIT</button>
                            <button className="btn-teacher"
                                onClick={() => historyt.push(`/usert/${tidx}`)}
                            >VIEW</button>
                            <button className="btn-teacher"
                                onClick={() => deleteUsert(person.tid)}
                            >DELETE</button>

                        </div>
                    </div>

                ))}
            </div>
        </BaseApp>
    )
}