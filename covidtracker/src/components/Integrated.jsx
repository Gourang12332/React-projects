// src/App.js
import React, { useEffect, useState } from 'react';
import { getCourses } from './canvasAPI.jsx';

export function Integrated() {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCourses()
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!courses.length) return <div>Loading...</div>;

    return (
        <div>
            <h1>Canvas Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}


