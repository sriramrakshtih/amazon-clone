import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-1-e14e1.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-1-e14e1/us-central1/api' 
    //API URL (cloud function URL)
});

export default instance;

// import axios from 'axios';
// const instance = axios.create({
//     baseURL: 'http://localhost:5001/clone-1-e14e1/us-central1/api', // The API (cloud function ) URL
//     withCredentials:false,
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
// });

// export default instance;