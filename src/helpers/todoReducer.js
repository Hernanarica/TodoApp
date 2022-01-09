function todoReducer(state = [], action) {
	switch (action.type) {
		case 'add':
			return [ ...state, action.payload ];
		case 'remove':
			return state.filter(task => task.id !== action.payload);
		case 'complete':
			return state.map(task => task.id === action.payload ? { ...task, done: !task.done } : task);
		default:
			return state;
	}
}

export default todoReducer;