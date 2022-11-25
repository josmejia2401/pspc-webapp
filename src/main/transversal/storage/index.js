export default class Storage {
    static PREFIX = "PSPC_";
    static set(key, value) {
        return localStorage.setItem(`${Storage.PREFIX}${key}`, value);
    }
    static get(key) {
        return localStorage.getItem(`${Storage.PREFIX}${key}`);
    }
    static remove(key) {
        return localStorage.removeItem(`${Storage.PREFIX}${key}`);
    }
    static clear() {
        localStorage.clear();
        sessionStorage.clear();
    }
}