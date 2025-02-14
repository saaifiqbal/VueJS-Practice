app.component("ice-cream", {
  props: {
    cart: { type: Array, required: true },
  },
  template:
    /*html*/
    `<div>
        <div class="icecream react" id="icecream">
        <p class="cone"></p>
        <!-- <p>Please start adding scoops</p> -->
        <div class="scoop" v-for="cartItem in cart" :class="cartItem.name.toLowerCase()"></div>
        <div class="cherry" v-if="cart.length > 0"></div>
        
        </div>
    </div>`,
});
