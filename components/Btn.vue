<template>
	<div class="btn" :style="{ background: bg }" @click="$router.push(localePath(link))">
		<span>{{ value }}</span>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			default: '/',
		},
		bg: {
			type: String,
			default: '#4A88C8',
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.btn {
	width: max-content;
	user-select: none;
	padding: 7px 20px;
	background-color: #4a88c8;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	span {
		text-transform: uppercase;
		text-align: center;
		font-size: 1rem;
		font-weight: 600;
		color: white;
	}
}
</style>
