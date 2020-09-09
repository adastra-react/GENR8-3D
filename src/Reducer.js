export const initialState ={
    basket:[],
    user: null
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEM TO BASKET
            return { ...state,
                        basket: [...state.basket, action.item],
                     }
                     
        case 'REMOVE_ITEM_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FROM BASKET
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //items exists in basket, remove it
                newBasket.splice(index, 1)

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket`
                )
            }
            
            
            return { ...state, 
                        basket: newBasket,
                    }
        default:

            return state;
    }
}

export default reducer;