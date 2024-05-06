import './App.css';
import Click1 from './Hooks/Click1';
import Click2 from './Hooks/Click2';
import Counter1 from './Hooks/Counter1';
import Counter2 from './Hooks/Counter2';
import Parent from './components/Parent';
import Parent1 from './components/Parent1';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Useref from './components/Useref';
import Useref1 from './components/Useref1';
import ErrorBoundary from './components/ErrorBoundary';
import Product1 from './components/Product1';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
import Counter6 from './components/Counter6';
import Task7 from './components/Task7';
import Task6 from './components/task6';
import Convert from './components/Convert';
import Converter2 from './components/Converter2';
import Todo from './components/Todo';
import Country from './components/Country';
import Currency from './components/Currency';
import Form from './components/Form';
import N from './components/N';
import React from 'react';


// import Task7 from './components/Task7';
// import A from './components/A';
// import B from './components/B';
// import C from './components/C';
// import React,{useReducer, useState} from 'react';
// import Incdec from './components/Incdec';
// import Reducer from './components/Reducer';
// import Mounting from './components/Mounting';
// import Timeout from './components/Timeout';
// import Updating from './components/Updating';
// import Dep from './components/dep';
// import Unmounting from './components/unmounting';
// import Task6 from './components/task6';
// import Http from './components/Http';
// import Htlist from './components/Htlist'
// import HTTP1 from './components/HTTP1';
// import Task7 from './components/Task7';
// export const userContext=React.createContext
// export const passwordContext=React.createContext
// export const CounterContext=React.createContext()
export const UserContext=React.createContext()
export const PasswordContext=React.createContext()

function App() {
  //   const initialState=0
  // const educer=(state,action)=>{
  //   switch(action){
  //     case 'inc':return state+1;
  //     case 'dec':return state-1;
  //     case 'reset':return initialState
  //     default:return state
  //   }
  // }
  // const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* <Mounting/> */}  
      {/* <Updating/> */}
      {/* <Dep/> */}
      {/* <Unmounting/> */}
      {/* <Timeout/> */}
     {/* <Task6/> */}
      {/* <Task7/> */}
      {/* <Http/> */}
      {/* <Htlist/> */}
      {/* <HTTP1/>   */}
      {/* <Task7/> */}
      {/* <Reducer/> */}
      {/* <Incdec/> */}
      {/* {count}
       <CounterContext.Provider value={{count:count,dispatch:dispatch}}>
       <A/>
       <B/>
       <C/>
</CounterContext.Provider> */}
       {/* <Task7/> */}
      {/* < Parent/> */}
      {/* <Parent1/> */}
      {/* <Useref/> */}
      {/* <Useref1/> */}
      {/* <Task8/> */}
      {/* <Task9/> */}
      {/* <Click1/  ......................................................................................................................  >
      <Click2/> */ 
      {/* <Counter  ......................................................................................................................  2/>
      <Counter1/>   ......................................................................................................................  */}
      {/* <ErrorBoundary>
        <Product1 name="Iphone"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Product1 name="Redmi"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Product1 name="samsung"/>
      </ErrorBoundary> */}
     {/* <Counter4/> */}
     {/* <Counter5/> */}
     {/* <Counter6/> */}
     {/* <Convert/> */}
     {/* <Converter2/>
     <Todo/> */}
      {/* <Country/> */}
      {/* <Currency/>  */}
     {/* <Form/>  */}
     <UserContext.Provider value={{"name":"Adam","age":10}}>
      <PasswordContext.Provider value={'abc@123'}>
        <N/>
        </PasswordContext.Provider>
        </UserContext.Provider>

    </div>
  );
}

export default App;
