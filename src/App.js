import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import 'App.css';


const actions = {
  init(initialValue){
    return { value: initialValue }
  },
  increament(prevState){
    return { value: prevState.value + 1}
  },
  decreament(prevState){
    return { value: prevState.value - 1}
  }

};

class Counter1 extends React.Component{
  // state = actions.init(this.props.initialValue)

    constructor(props){
      super(props);
      this.state = actions.init(this.props.initialValue);
      this.setState(actions.increament);
    }

  render(){
    const {value} = this.state; // 현재 상태값 참조
    return (
      <div>
        Counter1: {value}
        <Button onClick={() => this.setState(actions.increament)}>+1</Button>
        <Button onClick={() => this.setState(actions.decreament)}>-1</Button>
      </div>
      ); // jsx 문법
  }
}

function App() {
  return (
        <div>
          <Counter1 initialValue={10} />
        </div>
      )
}

export default App;



// class FruitComponent extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>좋아하는 과일</h1>
//         <ul>
//           {this.props.fruits.map((name, index)=> (
//             <li key={index}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// function App() {
//   const fruits = ["바나나", "사과", "딸기"]
//   return (
//     <div>
//       <Counter1 initialValue={10} />
//       <FruitComponent fruits={fruits} />
//     </div>
//   )
// }

// const App = () => (
//   <div className='App'>
//     <button>Button</button>
//     <Button type="primary" onClick={()=> console.log("clicked")}>Button2</Button>
//   </div>
// )

// function App() {
//   return (
//     <button>
//       Hello, React.
//     </button>
//   );
// }


