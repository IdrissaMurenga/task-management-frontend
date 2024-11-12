import { Tasks } from "./taskType";

export interface ContextType {
    tasks: Tasks[];
    setTasks: (tasks: Tasks[]) => void;
    loading: boolean;
    error: string;
    currentDate: string;
    textToEdit: string;
    setTextToEdit: (text: string) => void;
    clickToEditTask : (task: Tasks) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    text: string;
    setText: (text: string) => void;
    toggleComplete: (id: string, complete: boolean) => void
    editTask: (id: string, text: string) => void
    deleteTask: (id: string) => void
    completedTaskCount: number;
    incompleteTaskCount: number;

}