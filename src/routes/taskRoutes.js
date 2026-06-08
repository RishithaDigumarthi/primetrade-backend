const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const authMiddleware = require("../middleware/authMiddleware");

const prisma = new PrismaClient();


// =======================
// CREATE TASK
// =======================
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.userId
      }
    });

    res.status(201).json({
      success: true,
      data: task
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// =======================
// GET ALL TASKS (USER ONLY)
// =======================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    res.status(200).json({
      success: true,
      data: tasks
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// =======================
// UPDATE TASK
// =======================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updatedTask = await prisma.task.updateMany({
      where: {
        id,
        userId: req.user.userId
      },
      data: {
        title,
        description,
        status
      }
    });

    if (updatedTask.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found or not authorized"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// =======================
// DELETE TASK
// =======================
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await prisma.task.deleteMany({
      where: {
        id,
        userId: req.user.userId
      }
    });

    if (deletedTask.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found or not authorized"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;