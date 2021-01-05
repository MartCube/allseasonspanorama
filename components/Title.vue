<template>
	<div class="title">
		<div class="line"></div>
		<h2>{{ value }}</h2>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.title {
	width: max-content;
	align-self: flex-start;
	padding: 100px 200px;
	.line {
		width: 100%;
		height: 7px;
		background: $blue;
		clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
	}
	h2 {
		font-size: 2.5rem;
		padding: 5px 20px;
		text-transform: uppercase;
	}
}

@media (max-width: 1200px) {
	.title {
		padding: 100px;
		h2 {
			font-size: 2rem;
		}
	}
}

@media (max-width: 600px) {
	.title {
		padding: 50px 0;
		align-self: center;
		h2 {
			font-size: 2rem;
		}
	}
}
</style>
