const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Loukson/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "22502331988";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xybDFxTkc1TGxLRG5ieVFJMDBjdXhmcU15cFNSc3RmVmNXMEtqMUFFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkJZYytQRkV2WFBXdG13dk1uSlI5Sm95NDJwcU9xL3RoL2NHL1c1NE9Cbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQkhESEpRU3lURkkrWlU0cWVPQzMxcmNCd1ROYTJFQk42TXEveEg1OG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdmJTdTl6RmFOdWZqc0puVkJwRFM1QnhjQkJtckxXa1RpWFBWVzJraG00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9DazVtb0dBOTNqN3BmZHgwaU5GWkRpU2oxaUNGMDJQakZZenpLeG9UR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpTTnp0REtGVkQzc0xiT3lmTGVOMDlIZUZaQ01ydFBkbEF5Uy9ocGZTM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05UVCtEbnNJNnRnajJaTVcwTitmVFNIYm5hMnVkbStxV1B1NTVkb1RGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU5wOWFUdkJJeGpqcnBnU2lqMTErMjdTTzVSQ093MUF6Qm0wN21wNkpGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRzc3ZybDhFWDk4dDF2ZGIwRnVSZ3QvYjFhMXdkV2srV2l2cVVlbDFESjlkOEJGVGx0OHZicmJLM0ZDcFh5NTFPZW5IQVVCUjFVZG1lUjFVZlNiL0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiI0Y3BOdCt0QisyKy9VWlNrU3dzVTdaR1BjZTlacXBqOGlsTFF3emtnUzVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnWlk1dURqQVJJVzZBd3JzU19iVnJBIiwicGhvbmVJZCI6ImNjY2QxZTEyLTE0NDQtNDJmZC1hNTBhLWM2Mzk5NGMyZDRjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQmhibVpsVUFKMnhBU0NJQVVVMjV3T21ObG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3B6YURRUU9TUm8yQlZEOHVUV0NucTNqbnpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllZWDdCU1I4IiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvJLiip/gvLrwnZm78J2ZvvCdmoTwnZm68J2agvCdmb7wnZm9IPCdmoTwnZqJ8J2ahPCdmbzwnZmw8J2ZuvCdmbjgvLviip/gvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p6dCthTUZFS25TdzdrR0dCNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Illqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikw4V0hoRHdtTml1ZDM3U00wSC9sVGowRzZ3TFZEaHVrQWlRRG9vb1BSM05hY2NYRExmK0tWWHFlQVE1dG1ZaVpldjRHdmd4S1lkYVdSQ250Nmt4eERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5OS9pbWZhZld5US96TzVDUUU5a0RFRmtuTVBsVWd5QXRjWXg1YUVwMnRuTkovUFhsamNpYW00OXpsUlQxaExwWDdpNmFvVTBwSFRUdGtQWlM2M3FDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldJN0J4eTNSQStUbklyQ01UdWVxQWtqNWE5TUphejB0dDVJSkI0dXlwdEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEyNTg2NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzJkIn0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  author: process.env.PACK_AUTHER || "✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "NARUTO").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
