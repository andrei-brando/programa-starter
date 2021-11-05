export default class BaseRepository {
    constructor(protected data: any) {}

    getAll() {
        return this.data;
    }

    save(item: any) {
        item.id = this.data.length;
        this.data.push(item);

        return item;
    }
}