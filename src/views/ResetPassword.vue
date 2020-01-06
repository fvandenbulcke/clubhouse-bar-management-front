<template>
  <ResetPassword
    :display-message="displayMessage"
    @submitAuthenticationForm="authentificate"
  />
</template>

<script>
import ResetPassword from '@/components/resetPassword';

export default {
  name: 'ResetPasswordview',
  components: {
    ResetPassword,
  },
  data() {
    return {
      displayMessage: false,
    };
  },
  methods: {
    authentificate(/* payload */) {
      this.$router.push({ name: 'drinks' });
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
