import { Injectable } from '@angular/core';
import { Product } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  private compareList: Product[] = [];
  private maxCompareItems = 3;

  getCompareList(): Product[] {
    return this.compareList;
  }

  addToCompare(product: Product): boolean {
    if (this.compareList.length >= this.maxCompareItems) {
      alert(`You can only compare up to ${this.maxCompareItems} products`);
      return false;
    }
    
    if (!this.isInCompare(product.id)) {
      this.compareList.push(product);
      return true;
    }
    return false;
  }

  removeFromCompare(productId: number): void {
    this.compareList = this.compareList.filter(product => product.id !== productId);
  }

  isInCompare(productId: number): boolean {
    return this.compareList.some(product => product.id === productId);
  }

  clearCompareList(): void {
    this.compareList = [];
  }
}
