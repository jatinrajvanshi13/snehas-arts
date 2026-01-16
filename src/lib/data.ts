export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: 'paintings' | 'earrings';
  image: string;
  deliveryTime: string;
  defaultQuantity: number;
  inStock: boolean;
  featured?: boolean;
  dimensions?: string;
  materials?: string;
}

export const products: Product[] = [
  // Original Paintings
  {
    id: 'painting-1',
    name: 'Sacred Lotus Cows: Traditional Pichwai-Style Art',
    description: 'Immerse your space in the devotional beauty of this "Sacred Lotus Cows" painting. Rendered in the traditional Pichwai folk art style, this vibrant piece depicts two white cows with decorative markings, resting among large, blooming lotus flowers and lily pads. The rich yellow and orange background creates a warm, golden glow, invoking a sense of serenity and cultural heritage. Elegantly housed in a rustic wooden frame, this artwork is a perfect focal point for adding a touch of traditional charm to a living room, entryway, or study.',
    price: 1200,
    currency: 'CAD',
    category: 'paintings',
    image: '/paintings/cow-yellow.jpg',
    deliveryTime: '7-10 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    dimensions: '36" x 48"',
    materials: 'Acrylic on stretched canvas',
  },
  {
    id: 'painting-2',
    name: 'Cozy Tunes & Morning Brew: Retro Vibes Canvas Print',
    description: 'Infuse your space with the warm, relaxed energy of this delightful "Cozy Tunes & Morning Brew" canvas painting. This vibrant piece features a stylized, faceless woman enjoying a hot beverage from a yellow cup, accompanied by a vintage boombox and lush plants. The rich color palette of fuchsia, blue, and yellow, combined with charming details like the floral sweater and large bloom, creates a sense of comforting nostalgia. Perfect for a cozy nook, kitchen, or living area, this framed artwork is a lovely celebration of simple pleasures and self-care.',
    price: 950,
    currency: 'CAD',
    category: 'paintings',
    image: '/paintings/girl-coffee.jpg',
    deliveryTime: '7-10 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    dimensions: '24" x 36"',
    materials: 'Oil on canvas',
  },
  {
    id: 'painting-3',
    name: 'Urban Rhythms: The Auto-Rickshaw Line Drawing',
    description: 'Capture the spirit of everyday urban travel with this charming minimalist sketch. "Urban Rhythms" is a pen-and-ink line drawing on textured blue paper, effortlessly depicting a bustling auto-rickshaw ride complete with a driver and passengers. The monochrome palette is striking, punctuated only by a pop of yellow highlighting the Karnataka license plate ("KA 41"). This sophisticated yet simple piece offers a nostalgic nod to city life and travel, making it a perfect artistic accent for a modern study, hallway, or living space that appreciates global culture and clean design.',
    price: 850,
    currency: 'CAD',
    category: 'paintings',
    image: '/paintings/auto-rik.jpg',
    deliveryTime: '7-10 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    dimensions: '20" x 30"',
    materials: 'Mixed media on canvas',
  },
  // Handcrafted Earrings
  {
    id: 'earring-1',
    name: 'Blushing Petal Polymer Clay Earrings',
    description: 'Add a touch of handcrafted charm to your look with these delightful "Blushing Petal" earrings. Each dangle features a soft pink polymer clay rectangle adorned with tiny, hand-sculpted red flowers and bright green leaves, evoking the freshness of a spring garden. Suspended from gold-tone posts, these lightweight earrings are perfect for adding a sweet, feminine pop of color to any outfit, from casual jeans and a tee to a breezy sundress. As a unique, handmade treasure, they also make a thoughtful gift for the flower lover in your life.',
    price: 145,
    currency: 'CAD',
    category: 'earrings',
    image: '/earrings/triangle-clay.jpg',
    deliveryTime: '3-5 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    materials: 'Brass, semi-precious stones, gold plating',
  },
  {
    id: 'earring-2',
    name: 'Midnight Meadow Polymer Clay Earrings',
    description: 'Bring the enchantment of a moonlit garden to your style with these exquisite "Midnight Meadow" earrings. Handcrafted from polymer clay, each dangle features a deep blue semi-circle, reminiscent of the night sky, intricately sculpted with delicate white daisies, vibrant green leaves, and tiny white floral accents. Suspended from a clean white stud post, these unique earrings are lightweight and comfortable for all-day wear. They are the perfect accessory to add a touch of botanical elegance and artisanal charm to any outfit, making them a wonderful gift for yourself or a loved one.',
    price: 125,
    currency: 'CAD',
    category: 'earrings',
    image: '/earrings/blue-semi.jpg',
    deliveryTime: '3-5 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    materials: 'Sterling silver, enamel, gold vermeil',
  },
  {
    id: 'earring-3',
    name: 'Matte Burgundy Geometric Clay Dangle Earrings',
    description: 'Make a statement with these sophisticated "Matte Burgundy" clay earrings. Handcrafted with a deep, rich wine-red clay, each earring features a contemporary geometric design with a semi-circular top and three elegant, elongated teardrop shapes dangling below. The matte finish gives them a modern, refined look, while the lightweight polymer clay ensures comfortable all-day wear. Suspended from gold-tone stud posts, these unique earrings add a touch of bold color and artisanal flair to any ensemble, perfect for both casual and dressed-up occasions.',
    price: 195,
    currency: 'CAD',
    category: 'earrings',
    image: '/earrings/three-leg.jpg',
    deliveryTime: '3-5 business days',
    defaultQuantity: 1,
    inStock: true,
    featured: true,
    materials: 'Gold-plated brass, Swarovski crystals',
  },
];

export const storeInfo = {
  name: "Sneha's Arts",
  tagline: 'Where Heritage Meets the Pacific',
  email: 'hello@snehasarts.ca',
  location: 'Vancouver, British Columbia',
  description: 'Handcrafted art and jewelry that bridges Indian heritage with West Coast inspiration. Each piece tells a story of cultural fusion and artistic passion.',
};

export function getProductsByCategory(category: 'paintings' | 'earrings'): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
