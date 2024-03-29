import React, { useState, useEffect } from 'react';
import { ITask } from '@/models/Task';

interface TaskProps {
	task: ITask;
	onRemoveTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onRemoveTask }) => {
	const [complete, setComplete] = useState(task.completed);
	const isDeadlineExpired = new Date(task.deadline) < new Date();

	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		const localDate = date.toLocaleDateString('en-US', options);
		return localDate;
	};

	const formatTime = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
		const date = new Date(dateString);
		const localTime = date.toLocaleTimeString('en-US', options);
		return localTime;
	};

	const handleCheckboxChange = async () => {
		try {
			setComplete(!complete);

			const response = await fetch('/api/tasks/', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					task: task.task,
					completed: !complete,
				}),
			});
			if (!response.ok) {
				console.error('Failed to update task completion status');
			}
		} catch (error) {
			console.error('Error updating task completion status:', error);
		}
	};

	useEffect(() => {}, [complete]);

	return (
		<tr>
			<td>
				<input type='checkbox' checked={complete} onChange={handleCheckboxChange} />
			</td>
			<td>{task.task}</td>
			<td>{formatTime(task.deadline.toString())}</td>
			<td>{formatDate(task.deadline.toString())}</td>
			<td>{complete ? 'Completed' : isDeadlineExpired ? 'Deadline Expired' : 'Pending'}</td>
			<td>
				<button onClick={() => onRemoveTask(task._id)}>Remove</button>
			</td>
		</tr>
	);
};

export default Task;
