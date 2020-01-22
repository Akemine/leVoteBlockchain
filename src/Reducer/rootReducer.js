const initState = {
    
    ConnectState: false,
    Token: "token_vide",
    Address_User: "address_user_vide",
    Pseudo: "Anonyme"
}

const rootReducer = (state = initState, action) => {

    if(action.type === "USER_CONNECTED"){
        return {
            ConnectState: true,
            Token: action.Token,
            Address_User: action.Address_User,
            Pseudo: action.Pseudo
        }
    }

    if(action.type === "USER_DISCONNECTED"){
        return {
            ConnectState: false
        }
    }

    return state;
}

export default rootReducer;