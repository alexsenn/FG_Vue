<template>
  <div>
    <v-card
      class="margem mx-auto"
      max-width="344"
      v-for="quadra in quadras"
      v-bind:key="quadra.id"
    >
      <v-card-text>
        <div>{{ quadra.nome }}</div>
        <p class="display-1 text--primary">{{ quadra.nome }}</p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br />
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" v-on:click="teste(quadra)">
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quadras: []
    };
  },
  created() {
    this.reloadQuadras();
  },
  methods: {
    reloadQuadras() {
      this.$http.get("http://localhost:3000/quadras").then(res => {
        this.quadras = res.data;
        console.log(this.quadras);
      });
    },
    teste(pqp) {
      console.log(pqp);
    }
  }
};
</script>

<style>
.margem {
  margin: 10px;
}
</style>
