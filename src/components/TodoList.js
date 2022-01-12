import React from 'react';
import { InformationCircleIcon } from "@heroicons/react/outline";
import ListItem from "./ListItem";

function TodoList({ handleDelete, handleComplete, tasks }) {
	return (
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
					<ListItem key={ task.id } handleComplete={ handleComplete } handleDelete={ handleDelete } task={ task }/>
				))
			}
			{/*@formatter:on*/ }
		</ul>
	);
}

export default TodoList;