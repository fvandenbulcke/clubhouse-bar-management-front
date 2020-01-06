<template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="10">
          <v-img alt="Vue logo" :src="require('../../assets/'+drink.label+'.png')"/>
        </v-col>

        <v-col
          cols="2"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-btn
              icon
              height="24px"
              min-width="0"
              @click="plusOne"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-text-field
              :id="dynamicId"
              class="centered-input"
              v-model="quantity"
              readonly
            />
            <v-btn
              icon
              height="24px"
              min-width="0"
              @click="minusOne"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'drink',
  props: {
    drink: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    dynamicId() {
      return `quantity_${this.drink.id}`;
    },
  },
  methods: {
    plusOne() {
      this.quantity += 1;
      this.updateQuantity();
    },
    minusOne() {
      if (this.quantity > 0) {
        this.quantity -= 1;
        this.updateQuantity();
      }
    },
    updateQuantity() {
      this.$emit('updateQuantity', { drink: this.drink.id, quantity: this.quantity });
    },
  },
};
</script>
<style scoped>
  .centered-input >>> input {
    text-align: center
  };
  .v-btn--icon.v-size--default {
    height: 0 px;
    min-height: 0 px;
  };
</style>
