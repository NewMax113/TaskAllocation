import { Box, Button, CardContent, Zoom } from "@mui/material"
import { FC } from "react"
import ListTasks from "./ListTasks"
import { IModalCard } from "../../types/AppTypes"


const ModalCard: FC<IModalCard> = ({ isDropDownTasks, tasks, handleClick }) => {
    return (
        <Zoom in={isDropDownTasks}>
            <CardContent sx={{ maxWidth: 596, ml: { sm: 9, xs: '1px' }, maxHeight: 148, overflow: { sm: 'none', xs: 'auto' }, position: 'relative', top: { sm: -15, xs: 0 }, justifyContent: 'space-evenly', borderRadius: 1, bgcolor: 'white', border: 1, borderTop: { sm: 1, xs: 0 }, borderLeft: { sm: 1, xs: 0 }, borderRight: { sm: 1, xs: 0 }, mr: { sm: 0, xs: '1px' }, scrollbarWidth: 'thin', scrollbarColor: 'gray white', p: 1 }}>
                <Box sx={{ position: 'sticky', top: -9, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, bgcolor: 'white', }}>
                    <Box>Список задач</Box>
                    <Button
                        onClick={handleClick}
                        sx={{ cursor: 'pointer', minWidth: 32, borderRadius: 3, '&:hover': { transform: 'scale(1.2)' } }}>
                        X
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', height: 'auto', flexWrap: 'wrap' }}>
                    {tasks?.map((task) => <ListTasks key={task} task={task} />)}
                </Box>
            </CardContent>
        </Zoom >
    )
}

export default ModalCard