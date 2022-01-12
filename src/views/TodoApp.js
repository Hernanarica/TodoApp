import React, { useEffect, useReducer, useState } from 'react';
import todoReducer from "../helpers/todoReducer";
import { CheckIcon, TrashIcon, InformationCircleIcon } from "@heroicons/react/outline";

const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || [];
};

function TodoApp() {
	const [ { description }, setDescription ] = useState({
		description: ''
	});
	
	const [ tasks, dispatch ] = useReducer(todoReducer, [], init);
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [ tasks ]);
	
	
	const handleInputChange = ({ target }) => {
		setDescription({
			[target.name]: target.value
		});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!description.trim().length > 0) return;
		
		const newTask = {
			id: new Date().getTime(),
			description,
			done: false
		};
		
		const action = {
			type: 'add',
			payload: newTask
		};
		
		dispatch(action);
		
		setDescription({
			description: ''
		});
	};
	
	const handleDelete = id => {
		const action = {
			type: 'remove',
			payload: id
		};
		
		dispatch(action);
	};
	
	const handleComplete = id => {
		const action = {
			type: 'complete',
			payload: id
		};
		
		dispatch(action);
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
						<form action="#" className="flex flex-col gap-2.5" onSubmit={ handleSubmit }>
							<label htmlFor="description" className="sr-only">Add a task</label>
							<input type="text"
							       value={ description }
							       autoComplete="off"
							       name="description"
							       id="description"
							       placeholder="Add a task a your list"
							       className="px-2 py-3 border border-y-gray-200 rounded outline-none focus:border-purple-600 duration-300"
							       onChange={ handleInputChange }
							/>
							<button className="bg-purple-600 text-white font-medium py-3 rounded">Add task</button>
						</form>
						{/*@formatter:on*/ }
					</div>
					<div className="lg:w-7/12 overflow-hidden">
						<ul className="py-4 flex flex-col gap-5 lg:p-0">
							{/*@formatter:off*/}
							{ tasks.length === 0 && (
								<p className="flex justify-center items-center gap-1.5 border p-3 bg-teal-200 text-teal-800">
									<InformationCircleIcon className="h-6"/>
									<span className="font-medium">No tienes tareas pendientes</span>
								</p>
							)}
							{
								tasks.map(task => (
									<li className="flex items-center justify-between bg-gray-50 border rounded p-2 animate__animated animate__fadeInDown animate__faster"
									    key={ task.id }>
										<span className={task.done ? 'font-medium text-lg line-through' : 'font-medium text-lg'}>{ task.description }</span>
										<div className="flex flex-col gap-2 md:flex-row">
											{ task.done && (
												<button className="bg-green-600 text-white w-32 p-2 rounded font-medium text-center"
												        onClick={ () => handleComplete(task.id) }>
													<CheckIcon className="h-6 mx-auto" />
												</button>
											) }
											{ !task.done && (
											<button className="text-green-600 w-32 p-2 rounded border-2 border-green-600 font-medium flex gap-1 justify-center items-center"
											        onClick={ () => handleComplete(task.id) }>
												<CheckIcon className="h-6" /> <span>Complete</span>
											</button>
											) }
											<button className="text-white w-32 p-2 rounded font-medium bg-red-600 flex gap-1 justify-center items-center"
											        onClick={ () => handleDelete(task.id) }>
												<TrashIcon className="h-6" /> <span>Delete</span>
											</button>
										</div>
									</li>
								))
							}
							{/*@formatter:on*/ }
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}

export default TodoApp;