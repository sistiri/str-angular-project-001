import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ProductService {

   apiUrl: string = 'http://localhost:3000/products'

    constructor(
        private http: HttpClient,
    ) { }

        // Get all users from the server.

        getAll(): Observable<Product[]> {
            return this.http.get<Product[]>(this.apiUrl);
        }
        // Get one user.
        get(product: Product): Observable<Product> {
            return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
        }
        // Create new user.
        add(product: Product): Observable<Product> {
            return this.http.post<Product>(this.apiUrl, product);
        }
        // Update user data
        update(product: Product): Observable<Product> {
            return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
        }
        // Remove user.
        remove(product: Product): Observable<Product> {
            return this.http.delete<Product>(`${this.apiUrl}/${product.id}`)
        }
        

        // Nem lehet az Array.filter metodussal szurni Observable Array-t, ezert ez nem mukodik: 
    // getFeatured(randomized?: boolean): Observable<Product> {
    //     const featured = this.getAll().filter(product => product.featured)
    //     // const featured = this.list.filter(item => item.featured);
    //     return randomized ? this.randomize(featured) : featured;
    // }

    randomize(sourceArray: any[]): any[] {
        return sourceArray.sort(() => Math.random() - 0.5);
    }


}
