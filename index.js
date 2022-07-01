const { async } = require('@firebase/util');
const express  = require('express');
const cors = require("cors");

const User=require('./config.js');
const app = express();

app.use(express.json({limit: '400mb', extended: true}));
app.use(express.urlencoded({limit: "400mb", extended: true, parameterLimit:50000}));

app.use(express.json());
app.use(cors());

app.get("/", async(req, res)=>{
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({name:doc.name, ...doc.data()}));
    return res.send(list);
})

app.post("/create", async(req, res) =>{
    const data = req.body;
    await User.add(data);
    res.send({msg: "Image Added"});
})

app.listen(4001, () => console.log("Up & running"));