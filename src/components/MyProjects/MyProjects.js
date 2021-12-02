import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyWorks from '../MyWorks/MyWorks';

const MyProject = () => {

    const [myWorks, setMyWorks] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setMyWorks(data))
    }, [])

    return (
        <div className="m-5">
            <div className="text-center">
                <h1>My Projects</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                {
                    myWorks.map(myWork => <MyWorks
                        key={myWork._id}
                        myWork={myWork}
                    ></MyWorks>)
                }
            </div>
        </div>
    );
};

export default MyProject;