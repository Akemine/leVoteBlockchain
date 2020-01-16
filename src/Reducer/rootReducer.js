const initState = {
    ConnectState: false,
    token: "",
    posts: [
        {
            id: "1",
            title: "Je suis le premier article",
            body: "Voici le contenu, mdre"
        },
        {
            id: "2",
            title: "Je suis le deuxième article",
            body: "Voici le contenu, mdre"
        },
        {
            id: "3",
            title: "Je suis le troisième article",
            body: "Voici le contenu, mdre"
        },
        {
            id: "4",
            title: "Je suis le quatrième article",
            body: "Voici le contenu, mdre"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }

    if(action.type === "USER_CONNECTED"){
        return {
            ConnectState: true,
            token: "test"
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