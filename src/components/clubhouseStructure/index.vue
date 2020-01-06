<template>
  <div>
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <router-view />
    <v-footer
      absolute
      permanent
      bottom height="auto" color="indigo" dark>
      <v-layout justify-center row wrap>
        <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
          &copy;2018 — <strong>Vuetify</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'structure',
  beforeMount() {
    this.loadDrinks();
  },
  methods: {
    ...mapActions(['loadDrinks']),
  },
};
</script>
