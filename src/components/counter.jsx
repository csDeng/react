// 函数式组件
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {
    add,
    mius,
    addByNum,
    getNum,
    addAsync
} from '../store/index'

export default function Counter (){
    /**
     * A hook to access the redux store's state.
     * This hook takes a selector function as an argument.
     * The selector is called with the store state.
     */
    const number = useSelector(getNum);

    /**
     * A hook to access the redux dispatch function.
     * 解决函数式组件不能通过 this.dispatch 的问题
     */
    const dispatch = useDispatch();

    /**
     * Returns a stateful value, and a function to update it.
     * 解决函数式组件没有状态的问题
     */
    const [ step ] = useState('2');
    return (
        <>
            <h1>{number}</h1>
            <button onClick={ ()=>dispatch(add()) }>+</button>
            <button onClick={ ()=>dispatch(mius()) }>-</button>
            <button onClick={ ()=>dispatch(addByNum(Number(step))) }>加2</button>
            <button onClick={ ()=>dispatch(addAsync(Number(step)))}>异步加</button>
        </>
    )
};