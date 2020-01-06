<template>
  <Players
    :reset="resetDrinks"
  />
</template>

<script>
import { mapActions } from 'vuex';
import Players from '@/components/admin/players';

export default {
  name: 'adminDrinksView',
  components: {
    Players,
  },
  data() {
    return {
      quantity: {},
    };
  },
  beforeMount() {
    this.loadPlayers();
  },
  computed: {
  },
  methods: {
    ...mapActions(['loadPlayers', 'resetDrinks']),
  },
};
</script>
