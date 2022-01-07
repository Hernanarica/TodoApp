import React from 'react';

function AddTask() {
	return (
		<div className="lg:w-4/12">
			<form action="#" className="flex flex-col gap-2.5">
				<label htmlFor="task" className="sr-only">Add a task</label>
				<input type="text"
				       autoComplete="off"
				       value=""
				       name="task"
				       id="task"
				       placeholder="Add a task a your list"
				       className="px-2 py-3 border border-y-gray-200 rounded outline-none focus:border-purple-600 duration-300"
				/>
				<button className="bg-purple-600 text-white font-medium py-3 rounded">Add task</button>
			</form>
		</div>
	);
}

export default AddTask;