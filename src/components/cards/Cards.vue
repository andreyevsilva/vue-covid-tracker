<template>
    <v-layout row wrap>
            <Card :label="'Confirmed'" :className="'confirmed'" :number="data[1].confirmed" :update="data[0]"/>
            <Card :label="'Recovered'" :className="'recovered'" :number="data[1].recovered" :update="data[0]"/>
            <Card :label="'Deaths'" :className="'deaths'" :number="data[1].deaths" :update="data[0]"/>
    </v-layout>
</template>

<script>

import Card from "@/components/cards/Card.vue"
export default {
    props:['data'],
    components:{
        Card
    },
};
</script>

<style>

</style>