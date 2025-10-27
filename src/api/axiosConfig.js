import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:8080/',
    headers: {"Content-Type": "application/json"}
});
// export default axios.create({
//     baseURL:'http://9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });
