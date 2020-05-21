<template>
	<v-container fluid>
		<v-row align="center" justify="center">
			<v-icon>{{ icons.mdiAccount }}</v-icon>
			<div class="mx-2"></div>
			<v-icon>{{ icons.mdiPencil }}</v-icon>
			<div class="mx-2"></div>
			<v-icon>{{ icons.mdiShareVariant }}</v-icon>
			<div class="mx-2"></div>
			<v-btn color="primary" depressed>
				<v-icon left>{{ icons.mdiDelete }}</v-icon>
				Delete
			</v-btn>
		</v-row>
	</v-container>
</template>

<script>
import {mdiAccount, mdiPencil, mdiShareVariant, mdiDelete} from '@mdi/js'
export default {
	name: 'Test',
	data: () => ({
		img_path: '@/src/assets/logo.png',
		icons: {
			mdiAccount,
			mdiPencil,
			mdiShareVariant,
			mdiDelete
		}
	}),
	mounted() {
		console.log(this.$vuetify)
	}
}
</script>

<style lang="sass" scoped>
.group
    display: flex
    flex: 1
    justify-content: space-around
</style>
