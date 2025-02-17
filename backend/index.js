const express = require('express')

const app = express()

// app.use(express.static('dist'))

const port = process.env.PORT || 3000


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        },{
            id:2,
            title:'a joke2',
            content:'this is a joke2'
        }
    ];
    res.send(jokes);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))