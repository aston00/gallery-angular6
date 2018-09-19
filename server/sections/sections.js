/**
 * EXPORTS
 */
const express = require('express');
const router = express.Router();
const dataBase = require('../database/database');

/**
 * ROUTES 
 */
router.get('/', (req, res) => {
    res.json(dataBase.sections);
});

router.post('/:section', (req, res) => {
    dataBase.sections.push(req.params.section);
    res.json(dataBase.sections);
});

router.delete('/:section', (req, res) => {
    let sectionIndex = dataBase.indexOf(req.params.section);
    dataBase.sections.splice(sectionIndex, 1);
    res.json(dataBase.sections);
});

module.exports = router;