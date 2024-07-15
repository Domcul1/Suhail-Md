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

global.warncount = process.env.WARN_COUNT || 2
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_09_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlDQklPb0NKRTArbVJBbEU1RXZObFRJVXQ1bmZkaE90YlVESEJ0ZnBsYUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjExeEpvUjlRU3p1YUtVYXl1cF9Na3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODA5OTRiYWEtMjM0NS00MDNlLWExNWMtNjM4N2IwYWNhNWFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMTE5LFxuICAgICAgMjAwLFxuICAgICAgNixcbiAgICAgIDIzNixcbiAgICAgIDk2LFxuICAgICAgNTMsXG4gICAgICAyNTIsXG4gICAgICAxMzIsXG4gICAgICA0NSxcbiAgICAgIDE0OCxcbiAgICAgIDIwNixcbiAgICAgIDQ1LFxuICAgICAgMTIsXG4gICAgICA4NyxcbiAgICAgIDIyMSxcbiAgICAgIDksXG4gICAgICAxNCxcbiAgICAgIDc0LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgODQsXG4gICAgICAyMjIsXG4gICAgICA0NyxcbiAgICAgIDI0MyxcbiAgICAgIDI1MyxcbiAgICAgIDE0MCxcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDc3LFxuICAgICAgODAsXG4gICAgICAxNzksXG4gICAgICAzOCxcbiAgICAgIDEwOCxcbiAgICAgIDEzOCxcbiAgICAgIDYxLFxuICAgICAgNTMsXG4gICAgICA2OSxcbiAgICAgIDIwNSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzNVZFODFMNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODA0MTMwMzo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1ODc0MDU2OTA0ODc4OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051aHZiTUNFTHZPMDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGF6a2w3eTAzMHdYMm1OWGlPS09ya04yUXYxOE9aMjA2OTVUbXhZZXBpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4bmZ4RmppempNdnhEWnJSelJZVzlIdnNkcHMxTkN0c2pNakptUGxXaXhpejBXR2dJWjJLVDlHalgyWHVSSnU0d2d0akdFNjZTZ1B0eTBteU9TOUlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtUlF1aG82ZDVZRUdJQUZyWUVWY2FPTUtoVEYvY1U4VUgwa3hyKzUvTzRFQktOeGZRTE90RkoycE1qcENEWjNUbTBkTEZRa0hSV3FGYTRxT2s0ekNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY4MDQxMzAzOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTAzNDU1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVRc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUg0UXpVaElTMmFlWnRUN05zeE4xK2NJbmN5QlFLMjJIK29mMnczVkwzYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDQ4Mjk0MDEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
