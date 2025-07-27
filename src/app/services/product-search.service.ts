// src/app/components/services/product-search.service.ts

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  private currentSearchTerm: string = '';

  setSearchTerm(term: string): void {
    this.currentSearchTerm = term;
    this.searchTermChanged.emit(term);
  }

  getSearchTerm(): string {
    return this.currentSearchTerm;
  }
}
