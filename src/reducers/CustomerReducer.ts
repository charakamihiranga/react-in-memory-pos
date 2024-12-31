export const initialState : { id: string; name: string; email: string; mobile: string }[] = [];
export function CustomerReducer(
    state: typeof initialState,
    action: { type: string; payload: any }
){
    switch(action.type){
        case "ADD_CUSTOMER":
            return [...state, action.payload];
        case "UPDATE_CUSTOMER":
            return state.map((customer) => {
                if (customer.id === action.payload.id) {
                    return action.payload;
                }
                return customer;
            });
        case "REMOVE_CUSTOMER":
            return state.filter(customer => customer.id !== action.payload);
        default:
            return state;
    }
}
