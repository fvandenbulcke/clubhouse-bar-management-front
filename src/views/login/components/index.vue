<template>
  <v-content style="height: 100%;">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-1">
            <v-toolbar dark color="primary">
              <!-- <v-flex
                style="position: absolute;left: -5%;"
              >
                <v-avatar
                  :tile="false"
                  size="100px"
                  color="grey lighten-4"
                >
                  <img src="@/assets/logo-sii.png" alt="avatar"/>
                </v-avatar>
              </v-flex> -->
              <v-spacer></v-spacer>
              <v-toolbar-title  align-right>{{ $t('title.application') }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="login"
                  name="login"
                  label="Login"
                />
                <v-text-field
                  id="password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  label="Password"
                  type="password"
                />
                <v-alert
                  :value="displayMessage"
                  color="error"
                  style="height:20px"
                >
                {{ $t('error.login') }}
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions xs12>
              <v-btn block @click="onClick" color="primary">{{ $t('action.connect') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

export default {
  name: 'login',
  props: {
    displayMessage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      login: null,
      password: null,
    };
  },
  methods: {
    onClick() {
      this.$emit('submitAuthenticationForm', { login: this.login, password: this.password });
    },
  },
};
</script>
