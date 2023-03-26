import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import 'App.css';


const App = () => (
  <div className='App'>
    <button>Button</button>
    <Button type="primary" onClick={()=> console.log("clicked")}>Button2</Button>
  </div>
)






// function App() {
//   return (
//     <button>
//       Hello, React.
//     </button>
//   );
// }

export default App;
