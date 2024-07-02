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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_35_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieGRQRHJIRmQ4UnYvbUo4WHp0dXdpSVhITDhmR1AxaWN0d2xXeEs0c2pNUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid25OSmFMY2tSemFHalo1TzZiTkdWQVwiLFxuICBcInBob25lSWRcIjogXCJkNDE4YmNmNy03ZDI3LTQxNWYtYWIwMS05ZjVhZWFlNTM0NTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMTU3LFxuICAgICAgMjIyLFxuICAgICAgNDYsXG4gICAgICAxNTgsXG4gICAgICA2NCxcbiAgICAgIDIxMixcbiAgICAgIDIzMixcbiAgICAgIDI0MSxcbiAgICAgIDQ2LFxuICAgICAgMjI4LFxuICAgICAgMjYsXG4gICAgICA0MCxcbiAgICAgIDE3LFxuICAgICAgNDksXG4gICAgICA4OCxcbiAgICAgIDE3MixcbiAgICAgIDEsXG4gICAgICAxOTEsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDIwNCxcbiAgICAgIDU4LFxuICAgICAgMjIzLFxuICAgICAgMTM2LFxuICAgICAgMixcbiAgICAgIDE5NCxcbiAgICAgIDE5MyxcbiAgICAgIDI3LFxuICAgICAgMTY4LFxuICAgICAgMTUsXG4gICAgICAxMzcsXG4gICAgICAxMzksXG4gICAgICAyMjIsXG4gICAgICAxOTQsXG4gICAgICAyOCxcbiAgICAgIDE2MyxcbiAgICAgIDIwMyxcbiAgICAgIDEyOCxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUFpKNkU5UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODA0MTMwMzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1ODc0MDU2OTA0ODc4OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05paHZiTUNFUERPamJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWkxeDdkQUJYYmRkZktiYkRoOEJiOXpwMTdWMXdreUhwUkRhSkp5NXhuOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQZG9xMUN1Qkx5ZGUzLzk1YWRicFJPaXpjY2M2UFpLWWx0SHBFa1JKUXVkNHFBUCtiTVBSdnREWk5nRi91Ti9LcEh4WjlKYm5oWjdTeklQOHlhWGVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1TkNncFM4RVMvZzVXbmVtZzQwMzlQMjcvcm1XU3AyTDU5aEcvMExqS0pvbW81akFsN2ZvaHMwdTA0OGFWUFFZdmJ6bzBoWExuaHdPOHUrYTMybnBpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY4MDQxMzAzOjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODg3NzMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVFtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3VmFRY2pyNndpamlZWXFSUkhhWFB3bW5VSVVRV2k4TC95TkJxYW16cFFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0NDgyOTQwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzcyNjc0MTI1XCJ9Igp9"  // PUT your SESSION_ID 


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
