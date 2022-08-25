<template>
  <div>
    <v-container class="mt-12">
      <h2 class="text-center mt-12">Register</h2>
      <v-col cols="4"></v-col>
      <v-col cols="4" class="mx-auto">
        <v-text-field
          label="Email"
          outlined
          dense
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="Username"
          outlined
          dense
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="Password"
          outlined
          dense
          type="password"
          v-model="password"
        ></v-text-field>
        <v-btn class="primary mb-3" width="100%" depressed @click="register"
          >register</v-btn
        >
        <span class="me-5">Belum Mempunyai Akun?</span>
        <span
          class="primary--text font-weight-bold rgs"
          @click="() => $router.push('/login')"
        >
          Login
        </span>
      </v-col>
      <v-col cols="4"></v-col>
    </v-container>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "RegisterView",
  setup() {},
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    register() {
      Axios.post("http://94.74.86.174:8080/api/register", {
        email: this.email,
        password: this.password,
        username: this.username,
      })
        .then((response) => {
          console.log(response);
          this.$router.go("/login");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
