<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card :class="className" dark>
      <v-card-title class="headline">{{ label }}</v-card-title>
      <h1 class="number">{{ number ? number.toLocaleString() : 'Select a Country' }}</h1>

      <v-card-actions>
        <v-btn class="subtitle-1" text>{{ update | localeDate}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>

export default {
  props: ["label", "number", "update", "className"],
};
</script>

<style lang="scss" scoped>
.confirmed {
  background: linear-gradient(45deg, #50dcf2 30%, #7445d9 90%);
  border-radius: 3;
  border: 0;
  color: white;
  padding: 0 30px 0 20px;
  box-shadow: 0 1px 6px 1px #7445d9;
}

.recovered {
  background: linear-gradient(45deg, #66ff6e 30%, #45d9c3 90%);
  border-radius: 3;
  border: 0;
  color: white;
  padding: 0 30px 0 20px;
  box-shadow: 0 1px 6px 1px #45d9c3;
}

.deaths {
  background: linear-gradient(45deg, #ff9257 30%, #ff6666 90%);
  border-radius: 3;
  border: 0;
  color: white;
  padding: 0 30px 0 20px;
  box-shadow: 0 1px 5px 1px #ff7d66;
}

.shadow-text {
  text-shadow: 2px 2px 10px #000;
}

.number{
  margin-left: 15px;
}
</style>