<template>
  <Login
    :display-message="displayMessage"
    @submitAuthenticationForm="authentificate"
  />
</template>

<script>
import { mapActions } from 'vuex';
import Login from '@/components/login';

export default {
  name: 'loginView',
  components: {
    Login,
  },
  data() {
    return {
      displayMessage: false,
    };
  },
  methods: {
    ...mapActions(['authentificateUser']),
    authentificate(/* payload */) {
      this.$router.push({ name: 'resetPassword' });
      /* return this.authentificateUser(payload)
        .then(() => {
          this.$router.push({ name: 'home' });
        })
        .catch(() => {
          this.displayMessage = true;
        }); */
    },
  },
};
</script>
