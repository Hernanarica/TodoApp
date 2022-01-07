import React from 'react';
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";

function TodoApp() {
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
					<AddTask />
					<TodoList />
				</div>
			</main>
		</div>
	);
}

export default TodoApp;