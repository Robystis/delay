//base by Manos (Manos Bot Inc.)
//YouTube: @Manos
//Instagram: Manos
//Telegram: Manos
//GitHub: @Robystis
//WhatsApp: +254718382875
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@nick

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "254718382875"
global.ownername = "🦊Manos🦊"
global.ytname = "YT: Manos "
global.socialm = "GitHub: Robystis"
global.location = "Africa, Kenya, Mombasa"

global.ownernumber = '254718382875'  //creator number
global.ownername = '🦊MANOS🦊' //owner name
global.botname = '🦊manos🦊 ᵇᵘᵍ ᵇᵒᵗ' //name of the bot

//sticker details
global.packname = 'bugged By'
global.author = '🦊Manos\n\nContact: +254718382875'

//console view/theme
global.themeemoji = '🦊'
global.wm = "Manos Bot Inc."

//theme link
global.link = 'none'

//custom prefix
global.prefa = [',']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true//auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
