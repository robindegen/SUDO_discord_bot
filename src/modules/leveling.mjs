// This is the leveling module. It is responsible for handling the leveling system.

import { CreateLogger } from '../core/logger.mjs';

export const LevelingModule = class {
    constructor() {
        this.logger = CreateLogger('LevelingModule');
    }

    onDiscordReady() {
        this.logger.log('info', 'Leveling module is ready.');
    }

    onDiscordMessage(message) {
        this.logger.log('info', `[${message.author.tag}]: ${message.content}`);

        if (message.content === 'hello') {
            message.reply('Hello');
        }
    }
};
