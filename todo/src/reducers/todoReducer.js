export const initialState = {
    todoData: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]
};

export const todoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO" :
            return {
                ...state,
                todoData: [...state.todoData, {
                    item: action.payload,
                    completed: false,
                    id : Date.now()
                }]
            };
        case "TOGGLE_TODO" :
            return{
                ...state,
                todoData : state.todoData.map((todo) => {
                    // todo.id === action.payload ? {...todo, completed: !completed} : todo; 
                    if(todo.id === action.payload) {
                        return {...todo, completed : !todo.completed};
                    }else {
                        return todo;
                    }
                })
            }
        case "CLEAR_COMPLETED" : 
        return{
            ...state, 
            todoData : state.todoData.filter(todo => 
                !todo.completed
            )
        }
        default:
        return state;
    }
};


