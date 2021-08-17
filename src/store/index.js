import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterStore = createSlice({
    name:'counter',
    initialState: {
        number: 0
    },
    reducers: {
        add(state){
            state.number ++;
        },
        mius(state){
            state.number --;
        },
        addByNum(state, action){
            state.number += action.payload
        }
    }
})

export const {add, mius, addByNum } = counterStore.actions;
export const addAsync = num=>
    dispatch=>{
        setTimeout(()=>{
            dispatch(addByNum(num))
        },3000)
    }

export const getNum = state=>{
    return state.number
}

// 注意导出的reducer

export default configureStore({
    reducer: counterStore.reducer
});