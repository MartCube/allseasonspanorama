<template>
	<div class="container">
		<Intro :source="intro" />
		<Title :value="title" />
		<template v-if="$fetchState.error" class="error">
			<p>error..</p>
		</template>
		<template v-if="$fetchState.pending" class="loading">
			<div class="loading">
				<Spinner />
			</div>
		</template>
		<template v-if="!$fetchState.error && !$fetchState.pending">
			<div class="grid">
				<Post v-for="(blogPost, i) in blogPosts" :key="i" :post="blogPost" />
			</div>

			<div class="pagination">
				<span :class="{ disable: prev_page == null }" class="back" @click="fetchBack"> <i class="icon icon-left" /> </span>
				<div class="pages">
					<div v-for="index in total_pages" :key="index" :class="{ active: index == currentPage }" class="page" @click="fetchPage(index)">
						<span>{{ index }}</span>
					</div>
				</div>
				<span :class="{ disable: next_page == null }" class="next" @click="fetchNext"> <i class="icon icon-right" /> </span>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	async fetch() {
		const blogPosts = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'blog-post'), {
			orderings: '[document.first_publication_date desc]',
			pageSize: this.results_per_page,
			page: this.currentPage,
		})

		this.blogPosts = blogPosts.results
		this.total_pages = blogPosts.total_pages
		this.prev_page = blogPosts.prev_page
		this.next_page = blogPosts.next_page
	},
	async asyncData({ $prismic, error }) {
		const page = await $prismic.api.getSingle('blog')

		if (page) {
			return {
				intro: page.data.intro.url,
				title: $prismic.asText(page.data.title),
			}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	data: () => ({
		blogPosts: null,
		total_pages: null,
		currentPage: 1,
		results_per_page: 2,
		prev_page: null,
		next_page: null,
	}),
	methods: {
		fetchNext() {
			this.currentPage++
			this.$fetch()
		},
		fetchBack() {
			this.currentPage--
			this.$fetch()
		},
		fetchPage(value) {
			this.currentPage = value
			this.$fetch()
		},
	},
	head() {
		return {
			title: 'Blog',
			meta: [{ hid: 'description', name: 'description', content: 'News & Events' }],
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
.loading {
	min-height: 100vh;
}
.grid {
	width: 100%;
	min-height: 50vh;

	padding: 0 200px;
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
}

.pagination {
	width: max-content;
	margin: 100px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	.pages {
		max-width: 300px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		.page {
			cursor: pointer;
			user-select: none;
			width: 35px;
			height: 35px;
			margin-right: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			border: 1px solid transparent;

			transition: all 0.25s ease;
			&:last-child {
				margin-right: 0;
			}
			&.active {
				color: white;
				background: $blue;
			}
			&:hover {
				// color: $blue;
				border: 1px solid $blue;
			}
		}
	}
	.back,
	.next {
		width: 35px;
		height: 35px;
		margin: 0 35px;
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
		user-select: none;
		font-size: 1.2em;
		transition: all 0.25s ease;
		&:hover {
			color: $blue;
		}

		&.disable {
			pointer-events: none;
			opacity: 0.5;
		}
	}
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
	.pagination {
		margin-bottom: 50px;
	}
}
</style>
