import React, { useEffect, useState } from "react";

const useCurrentTime = () => {
    const [ currentTime, setCurrentTime ] = useState();

    useEffect(() => {
        const handler = setInterval(() => {
            const currentTime = (new Date()).toISOString().slice(11, 19);
            setCurrentTime(currentTime);
        }, 1000);
        return () => clearInterval(handler);
    }, []);

    return currentTime;
};

const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(()=>{
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return width;
}

const Message = ({ message}) => {
    const windowWidth = useWindowWidth();
    return (
        <div>
            windowWidth: {windowWidth},
            message: {message}
        </div>
    );
};

const App = () => {
    const currentTime = useCurrentTime();
    const windowWidth = useWindowWidth();
    return (
        <div>
            <h1>현재시각</h1>
            {currentTime}
            {/* <Message message="hello"/> */}
            <h1>current window width</h1>
            {windowWidth}px
        </div>
    )
};

export default App;
