const express = require('express');
const Course = require('../models/course.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, instructor, price } = req.body;
    const newCourse = new Course({ title, description, instructor, price });
    await newCourse.save();
    res.status(201).json({ message: 'Course added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course' });
  }
});

module.exports = router;
