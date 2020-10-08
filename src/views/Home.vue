<template>
  <div class="home">
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div v-else>
      <Cards :data="getLastUpdate" />

      <div class="chart">
        <!--
        <Chart :data="covidData" />
        -->
      </div>
      <Table v-if="getGlobalData != null" :data="getGlobalData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "@/components/cards/Cards.vue";
import Spinner from "@/components/spinner/Spinner.vue";
//import Chart from "@/components/chart/Chart.vue";
import Table from "@/components/table/Table.vue";

//Mixins
//import chart from "@/mixins/chart.js";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  //mixins: [chart],
  components: {
    Cards,
    Spinner,
    Table,
    //Chart,
  },
  computed: {
    ...mapGetters('covid',['getLastUpdate', 'getGlobalData']),
    ...mapGetters(['isLoading']),
  },
  created() {
    try {
      this.$store.dispatch("covid/fetchGlobalData")
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
</style>
