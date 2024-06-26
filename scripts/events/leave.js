module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "ALVI CHOWDHURY",
    description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "leaveGif", "randomgif");
    if (existsSync(path)) mkdirSync(path, { recursive: true });	

    const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
    const { join } =  global.nodemodule["path"];
    const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Dhaka").format("HH");
    const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "ˡᵉᵃᵛᵉ" : "ᵏⁱᶜᵏᵉᵈ";
    const path = join(__dirname, "Alvi", "leavemp4");
    const pathGif = join(path, `${threadID}alvi.mp4`);
    var msg, formPush

    if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n\n {name} \n\n ━━━━━━⊱🩷⊰━━━━━━━\n🌻⑅⃝আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ🪴আ্ঁলা্ঁই্ঁকু্ঁম্ঁ ⑅⃝┉❈\n━━━━━━⊱🩷⊰━━━━━━━\n💜🌻─༅༎༅{type}•⎯͢⎯⃝🌻🪄🌻\n\n {name} \n\n⎯͢♡︎-খুব বেশি পছন্দের মানুষ গুলোর সাথে.\n-খুব বেশিদিন সম্পর্ক থাকে না.!🙂🥺\n︵❝།།💚🌺\n\n- সবচেয়ে বড় ধোঁকা কি জানো__!😊\n_কাউকে হারানোর ভয়ে কান্না করেও__!!😇\n- পরে হাসিমুখে তাকে ছেড়ে দেয়া__!!🖤🥀\n\n︵❝།།💚🌺🌻💚\n\n•⎯͢⎯⃝🌻🪄💫😇🐰\n\━━━━━━⊱🩷⊰━━━━━━\n🌻⑅⃝আ্ঁল্লা্ঁহ্ঁ🪴হা্ঁফে্ঁজ্ঁ⑅⃝┉❈\n━━━━━━⊱🩷⊰━━━━━━\n𝐆𝐎𝐎𝐃 {session}                {time} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯" : msg = data.customLeave;
    msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝐌𝐎𝐑𝐍𝐈𝐍𝐆" : 
    hours > 10 && hours <= 12 ? "𝐀𝐅𝐓𝐄𝐑𝐍𝐎𝐎𝐍" :
    hours > 12 && hours <= 18 ? "𝐄𝐕𝐄𝐍𝐈𝐍𝐆" : "𝐍𝐈𝐆𝐇𝐓").replace(/\{time}/g, time);  

    const randomPath = readdirSync(join(__dirname, "Alvi", "leavemp4", "randomgif"));

    if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
    else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "Alvi", "leavemp4", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom) }
    }
    else formPush = { body: msg }

    return api.sendMessage(formPush, threadID);
                            }