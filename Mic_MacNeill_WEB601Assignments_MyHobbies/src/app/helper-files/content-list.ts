import { Content } from './content-interface'

export class ContentList {

    static contentCount = 0;
  
    private ConT:  Content[];

    constructor(item: Content){
        this.ConT = [];
    }

    increaseCount(){
        return ++ContentList.contentCount;
    }

    getHobby(): Content[] {
        return this.ConT;
    }

    public addItem(item: Content): void {
        this.ConT.push(item);
    }
    count(): number {
        return this.ConT.length;
    }

    printContentByIndex(index: number) {
        if (index < 0 || index >= this.ConT.length) {
            alert("Invalid index");
        }
        const item = this.ConT[index];

        return `<h1>${item.title}</h1>
                <p>${item.description}</p>
                <em>By ${item.creator}</em><br>
                <img src="${item.imgURL}" alt="${item.title}"><br>
                <strong>Type: ${item.type}</strong>`;
    }
}
