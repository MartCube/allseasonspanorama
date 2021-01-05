<template>
	<div class="container">
		<template v-if="$fetchState.error" class="error">
			<p>error..</p>
		</template>
		<template v-if="$fetchState.pending" class="loading">
			<Spinner />
		</template>
		<template v-if="!$fetchState.error && !$fetchState.pending">
			<div class="post">
				<div class="post_image">
					<img :data-src="postImage + '&fit=crop&w=800&h=450'" class="lazyload" :alt="title" />
				</div>

				<div class="post_info">
					<span class="date"> <i class="icon icon-calendar"></i> {{ date }}</span>
					<div class="tags">
						<a v-for="tag in tags" :key="tag" href="#"> <span>#</span>{{ tag }}</a>
					</div>
				</div>

				<h2 class="title">{{ title }}</h2>

				<!-- add slices -->
				<section v-for="(slice, index) in slices" :key="'slice-' + index" class="slice">
					<template v-if="slice.slice_type === 'text'">
						<prismic-rich-text class="paragraph" :field="slice.primary.text" />
					</template>
					<template v-if="slice.slice_type === 'image'">
						<div class="post_image">
							<img :data-src="slice.primary.image.url + '&fit=crop&w=800&h=450'" class="lazyload" :alt="slice.primary.image.alt" />
							<span v-if="slice.primary.image.alt" class="description"> "{{ slice.primary.image.alt }}" </span>
						</div>
					</template>
				</section>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	async fetch() {
		const post = await this.$prismic.api.getByUID('blog-post', this.$route.params.uid)
		console.log(post)

		this.postImage = post.data.post_image.url
		this.title = this.$prismic.asText(post.data.post_title)
		this.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(this.$prismic.asDate(post.first_publication_date))
		this.tags = post.tags
		this.slices = post.data.body
	},
	data: () => ({
		image: '',
		title: '',
		date: '',
		tags: [],
		slices: [],
	}),
	head() {
		return {
			title: this.title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.title },
				{ hid: 'og:image', property: 'og:image', content: this.mainImage },
				{ hid: 'og:url', property: 'og:url', content: `https://allseasonspanorama.com/events/${this.uid}` },
			],
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.post {
	max-width: 800px;
	margin-top: 80px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.post_image {
		max-width: 800px;
		min-height: 450px;
		position: relative;
		display: flex;
		flex-direction: column;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);

			&.lazyload,
			&.lazyloading {
				opacity: 0;
			}
			&.lazyloaded {
				opacity: 1;
				transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}
		.description {
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 0.9rem;
			margin-top: 10px;
		}
	}

	.post_info {
		width: 100%;
		display: flex;

		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20px 0;

		.date {
			width: max-content;
			display: flex;
			font-weight: 600;
			i {
				margin-right: 5px;
			}
		}
		.tags {
			width: max-content;
			display: flex;

			a {
				text-decoration: none;
				font-weight: 600;
				margin-left: 20px;
				color: $blue;
				transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
				span {
					color: $green;
				}
				&:hover {
					opacity: 0.75;
				}
			}
		}
	}
	.title {
		margin-bottom: 40px;

		font-weight: 700;
		font-size: 3rem;
		text-align: center;
	}

	.slice {
		width: 100%;
		margin: 20px 0;
		font-size: 1.1rem;
		line-height: 1.5rem;
		.paragraph {
			a {
				text-decoration: none;
				color: #4a88c8;

				&:hover {
					color: #7eb241;
				}
			}
			ol {
				margin: 20px 40px;
				li {
					margin: 10px 0;
				}
			}
			h2 {
				font-size: 2rem;
				line-height: 2rem;
				margin-bottom: 40px;
			}
		}
	}
}

@media (max-width: 1150px) {
	.post {
		width: 90%;

		.title {
			h2 {
				font-size: 2em;
			}
		}
		.date {
			justify-content: center;
		}
		.tags {
			justify-content: center;
		}
		.paragraph {
			h4 {
				font-size: 1.6em;
			}
			ol {
				margin: 10px 20px;
			}
		}
	}
}
</style>
