import React from 'react';
import { CheckIcon, TrashIcon } from "@heroicons/react/outline";

function ListItem({ handleDelete, handleComplete, task }) {
	return (
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
	);
}

export default ListItem;