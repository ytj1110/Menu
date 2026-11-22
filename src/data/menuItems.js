// Image helper — swap for your own URLs or files in /public/images
const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const categories = [
  { id: "all", label: "All Items" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "appetizers", label: "Appetizers" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

// badge: "Popular" | "New" | "Best Seller" | null
// sizes (optional): [{ label, price }] — overrides the base price
export const menuItems = [
  // Burgers
  { id: "b1", category: "burgers", name: "Oak Smash Burger", price: 189, badge: "Best Seller", available: true,
    description: "Two smashed beef patties, aged cheddar, caramelised onions, pickles and house sauce on a toasted brioche bun.",
    image: photo("photo-1568901346375-23c9450c58cd"),
    sizes: [{ label: "Single", price: 149 }, { label: "Double", price: 189 }] },
  { id: "b2", category: "burgers", name: "Smoked BBQ Burger", price: 205, badge: "Popular", available: true,
    description: "Flame-grilled beef, crispy onion rings, smoked beef bacon, melted provolone and sticky BBQ glaze.",
    image: photo("photo-1550547660-d9450f859349") },
  { id: "b3", category: "burgers", name: "Crispy Chicken Burger", price: 165, badge: null, available: true,
    description: "Buttermilk-fried chicken thigh, slaw, pickled jalapeños and honey mustard mayo.",
    image: photo("photo-1571091718767-18b5b1457add") },
  { id: "b4", category: "burgers", name: "Truffle Mushroom Burger", price: 215, badge: "New", available: false,
    description: "Beef patty with sautéed wild mushrooms, Swiss cheese and truffle aioli.",
    image: photo("photo-1550547660-d9450f859349") },

  // Pizza
  { id: "p1", category: "pizza", name: "Margherita", price: 150, badge: "Popular", available: true,
    description: "San Marzano tomato, fior di latte mozzarella, fresh basil and extra virgin olive oil on a 48-hour dough.",
    image: photo("photo-1574071318508-1cdbab80d002"),
    sizes: [{ label: "Medium", price: 150 }, { label: "Large", price: 210 }] },
  { id: "p2", category: "pizza", name: "Spicy Pepperoni", price: 185, badge: "Best Seller", available: true,
    description: "Cup-and-char pepperoni, mozzarella, chili honey drizzle and oregano.",
    image: photo("photo-1513104890138-7c749659a591"),
    sizes: [{ label: "Medium", price: 185 }, { label: "Large", price: 255 }] },
  { id: "p3", category: "pizza", name: "Four Cheese", price: 195, badge: null, available: true,
    description: "Mozzarella, gorgonzola, parmesan and provolone finished with a touch of thyme.",
    image: photo("photo-1565299624946-b28f40a0ae38"),
    sizes: [{ label: "Medium", price: 195 }, { label: "Large", price: 265 }] },
  { id: "p4", category: "pizza", name: "Chicken Ranch", price: 190, badge: "New", available: true,
    description: "Grilled chicken, mushrooms, red onion, mozzarella and cool ranch.",
    image: photo("photo-1513104890138-7c749659a591"),
    sizes: [{ label: "Medium", price: 190 }, { label: "Large", price: 260 }] },

  // Sandwiches
  { id: "s1", category: "sandwiches", name: "Slow-Roast Beef Melt", price: 175, badge: "Popular", available: true,
    description: "Eight-hour braised beef, caramelised onions and melted Swiss on toasted ciabatta, served with jus.",
    image: photo("photo-1528735602780-2552fd46c7af") },
  { id: "s2", category: "sandwiches", name: "Grilled Halloumi Wrap", price: 130, badge: null, available: true,
    description: "Grilled halloumi, roasted peppers, rocket and sun-dried tomato pesto in a warm flatbread.",
    image: photo("photo-1528735602780-2552fd46c7af") },
  { id: "s3", category: "sandwiches", name: "Club Sandwich", price: 155, badge: null, available: true,
    description: "Triple-decker with roast chicken, turkey, fried egg, lettuce, tomato and garlic mayo. Served with fries.",
    image: photo("photo-1528735602780-2552fd46c7af") },

  // Appetizers
  { id: "a1", category: "appetizers", name: "Loaded Cheese Fries", price: 95, badge: "Best Seller", available: true,
    description: "Crispy fries, cheddar sauce, crumbled beef bacon, spring onion and chili flakes.",
    image: photo("photo-1573080496219-bb080dd4f877") },
  { id: "a2", category: "appetizers", name: "Crispy Calamari", price: 140, badge: null, available: true,
    description: "Lightly dusted squid rings with lemon aioli and spicy marinara.",
    image: photo("photo-1414235077428-338989a2e8c0") },
  { id: "a3", category: "appetizers", name: "Mozzarella Sticks", price: 85, badge: "Popular", available: true,
    description: "Golden breaded mozzarella with warm tomato dip.",
    image: photo("photo-1573080496219-bb080dd4f877") },
  { id: "a4", category: "appetizers", name: "Buffalo Wings", price: 120, badge: "New", available: true,
    description: "Six crispy wings tossed in hot buffalo sauce with ranch and celery.",
    image: photo("photo-1504674900247-0877df9cc836") },

  // Desserts
  { id: "d1", category: "desserts", name: "Molten Chocolate Cake", price: 110, badge: "Best Seller", available: true,
    description: "Warm dark chocolate cake with a liquid centre, served with vanilla ice cream.",
    image: photo("photo-1578985545062-69928b1d9587") },
  { id: "d2", category: "desserts", name: "Basbousa Cheesecake", price: 105, badge: "New", available: true,
    description: "Creamy baked cheesecake on a semolina base, soaked in orange blossom syrup.",
    image: photo("photo-1565958011703-44f9829ba187") },
  { id: "d3", category: "desserts", name: "Ice Cream Trio", price: 75, badge: null, available: true,
    description: "Three scoops: vanilla bean, salted caramel and pistachio.",
    image: photo("photo-1551024506-0bccd828d307") },

  // Drinks
  { id: "k1", category: "drinks", name: "Fresh Mint Lemonade", price: 55, badge: "Popular", available: true,
    description: "Freshly squeezed lemons, crushed mint and a little cane sugar.",
    image: photo("photo-1544145945-f90425340c7e"),
    sizes: [{ label: "Regular", price: 55 }, { label: "Large", price: 70 }] },
  { id: "k2", category: "drinks", name: "Iced Spanish Latte", price: 80, badge: null, available: true,
    description: "Double espresso, condensed milk and cold milk over ice.",
    image: photo("photo-1544145945-f90425340c7e"),
    sizes: [{ label: "Regular", price: 80 }, { label: "Large", price: 95 }] },
  { id: "k3", category: "drinks", name: "Hibiscus Cooler", price: 50, badge: "New", available: true,
    description: "Chilled karkadeh with orange zest and a splash of lime.",
    image: photo("photo-1544145945-f90425340c7e") },
];
