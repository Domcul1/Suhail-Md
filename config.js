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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_43_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6RlcvTDVnWHRlUTI4SjlUVEpLUUdGWS9naitVT1o4Ui84SmI5SEhzK01BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjgwNDEzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5NzdDQkVEODBENzBCOUVGRkRGQTY2MEU5RjMxQjIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxNjYwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwYk10dHoxaVFHYWNlX0tXQnNqenhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1OGM0OTY0LTdjN2UtNDIxYS1iZDc0LWI5NTFlNTIzYTE2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyMjAsXG4gICAgICAyMzEsXG4gICAgICA4NSxcbiAgICAgIDIyNyxcbiAgICAgIDE0MSxcbiAgICAgIDEwNixcbiAgICAgIDE2LFxuICAgICAgNzYsXG4gICAgICA5LFxuICAgICAgMjUzLFxuICAgICAgODcsXG4gICAgICAyNCxcbiAgICAgIDI0MSxcbiAgICAgIDQxLFxuICAgICAgMixcbiAgICAgIDE4MixcbiAgICAgIDkzLFxuICAgICAgMjQ5LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDExLFxuICAgICAgNDcsXG4gICAgICA1OSxcbiAgICAgIDEyNCxcbiAgICAgIDcsXG4gICAgICAyMDcsXG4gICAgICAyMDYsXG4gICAgICA1OCxcbiAgICAgIDE2NyxcbiAgICAgIDQ4LFxuICAgICAgMTA0LFxuICAgICAgMTc0LFxuICAgICAgMTMsXG4gICAgICA5OCxcbiAgICAgIDc2LFxuICAgICAgMjQyLFxuICAgICAgNzgsXG4gICAgICAyMjQsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUc1QTJUNjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgwNDEzMDM6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTg3NDA1NjkwNDg3ODo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeWh2Yk1DRUxyYzNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxhemtsN3kwMzB3WDJtTlhpT0tPcmtOMlF2MThPWjIwNjk1VG14WWVwaUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjZsSlpXZlFJcmdqdXJVUmluNzZuOGs1S1J6a0VCKzVydzdLTU1ySTIvUkcvOWNmaHAxcmdCbWZkLy9Kd29IQTZsekJDR2ttZEExcit2SStscDRIQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXovMFFFb0gycnFyR2pYUlZEQkhnT0x6RENHMzBEWkpMRXBMVzB2eC9HWk0zbXhWenJON2Fkc0JXU3JaVWZSdGdQcG9GVVlrWk9HbTY2Q2s5d1h3Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTY1NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd0OS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
