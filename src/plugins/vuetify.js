import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// 预设置
const preset = {
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 24,
    },
};

export default new Vuetify(preset);
