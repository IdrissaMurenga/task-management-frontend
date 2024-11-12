import { Tasks } from "@/app/types/taskType"
import { Button } from "@/ui/button"
import { DialogRoot, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogBody, DialogActionTrigger, DialogCloseTrigger, DialogFooter } from "@/ui/dialog"
import { Icon, Text } from "@chakra-ui/react"
import { FC } from "react"
import { IoTrash } from "react-icons/io5"

interface TasksProps {
    task: Tasks
    deleteTask: (id: string) => void

}
const DeleteIconBtn: FC<TasksProps> = ({ task, deleteTask }) => {
    return (
        <DialogRoot role="alertdialog">
            <DialogTrigger asChild>
                <Icon fontSize="1.3rem" color='red' cursor='pointer'>
                    <IoTrash />
                </Icon>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Text>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our systems.
                    </Text>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <DialogActionTrigger asChild>
                        <Button colorPalette="red" onClick={() => deleteTask(task.id)}>Delete</Button>
                    </DialogActionTrigger>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}

export default DeleteIconBtn
