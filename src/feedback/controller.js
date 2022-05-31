const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM feedbacks", (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
    // res.status(200).json(pool);
}

module.exports = {
    getStudents,
}