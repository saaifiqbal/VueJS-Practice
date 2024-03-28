app.component("order-form", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  template:
    /* html*/
    `<div class="react" id="modal">
        <div class="backdrop" @click="hideOrderForm()"></div>
        <div class="modalBody">
            <div class="formContainer react" id="orderForm">
            <h1>Complete the form below and hit submit</h1>
            <form class="orderForm" @submit.prevent="handleSubmit()">
                <ul>
                <li>
                    <input
                    type="text"
                    v-model="name"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                    />
                    <input
                    type="text"
                    v-model="phone"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                    />
                    <input
                    type="hidden"
                    v-model.number="total"
                    class="fieldStyle fieldSplit alignRight"
                    />
                </li>
                <li>
                    <input
                    type="text"
                    v-model="email"
                    class="fieldStyle fieldFull"
                    placeholder="Email"
                    />
                </li>
                <li>
                    <textarea
                    v-model="address"
                    class="fieldStyle"
                    placeholder="Address"
                    ></textarea>
                </li>
                <li>
                    <input type="submit" value="Submit Order" />
                </li>
                </ul>
            </form>
            </div>
        </div>
    </div>`,
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      address: "",
    };
  },
  methods: {
    hideOrderForm() {
      this.$emit("toggle-order-form");
    },
    handleSubmit() {
      let order = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        address: this.address,
      };
      console.log(order);
      this.hideOrderForm();
      this.$emit("clear-cart")
    },
    cleanForm() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.address = "";
    },
  },
});
