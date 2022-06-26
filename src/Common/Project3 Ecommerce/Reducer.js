export const reducer = (state, action)=>{


    if(action.type==="REMOVE_ITEM"){
        return {
            ...state, 
            items: state.items.filter((data)=>{
return data.id !== action.payload;
            })
        }
    }

    if(action.type==="CLEAR_CART"){
        return {...state, items:[]}
    }

return state
}