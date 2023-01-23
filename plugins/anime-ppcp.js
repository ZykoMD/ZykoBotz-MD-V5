import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api.tiodevhost.my.id/api/randomgambar/couplepp`)
let json = await jsn.json()
conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, json.result.female,[['🔄 Next 🔄', `/${command}`]], m)
conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, json.result.male, [['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['anime']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
// •RECODE BY ZYKO-MD
