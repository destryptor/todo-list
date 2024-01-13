import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { ITask } from '@/models/Task';

interface TaskListProps {
	tasks: ITask[];
	onRemoveTask: (id: string) => void;
	addTask: (newTask: string, deadline: Date) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask, addTask }) => (
	<>
		<AddTask handleAddTask={addTask} />
		<h2>Task List</h2>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Task</th>
					<th>Time</th>
					<th>Date</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map((task, index) => (
					<Task key={task._id} task={task} onRemoveTask={onRemoveTask} />
				))}
			</tbody>
		</table>
	</>
);

export default TaskList;
