[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)
<p align="center">
    <img src="https://telegra.ph/file/df669fdd8603ddd665ab8.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>

## PENTING

> **Warning**: this bot iz made by SLG
contact owner for more informations.


<h1 align="center">SUZUNE-MD-BOT - MD</h1>

<p align="center">
 <a href="#"><img title="SUZUNE-MD-BOT" src="https://img.shields.io/badge/Whatshapp BOT-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/GEEKMDXINC"><img title="Author" src="https://img.shields.io/badge/AUTHOR-ImYanXiao-green.svg?style=for-the-badge&logo=github"></a>

---------

### a little about this bot
- ✔️ | Simple 
- ✔️ | Premium 
- ✔️ | Tools 
---------
 
## ```USER RAILWAY```

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app)

## ```USER REPLIT```
[![Run on Repl.it](https://repl.it/badge/github/ImYanXiao/Elaina-MultiDevice)](https://repl.it/github/GEEKMDXINC/SUZUNE-MD)

---------
## FOR WINDOWS/RDP USER 💻

Install this tool first before running the script

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

----------

## FOR VPS USER

* apt update && apt upgrade -y
* apt install nodejs imagemagick ffmpeg -y
* node -v 
* if the version is still under 17, use this step
* curl -s https://deb.nodesource.com/setup_19.x | sudo bash
* apt-get install -y nodejs

----------

```bash
git clone https://github.com/GEEKMDXINC/SUZUNE-MD
cd Elaina-MultiDevice
npm install
npm update
```

---------

## Run ⏳

```bash
node .
```

---------

## ```Arguments node . [--options] [<session name>]```

## `--pconly`
* If that chat not from private bot, bot will ignore

## `--gconly`
* If that chat not from group, bot will ignore

## `--swonly`
* If that chat not from status, bot will ignore

## `--prefix <prefixes>`
* `prefixes` are seperated by each character
Set prefix

## `--server`
* Used for [heroku](https://heroku.com/) or scan through website

## `--restrict`
* Enables restricted plugins (which can lead your number to be **banned** if used too often)
* Group Administration `add, kick`

## `--img`
* Enable image inspector through terminal

## `--autoread`
* If enabled, all incoming messages will be marked as read

## `--nyimak`
* No bot, just print received messages and add users to database

## `--test`
* **Development** Testing Mode *

## `--self`
* **Only Owner & Bot** 

---------

## ```How To Customise Message Display```
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### 📮 S&K
1. Not For Sale
2. Don't forget give star this repo
3. Don't use this repository wrong!
4. If you have problem chat me in owner number

---------

## ```Thanks to ✨```
* [`GOD`]
* [`Whiskeysockets/Baileys`](https://github.com/WhiskeySockets/Baileys)
