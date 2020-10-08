export default {
    methods: {
        //Dados para o Grafico
        getGraphData() {
            let cases = {}
            let deaths = {}
            let recovereds = {}
            
            console.log(this.globalInfo)

            for (let value of Object.entries(this.globalInfo)) {
                cases[value[0]] = value[1].confirmed
                deaths[value[0]] = value[1].deaths
                recovereds[value[0]] = value[1].recovered
            }

            const data = {
                cases: Object.entries(cases),
                deaths: Object.entries(deaths),
                recovereds: Object.entries(recovereds)
            }

            this.$store.dispatch('covid/setChartData',data)

        },
    },
}