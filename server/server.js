import cron from 'node-cron';
import axios from 'axios';
import process from 'node:process';

const APP_URL = process.env.SERVR_URL;

// schedule task to run every 10 minutes
cron.schedule('*/10 * * * *', async () =>{
    try{
        await axios.get(APP_URL);
        console.log(`Server is pinged !!`);
    } 
    catch(error){
        console.error(`Error pinging ${APP_URL}: `, error.message);
    }
});