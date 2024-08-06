console.log('🤖 Starting bot...'); // Message de démarrage du bot

import fs from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { Buffer } from 'buffer';

// Importer les configurations depuis config.js
import { sessionID } from './config.js';

// Function to decode a Base64 encoded session ID using UTF-8
function decodeBase64SessionId(base64SessionId) {
    return Buffer.from(base64SessionId, 'base64').toString('utf-8');
}

// Function to read from session/creds.json
function readCredJson(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(`Error reading file ${filePath}: ${error.message}`);
        return null;
    }
}

// Function to write to session/creds.json
function writeCredJson(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`File ${filePath} updated successfully.`);
    } catch (error) {
        console.log(`Error writing to file ${filePath}: ${error.message}`);
    }
}

// Main function to handle session ID and creds.json
function main() {
    const sessionId = decodeBase64SessionId(sessionID);
    console.log('Decoded Session ID:', sessionId);

    const sessionFolderPath = join(dirname(fileURLToPath(import.meta.url)), 'session');
    const credsFilePath = join(sessionFolderPath, 'creds.json');
    
    const credData = readCredJson(credsFilePath);
    console.log('Read Creds JSON:', credData);

    const newData = {
        sessionId: sessionId,
        ...credData
    };

    writeCredJson(credsFilePath, newData);
    console.log('Updated Creds JSON:', newData);

    console.log('🚀 Bot has started successfully!'); // Message indiquant que le bot a démarré avec succès
}

// Call the main function
main();