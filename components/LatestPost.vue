<template>
	<div class="latest_post">
		<template v-if="$fetchState.error" class="error">
			<p>error..</p>
		</template>
		<template v-if="$fetchState.pending" class="loading">
			<Spinner />
		</template>
		<template v-if="!$fetchState.error && !$fetchState.pending">
			<Title value="latest news" />

			<div class="grid">
				<Post v-for="(post, i) in posts" :key="i" :post="post" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: null,
		},
	},
	async fetch() {
		let posts

		if (this.tag) posts = await this.$prismic.api.query(this.$prismic.predicates.at('document.tags', [this.tag]), this.postOptions)
		else posts = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'blog-post'), this.postOptions)

		this.posts = posts.results
	},
	data: () => ({
		posts: null,
		postOptions: {
			orderings: '[document.first_publication_date desc]',
			page: 1,
			pageSize: 2,
		},
	}),
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.latest_post {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.grid {
	width: 100%;
	padding: 0 200px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

@media (max-width: 1200px) {
	.grid {
		padding: 0 100px;
	}
}

@media (max-width: 600px) {
	.grid {
		flex-direction: column;
		justify-content: center;
	}
}
</style>
