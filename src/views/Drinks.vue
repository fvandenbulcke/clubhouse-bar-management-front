<template>
  <v-content>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="drink in allDrinks"
          :key="drink._id"
          cols="6"
          sm="6"
          md="6"
        >
          <Drink
            class="clubdrink"
            :drink="drink"
            :quantity="playerDrinksById(drink.id)"
            @updateQuantity="updateQuantity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-btn block @click="updateBill" color="primary">
      {{ $t('action.validate') }}
    </v-btn>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Drink from '@/components/drink';

export default {
  name: 'drinksView',
  components: {
    Drink,
  },
  data() {
    return {
      quantity: {},
    };
  },
  beforeMount() {
    this.getPlayer();
  },
  computed: {
    ...mapGetters(['allDrinks', 'playerDrinksById']),
  },
  methods: {
    ...mapActions(['getPlayer', 'updatePlayerBill']),
    updateQuantity(event) {
      this.quantity = event;
    },
    updateBill() {
      this.updatePlayerBill(this.quantity);
    },
  },
};
</script>

<style scoped>
  .clubdrink{
    border: red 1px solid;
  }
</style>
