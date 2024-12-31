export const initialState : string[] = [];
export function CustomerReducer(state, action:{type: string, payload: string}){
    switch(action.type){
        case "ADD_CUSTOMER":
            return [...state, action.payload];
        default:
            return state;
    }
}
