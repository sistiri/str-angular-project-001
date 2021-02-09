import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

   apiUrl: string = 'http://localhost:3000/products'

//  State.

    list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    constructor(
        private http: HttpClient,
    ) { }

    // Get all users from the server.
    getAll(): void {
        this.http.get<Product[]>(this.apiUrl).subscribe (
            products => this.list$.next(products)
        );
    }
    // Get one user.
    get(product: Product): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
    }
    // Create new user.
    add(product: Product): void {
        this.http.post<Product>(this.apiUrl, product).subscribe(
            () => this.getAll()
        );
    }
    // Update user data
    update(product: Product): void {
        this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product).subscribe(
            () => this.getAll()
        );
    }
    // Remove user.
    remove(product: Product): void {
        this.http.delete<Product>(`${this.apiUrl}/${product.id}`).subscribe(
            ()=> this.getAll()
        );
    }
    

    // Nem lehet az Array.filter  es Array.sort metodust hasznalni Observable Array eseteben, ezert ezek nem mukodnek: 

    // getFeatured(randomized?: boolean): Observable<Product> {
    // const featured = this.list.filter(item => item.featured);
    //     return randomized ? this.randomize(featured) : featured;
    // }
    // 
    // randomize(sourceArray: Observable<Product[]>): any[] {
    //     return sourceArray.sort(() => Math.random() - 0.5);
    // }

}
