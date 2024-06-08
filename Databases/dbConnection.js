import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


  
   client.connect().then(()=>{
    console.log('Connected successfully to server');
  }).catch(()=>{
    console.log('Connected Faild to server');

  });
 export const db = client.db('Car_Rental_System');
