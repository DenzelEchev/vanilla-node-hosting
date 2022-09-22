const express = require('express')
const app = express()
const cors = require(cors)
const PORT = 8000

const pokeInfo = {
    "bulbasaur": {
      "name": "Bulbasaur",
      "debutGame": "Red, Blue, Green",
      "pokeDexNumber": 1,
    },
    "charmander": {
      "name": "Charmander",
      "debutGame": "Red, Blue, Green",
      "pokeDexNumber": 4,
    },
    "squirtle": {
    "name": "Squirtle",
    "debutGame": "Red, Blue, Green",
    "pokeDexNumber": 7,
    },
    "unknown": {
    "name": "unknown",
    "debutGame": "unknown",
    "pokeDexNumber": "???",
    }
}

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/secondpage', (req, res) => {
  res.sendFile(__dirname + '/secondpage.html')
})

app.get('/thirdpage', (req, res) => {
  res.sendFile(__dirname + '/thirdpage.html')
})

app.get('/api/:name', (req,res)=>{
  const pokeName = req.params.name.toLowerCase()
  if(pokeInfo[pokeName]){
    res.json(pokeInfo[pokeName])
  }else{
    res.json(pokeInfo["unknown"])
  }
  
})

app.listen(process.env.PORT || PORT, () =>{
  console.log(`The server is running on port ${PORT}`)
})