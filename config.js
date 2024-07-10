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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_49_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkJaUkw0bDYyRGlTMFRoeTVqOGd3VVA0OWM3dFcvRXIxdVQ5UmErdGQ3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFVWcWVrOGFRWm1aU3BzeWJjc3Vyd1wiLFxuICBcInBob25lSWRcIjogXCI2YTI5NzQxOS1lMjUzLTRmMzUtODhjYi00OWRjM2U5MGVjYjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgNzAsXG4gICAgICAyMjgsXG4gICAgICA4MSxcbiAgICAgIDYyLFxuICAgICAgMTM2LFxuICAgICAgMTQyLFxuICAgICAgMjIwLFxuICAgICAgMjQ5LFxuICAgICAgOTUsXG4gICAgICAxNDAsXG4gICAgICAxNDEsXG4gICAgICA0NCxcbiAgICAgIDEwMCxcbiAgICAgIDE1NSxcbiAgICAgIDIwNSxcbiAgICAgIDE1MixcbiAgICAgIDczLFxuICAgICAgNDIsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICA4OSxcbiAgICAgIDE2MCxcbiAgICAgIDEzMixcbiAgICAgIDIwMSxcbiAgICAgIDI3LFxuICAgICAgMjQ2LFxuICAgICAgMTgsXG4gICAgICAxMDAsXG4gICAgICAzNCxcbiAgICAgIDE2LFxuICAgICAgMTUwLFxuICAgICAgMTc0LFxuICAgICAgMjUzLFxuICAgICAgMTQxLFxuICAgICAgMTExLFxuICAgICAgMTU0LFxuICAgICAgMTA3LFxuICAgICAgMTUsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTDdBTVBOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODA0MTMwMzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1ODc0MDU2OTA0ODc4OjYxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlByZWNpb3VzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1odmJNQ0VQdmR1TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVU8zbjRCU3dCeWlPR08yYjBiQzJBSVd6VldleVNjSXpTRG5VdzlGZzFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjByaTRySHh4VkN1SzVSdFFPK2VqNkpCbVdnellBTXp2T1ZIbklZSmlkNm05YUFzTVhPa1dzSkVaSXJBRUk2MHYrM2R6RWgveFNwMVRxSGkxQUwwMUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZjVGV0Q3IyQUFXcHIrc1ZJNTB3Ymg5WjZQU05UcVFRbjR6aTcvcEdhU2t2eUp4SG12V1I0d1ZOSml6NWo4UXlqTzdWeVZCYW9oSXNqVnhBZ28xSml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjgwNDEzMDM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1OTQxNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVRbS5qc29uIjogIntcImtleURhdGFcIjpcIndWYVFjanI2d2lqaVlZcVJSSGFYUHdtblVJVVFXaThML3lOQnFhbXpwUUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQ0ODI5NDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NzI2NzQxMjVcIn0iCn0="  // PUT your SESSION_ID 


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
