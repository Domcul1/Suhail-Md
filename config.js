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

global.warncount = process.env.WARN_COUNT || 3
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNmNmszajh6bEVKd0tSK3pyV053VEZNSUlPbXVzVy9leEZFSjRxK0NGaFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpPbHpUQ3VMUmh1S2czQ3RTd01IWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQ3N2JlNTgtZTJkMC00YWM2LTg5YmYtMzlhMmJjZDQ2MTZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgOTQsXG4gICAgICAxOTMsXG4gICAgICA4NyxcbiAgICAgIDExNSxcbiAgICAgIDI1LFxuICAgICAgMjM0LFxuICAgICAgMTAzLFxuICAgICAgMTU0LFxuICAgICAgMjM3LFxuICAgICAgMTQzLFxuICAgICAgMTg1LFxuICAgICAgMjcsXG4gICAgICAyMDksXG4gICAgICAxMTcsXG4gICAgICAxLFxuICAgICAgMjAxLFxuICAgICAgNTYsXG4gICAgICA3OSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDg0LFxuICAgICAgNTcsXG4gICAgICA2NCxcbiAgICAgIDQyLFxuICAgICAgMTU0LFxuICAgICAgMTgsXG4gICAgICAyNTIsXG4gICAgICAxMjgsXG4gICAgICA2NSxcbiAgICAgIDIwMyxcbiAgICAgIDIyLFxuICAgICAgMTc4LFxuICAgICAgMTkwLFxuICAgICAgMjExLFxuICAgICAgMjI3LFxuICAgICAgNzIsXG4gICAgICAxOTcsXG4gICAgICAxMzMsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEtRSDFKODFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgwNDEzMDM6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTg3NDA1NjkwNDg3ODo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObWh2Yk1DRVBXU3RyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdVTzNuNEJTd0J5aU9HTzJiMGJDMkFJV3pWV2V5U2NJelNEblV3OUZnMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGRJOUNlTnQvT05MTW1yR3phQjNycFdjQmd5RmZTNWhxNitoZTQ4ZjgrU3pNMUIwQVBPaU5BZnE4S1NMNU5EYWFLWE1rU0x6UjErcWRHZVpadUwwQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRmR6elZLYTJBMzBEQW9qYUhIQlJ3N25QZDZzTUcyaWJSNDN5UjRFdElkRUx1YVFKRFlZTWhORERQcnNOVWUzS3F1NXNEMENKSmY2YUVWNnViQWVrQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1MTgwM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
