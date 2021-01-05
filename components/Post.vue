<template>
	<div class="post_card">
		<n-link :to="link">
			<img :data-src="post.data.post_image.url + '&fit=crop&w=450&h=250'" class="lazyload" />
		</n-link>
		<h4 class="title">{{ $prismic.asText(post.data.post_title) }}</h4>
		<div class="post_info">
			<div class="tags">
				<n-link v-for="tag in post.tags" :key="tag" to="/blog"> <span>#</span>{{ tag }}</n-link>
			</div>
			<div class="date">
				<span><i class="icon icon-calendar"></i> {{ formattedDate }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		link: '',
		formattedDate: '',
	}),
	created() {
		this.link = this.$prismic.linkResolver(this.post)
		// formatted Date
		const date = this.$prismic.asDate(this.post.first_publication_date)
		this.formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(date)
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.post_card {
	max-width: 450px;
	min-height: 250px;

	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: $text;

	img {
		width: 450px;
		height: 250px;
		object-fit: cover;
		object-position: center;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
	.title {
		text-transform: capitalize;
		font-size: 1.5rem;
		margin: 10px;
	}
	.post_info {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 10px;

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
				margin-right: 10px;
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
}

@media (max-width: 1200px) {
	.post_card {
		max-width: 350px;
		min-height: 200px;
		img {
			width: 350px;
			height: 200px;
		}
		.post_info {
			flex-direction: column;
			justify-content: flex-start;

			& > * {
				margin-bottom: 10px;
			}
		}
	}
}

@media (max-width: 600px) {
	.post_card {
		max-width: 350px;
		min-height: 200px;
		margin-bottom: 50px;
		img {
			width: 350px;
			height: 200px;
		}
		.post_info {
			flex-direction: column;
			justify-content: flex-start;

			& > * {
				margin-bottom: 10px;
			}
		}
	}
}

@media (max-width: 360px) {
	.card {
		max-width: 300px;
		min-height: 150px;
		img {
			width: 300px;
			height: 150px;
		}
	}
}
</style>
