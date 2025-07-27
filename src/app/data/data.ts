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
  },
{
    id: 11,
    name: "Samsung Galaxy Tab S8",
    price: 59999,
    imageUrl: "https://media.gettyimages.com/id/1238901533/photo/samsung-ecosystem-at-mobile-world-congress-barcelona-2022.jpg?s=2048x2048&w=gi&k=20&c=sCKQ8Xtj-dnu7NLksgjwxBwe67lXROyD7uDaRgpDE1Y=",
    category: "Electronics",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Samsung",
      model: "Galaxy Tab S8",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 20
    },
    rating: {
      stars: 4.5,
      reviews: 140
    }
  },
  {
    id: 12,
    name: "Dell XPS 13",
    price: 124999,
    imageUrl: "https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Dell",
      model: "XPS 13 9310",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 12
    },
    rating: {
      stars: 4.7,
      reviews: 210
    }
  },
  {
    id: 13,
    name: "Canon EOS M50 Mark II",
    price: 59990,
    imageUrl: "https://images.unsplash.com/photo-1638181789228-33f77ebe56f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Canon",
      model: "EOS M50 Mark II",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 8
    },
    rating: {
      stars: 4.6,
      reviews: 96
    }
  },
  {
    id: 14,
    name: "Puma Running Shoes",
    price: 4999,
    imageUrl: "https://images.unsplash.com/photo-1715692965448-770874c71e7c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Puma",
      model: "Running XYZ",
      warranty: "6 months"
    },
    stockDetails: {
      inStock: true,
      quantity: 60
    },
    rating: {
      stars: 4.2,
      reviews: 112
    }
  },
  {
    id: 15,
    name: "Samsung Refrigerator 260L",
    price: 22990,
    imageUrl: "https://images.unsplash.com/photo-1630459065645-549fe5a56db4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Appliances",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Samsung",
      model: "CoolTech 260L",
      warranty: "2 years"
    },
    stockDetails: {
      inStock: true,
      quantity: 7
    },
    rating: {
      stars: 4.4,
      reviews: 70
    }
  },
  {
    id: 16,
    name: "LG Washing Machine",
    price: 17990,
    imageUrl: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Appliances",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "LG",
      model: "TurboWash 8kg",
      warranty: "2 years"
    },
    stockDetails: {
      inStock: true,
      quantity: 9
    },
    rating: {
      stars: 4.3,
      reviews: 84
    }
  },
  {
    id: 17,
    name: "HP Pavilion Laptop",
    price: 54999,
    imageUrl: "https://plus.unsplash.com/premium_photo-1681702178555-ab53d9f8d912?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "HP",
      model: "Pavilion 15",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 14
    },
    rating: {
      stars: 4.1,
      reviews: 130
    }
  },
  {
    id: 18,
    name: "Ray-Ban Sunglasses",
    price: 7999,
    imageUrl: "https://images.unsplash.com/photo-1695057221246-3ab8a2ff5bf2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Ray-Ban",
      model: "Classic Aviator",
      warranty: "No warranty"
    },
    stockDetails: {
      inStock: true,
      quantity: 26
    },
    rating: {
      stars: 4.5,
      reviews: 151
    }
  },
  {
    id: 19,
    name: "Samsung Galaxy Watch 4",
    price: 15999,
    imageUrl: "https://images.unsplash.com/photo-1733570890170-49be2550189b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: false,
    onSale: false,
    specifications: {
      brand: "Samsung",
      model: "Galaxy Watch 4",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 23
    },
    rating: {
      stars: 4.6,
      reviews: 98
    }
  },
  {
    id: 20,
    name: "Levi's Leather Belt",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1734383524180-3c6f9b21e8e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    isFeatured: false,
    onSale: true,
    specifications: {
      brand: "Levi's",
      model: "Leather Belt",
      warranty: "No warranty"
    },
    stockDetails: {
      inStock: true,
      quantity: 55
    },
    rating: {
      stars: 4.3,
      reviews: 75
    }
  },
  {
    id: 21,
    name: "Apple MacBook Pro 14",
    price: 194990,
    imageUrl: "https://images.unsplash.com/photo-1658915370148-0cfed8929e92?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    isFeatured: true,
    onSale: false,
    specifications: {
      brand: "Apple",
      model: "MacBook Pro 14",
      warranty: "1 year"
    },
    stockDetails: {
      inStock: true,
      quantity: 11
    },
    rating: {
      stars: 4.9,
      reviews: 220
    }
  },
  {
    id: 22,
    name: "Nike Sports Jacket",
    price: 6999,
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/2367517515/display_1500/stock-photo-ivano-frankivsk-ukraine-february-nike-sportwears-portrait-of-a-young-man-in-winter-2367517515.jpg",
    category: "Fashion",
    isFeatured: true,
    onSale: false,
    specifications: {
      brand: "Nike",
      model: "Windbreaker",
      warranty: "6 months"
    },
    stockDetails: {
      inStock: true,
      quantity: 28
    },
    rating: {
      stars: 4.4,
      reviews: 99
    }
  }
  // Add more products similarly...
];
