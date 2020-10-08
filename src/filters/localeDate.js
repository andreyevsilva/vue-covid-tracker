
const localeDate = {
        name:'localeDate',
        execute: (value) => {
           const parts = value.split('-')
           const myDate = parts[2]+'/'+parts[2]+'/'+parts[0]
           return  myDate
        }
    }

export default localeDate 