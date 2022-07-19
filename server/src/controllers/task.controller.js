const pool = require("../postgres");

const getAllTasks = async (req, res, next) => {
    try {
        const allTasks = await pool.query("SELECT * FROM task");
        res.json(allTasks.rows);
        //console.log(allTasks);
    } catch (error) {
        next(error);
    }
    //res.send("retrieving a list of tasks");
};

const getTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
        if (task.rows.length === 0)
            return res.status(404).json({ message: "Taks not found" });
        return res.json(task.rows[0]);
    } catch (error) {
        next(error);
    }
    //  res.send("retrieving a single task");
};

const createTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
        );

        res.json(result.rows[0]);
        // console.log(result);
        // res.send("creating a new task");
    } catch (error) {
        next(error);
        //res.json({ error: error.message });
        // console.log(error.message);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteTaks = await pool.query("DELETE FROM task WHERE id = $1", [
            id,
        ]);
        if (deleteTaks.rowCount === 0)
            return res.status(404).json({ message: "Taks not found" });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
    // res.send("deleting a task");
};

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const UpdateTaks = await pool.query(
            "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
            [title, description, id]
        );
        if (UpdateTaks.rowCount === 0)
            return res.status(404).json({ message: "Taks not found" });
        return res.json(UpdateTaks.rows[0]);
    } catch (error) {
        next(error);
        //res.json({ error: error.message });
    }
    // res.send("updating a task");
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
};
