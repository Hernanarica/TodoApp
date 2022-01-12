import React, { useEffect, useReducer } from 'react';
import todoReducer from "../helpers/todoReducer";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";

const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || [];
};

function TodoApp() {
	const [ tasks, dispatch ] = useReducer(todoReducer, [], init);
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [ tasks ]);
	
	const handleAddTask = (newTask) => {
		dispatch({
			type: 'add',
			payload: newTask
		});
	};
	
	const handleDelete = id => {
		dispatch({
			type: 'remove',
			payload: id
		});
	};
	
	const handleComplete = id => {
		dispatch({
			type: 'complete',
			payload: id
		});
	};
	
	return (
		<div className="flex flex-col gap-3">
			<header>
				<div className="px-2">
					<h1 className="py-4 font-medium text-lg text-left lg:text-2xl">TaskApp</h1>
					<hr className="text-gray-300" />
				</div>
			</header>
			<main>
				<div className="px-2 max-w-5xl lg:flex lg:flex-row-reverse lg:justify-between w-full mx-auto">
					<div className="lg:w-4/12">
						{/*@formatter:off*/}
							<TodoSearch handleAddTask={ handleAddTask } />
						{/*@formatter:on*/ }
					</div>
					<div className="lg:w-7/12 overflow-hidden">
						<TodoList handleComplete={ handleComplete } handleDelete={ handleDelete } tasks={ tasks } />
					</div>
				</div>
			</main>
		</div>
	);
}

export default TodoApp;