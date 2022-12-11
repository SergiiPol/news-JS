import News from './news/news';
import Sources from './sources/sources';
import IObj from './news/news';
import ISource from './sources/sources';
 



export class AppView {
    news: IObj;
    sources: ISource;


    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: []; }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: []; }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
