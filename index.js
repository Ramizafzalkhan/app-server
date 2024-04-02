// Import the required modules
const express = require('express');
const axios = require('axios');

// Create an instance of Express
const app = express();

// Define a GET route
app.get('/', (req, res) => {

    const axios = require('axios');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        // url: 'https://rpc-namada-t.crouton.digital/status',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        headers: {}
    };

    axios.request(config)
        .then((response) => {


            res.json(response.data)
            // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
