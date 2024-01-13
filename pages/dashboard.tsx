import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import TaskModel, { ITask } from '@/models/Task';
import TaskList from '@/components/TaskList';
import AddTask from '@/components/AddTask';

const Dashboard = () => {
	const { data: session } = useSession();
	const [tasks, setTasks] = useState<ITask[]>([]);

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
				setTasks([...tasks, createdTask]);
			} else {
				// Handle error
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
		<div>
			{session ? (
				<>
					<p>Welcome, {session.user.name}!</p>
					<button onClick={() => signOut()}>Sign out</button>
					<TaskList tasks={tasks} onRemoveTask={handleRemoveTask} addTask={handleAddTask} />
				</>
			) : (
				<>
					<p>Please sign in to view your tasks.</p>
					<button onClick={() => signIn()}>Sign in</button>
				</>
			)}
		</div>
	);
};

export default Dashboard;
