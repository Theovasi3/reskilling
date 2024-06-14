const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000; // Or any port you prefer

app.use(cors());

app.get('/posts', async(req,res) =>{
    try{
        const responsePhotos = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts')

        const data = {
            photos: responsePhotos.data.slice(0,11),
            posts: responsePosts.data.slice(0,11)
        }
        res.json(data);
    } catch (error){
        console.log('Error fetching',error);
        res.status(500).json({error:'Internal Server Error'});
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
