import React, { useState } from 'react';

interface AddTaskProps {
	handleAddTask: (newTask: string, deadline: Date) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ handleAddTask }) => {
	const [newTask, setNewTask] = useState('');
	const [deadline, setDeadline] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.target.value);
	};

	const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDeadline(e.target.value);
		setErrorMessage('');
	};

	const handleAddButtonClick = () => {
		const deadlineDate = new Date(deadline);

		if (!isNaN(deadlineDate.getTime()) && newTask !== '') {
			handleAddTask(newTask, deadlineDate);

			setNewTask('');
			setDeadline('');
		} else if (newTask === '') {
			setErrorMessage('Please provide a valid Task');
		} else if (isNaN(deadlineDate.getTime())) {
			const today = new Date();
			const deadlineDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

			handleAddTask(newTask, deadlineDate);
			setErrorMessage('Deadline set to EOD.');
		} else {
			setErrorMessage('Please provide a valid Deadline');
		}
	};

	return (
		<>
			<h2>Add Task</h2>
			<input type='text' value={newTask} onChange={handleInputChange} placeholder='Task Title' />
			<input type='datetime-local' value={deadline} onChange={handleDeadlineChange} />
			<button onClick={handleAddButtonClick}>Add Task</button>
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
		</>
	);
};

export default AddTask;
