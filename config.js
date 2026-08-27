const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/bbee84726-ux/orbit/blob/main/images/orbit%20live.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*ORBIT Is Alive Now😍*",
BOT_OWNER: '94740217262',  // Replace with the owner's phone number



};
