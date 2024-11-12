import { VscEdit } from "react-icons/vsc";
import { DialogBody, DialogContent, DialogRoot, DialogTrigger } from '@/ui/dialog';
import EditTodoForm from "../EditTodoForm";
import { Icon } from "@chakra-ui/react";
import { Tasks } from "@/app/types/taskType";
import { FC } from "react";

interface TasksProps {
    task: Tasks
    editTask: (id: string, text: string) => void
    clickToEditTask : (task: Tasks) => void

}
const EditIconBtn:FC<TasksProps> = ({task, editTask, clickToEditTask }) => {
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Icon fontSize="1.3rem" color='btn-secondary' cursor='pointer' onClick={()=>clickToEditTask(task)}>
                    <VscEdit />
                </Icon> 
            </DialogTrigger>
            <DialogContent>
                <DialogBody>
                    <EditTodoForm task={task} editTask={editTask} />
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    )
}

export default EditIconBtn
