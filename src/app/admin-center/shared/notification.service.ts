import {Injectable} from '@angular/core';

// Objects
import {Message} from './model/message.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    messages: Message[];

    constructor() {
        this.messages = [];
    }

    addMessage(message: string) {
        const temp = new Message();
        temp.id = this.messages.length;
        temp.toggle = true;
        temp.message = message;
        this.messages.push(temp);
    }

    toggleMessage(id: number) {
        console.log(this.messages[id]);
        this.messages[id].toggle = false;
    }

    removeMessage(id: number) {
        this.messages.splice(id, 1);
    }
}
