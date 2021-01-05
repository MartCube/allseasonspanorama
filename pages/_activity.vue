<template>
	<div class="container">
		<template v-if="$fetchState.error" class="error">
			<p>error..</p>
		</template>
		<template v-if="$fetchState.pending" class="loading">
			<Spinner />
		</template>
		<template v-if="!$fetchState.error && !$fetchState.pending">
			<Intro :source="intro" />
			<Title value="services" />
			<ActivityForm :name="title" />
			<LatestPost :tag="title" />
		</template>
	</div>
</template>

<script>
export default {
	async fetch() {
		console.log(this.$route.params.activity)
		const activity = await this.$prismic.api.getByUID('activity', this.$route.params.activity)

		this.intro = activity.data.intro.url
		this.title = this.$prismic.asText(activity.data.title)
	},
	data: () => ({
		intro: '',
		title: '',
	}),
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.latest_post {
	margin-bottom: 100px;
}
</style>
