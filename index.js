
console.log('🐾 Starting...')

import yargs from 'yargs'
import cfonts from 'cfonts'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { createInterface } from 'readline'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import fs from 'fs';
import { Buffer } from 'buffer'; // Added import for Buffer

// Function to decode a Base64 encoded session ID using UTF-8
function decodeBase64SessionId(base64SessionId) {
    const decoded = Buffer.from(base64SessionId, 'base64').toString('utf-8');
    return decoded;
}

// Function to read from created.json
function readCreatedJson(filePath) {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } else {
        console.log(`File ${filePath} does not exist.`);
        return null;
    }
}

// Function to write to created.json
function writeCreatedJson(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Example usage
const base64SessionId = 'YOUR_BASE64_SESSION_ID';
const sessionId = decodeBase64SessionId(base64SessionId);
console.log('Decoded Session ID:', sessionId);

const createdFilePath = 'created.json';
const createdData = readCreatedJson(createdFilePath);
console.log('Read Created JSON:', createdData);

const newData = {
    sessionId: sessionId,
    ...createdData
};

writeCreatedJson(createdFilePath, newData);
console.log('Updated Created JSON:', newData);

// Starting message for the bot
console.log('🚀 Starting the bot...');

// Remaining code for starting a JS file
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))

say('Lightweight\nWhatsApp Bot', { font: 'chrome', align: 'center', gradient: ['red', 'magenta'] })
say(`'${name}' By @${author.name || author}`, { font: 'console', align: 'center', gradient: ['red', 'magenta'] })

var isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), { font: 'console', align: 'center', gradient: ['red', 'magenta'] })
  setupMaster({ exec: args[0], args: args.slice(1) })
  let p = fork()
  p.on('message', data => {
    console.log('[✅RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗]Exited with code:', code)
    if (code !== 0) return start(file);
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      start(file);
    });
  });
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
}

start('main.js')