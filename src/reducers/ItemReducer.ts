export const initialState : { code: string; name: string; price: number; quantity: number; }[] = [];
export function ItemReducer(
    state: typeof initialState,
    action: { type: string; payload: any}
) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
        case "REMOVE_ITEM":
            return state.filter((item) => item.code !== action.payload);
         case "UPDATE_ITEM":
            return state.map((item) => item.code === action.payload.code ? action.payload : item);
        default:
            return state;
    }
}