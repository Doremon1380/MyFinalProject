import bodyParse from 'body-parser';
const express = require('express');
const app = express();
const port = process.env.PORT | 1102;

var http = require('http');
const { OAuth2Client } = require('google-auth-library');
const clientSecret = require('./client_secret.json');
//const client = new OAuth2Client(clientSecret['client_id']);

app.use(express.json());

//async function verify() {
//    const ticket = await client.verifyIdToken({
//        idToken: token,
//        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//        // Or, if multiple clients access the backend:
//        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//    });
//    const payload = ticket.getPayload();
//    const userid = payload['sub'];
//    // If request specified a G Suite domain:
//    // const domain = payload['hd'];
//}

verify().catch(console.error);

app.post('/create-user', (req, res) => {
    var clientID = clientSecret['client_id'];
    //const ticket = await client.verifyIdToken({
    //    idToken: token,
    //    audience: CLIENT_ID,
    //    // Specify the CLIENT_ID of the app that accesses the backend
    //    // Or, if multiple clients access the backend:
    //    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //});
    //const payload = ticket.getPayload();
    //const userid = payload['sub'];
    //// If request specified a G Suite domain:
    //// const domain = payload['hd'];
});