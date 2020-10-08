<template>
<v-card>
    <v-card-title>
      History
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
      ></v-text-field>
    </v-card-title>

  <v-data-table
      :headers="headers"
      :items="results"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
    >
    </v-data-table>
</v-card> 
</template>

<script>
export default {
  name: 'Table',
  props: ["data"],
  data(){
    return{
      results:[],
      search: '',
      headers: [
          {
            text: 'Date',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Cases', value: 'confirmed' },
          { text: 'Deaths', value: 'deaths' },
          { text: 'Recovered', value: 'recovered' },
        ],
    }
  },
  methods:{
    generateResults(){
        for (let value of Object.entries(this.data.result)) {
      
           this.results.push({date:value[0],
                              confirmed:value[1].confirmed.toLocaleString(),
                              deaths:value[1].deaths.toLocaleString(),
                              recovered:value[1].recovered.toLocaleString()})
        }
    }
  },
  mounted(){
    this.generateResults()
    this.results.reverse()
  }
}
</script>

<style lang="scss" scoped>
</style>