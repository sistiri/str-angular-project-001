export class Product {
    id: number = 0;
    catId: number = 0;
    name: string = 'XY';
    description: string = 'XY';
    image: any = 'src\assets\img\jegtoro.JPG';
    price: number = 0;
    stock: number = 0;
    featured: boolean = true;
    active: boolean = true;

    constructor(id?: number, catId?: number, name?: string, description?: string, image?: any, price?: number, stock?: number, featured?: boolean, active?: boolean) {
        this.id = id;
        this.catId = catId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.featured = featured;
        this.active = active;
    }
}
