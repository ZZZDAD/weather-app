import axios from 'axios';

const SET_CITY = 'setCity';
const SET_WEATHER = 'setWeather';

export const state = () => ({
    city: '',
    wendu: '',
    shidu: '',
    quality: '',
    forecast: []
});

export const mutations = {
    [SET_CITY](state, city) {
        state.city = city;
    },
    [SET_WEATHER](state, {
        wendu,
        shidu,
        quality,
        forecast
    }) {
        state.wendu = wendu
        state.shidu = shidu
        state.quality = quality
        state.forecast = forecast
    }
};

export const actions = {
    async setCity({
        commit
    }, city) {
        commit(SET_CITY, city)
    },
    async setWeather({
        state,
        commit
    }) {
        try {
            commit(SET_WEATHER, {
                wendu: '',
                shidu: '',
                quality: '',
                forecast: []
            })
            let url = `https://www.dad2048.com/weather/get?city=${state.city}`;
            let response = await axios(url);
            if (response.data.status === 200) {
                let {
                    wendu,
                    shidu,
                    quality,
                    forecast
                } = response.data.data
                commit(SET_WEATHER, {
                    wendu: wendu,
                    shidu: shidu,
                    quality: quality,
                    forecast: forecast
                })
            } else if (response.data.status === 0) {
                setTimeout(() => {
                    this.dispatch('weather/setWeather')
                }, 800);
            }
            //  else if (!response.data.status) {
            //     console.log('no area')
            // }
        } catch (e) {
            console.log('error in setWeather');
            console.log(e);
        }
    }
};
