import React from 'react';
import { TrashIcon, CheckIcon } from "@heroicons/react/outline";

function TodoItem() {
	return (
		<>
			<li className="flex items-center justify-between bg-gray-50 border rounded p-2">
				<span className="font-medium text-lg">Practicar React</span>
				<div className="flex flex-col gap-2 md:flex-row">
					{/*<button className="bg-green-600 text-white w-32 p-2 rounded font-medium text-center">*/}
					{/*	<CheckIcon className="h-6 mx-auto" />*/}
					{/*</button>*/}
					<button className="text-green-600 w-32 p-2 rounded border-2 border-green-600 font-medium flex gap-1 justify-center items-center">
						<CheckIcon className="h-6" />
						<span>Complete</span>
					</button>
					<button className="text-white w-32 p-2 rounded font-medium bg-red-600 flex gap-1 justify-center items-center">
						<TrashIcon className="h-6" />
						<span>Delete</span>
					</button>
				</div>
			</li>
		</>
	);
}

export default TodoItem;