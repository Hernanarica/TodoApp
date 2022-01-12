import React, { useState } from 'react';

function TodoSearch({ handleAddTask }) {
	const [ { description }, setDescription ] = useState({
		description: ''
	});
	
	const handleInputChange = ({ target }) => {
		setDescription({
			[target.name]: target.value
		});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!description.trim().length > 0) return;
		
		handleAddTask({
			id: new Date().getTime(),
			description,
			done: false
		});
		
		setDescription({
			description: ''
		});
	};
	
	return (
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
	);
}

export default TodoSearch;