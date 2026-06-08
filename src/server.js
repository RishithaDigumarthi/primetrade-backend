require("dotenv").config();
const app = require("./app");

const testRoutes = require("./routes/testRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});