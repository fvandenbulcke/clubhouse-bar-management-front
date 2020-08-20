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
          <club-house-drink
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
import ClubHouseDrink from './components/ClubHouseDrink';

export default {
  name: 'drinksView',
  components: {
    ClubHouseDrink,
  },
  data() {
    return {
      playerDrinks: {},
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
    updateQuantity({ drink, quantity }) {
      this.playerDrinks[drink] = quantity;
    },
    updateBill() {
      const payload = [];
      Object.keys(this.playerDrinks).forEach((drinkId) => {
        payload.push({ drinkId, quantity: this.playerDrinks[drinkId] });
      });
      console.log(payload);
      this.updatePlayerBill(payload);
    },
  },
};
</script>

<style scoped>
  .clubdrink{
    border: red 1px solid;
  }
</style>
