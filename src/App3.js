import ErrorBoundary from "ErrorBoundary";
// import Message from "Message";
import React from "react";


class Message extends React.Component {
    render(){
        throw new Error("의도한 에러");
        return "Message Component";
    }
}

class App3 extends React.Component {
    render(){
        return (
            <ErrorBoundary>
                <Message/>
            </ErrorBoundary>
        )
    }
}

export default App3;