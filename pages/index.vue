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
			<Title value="all seasons" />

			<LatestPost />
			<Title value="sponsors" />

			<div class="sponsors">
				<!-- <img v-for="(sponsor, i) in sponsors" :key="i" :src="sponsor.image.url" /> -->
				<div v-for="(sponsor, i) in sponsors" :key="i" class="imageItem">
					<img class="image lazyload" :data-srcset="sponsor.image.url" />
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	async fetch() {
		const page = await this.$prismic.api.getSingle('home')

		this.intro = page.data.intro.url
		this.title = this.$prismic.asText(page.data.title)
		this.sponsors = page.data.sponsors
	},
	data: () => ({
		intro: String,
		title: String,
		sponsors: null,
	}),
	head() {
		return {
			title: 'All Seasons Panorama',
			meta: [{ hid: 'description', name: 'description', content: 'Panorama All Seasons Adventure' }],
		}
	},
}
</script>

<style lang="scss" scoped>
.sponsors {
	width: 100%;
	padding: 0 200px 100px 200px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.imageItem {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media (max-width: 1200px) {
	.sponsors {
		flex-wrap: wrap;

		padding: 0 100px 50px 100px;

		.imageItem {
			flex-basis: 35%;
			margin: 25px;
		}
	}
}

@media (max-width: 600px) {
	.sponsors {
		flex-direction: column;
		justify-content: center;
		padding: 0 5% 50px 5%;
	}
}
</style>
