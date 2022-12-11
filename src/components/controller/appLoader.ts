import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: 'c79f2add35184ce18175f5f4bfd3da6f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
