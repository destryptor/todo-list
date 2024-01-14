import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { ITask } from '@/models/Task';

import styles from '@/styles/Tasklist.module.css';

interface TaskListProps {
	tasks: ITask[];
	onRemoveTask: (id: string) => void;
	addTask: (newTask: string, deadline: Date) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask, addTask }) => (
	<>
		<AddTask handleAddTask={addTask} />
		<div className={styles.container}>
			<h2>Task List</h2>
			<table className={styles.customtable}>
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
		</div>
	</>
);

export default TaskList;
