export const loadstate = () =>{
    try{
        const serializedState = localStorage.getItem('state')
        console.log('LOAD*STATE ', serializedState)
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(err){
        return undefined
    }
}

export const savestate = (state) =>{
    try{
        const serializedState = JSON.stringify(state)
        console.log('save state ', state)
        localStorage.setItem('state', serializedState)
    } catch(err){

    }
}