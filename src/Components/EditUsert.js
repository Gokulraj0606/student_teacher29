import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditUsert = ({ usert, setUsert }) => {
    const [tname, setTname] = useState("");
    const [tidx, setTidx] = useState("");
    const [tbatch, setTbatch] = useState("");
    const [temail, setTemail] = useState("");
    const [texperience, setTexperience] = useState("");

    const { tid } = useParams()

    const selectedUsert = usert.find((per) => per.tid === tid);
    const historyt = useHistory()


    useEffect(() => {
        setTidx(selectedUsert.tid)
        setTname(selectedUsert.tname)
        setTbatch(selectedUsert.tbatch)
        setTemail(selectedUsert.temail)
        setTexperience(selectedUsert.texperience)
    }, [])

    const updateUsert = () => {
        const editIndext = usert.findIndex(per => per.tid === tid)
        console.log(editIndext)

        const editedDatat = {
            tid: tidx,
            tname,
            tbatch,
            temail,
            texperience
        }
        usert[editIndext] = editedDatat
        setUsert([...usert]);
        historyt.push("/t");
    }

    return (
        <BaseApp
            title={"EDIT CAR DETAILS"}
        >
            <div>
                <input
                    placeholder="tid"
                    value={tidx}
                    onChange={(event) => setTidx(event.target.value)}
                />
                <input
                    placeholder="tname"
                    value={tname}
                    onChange={(event) => setTname(event.target.value)}
                />
                <input
                    placeholder="batch"
                    value={tbatch}
                    onChange={(event) => setTbatch(event.target.value)}
                />
                <input
                    placeholder="temail"
                    value={temail}
                    onChange={(event) => setTemail(event.target.value)}
                />
                <input
                    placeholder="texperience"
                    value={texperience}
                    onChange={(event) => setTexperience(event.target.value)}
                />
                <button
                    onClick={updateUsert}
                >EDIT</button>
            </div>
        </BaseApp>
    )
}

export default EditUsert