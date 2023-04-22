import React from "react";
import { Input, List } from "antd";


const TodoItem = ({ todo }) => <li>{todo}</li>;


class TodoList extends React.Component {
    state = {
        todoList: ['파이썬','리액트', '참으며 보고 실습'],
        current: '',
    };

    onKeyDown = (e) => {
        if (e.keyCode === 13){ // Enter Key
            const { todoList, current } = this.state;
            if (current.trim().length > 0){
                this.setState({
                    current: '',
                    todoList: [...todoList, current.trim()],
                })
            }
            
        }
    };

    onChange = (e) => {
        const { value } = e.target;
        this.setState({
            current: value,
        })
    };


    render () {
        return (
            <div style={{ width: '300px', margin: '30px auto'}}>
                <List header={"Todo List"}
                        dataSource={this.state.todoList} 
                        bordered={true}
                        renderItem={todo => (
                            <List.Item>
                                {todo}
                            </List.Item>
                        )}
                        style={{
                            marginBottom: '6px'
                        }}
                />
                <Input
                    type="text"
                    value={this.state.current}
                    placeholder={"할일을 입력해주세요."}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    />

                {/* <ul>
                    {this.state.todoList.map((todo, index) => 
                        < TodoItem key={index} todo={todo} />
                    )}
                </ul>
                <input type="text" value={this.state.current} 
                        placeholder="할일을 입력해주세요"
                        onChange={this.onChange} 
                        onKeyDown={this.onKeyDown}/>
                <hr/> 
                {JSON.stringify(this.state)}
                */}
                
            </div>
        )
    }
}



// class TodoItem extends React.Component {
//     render(){
//         const {todo} = this.props;
        
//         return (
//             <li>{todo}</li>
//         )
//     }
// }
export default TodoList;