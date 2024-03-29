export const EventEmitter = {
    events: {}, // dictionary with our events
    on(event, listener) { // add event listeners
        if (!this.events[event]) { this.events[event] = { listeners: [] } }
        this.events[event].listeners.push(listener);
    },
    off(event) { // remove listeners
        delete this.events[event]
    },
    emit(name, ...payload) { // trigger events
        if (!!this.events[name]) {
            for (const listener of this.events[name].listeners) {
                listener.apply(this, payload)
            }
        }
    }
};
