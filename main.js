const { google } = require('googleapis');
const keys = require('./key.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Logged');
        gsRun(client);
    }
})

async function gsRun(cl) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });
    const opt = {
        spreadsheetId: '1zxe9ueXp8oR-LMYOhf6o5YiLSuJ-uRj1DimAVNCjnYU',
        range: 'LOANS!A1:AH33403' 
    }

    

    let { data } = await gsapi.spreadsheets.values.get(opt);
    console.log(data);
}