import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// 预设置
const preset = {
	icons: {
		iconfont: 'mdiSvg'
	}
}

export default new Vuetify(preset)
