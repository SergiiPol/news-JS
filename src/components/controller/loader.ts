

type Resp = {
    endpoint: string,
        options?:{
        sources: string
       }
    callback?: (data:object[])=>void;
}

interface IoptUrl{
    [apiKey: string]:string
}

interface IObj{
    author: string;
    name: string;
    id:string;
    content: string;
    description: string | null;
    publishedAt: string;
    source: { name: string | null, 
                id:string };
    title: string | null;
    url: string;
    urlToImage: string;
}

class Loader {
    private baseLink: string;
    private options:  object;
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options}: Resp, callback = ():void  => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options:IoptUrl, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: { (): void; (arg0:IObj[]): void; }, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;