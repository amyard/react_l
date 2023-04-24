import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state:any) {
            state.value++;
        },
        amountAdded(state: any, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        decremented(state:any) {
            state.value--;
        },
        reset(state:any){
            state.value = 0;
        }
    }
})

export const { incremented, decremented, reset, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;