<template>
	<nuxt-link class="activity" :to="link">
		<img :src="activity.data.image.url + '&fit=crop&w=375&h=500'" />
		<div class="overlay"></div>
		<div class="title">
			<h4>{{ $prismic.asText(activity.data.title) }}</h4>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		activity: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		link: '',
	}),
	created() {
		this.link = this.$prismic.linkResolver(this.activity)
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.activity {
	max-width: 375px;
	min-height: 500px;

	display: flex;
	flex-direction: column;

	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:hover {
		img {
			transform: scale(1);
		}
		.overlay {
			opacity: 0;
		}
		.title {
			opacity: 0;
		}
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;

		background-image: repeating-linear-gradient(45deg, rgba(97, 97, 97, 0.1) 0px, rgba(97, 97, 97, 0.1) 2px, transparent 2px, transparent 4px), linear-gradient(90deg, rgb(43, 43, 43), rgb(43, 43, 43));
		opacity: 0.7;
		transition: all 0.35s ease;
	}
	img {
		width: 375px;
		height: 500px;
		object-fit: cover;
		object-position: center;

		transform: scale(1.1);
		transition: all 0.7s ease;
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		opacity: 1;
		transition: all 0.35s ease;
		h4 {
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.1rem;
			padding: 5px 20px;
			color: white;
			background: $green;
			clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
		}

		margin: 10px;
	}
}
</style>
