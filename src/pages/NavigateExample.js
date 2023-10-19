// navigating within the code

import { useNavigate } from "react-router-dom";

const NavigateExample = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked");

        navigate('/about');
    };

    return (
        <>
            <h1>This is the navigate example</h1>
            <button onClick={handleClick}>Click to navigate</button>
        </>
    );
};

export default NavigateExample;