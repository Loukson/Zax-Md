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
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tjL1J5OWJQT3VIV0pLTXZtYUlnQ25QZnJyeVhWazVERXV3RlVsdmkyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1VVa1BzYUU0TGw3Z0JFVlA5NGhyc2FCWm1xbkxRVmptc0FXOTBKaVIzST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QmNXeXhNTjUvc1lRTHczSytCNE5zK0NDcnl6QlVRT1U1aG9TbzZQRTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORkdVN25obGZpRTZFOGtCQ2NxWXNWYUx5bGhKQ2daODRsWE5YQWlDOUM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGOXBON3FLd2hmS29yMUFyYm9oU1JmQU9aWWlnVGFuSEV3UEZJNXJWMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDNDNmNXdZeFBYT1hhaHlIeVkvZTdzN2FUbWJIRDN2WmhoRTVLWlJ4Q0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEp6cmlKMmRPaGlnSkU5M2M3M1g5aDlpV1B2ejFmemh1aWZxSnJ5T0htZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3MrV0dpWXNGcWNBeWR0bnRVemF4cks5MXpEVUhqbUdqNm9rVGgyT3dTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZwSXRjTVpPOVBmdE00bUttVWZsMlo1Z2QrNnd6ZlY0eWxvQXBCU3dWM0dWRnkvWmJ6RlV5SExPM0lGRm90RzVuUVIrWnNKQXNFSXU3ZEE0aHhXUkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IkdPL2FBSHA0TjV3U3h1SEJKbFVVY2F2c3BNVDREdTRFNlVSQnk1Ui93RVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFIX3UxbkhHUkxXemtWZGpXUjlZMEEiLCJwaG9uZUlkIjoiNGExM2Y5OWEtMmMzNi00YjYzLTk5MTAtNDBmN2NkNjdjNjY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd2dDErUUNlZWkrSi8vNERqZG85L29VcE1UOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWHdnYkpITUFvUEQ4cU5UeWxBUTlKUEk1MWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1FNNldRWEIiLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii5cbsqfL/CdkpZcbiAg4bSPL/CdkptcbiAgICDhtJwv8J2SllxuICAgICAg4bSLL/Cdko5cbiAgICAgICAgcy8g8J2SglxuICAgICAgICAgIOG0jy/wnZKMXG4gICAgICAgICAgICDJtC/wnZKKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKenQrYU1GRUwvdW5Ma0dHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPSIsImFjY291bnRTaWduYXR1cmUiOiIrR1ZjY1ppai9reTQvcVRLRWx5V01RZGZxRlpFbEFZRnNXeitHcXdlU2VDVm00SGJVWDE2RHR3WnFENXluVitFN1VqZXNpVVJnYzVpdmdvKzJXVkVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXdZamdoK0hPRUFUNTVzNUQ2elJHRG1wZ3FPMVFKSVdnbi9mTGZZd2xkNlRDcXVRYVNXcGF0WW01RW5NU2dLdldJQ2ZmMzRhWjJKUnFJTjBvbHQ1Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwMjMzMTk4ODoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSTdCeHkzUkErVG5JckNNVHVlcUFrajVhOU1KYXowdHQ1SUpCNHV5cHRCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjIzMzA5fQ==";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
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
