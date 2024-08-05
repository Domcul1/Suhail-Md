const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_49_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1EWjFkaytWZ2FZRDNuZlZ3eFJFOU45YStsRHJ1V1o0NG1ITEVyeSs0ZWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1mMWJKVUhOVEh1WXJkQzlZczRFS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE1ZGUyM2QtNjYyOC00ODkxLWJkZTItYzFkNzgzZmE4ZWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDEwMixcbiAgICAgIDE1NyxcbiAgICAgIDU4LFxuICAgICAgMTk2LFxuICAgICAgMTQ2LFxuICAgICAgNTIsXG4gICAgICA5MCxcbiAgICAgIDI0OCxcbiAgICAgIDEwOSxcbiAgICAgIDE4NyxcbiAgICAgIDE2NSxcbiAgICAgIDIwMixcbiAgICAgIDYxLFxuICAgICAgMTAzLFxuICAgICAgMTkzLFxuICAgICAgMTMwLFxuICAgICAgMTAxLFxuICAgICAgMTgwLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDYwLFxuICAgICAgMjQ0LFxuICAgICAgMzksXG4gICAgICAxMTAsXG4gICAgICA0NixcbiAgICAgIDgyLFxuICAgICAgNTYsXG4gICAgICA4OSxcbiAgICAgIDE5NixcbiAgICAgIDE4OSxcbiAgICAgIDIyNyxcbiAgICAgIDE3MCxcbiAgICAgIDE1OCxcbiAgICAgIDc2LFxuICAgICAgMTM1LFxuICAgICAgMjI3LFxuICAgICAgMTE5LFxuICAgICAgMTM2LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1pGOFNUWUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgwNDEzMDM6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTg3NDA1NjkwNDg3ODo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ2h2Yk1DRUpxSXdyVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlINTJyaUNwRVRmVVJ4N21CZ0EyZURBdVU2WWZjN3RFNllxaDNYendjbUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXFWanMrUzdJdS9KWGRKaTJmTEFnMHVqMUNicTJaajVwVnIwOFlxMHJVRHFUMDZ6Q3V3RGlCTjJqOVN4S1pFR3NhK0FQbDh2d2F0WFZIaTNLaXNrRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmE2bHV3MTk5TFZiSTU5VWFCbW9SdnRaWCt2d2Z0NzBLcUpHbkh0dW5abTY2ajRWQ0FqdVRYeDVtbHVmMjZEbTRIYnI0NnFEMDVCYzVQWEt4QktSRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODQ0MTkwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
