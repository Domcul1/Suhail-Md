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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOQ1RQdVB0YmZtbkluMVp3WS9wbjRMYWFxT3dpQzVBS21hRWRaUWJ6Y1FNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkd0dUUkdxblNpaVgyNkZtNTdiQlV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiZGVmZWI5LTAyNzctNDAyOC04ODE1LWEzMWMxZmQzYTNiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxNTksXG4gICAgICA2MixcbiAgICAgIDIxOCxcbiAgICAgIDIzMSxcbiAgICAgIDE4MSxcbiAgICAgIDExLFxuICAgICAgMjE0LFxuICAgICAgNDcsXG4gICAgICAyNDEsXG4gICAgICAxOTQsXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDksXG4gICAgICAxNTYsXG4gICAgICA5OCxcbiAgICAgIDIyOSxcbiAgICAgIDI5LFxuICAgICAgMTA0LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMjEwLFxuICAgICAgODIsXG4gICAgICAyMTEsXG4gICAgICA5NCxcbiAgICAgIDcxLFxuICAgICAgNzUsXG4gICAgICAxNDYsXG4gICAgICAxMTksXG4gICAgICAxNjIsXG4gICAgICAxNDMsXG4gICAgICA0LFxuICAgICAgMTEsXG4gICAgICA1MCxcbiAgICAgIDIyNyxcbiAgICAgIDksXG4gICAgICA2MixcbiAgICAgIDI0LFxuICAgICAgMjM3LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFlRU0pGNE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgwNDEzMDM6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTg3NDA1NjkwNDg3ODo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcWh2Yk1DRVBlWnY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdVTzNuNEJTd0J5aU9HTzJiMGJDMkFJV3pWV2V5U2NJelNEblV3OUZnMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlJYS0dPc2t4UWpTcktveVdaMXBEYm9JSjlEbmNOdFUrUk1YSW1QVlNwOWhldWh0S3UvSFVKeUgvOXBGYUVDU05ZaUpSeDdZL2lDNGtQeVc3WkJFQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUhPUEZXZEs5bGhYRi8rTHlQc2NJSEJDSTdTbE1uU3I5OWxEL2huT1BXME1ZbXdEeDdMbk9hVmUvYVZVdzJWbGVFRDFwSzNQTmxKOWpSNW9YTk9tQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcwMDE1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
