<template>
    <v-card class="my-5 py-3">
      <div class="chart">
        <area-chart
        thousands="." 
        decimal="," 
        xtitle="Date" 
        ytitle="Cases" 
        :data="data.cases.slice(-30)">
        </area-chart>
      </div>
    </v-card>    
</template>

<script>

export default{
  props:['data']
}
</script>

<style lang="scss" scoped>
</style>