<template>
	<div class="date">
		{{date}}
	</div>
</template>

<script>
	export default {
		computed: {
			date() {
				let date = new Date()
				let y = date.getFullYear()
				let m = date.getMonth() + 1
				let d = date.getDate()
				let day = date.getDay()
				if (day === 0) {
					day = '周日'
				} else if (day === 1) {
					day = '周一'
				} else if (day === 2) {
					day = '周二'
				} else if (day === 3) {
					day = '周三'
				} else if (day === 4) {
					day = '周四'
				} else if (day === 5) {
					day = '周五'
				} else if (day === 6) {
					day = '周六'
				}
				return `${y}年 ${m}月 ${d}日 ${day}`
			}
		},
	}
</script>

<style lang="less" scoped>
	.date {
		padding: .5rem;
	}
</style>
