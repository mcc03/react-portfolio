import axios from "axios";
import { useState, useEffect } from "react";

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'QNy8ikP7oDL3L8lYaszkS4ctRJnfSxxx'
const LIMIT = '&limit=5'

const GiphyViewer = () => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        //console.log("loaded")

        ////AXIOS
        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
            .then((response) => {
                // gets data array from response
                console.log(response.data.data)
                setGifs(response.data.data);
            })
            .catch((error) => {
                console.log("Error")
            });
        //////
    }, [])

    const gifComponents = gifs.map((g) => {
        return (
            <div>
                <p>{g.title}</p>
                <p>{g.url}</p>
            </div>
        );
    });

    return (
        <div>
            {gifComponents}
        </div> 
    );
}



export default GiphyViewer;