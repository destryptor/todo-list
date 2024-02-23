import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import TaskModel, { ITask } from '@/models/Task';
import TaskList from '@/components/TaskList';
import Loading from '@/components/Loading';

import styles from '@/styles/Dashboard.module.css';

const Dashboard = () => {
	const { data: session } = useSession();
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const fetchTasks = async () => {
			if (session) {
				const response = await fetch('/api/getTasks', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ user: session.user.name }),
				});
				const taskData = await response.json();

				setTasks(taskData);
				setIsLoaded(true);
			}
		};

		fetchTasks();
	}, [session]);

	const handleAddTask = async (newTask: string, deadline: Date) => {
		if (session) {
			console.log(deadline);
			const response = await fetch('/api/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: session.user.name,
					task: newTask,
					deadline: deadline,
					completed: false,
				}),
			});

			if (response.ok) {
				const createdTask = await response.json();

				const updatedTasks = [...tasks, createdTask].map((task) => ({
					...task,
					deadline: new Date(task.deadline),
				}));

				updatedTasks.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
				setTasks(updatedTasks);
			} else {
				console.error('Failed to create task');
			}
		}
	};

	const handleRemoveTask = async (id: string) => {
		if (session) {
			const response = await fetch('/api/tasks', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id }),
			});

			if (response.ok) {
				const updatedTasks = tasks.filter((task) => task._id !== id);
				setTasks(updatedTasks);
			} else {
				console.error('Failed to delete task');
			}
		}
	};

	return (
		<>
			{session ? (
				<>
					{!isLoaded ? (
						<Loading />
					) : (
						<>
							<div className={styles.topbar}>
								<p>Welcome, {session.user.name}!</p>
								<button onClick={() => signOut()}>Sign out</button>
							</div>
							<TaskList tasks={tasks} onRemoveTask={handleRemoveTask} addTask={handleAddTask} />
						</>
					)}
				</>
			) : (
				<>
					<div className={styles.container}>
						<div className={styles.msg}>
							<p style={{ fontSize: '30px' }}>Please sign in to view your tasks.</p>
						</div>
						<button className={styles.button} onClick={() => signIn()}>
							Sign in
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default Dashboard;
