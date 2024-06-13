const express = require("express");
const app = express();
const port = 3000 || 5000;
const routingCompont = require('./Router/mainRouter');

app.use(express.json());
app.use(routingCompont);

// app.get('/', (req, res) => {
//     res.send("This is the life of the vedang");
// })
app.listen(port, () => {

    console.log(`Serevr is started on port ${port}`);
})