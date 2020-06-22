import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_BASE_URL
})

type CounterSettings ={
    maxValue: number,
    startValue: number
}

const counterSerwise = {
    getCounterSettings(){
        return instance.get<CounterSettings>("/counter-settings").then(res => res.data)
    }
}
