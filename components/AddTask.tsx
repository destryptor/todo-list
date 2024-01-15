import React, { useState } from 'react';
import styles from '@/styles/Addtask.module.css';

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
			<div className={styles.addcontainer}>
				<h2>Add Task</h2>
			</div>
			<div className={styles.container}>
				<div style={{ padding: '10px', whiteSpace: 'nowrap' }}>Title :</div>
				<div className={styles.inputcontainer}>
					<input type='text' className={styles.input} value={newTask} onChange={handleInputChange} placeholder='Task Title' />
				</div>
				<div style={{ padding: '10px', whiteSpace: 'nowrap' }}>Deadline :</div>
				<div className={styles.inputcontainer}>
					<input type='datetime-local' className={styles.input} value={deadline} onChange={handleDeadlineChange} />
				</div>
				<button onClick={handleAddButtonClick}>Add Task</button>
				{errorMessage && (
					<div className={styles.errormsg}>
						<p>{errorMessage}</p>
					</div>
				)}
			</div>
			<div className={styles.note}>
				<p>Note: If no deadline is provided, the deadline will be set to EOD.</p>
			</div>
		</>
	);
};

export default AddTask;
