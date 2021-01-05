<template>
	<div class="intro">
		<Spinner v-show="!loaded" />

		<div class="imageItem">
			<img class="image lazyload" :data-srcset="source + '&fit=crop&w=1920&h=1080'" :class="position" @load="onLoaded" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		source: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			default: 'center',
		},
	},
	data: () => ({
		loaded: false,
	}),
	methods: {
		onLoaded() {
			this.loaded = true
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.intro {
	width: 100%;
	height: calc(100vh - 80px);

	display: flex;
	.imageItem {
		width: inherit;
		height: inherit;

		position: relative;
		overflow: hidden;
		.image {
			position: absolute;
			top: 0;
			left: 0;
			width: inherit;
			height: inherit;
			object-fit: cover;
			object-position: center;

			&.top {
				object-position: top;
			}
			&.bottom {
				object-position: bottom;
			}

			&.lazyload,
			&.lazyloading {
				opacity: 0;
			}
			&.lazyloaded {
				opacity: 1;
				transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}
	}
}
</style>
