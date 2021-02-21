//importing
import express from 'express'
import mongoose from "mongoose"
import Content from './dbquote.js'
import cors from "cors"
//app config
const app = express();
const port = process.env.PORT || 9000

//middleware

app.use(express.json());
app.use(cors());


//DB config
const connect_URL = "mongodb+srv://phu1994:6298327@cluster0.rpsig.mongodb.net/Random-Quote-Machine?retryWrites=true&w=majority"
mongoose.connect(connect_URL, { useNewUrlParser: true,  useUnifiedTopology: true });

//api routes
app.get("/", function(req, res) {
    res.status(200).send("hello world");

})
app.get("/content/quote", async function getAllContent(req, res) {
    const content = await Content.find();
	res.json(content)
});

app.post("/content/id", async function postOneContent(req, res) {
    const quote = req.body;
    const data = await Content.create(quote);  
    if (!data) {
        res.status(500).send('err')
    } else {
        res.status(201).send(`New content was created: ${data}`)
    }

    })


// app.post("/", async function postAllContent(req, res) {
//     const quote = req.body;
//     Content.create(quote, (err, data) => {
//         if (err) {
//             res.status(500).send('err')
//         } else {
//             res.status(201).send(`New content was created: ${data}`)
//         }
    
//     })

// })

// app.get("/content/id", (req, res) => {
//     const id =  req.body
//     Content.find()
// })

//listen
app.listen(port, () => console.log(`Please listen in port: ${port}`))