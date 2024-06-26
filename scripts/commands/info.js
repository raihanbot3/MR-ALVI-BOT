module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/x9y0jY0.mp4", 

            "https://i.imgur.com/MMhJVbO.mp4", 

"https://i.imgur.com/Ki3LmhX.mp4",

            "https://i.imgur.com/BAKbg7o.mp4"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝗠𝗿. 𝗔𝗹𝘃𝗶 𝗖𝗵𝗼𝘄𝗱𝗵𝘂𝗿𝘆\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗠𝗿.𝗕𝗼𝘀𝘀 𝗔𝗹𝘃𝗶 𝗖𝗵𝗼𝘄𝗱𝗵𝘂𝗿𝘆\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗝𝗵𝗲𝗻𝗮𝗶𝗱𝗮𝗵)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝗝𝗵𝗲𝗻𝗮𝗶𝗱𝗮𝗵\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (𝗡/𝗮)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝗝𝗼𝗯\n𝗚𝗺𝗮𝗶𝗹        :  alvixhowdhury718@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+60135647836\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/mr.alvichowdhury\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.mp4")).on("close",() => callback());
   };