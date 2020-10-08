<template>
  <v-container fluid>
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div v-else>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="3" sm="6">
          <v-select
            :value="getSelectedCountry"
            :items="getCountries"
            label="Select a Country"
            @change="setSelectedCountry"
            solo
          >
          </v-select>
        </v-col>
      </v-row>

      <Cards :data="getLastUpdate" />

      <v-row align="center" justify="center" no-gutters>
        <v-col class="country-info">
          <v-row
            ><h2>{{ getSelectedCountry }}</h2></v-row
          >
          <v-row><img :src="getCountryFlag" alt="" /></v-row><br />
        </v-col>
      </v-row>

      <Table v-if="getSelectedHistory != null" :data="getSelectedHistory" />
    </div>
  </v-container>
</template>

<script>
import Cards from "@/components/cards/Cards.vue";
import Table from "@/components/table/Table.vue";
import Spinner from "@/components/spinner/Spinner.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Cards,
    Spinner,
    Table,
  },
  computed: {
    ...mapGetters("country", [
      "getSelectedCountry",
      "getSelectedHistory",
      "getCountries",
      "getLastUpdate",
      "getCountryFlag",
    ]),

    ...mapGetters(["isLoading"]),
  },
  methods: {
    //Pega o nome dos países
    getCountryNames() {
      this.$store.dispatch("country/fetchCountriesNames");
    },
    //Pega o dado dos países
    getCountryData() {
      this.$store.dispatch("country/fetchCountryData", this.getSelectedCountry);
      //pega a iso3 example: Brazil => BRA
      //this.$store.dispatch("country/fetchCountryHistory")
    },
    //seleciona o país no select
    setSelectedCountry(value) {
      this.$store.dispatch("country/setSelectedCountry", value);
      this.$store.dispatch("country/fetchCountryData");
    },
  },
  created() {
    this.getCountryNames();
    this.getCountryData();
  },
};
</script>

<style  lang="scss" scoped>
.country-info * {
  margin: 10px auto;
}
</style>