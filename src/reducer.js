export default function(state=[1,2,3],action){
    switch(action.type){
        case "ADD":
        return [...state,action.content]
        
        default:
        return state
    }
}