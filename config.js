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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_23_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4amhqejBWRnRPeUR5bEIzeFk3Uk5tSm9UMlhJV20yc3U3V2w2R0VpVURrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzc1BMLTNJMlN0aXhWbzNHTjhBamp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1MGY4OGE3LTBiNzQtNGI4OC05NmRjLTJjYWJlOWQ5NzdiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxNzcsXG4gICAgICAxMTEsXG4gICAgICAyMTgsXG4gICAgICAyMzMsXG4gICAgICAzLFxuICAgICAgOSxcbiAgICAgIDIyNixcbiAgICAgIDQ5LFxuICAgICAgMTUxLFxuICAgICAgMTMxLFxuICAgICAgMTcwLFxuICAgICAgMTE1LFxuICAgICAgMjE0LFxuICAgICAgMTAyLFxuICAgICAgMTIsXG4gICAgICAxNjIsXG4gICAgICAxMzUsXG4gICAgICAyMjEsXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAyMzQsXG4gICAgICAxNDIsXG4gICAgICAxMzAsXG4gICAgICAxMDQsXG4gICAgICAxNDksXG4gICAgICAzMCxcbiAgICAgIDEwLFxuICAgICAgNjMsXG4gICAgICAxMDUsXG4gICAgICAyMTEsXG4gICAgICA3NyxcbiAgICAgIDE4NyxcbiAgICAgIDUzLFxuICAgICAgMTI5LFxuICAgICAgMjQsXG4gICAgICA1MSxcbiAgICAgIDEyMixcbiAgICAgIDIzNCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldYTTkxWEtSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY4MDQxMzAzOjc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU4NzQwNTY5MDQ4Nzg6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dodmJNQ0VMeUN4N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5SDUycmlDcEVUZlVSeDdtQmdBMmVEQXVVNllmYzd0RTZZcWgzWHp3Y21FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtDL2tWQ1crb0pDSGhPMjlRS3h5bnBFVUVKb0R4c1g0WHlUMmwreHlJL1k5bGVjbnlIdGRFWEhteFZaMjJQUHlxYW1UTmdPRmV3VjcvSnhnSVJQd0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImo5bHcyeGRGcjV5TkIrUzh5c0N1d0FlRkxDMjBNdEVYUzd6dm9oeTI1VzRwSDBSQzBJeHJuY3RLZVZvd0Y3eHl6b3BGU1NxMTZ2elpSakU4QitGMEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjgwNDEzMDM6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkyNTM3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
