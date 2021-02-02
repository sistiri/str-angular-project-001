import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';




@Injectable({
    providedIn: 'root'
})
export class ProductService {

    list: Product[] = JSON.parse(JSON.stringify(
        [
            {
                "id": 1,
                "catId": 1,
                "name": "Lotstring",
                "description": "Donec ut dolor augue, a suscipit nulla.",
                "image": "./assets/img/blue-tiles-001.jpg",
                "price": "€15,31",
                "stock": 58,
                "featured": true,
                "active": true
            },
            {
                "id": 2,
                "catId": 1,
                "name": "Zaam-Dox",
                "description": "Vivamus tortor, nulla pede ullamcorper.",
                "image": "./assets/img/blue-tiles-002.jpg",
                "price": "€24,24",
                "stock": 97,
                "featured": true,
                "active": true
            },
            {
                "id": 3,
                "catId": 1,
                "name": "Daltfresh",
                "description": "Nam ultrices, libero non mattis pulvinar.",
                "image": "./assets/img/blue-tiles-003.jpg",
                "price": "€52,76",
                "stock": 17,
                "featured": false,
                "active": false
            },
            {
                "id": 4,
                "catId": 2,
                "name": "Sonsing",
                "description": "Sed ante quis turpis eget elit sit amet .",
                "image": "./assets/img/red-tiles-001.jpg",
                "price": "€39,35",
                "stock": 49,
                "featured": false,
                "active": false
            },
            {
                "id": 5,
                "catId": 1,
                "name": "Zoolab",
                "description": "Quisque id justo sit amet sapien dignissim.",
                "image": "./assets/img/blue-tiles-004.jpg",
                "price": "€93,05",
                "stock": 80,
                "featured": true,
                "active": true
            },
            {
                "id": 6,
                "catId": 1,
                "name": "Matsoft",
                "description": "In sagittis dui vel nisl quis turpis eget.",
                "image": "./assets/img/blue-tiles-005.jpg",
                "price": "€59,15",
                "stock": 65,
                "featured": false,
                "active": false
            },
            {
                "id": 7,
                "catId": 1,
                "name": "Home Ing",
                "description": "Aliquam non mauris, in porttitor pede justo eu.",
                "image": "./assets/img/blue-tiles-006.jpg",
                "price": "€94,77",
                "stock": 35,
                "featured": false,
                "active": false
            },
            {
                "id": 8,
                "catId": 2,
                "name": "Hatity",
                "description": "Aliquam quis turpis eget elit sodales scelerisque.",
                "image": "./assets/img/red-tiles-002.jpg",
                "price": "€42,87",
                "stock": 69,
                "featured": false,
                "active": true
            },
            {
                "id": 9,
                "catId": 2,
                "name": "Y-Solowarm",
                "description": "Proin eu mi turpis enim blandit mi elit ac nulla.",
                "image": "./assets/img/red-tiles-003.jpg",
                "price": "€71,35",
                "stock": 12,
                "featured": false,
                "active": true
            },
            {
                "id": 10,
                "catId": 1,
                "name": "Hatity",
                "description": "Duis bibendum, felis sed interdum venenatis mi.",
                "image": "./assets/img/blue-tiles-007.jpg",
                "price": "€21,85",
                "stock": 74,
                "featured": false,
                "active": false
            },
            {
                "id": 11,
                "catId": 1,
                "name": "Veribet",
                "description": "Vivamus vel nulla eget eros elementum pellentesque.",
                "image": "./assets/img/blue-tiles-008.jpg",
                "price": "€27,36",
                "stock": 41,
                "featured": false,
                "active": true
            },
            {
                "id": 12,
                "catId": 1,
                "name": "Stim",
                "description": "Suspendisse potenti justo vulputate nulla eget.",
                "image": "./assets/img/blue-tiles-009.jpg",
                "price": "€42,02",
                "stock": 62,
                "featured": true,
                "active": true
            },
            {
                "id": 13,
                "catId": 1,
                "name": "Solarbreeze",
                "description": "Aenean auctor gravida sem consequat dui justo.",
                "image": "./assets/img/blue-tiles-010.jpg",
                "price": "€70,91",
                "stock": 16,
                "featured": true,
                "active": true
            },
            {
                "id": 14,
                "catId": 2,
                "name": "Duobam",
                "description": "Duis consequat dui nec nisi volutpat eleifend.",
                "image": "./assets/img/red-tiles-004.jpg",
                "price": "€73,58",
                "stock": 6,
                "featured": true,
                "active": true
            },
            {
                "id": 15,
                "catId": 2,
                "name": "Stringtough",
                "description": "Phasellus in felis justo vulputate nec nisi .",
                "image": "./assets/img/red-tiles-005.jpg",
                "price": "€91,11",
                "stock": 65,
                "featured": false,
                "active": false
            },
            {
                "id": 16,
                "catId": 2,
                "name": "Cardify",
                "description": "Pellentesque at nulla diam neque lacinia quis.",
                "image": "./assets/img/red-tiles-006.jpg",
                "price": "€82,51",
                "stock": 66,
                "featured": false,
                "active": true
            },
            {
                "id": 17,
                "catId": 2,
                "name": "Y-Solowarm",
                "description": "Mauris lacinia sapien quis libero in felis.",
                "image": "./assets/img/red-tiles-007.jpg",
                "price": "€28,31",
                "stock": 25,
                "featured": true,
                "active": false
            },
            {
                "id": 18,
                "catId": 2,
                "name": "Cookley",
                "description": "In quis justo iaculis justo lacinia sapien.",
                "image": "./assets/img/red-tiles-008.jpg",
                "price": "€35,95",
                "stock": 21,
                "featured": true,
                "active": false
            },
            {
                "id": 19,
                "catId": 2,
                "name": "Lotstring",
                "description": "Donec diam neque, vestibulum eget, vulputate.",
                "image": "./assets/img/red-tiles-009.jpg",
                "price": "€55,26",
                "stock": 12,
                "featured": true,
                "active": true
            },
            {
                "id": 20,
                "catId": 2,
                "name": "Andalax",
                "description": "Etiam pretium iaculis justo vulputate ut.",
                "image": "./assets/img/red-tiles-010.jpg",
                "price": "€90,54",
                "stock": 3,
                "featured": true,
                "active": false
            },
            {
                "id": 21,
                "catId": 2,
                "name": "Cardify",
                "description": "Nulla suscipit ligula in lacus lectus ipsum .",
                "image": "./assets/img/red-tiles-011.jpg",
                "price": "€66,17",
                "stock": 61,
                "featured": true,
                "active": true
            },
            {
                "id": 22,
                "catId": 2,
                "name": "Rank",
                "description": "Duis consequat dui nec nisi volutpat eleifend.",
                "image": "./assets/img/red-tiles-012.jpg",
                "price": "€55,68",
                "stock": 6,
                "featured": false,
                "active": false
            },
            {
                "id": 23,
                "catId": 1,
                "name": "Lotlux",
                "description": "Praesent lectus ante ipsum primis quis orci.",
                "image": "./assets/img/blue-tiles-012.jpg",
                "price": "€21,74",
                "stock": 8,
                "featured": false,
                "active": true
            },
            {
                "id": 24,
                "catId": 1,
                "name": "Stringtough",
                "description": "Donec quis orci eget orci vehicula condimentum.",
                "image": "./assets/img/blue-tiles-011.jpg",
                "price": "€44,74",
                "stock": 68,
                "featured": false,
                "active": true
            },
            {
                "id": 25,
                "catId": 2,
                "name": "Subin",
                "description": "Quisque porta volutpat erat libero ut massa .",
                "image": "./assets/img/red-tiles-013.jpg",
                "price": "€22,51",
                "stock": 42,
                "featured": true,
                "active": false
            },
            {
                "id": 26,
                "catId": 1,
                "name": "Y-find",
                "description": "Vestibulum ante ipsum primis in faucibus orci.",
                "image": "./assets/img/blue-tiles-013.jpg",
                "price": "€62,83",
                "stock": 5,
                "featured": false,
                "active": false
            },
            {
                "id": 27,
                "catId": 2,
                "name": "Kanlam",
                "description": "Curabitur in libero ut massa volutpat convallis.",
                "image": "./assets/img/red-tiles-001.jpg",
                "price": "€89,41",
                "stock": 63,
                "featured": false,
                "active": false
            },
            {
                "id": 28,
                "catId": 2,
                "name": "Temp",
                "description": "Curabitur gravida nisi at nibh libero ut massa .",
                "image": "./assets/img/red-tiles-002.jpg",
                "price": "€27,23",
                "stock": 76,
                "featured": true,
                "active": false
            },
            {
                "id": 29,
                "catId": 1,
                "name": "Fixflex",
                "description": "Vivamus in felis eu sapien cursus vestibulum.",
                "image": "./assets/img/blue-tiles-001.jpg",
                "price": "€24,45",
                "stock": 80,
                "featured": false,
                "active": false
            },
            {
                "id": 30,
                "catId": 2,
                "name": "Gembucket",
                "description": "Nulla facilisi ante ipsum primis ipsum primis.",
                "image": "./assets/img/red-tiles-003.jpg",
                "price": "€14,41",
                "stock": 4,
                "featured": true,
                "active": true
            },
            {
                "id": 31,
                "catId": 1,
                "name": "Bytecard",
                "description": "Nunc purus vel nulla eget eros libero ut massa .",
                "image": "./assets/img/blue-tiles-002.jpg",
                "price": "€70,83",
                "stock": 83,
                "featured": false,
                "active": true
            },
            {
                "id": 32,
                "catId": 1,
                "name": "Keylex",
                "description": "Vestibulum ante ipsum primis in faucibus orci.",
                "image": "./assets/img/blue-tiles-003.jpg",
                "price": "€96,05",
                "stock": 40,
                "featured": false,
                "active": true
            },
            {
                "id": 33,
                "catId": 1,
                "name": "Andalax",
                "description": "Ut dolor quis odio consequat varius ipsum primis.",
                "image": "./assets/img/blue-tiles-004.jpg",
                "price": "€94,05",
                "stock": 61,
                "featured": true,
                "active": true
            },
            {
                "id": 34,
                "catId": 2,
                "name": "Temp",
                "description": "In eleifend quam a odio ipsum velit id pretium.",
                "image": "./assets/img/red-tiles-004.jpg",
                "price": "€62,27",
                "stock": 10,
                "featured": false,
                "active": true
            },
            {
                "id": 35,
                "catId": 2,
                "name": "Treeflex",
                "description": "Vivamus vel nulla eget eros elementum pellentesque.",
                "image": "./assets/img/red-tiles-005.jpg",
                "price": "€52,82",
                "stock": 22,
                "featured": false,
                "active": false
            },
            {
                "id": 36,
                "catId": 2,
                "name": "Alphazap",
                "description": "Maecenas tincidunt lacus at ipsum primis velit.",
                "image": "./assets/img/red-tiles-006.jpg",
                "price": "€43,63",
                "stock": 43,
                "featured": true,
                "active": false
            },
            {
                "id": 37,
                "catId": 2,
                "name": "Domainer",
                "description": "Duis at velit eu ipsum primis est congue elementum.",
                "image": "./assets/img/red-tiles-007.jpg",
                "price": "€51,47",
                "stock": 25,
                "featured": true,
                "active": true
            },
            {
                "id": 38,
                "catId": 2,
                "name": "Keylex",
                "description": "Quisque id justo sit amet sapien dignissim vestibulum.",
                "image": "./assets/img/red-tiles-008.jpg",
                "price": "€10,56",
                "stock": 17,
                "featured": true,
                "active": false
            },
            {
                "id": 39,
                "catId": 2,
                "name": "Tin",
                "description": "Nulla neque libero, convallis eget, eleifend luctus.",
                "image": "./assets/img/red-tiles-009.jpg",
                "price": "€64,39",
                "stock": 59,
                "featured": false,
                "active": false
            },
            {
                "id": 40,
                "catId": 1,
                "name": "Tampflex",
                "description": "Morbi vel lectus in ipsum primis quam fringilla rhoncus.",
                "image": "./assets/img/blue-tiles-005.jpg",
                "price": "€59,45",
                "stock": 25,
                "featured": true,
                "active": false
            },
            {
                "id": 41,
                "catId": 2,
                "name": "Mat Lam Tam",
                "description": "In eleifend quam a odio lacus quam fringilla purus.",
                "image": "./assets/img/red-tiles-010.jpg",
                "price": "€90,43",
                "stock": 29,
                "featured": false,
                "active": false
            },
            {
                "id": 42,
                "catId": 1,
                "name": "Namfix",
                "description": "Morbi vestibulum, velit id quam fringilla pretium.",
                "image": "./assets/img/blue-tiles-006.jpg",
                "price": "€95,15",
                "stock": 5,
                "featured": true,
                "active": true
            },
            {
                "id": 43,
                "catId": 1,
                "name": "Latlux",
                "description": "Fusce lacus purus, aliquet at velit id quam pretium.",
                "image": "./assets/img/blue-tiles-007.jpg",
                "price": "€41,79",
                "stock": 67,
                "featured": true,
                "active": true
            },
            {
                "id": 44,
                "catId": 1,
                "name": "Y-find",
                "description": "Integer ac leo velit id pretium habitasse platea.",
                "image": "./assets/img/blue-tiles-008.jpg",
                "price": "€79,41",
                "stock": 36,
                "featured": false,
                "active": true
            },
            {
                "id": 45,
                "catId": 2,
                "name": "Flexidy",
                "description": "Duis bibendum, felis sed interdum venenatis platea.",
                "image": "./assets/img/red-tiles-011.jpg",
                "price": "€33,83",
                "stock": 51,
                "featured": true,
                "active": true
            },
            {
                "id": 46,
                "catId": 2,
                "name": "Flexidy",
                "description": "In hac habitasse platea dictumst tincidunt lacus .",
                "image": "./assets/img/red-tiles-012.jpg",
                "price": "€69,91",
                "stock": 61,
                "featured": false,
                "active": true
            },
            {
                "id": 47,
                "catId": 1,
                "name": "Subin",
                "description": "Donec semper sapien a libero platea dictumst interdum.",
                "image": "./assets/img/blue-tiles-009.jpg",
                "price": "€95,76",
                "stock": 69,
                "featured": true,
                "active": true
            },
            {
                "id": 48,
                "catId": 1,
                "name": "Viva",
                "description": "Maecenas tincidunt lacus at felis sed interdum velit.",
                "image": "./assets/img/blue-tiles-010.jpg",
                "price": "€44,59",
                "stock": 28,
                "featured": true,
                "active": false
            },
            {
                "id": 49,
                "catId": 1,
                "name": "Otcom",
                "description": "Morbi porttitor lorem id ligula semper sapien.",
                "image": "./assets/img/blue-tiles-011.jpg",
                "price": "€37,88",
                "stock": 17,
                "featured": true,
                "active": false
            },
            {
                "id": 50,
                "catId": 1,
                "name": "Mat Lam Tam",
                "description": "Vivamus in felis eu sapien cursus vestibulum.",
                "image": "./assets/img/blue-tiles-012.jpg",
                "price": "€62,79",
                "stock": 52,
                "featured": true,
                "active": true
            }
        ]
    ));
    constructor() { }



    getFeatured(randomized?: boolean): Product[] {
        const featured = this.list.filter(item => item.featured);
        return randomized ? this.randomize(featured) : featured;
    }

    randomize(sourceArray: any[]): any[] {
        return sourceArray.sort(() => Math.random() - 0.5);
    }


}
