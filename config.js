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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_04_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ09DcnhzNS84c29JMnlSS0VGVWEzK05CU2Z3RFJiK21BZ21xeGxNMWdDZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU0lNaGFQTDBSTTJmbU9CWk5PRmVYUVwiLFxuICBcInBob25lSWRcIjogXCJmMTAxNjNhYS0yYjYyLTRhMTctYTdiNC1hNGQ1YzA0OGUzZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMjksXG4gICAgICA2NyxcbiAgICAgIDE0NCxcbiAgICAgIDI0LFxuICAgICAgNzQsXG4gICAgICAyMjcsXG4gICAgICAzMSxcbiAgICAgIDE0MSxcbiAgICAgIDIyMCxcbiAgICAgIDIxMSxcbiAgICAgIDEzMyxcbiAgICAgIDQ4LFxuICAgICAgMjA1LFxuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAyMTgsXG4gICAgICAxMzksXG4gICAgICA3OCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxNjcsXG4gICAgICAxNjEsXG4gICAgICAxODQsXG4gICAgICAyMyxcbiAgICAgIDIxMSxcbiAgICAgIDI0MyxcbiAgICAgIDI0MSxcbiAgICAgIDE4MCxcbiAgICAgIDY1LFxuICAgICAgNjgsXG4gICAgICAyMTYsXG4gICAgICAyNDksXG4gICAgICAyNixcbiAgICAgIDQ0LFxuICAgICAgMTU4LFxuICAgICAgMjEwLFxuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjZodmJNQ0VNdmVnYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsYXprbDd5MDMwd1gybU5YaU9LT3JrTjJRdjE4T1oyMDY5NVRteFllcGlBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlZd1ZkRFpwcmxtLzFZUk9kWG1aV3hFNXpXV3hlekpydDgzWm9YK3ZNelYyOWgwYjN4TDBhbmxwYmZGVG5EL1NmZmp1b0FCKzRrY1RYT2ZkaUpZR0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkQyT2llR2tSemJ1empCOFBFaHgza1FGZG5mNnlNYWZ4RTJhVnlOOGk1TkNjWFBuQzE2b3RiU1lXL2laNUhJMWtBQnI4ZW5ibkhsU2hvMDU3Lzg5OGlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODA0MTMwMzo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1ODc0MDU2OTA0ODc4OjY5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3OTAyODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd0Ky5qc29uIjogIntcImtleURhdGFcIjpcIm92N29zQ09PMUsxeGgwdkJ5TW1BRDE5L1VnOVFYOHNuOTM2WER1MmltZE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQ0ODI5NDA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzkwMTM5NTQxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3Q5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkMvMXJqek8wUW9uNEd6SW9QZ21Gd3FmaW1sd3dDaXk1amU1MTR5cUdCND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDQ4Mjk0MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
