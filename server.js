const express = require('express');
const feedbackRoutes = require('./src/feedback/routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("hello world");
})

app.use("/api/v1/feedback", feedbackRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));