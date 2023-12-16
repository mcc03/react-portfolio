import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'QNy8ikP7oDL3L8lYaszkS4ctRJnfSxxx'

const GiphyViewer = () => {

    const [gifs, setGifs] = useState([]);
    const [term, setTerm] = useState([]);
    
    // search limiter
    const [limit, setLimit] = useState([15]);

    useEffect(() => {
        getTrending();
    }, [])

    const handleSelect = (amount) => {
        setLimit(amount)
    };

    const handleTrendingClick = () => {
        getTrending();
    };

    const getTrending = () => {
        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
        .then((response) => {
            // gets data array from response
            console.log(response.data.data)
            setGifs(response.data.data);
        })
        .catch((error) => {
            console.log("Error")
        });
    };

    const handleRandomClick = () => {
        getRandom();
    };

    const getRandom = () => {
        axios.get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
        .then((response) => {
            // gets data array from response
            console.log(response.data.data)
            setGifs([response.data.data]);
        })
        .catch((error) => {
            console.log("Error")
        });
    };
    
    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const handleClick = () => {
        // axios get gifs by search term
        searchGIF();
    };

    const handleKeyUp = (e) => {
        if(e.key === "Enter") {
            // axios get gifs by search term
            searchGIF();
        }
    };

    const searchGIF = () => {

        if(!term){
            alert("Please enter a search term")
            return;
        };

        axios.get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=${limit}`)
            .then((response) => {
                // gets data array from response
                console.log(response.data.data)
                setGifs(response.data.data);
            })
            .catch((error) => {
                console.log("Error")
            });

        setTerm("");
    };


    // looping and displaying - can access card with g
    const gifComponents = gifs.map((g) => {
        return (
            <GIFCard key={g.id} title={g.title} url={g.url} image={g.images.fixed_width.url}/>
        );
    });

    return (
        <>
            <div className="search">
                <input type="text" value={term} onChange={handleChange} onKeyUp={handleKeyUp} />
                <Button variant="primary" onClick={handleClick}>Search</Button>
                <Button variant="info" onClick={handleTrendingClick}>Trending</Button>
                <Button variant="warning" onClick={handleRandomClick}>Random</Button>

                <DropdownButton onSelect={handleSelect} size="sm" id="dropdown-basic-button" title="limit" variant="secondary">
                    <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                    <Dropdown.Item eventKey={20}>20</Dropdown.Item>
                    <Dropdown.Item eventKey={25}>25</Dropdown.Item>
                    <Dropdown.Item eventKey={50}>50</Dropdown.Item>
                </DropdownButton>
            </div>

            <Row className="g-4" md={3} xs={1}>
                {gifComponents}
            </Row> 
        </>
    );
}

// ----------------------------------------------- //

const GIFCard = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title><a href={props.url} target="blank"> {props.title}</a></Card.Title>
            </Card.Body>
        </Card>
    );
}

export default GiphyViewer;