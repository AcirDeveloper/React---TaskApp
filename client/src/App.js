import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Menu from "./components/Navbar";
import TaskList from "./components/taskList";
import TaskForm from "./components/TaskForm";

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Container>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/tasks/new" element={<TaskForm />} />
                    <Route path="/tasks/:id/edit" element={<TaskForm />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}
