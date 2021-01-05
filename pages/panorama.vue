<template>
	<div class="container">
		<section class="parallax"></section>
		<section class="static"></section>
	</div>
</template>

<script>
export default {
	async fetch() {
		const page = await this.$prismic.api.getSingle('winter')
		this.intro = page.data.intro.url
	},
	data: () => ({
		intro: String,
	}),
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.container {
	width: 100%;
	min-height: 100vh;
	margin-top: 80px;
	overflow: hidden;
	perspective: 2px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

section {
	width: 100%;
	height: 100vh;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
}

.parallax {
	width: 100%;
	height: 100vh;
	background-image: url('/parallax.jpg');
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
}
</style>
