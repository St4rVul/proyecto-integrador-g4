const express =require ("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
const connectDB = require("./database/database");
const UserDAO = require("./dao/UserDAO");

connectDB();

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Server is runnig");
});


const userDAO = new UserDAO();

app.get("/api/v1/users/", (req, res) => userDAO.getAll(req, res));
app.post("/api/v1/users/", (req, res) => userDAO.create(req, res));
app.get("/api/v1/users/:id", (req, res) => userDAO.getById(req, res));
app.put("/api/v1/users/:id", (req, res) => userDAO.update(req, res));
app.delete("/api/v1/users/:id", (req, res) => userDAO.delete(req, res));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});