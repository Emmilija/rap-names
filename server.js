const express = require('express')
const app = express()
const PORT = 8000



const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'travis scott': {
        'age': 32,
        'birthName': 'Jacques Bermon Webster II',
        'birthLocation': 'Houston, Texas'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illions'
    },
    
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
} )

app.get('/api/:rapperName', (request, response)=> {
   const rappersName = request.params.rapperName.toLowerCase()

if(rappers[rappersName]) {
    response.json(rappers[rappersName])
}else {
    response.json(rappers['travis scott'])
}

})

app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT} you better catch it.`)
})