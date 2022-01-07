import React from 'react';
import TodoItem from "./TodoItem";

function TodoList() {
	return (
		<div className="lg:w-7/12">
			<ul className="py-4 flex flex-col gap-5 lg:p-0">
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</ul>
		</div>
	);
}

export default TodoList;