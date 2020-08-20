<template>
  <v-content>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Firstname</th>
          <th class="text-left">Licence</th>
          <th class="text-left">Montant</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in playersWithBill" :key="player.licence">
          <td>{{ player.firstname }}</td>
          <td>{{ player.licence }}</td>
          <td>{{ player.bill.total }}</td>
          <td>
            <v-btn @click="() => reset(player._id)" color="primary">
              {{ $t('action.reset') }}
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'adminPlayers',
  props: {
    reset: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['playersWithBill']),
  },
};
</script>
