<template>
	<div>
		<h3>test</h3>
		<p>
			<span class="num">1234214</span> -
			<span class="stock-num">1234214</span> - <span>1234214</span> -
		</p>
		<div class="van-ellipsis">
			这是一段最多显示一行的文字，多余的内容会被省略
		</div>
		<div class="van-multi-ellipsis--l3">
			这是一段最多显示三行的文字，多余的内容会被省略
			这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示三行的文字，多余的内容会被省略
		</div>
		<div class="van-hairline--top"></div>
		<div class="van-hairline--surround"></div>
		<van-button type="default">默认按钮</van-button>
		<van-button plain type="info">朴素按钮</van-button>
		<van-button type="primary" size="normal">普通按钮</van-button>
		<van-button type="primary" size="small">小型按钮</van-button>
		<van-button type="primary" size="mini">迷你按钮</van-button>
		<p>
			<van-icon name="arrow-left" class-prefix="m-icon" color="#07c160" size="16" />
			<van-icon name="help" class-prefix="m-icon" color="#07c160" />
			<van-icon name="help" class-prefix="m-icon" size="24" />
			<van-icon name="chat-o" />
			<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
			<van-icon :name="img_file" />
			<van-icon name="chat-o" dot />
			<van-icon name="chat-o" badge="9" />
			<van-icon name="chat-o" badge="99+" />
			<van-icon name="chat-o" color="#1989fa" />
			<van-icon name="chat-o" color="#07c160" />
			<van-icon name="chat-o" size="40" />
			<van-icon name="chat-o" size="3rem" />
		</p>
		<van-cell title="单元格" icon="location-o" value="内容" />
		<van-cell
			title="单元格"
			icon="location-o"
			value="内容"
			label="描述信息"
			title-style="display:flex"
		/>
		<van-cell title="单元格" icon="location-o" value="内容" label="描述信息" />
		<van-cell title="自定义图标" :icon="img_file" value="内容" />
		<van-cell title="单元格" is-link value="内容" />
		<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
		<van-cell value="内容" is-link>
			<!-- 使用 title 插槽来自定义标题 -->
			<template #title>
				<span class="custom-title">单元格</span>
				<van-tag type="danger">标签</van-tag>
			</template>
		</van-cell>
		<van-cell title="单元格" icon="shop-o">
			<!-- 使用 right-icon 插槽来自定义右侧图标 -->
			<template #right-icon>
				<van-icon :name="img_file" />
			</template>
		</van-cell>
		<van-tabbar :fixed="false" v-model="active">
			<van-tabbar-item icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item icon="search" dot>标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
		</van-tabbar>
		<van-tabbar :fixed="false" v-model="active">
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>标签</van-tabbar-item>
			<van-tabbar-item>
				<van-icon name="chat-o" />
				标签
			</van-tabbar-item>
		</van-tabbar>
		<van-tabbar :fixed="false" v-model="active">
			<van-tabbar-item badge="3">
				<span>自定义</span>
				<template #icon="props">
					<img :src="props.active ? icon.active : icon.inactive" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import {Button, Icon, Cell, Tag, Tabbar, TabbarItem} from 'vant'
import img_file from '@/assets/icons/svg/file-c.svg'
export default {
	name: 'Test',
	components: {
		[Button.name]: Button,
		[Icon.name]: Icon,
		[Cell.name]: Cell,
		[Tag.name]: Tag,
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem
	},
	data: () => ({
		img_file,
		active: 0,
		icon: {
			active: 'https://img.yzcdn.cn/vant/user-active.png',
			inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
		}
	})
}
</script>

<style lang="sass" scoped>
h3
    color: orange
.num
    font-family: 'num-font-family'
.stock-num
    font-family: 'Heiti SC'
</style>
