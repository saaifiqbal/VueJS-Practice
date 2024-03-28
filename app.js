const app = Vue.createApp({
  data() {
    return {
      name: "Vue 3",
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-vuejs-4387636-3640297.png?f=webp",
      variants: [
        { id: 1, name: "Vanilla", price: 80 },
        { id: 2, name: "Chocolate", price: 150 },
        { id: 3, name: "Strawberry", price: 100 },
        { id: 4, name: "Orange", price: 80 },
        { id: 5, name: "Lemon", price: 100 },
      ],
      cart: [],
      orderModal: false,
    };
  },
  methods: {
    addToCart(variantId) {
      this.cart.push(this.variants.find((v) => v.id === variantId));
    },
    removeFromCart(variantId) {
      let position = this.cart.findIndex((i) => i.id === variantId);
      this.cart.splice(position, 1);
    },
    toggleModal() {
      this.orderModal = !this.orderModal;
    },
    clearCart() {
      this.cart = [];
    },
  },
  computed: {
    total() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
});
