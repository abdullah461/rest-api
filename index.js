import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js'

const app = express();
const PORT = 5000

app.use(bodyParser.json());


// this method specify path and router handler
app.use('/user', userRoutes);


// how to create API Routes
// how to create a route to handle GET requests using the app.get() function:
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));