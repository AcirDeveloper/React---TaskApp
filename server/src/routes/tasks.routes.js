const { Router } = require("express");

const {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
} = require("../controllers/task.controller");

const router = Router();

/* router.get("/tasks", async (req, res) => {
    const result = await pool.query("select now()");
!    res.json(result.rows[0].now); Con esto nos aseguramos que nuestra conexion con la DB funciona
!   res.send("retrieving a list of tasks");  Comprobamos nuestras rutas
}); */

// Read all tasks
router.get("/tasks", getAllTasks);
// Read a task
router.get("/tasks/:id", getTask); // * :id significa voy a esperar una variable
// Create a task
router.post("/tasks", createTask);
// Delete a task
router.delete("/tasks/:id", deleteTask);
// Update a task
router.put("/tasks/:id", updateTask);

module.exports = router;
