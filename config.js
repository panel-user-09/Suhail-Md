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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064763129";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_28_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrbUFYRGJlL1dnenNLSmJrSk5zVEt3RGdQd2pCWmplZGVNOVE0R3krVlRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUbGhyMU16LVI3YVI2X1lSLWZiT1F3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY2NGI2NDVjLWQ2YzQtNDBhZC05NjJmLTNmNTY0NGRlNzRkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMjAzLFxuICAgICAgNzcsXG4gICAgICA1MSxcbiAgICAgIDQ0LFxuICAgICAgMTEzLFxuICAgICAgMTUsXG4gICAgICAyMixcbiAgICAgIDE2NixcbiAgICAgIDEzNyxcbiAgICAgIDY0LFxuICAgICAgMTU5LFxuICAgICAgMTY0LFxuICAgICAgNzcsXG4gICAgICAxMDUsXG4gICAgICA4MCxcbiAgICAgIDIyNSxcbiAgICAgIDIwNCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxMDAsXG4gICAgICAxMTcsXG4gICAgICAxMyxcbiAgICAgIDc0LFxuICAgICAgNzYsXG4gICAgICAxMzksXG4gICAgICAyNTAsXG4gICAgICA5OSxcbiAgICAgIDIzLFxuICAgICAgMTgsXG4gICAgICAyMzgsXG4gICAgICAyMTksXG4gICAgICA3OSxcbiAgICAgIDIwNixcbiAgICAgIDE5NixcbiAgICAgIDc0LFxuICAgICAgMTQwLFxuICAgICAgMjIxLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdMU0hHVkdaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3OTc3MzkyNDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDA0MjQ2NTE2Mjg3NzA6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3QgVXNlcvCfmYJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL3Fyb0FERU1QRC83TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlGajhBa2VCZmRmb2k1TnF2QUF4YVJpU0d0b1htUTErR0JIcElwa1dLV0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVjBxMFI1NzBQN2w4ZVJUc09rNHZzUWthOU1DMm5WZGNLMVE3dlcrelZMM3cyTm9YYXlZZmJPTG12VFZRdFpBczIrM08zNGdWZWRNN1BsUFBnbEhqRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDU0ZWZGOGRXaDJHSFRLcXhRV2tlYnY2eVBrYS8wRmRiNktLblJOcjFLMlBTRWJWa0VUQ2N6ZGVUYldPdnFLQVVpYjdWQ2cvV05uNDgyOTVIRmtHQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3Nzk3NzM5MjQ2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjU2OTAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWk0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhS1RSajJhSktRS0pudy9ZTlE3RTU0eXJZdkVaL2VJcTFhUW1XNnRZQlkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwNjA3MzcwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Babai"Su,


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
