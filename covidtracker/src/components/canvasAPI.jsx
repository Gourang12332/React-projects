// src/canvasAPI.js
import axios from 'axios';

const CANVAS_API_URL = 'https://your-canvas-instance.instructure.com/api/v1'; // Replace with your Canvas API URL
const TOKEN = 'your_canvas_api_token'; // Replace with your Canvas API token

const axiosInstance = axios.create({
    baseURL: CANVAS_API_URL,
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export const getCourses = async () => {
    try {
        const response = await axiosInstance.get('/courses');
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

// Add more functions to interact with Canvas API as needed
