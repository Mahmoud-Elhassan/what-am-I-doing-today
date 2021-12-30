import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";

function App() {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        axios
            .get("http://www.boredapi.com/api/activity/")
            .then((res) => {
                setActivity(res.data.activity);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <div id="activity">
                {activity.length !== 0 ? activity : "LOADING..."}
            </div>
        </div>
    );
}

export default App;
