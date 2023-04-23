const { produce } = require("immer"); // node js에서
// import { produce } from "immer"; // 리액트에서

// const fruits = ["오렌지", "사과", "포도", "레몬"];

// const newFruits = produce(fruits, draft => {
//     draft.splice(1, 2, "딸기");
// })

// console.log("fruits :", fruits);
// console.log("newFruits :", newFruits);

const baseState = [
    {
        todo: "Learn typescript",
        done: true
    },
    {
        todo: "Try immer",
        done: false
    }
]

const newState1 = [
    // baseState 리스트 값 하나씩 적용
    ...baseState.map((tweet, index) => { 
        // index 1이 아니면 : 왼쪽실행 , 1이면 오른쪽 실행
        return index !== 1 ? tweet : {...tweet, done: true}; 
    }),
    {toto: 'Tweet about it',}
]

const newState2 = produce(baseState, draftState => {
    draftState.push({todo: "Tweet about it"});
    draftState[1].done = true
})

console.log("baseState :", baseState);
console.log("newState :", newState1);
console.log("new2 :", newState2);