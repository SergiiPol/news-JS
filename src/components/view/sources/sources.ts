import './sources.css';


interface ISource{
    author: string;
    name: string;
    id:string;
    content: string;
    description: string | null;
    publishedAt: string;
    sources: { name: string | null, 
                id:string };
    title: string | null;
    url: string;
    urlToImage: string;
}

class Sources {
    draw(data: ISource[]){
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = ((sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment);

            (sourceClone.querySelector('.source__item-name')as HTMLDivElement).textContent = item.name;
            (sourceClone.querySelector('.source__item')as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
