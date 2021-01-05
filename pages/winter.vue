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
			<Title :value="title" />
			<p class="text">{{ $prismic.asText(text) }}</p>
			<Title value="activites" />

			<div class="grid">
				<Activity v-for="(activity, i) in activites" :key="i" :activity="activity" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
	async fetch() {
		const page = await this.$prismic.api.getSingle('winter')
		const activities = await this.$prismic.api.query([this.$prismic.predicates.at('document.type', 'activity'), this.$prismic.predicates.at('document.tags', ['winter'])])

		this.intro = page.data.intro.url
		this.title = this.$prismic.asText(page.data.title)
		this.text = page.data.text
		this.activites = activities.results
	},
	data: () => ({
		intro: String,
		title: String,
		text: String,

		activites: null,
	}),
	head() {
		return {
			title: 'Summer',
			meta: [{ hid: 'description', name: 'description', content: 'summer adventures' }],
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.grid {
	width: 100%;
	margin-bottom: 100px;
	display: flex;
	justify-content: center;
}

.text {
	width: 55%;
	font-size: 1.2rem;
	line-height: 1.8rem;
}
</style>
