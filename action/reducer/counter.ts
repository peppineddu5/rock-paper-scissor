const choseReducer= (state=0,action:{type:string})=>{
    switch (action.type) {
        case "INCREMENTA":
            return state+1
        case "DECREMENTA":
            return state-1
    
        default:
            return state
    }
}
export default choseReducer