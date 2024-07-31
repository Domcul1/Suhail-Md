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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlA0Z0IwMHFGSXc5V2pCWUlzWUFJa3Z6L0NCYnJOWmFNRTg4emFZbkFzTXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1oRGFiNVBWUmhXa29senJMOEVRclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjc3YmM3Y2QtNjk3Mi00ZmQ1LWFhNjEtODcxOTE1OTU0NzI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDI1MSxcbiAgICAgIDEzNyxcbiAgICAgIDE3NSxcbiAgICAgIDQ3LFxuICAgICAgNTgsXG4gICAgICA3NixcbiAgICAgIDIwNCxcbiAgICAgIDEyMSxcbiAgICAgIDM0LFxuICAgICAgNyxcbiAgICAgIDc5LFxuICAgICAgMTQ2LFxuICAgICAgMjUyLFxuICAgICAgMTA2LFxuICAgICAgMjAsXG4gICAgICAxNzcsXG4gICAgICAxNTAsXG4gICAgICAxNCxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDIxNyxcbiAgICAgIDM5LFxuICAgICAgMTIsXG4gICAgICAyMTcsXG4gICAgICAyNDAsXG4gICAgICAyNSxcbiAgICAgIDIzOSxcbiAgICAgIDExNixcbiAgICAgIDg4LFxuICAgICAgMzUsXG4gICAgICAyMDYsXG4gICAgICAyNDIsXG4gICAgICAyMTgsXG4gICAgICAxNDMsXG4gICAgICA3MyxcbiAgICAgIDI1NCxcbiAgICAgIDIzLFxuICAgICAgMTAzLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRIRVNTTlJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY4MDQxMzAzOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU4NzQwNTY5MDQ4Nzg6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitodmJNQ0VOVHZwN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5SDUycmlDcEVUZlVSeDdtQmdBMmVEQXVVNllmYzd0RTZZcWgzWHp3Y21FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInY2a1RhbE5DSmZNamxMeDg1Q1pTVzJxdEl1cUJFMmFjN2tUcjdlMk9jeXFIZGJHYnZ0ZUc2dzBrd3RYSXFKN2RqN211RWJ4MTV1R2pzZ1p3OE9IREFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlA0elFsbGwrOEg5NWUrcFprVTlkaU5DeE5FZXJxRmMzaGZHWnd0dXJ4TW5KUTZBSW96czdPQjVLVEZMc3RlYmQwT1FsZmg1djdNaC9wOFMzejZLYWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjgwNDEzMDM6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxNTA2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
