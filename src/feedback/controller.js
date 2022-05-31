const pool = require('../../db');

const getFeedback = (req, res) => {
    pool.query("select * from feedback", (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getFeedback,
}