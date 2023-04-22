import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import PropTypes from "prop-types";
import Counter from "Counter";
import 'App.css';


class App extends React.Component{
  render(){
    return (
      <div>
        <Counter/>
        <Counter color="green" />
        <Counter color="blue" />
      </div>
    )
  }
}

export default App;








// state = {myquery : "", language: ""}

// onChange = (e) => {
//   const { name, value } = e.target;
//   this.setState({
//     [name]: value,
//   })
// }

// render(){
//   return (
//     <>
//     <Counter onClick={() => console.log("clicked")}/>
//     <input name="myquery" onChange={this.onChange}/>
//     <input name="language" onChange={this.onChange}/>
//     <hr/>
//     {JSON.stringify(this.state)}
//     </>
//   );
// };


////////////
// import ThemedButton from "ThemedButton";
// class PostDetail extends React.Component {
//   static propTypes = {
//     postId: PropTypes.number.isRequired,
//   }
//   state = {
//     postDetail : null,
//   }
//   componentDidMount(){
//     const { postId } = this.props;
//     this.requestPost(postId);
//   }
//   componentDidUpdate(prevProps){
//     const { postId } = this.props;
//     if ( postId !== prevProps.postId){
//       this.requestPost(postId);
//     }
//   }
//   requestPost(postId){
//     console.log(`request post #${postId}`);
//     this.setState({
//       postDetail: null
//     });
//     // axios (http client) => this.setState
//     setTimeout(()=>{
//       this.setState({
//         postDetail: `로딩된 post #${postId}`
//       })
//     },3000)
//   }

//   render(){
//     const { postId } = this.props;
//     const { postDetail } = this.state;
//     return (
//       <div>
//         포스팅 #{postId}
//         <hr/>
//         {!postDetail && "로딩 중 ..."}
//         {postDetail}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     postId: 10
//   }
//   render(){
//     return (
//       <div>
//         <ThemedButton theme="normal" label="Say Hello" />
//         <PostDetail />
//         <button onClick={() => this.setState({ postId: 20})}>
//           postId 변경
//         </button>
//       </div>
//     )
//   };
// }

// export default App;
////////////


////////
// const actions = {
//   init(initialValue){
//     return { value: initialValue }
//   },
//   increament(prevState){
//     return { value: prevState.value + 1}
//   },
//   decreament(prevState){
//     return { value: prevState.value - 1}
//   }

// };

// class Counter1 extends React.Component{
//   // state = actions.init(this.props.initialValue)

//     constructor(props){
//       super(props);
//       this.state = actions.init(this.props.initialValue);
//       this.setState(actions.increament);
//     }

//   render(){
//     const {value} = this.state; // 현재 상태값 참조
//     return (
//       <div>
//         Counter1: {value}
//         <Button onClick={() => this.setState(actions.increament)}>+1</Button>
//         <Button onClick={() => this.setState(actions.decreament)}>-1</Button>
//       </div>
//       ); // jsx 문법
//   }
// }
// function App() {
//   return (
//         <div>
//           <Counter1 initialValue={10} />
//         </div>
//       )
// }
////////////

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


