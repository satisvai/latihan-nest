export interface Task {
    task_id: number;
    task_name: string;
    task_description: string;
}

export const task: Task[] = [
    {
        task_id: 1,
        task_name: "task 1",
        task_description: "ini deskripsi task 1"

    },
    {
        task_id: 2,
        task_name: "task 2",
        task_description: "ini deskripsi task 2"

    }
]