export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  onSale: boolean;
  specifications: {
    brand: string;
    model: string;
    warranty: string;
  };
  stockDetails: {
    inStock: boolean;
    quantity: number;
  };
  rating: {
    stars: number;
    reviews: number;
  };
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 134900,
    imageUrl: "https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: true,
    onSale: false,
    specifications: {
      brand: "Apple",
      model: "iPhone 15 Pro",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 25
    },
    rating: {
      stars: 4.8,
      reviews: 150
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 79999,
    imageUrl: "https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: true,
    onSale: true,
    specifications: {
      brand: "Samsung",
      model: "Galaxy S24",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 30
    },
    rating: {
      stars: 4.6,
      reviews: 200
    }
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 114900,
    imageUrl: "https://plus.unsplash.com/premium_photo-1681566925827-d1969127dd3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: true,
    onSale: false,
    specifications: {
      brand: "Apple",
      model: "MacBook Air M3",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 15
    },
    rating: {
      stars: 4.9,
      reviews: 89
    }
  },
  {
    id: 4,
    name: "Nike Air Max 270",
    price: 8995,
    imageUrl: "https://images.unsplash.com/photo-1562613521-6b5293e5b0ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: true,
    onSale: true,
    specifications: {
      brand: "Nike",
      model: "Air Max 270",
      warranty: "6 months"
    },
    stockDetails: {
      inStock: true,
      quantity: 40
    },
    rating: {
      stars: 4.4,
      reviews: 320
    }
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    price: 24900,
    imageUrl: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: true,
    onSale: false,
    specifications: {
      brand: "Apple",
      model: "AirPods Pro 2",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 35
    },
    rating: {
      stars: 4.7,
      reviews: 180
    }
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22",
    price: 12999,
    imageUrl: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Adidas",
      model: "Ultraboost 22",
      warranty: "6 months"
    },
    stockDetails: {
      inStock: true,
      quantity: 22
    },
    rating: {
      stars: 4.3,
      reviews: 95
    }
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 29990,
    imageUrl: "https://plus.unsplash.com/premium_photo-1687840719567-ab6c4da96f67?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Sony",
      model: "WH-1000XM5",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 18
    },
    rating: {
      stars: 4.8,
      reviews: 240
    }
  },
  {
    id: 8,
    name: "Levi's 501 Jeans",
    price: 3999,
    imageUrl: "https://images.unsplash.com/photo-1685435690165-97ba05cb8c1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Levi's",
      model: "501 Original",
      warranty: "No warranty"
    },
    stockDetails: {
      inStock: true,
      quantity: 50
    },
    rating: {
      stars: 4.2,
      reviews: 410
    }
  },
  {
    id: 9,
    name: "iPad Air 5th Gen",
    price: 59900,
    imageUrl: "https://images.unsplash.com/photo-1661340272675-f6829791246e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Apple",
      model: "iPad Air 5th Gen",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: false,
      quantity: 0
    },
    rating: {
      stars: 4.6,
      reviews: 75
    }
  },
  {
    id: 10,
    name: "H&M Cotton T-Shirt",
    price: 799,
    imageUrl: "https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "H&M",
      model: "Cotton Basic Tee",
      warranty: "No warranty"
    },
    stockDetails: {
      inStock: true,
      quantity: 100
    },
    rating: {
      stars: 4.0,
      reviews: 500
    }
  }
];
