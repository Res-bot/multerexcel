const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newData = new Data({ name, email, phone });
        await newData.save();

        res.json({ message: 'Data added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

module.exports = router;

