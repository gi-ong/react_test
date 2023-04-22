import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component{
    // 디폴트 값
    static defaultProps = {
        color: 'red',
    }

    // 타입지정
    static propTypes = {
        color : PropTypes.string
    }

    state = {
        color: this.props.color,
        value: 0,
    }

    // 클릭이벤트
    onClick = () => {
        // 1.
        // this.setState({ value: this.state.value + 1});
        // 2.
        // this.setState(prevState => {
        //     return { value: prevState.value + 1}
        // })
        // 3.
        // this.setState(prevState => ({
        //     value: prevState.value + 1
        // }))
        this.setState(({ value : prevValue }) => ({
            value : prevValue + 1
        }))
    }

    // 우클릭 이벤트
    onContextMenu = (e) => {
        e.preventDefault();
        this.setState(({ value : prevValue }) => ({
            value : (prevValue >= 1 ? prevValue - 1 : 0),
        }))
    }

    render() {
        const { color, value } = this.state;
        return (
            <div onClick={this.onClick} 
                onContextMenu={this.onContextMenu}
                style={ {...style, backgroundColor: color} }>
                {value}
            </div>
        )
    }
}

const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    borderRadius: '50px',
    textAlign: 'center',
    lineHeight: '100px',
    userSelect: 'none',
    fontSize: '3rem',
    margin: '1rem',
};


// class Counter extends React.Component{
//     static propTypes = {
//         onClick: PropTypes.func,
//     }
    
//     state = {
//     }

//     render() {
//         return (
//             <div onClick={this.props.onClick}>
//                 Counter
//             </div>
//         )
//     }
// }

export default Counter;

