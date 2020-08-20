<template>
  <div>
    <v-app-bar color="indigo" dark fixed app>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title @click="item.callBack()">{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-container>
        <v-img
          alt="Vue logo"
          :src="require('../../assets/achvb.png')"
          height="35"
          aspect-ratio="1"
        />
      </v-container>
    </v-app-bar>
    <router-view />
    <v-footer
      absolute
      permanent
      bottom height="auto" color="indigo" dark>
        <v-row align="center" justify="center">
          <v-col
            class="d-flex child-flex"
            cols="4"
          >
            <v-card flat tile class="d-flex">
              <!-- <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              /> -->
              <v-img
                alt="Vue logo"
                :src="require('../../assets/achvb.png')"
                height="35"
                width="35"
              />
            </v-card>
          </v-col>
          <v-col
            class="d-flex child-flex"
            cols="4"
          >
            <v-card flat tile class="d-flex">
              <v-img
                alt="Vue logo"
                :src="require('../../assets/achvb.png')"
                height="35"
                width="35"
              />
            </v-card>
          </v-col>
        </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'structure',

  data() {
    return {
      items: [
        { label: 'Ajoute à ta note', callBack: () => console.log('ajouter') },
        { label: 'Voir ta note', callBack: () => '' },
      ],
    };
  },

  beforeMount() {
    this.loadDrinks();
  },
  methods: {
    ...mapActions(['loadDrinks']),
  },
};
</script>

<style scoped>
  .container{
    width: 55px;
    border: solid red 1px;
    padding: 0;
  }
</style>
