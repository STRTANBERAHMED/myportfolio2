import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses';

const Services = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="m-5">
            <div className="text-center">
                <h1>My Projects</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                {
                    courses.map(course => <Courses
                        key={course._id}
                        course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Services;