<template>
	<nav class="navbar">
		<n-link class="logo" exact :to="localePath('index')">
			<img src="/logo.png" alt="logo" />
		</n-link>

		<div class="links" :class="{ active: isActive }">
			<n-link :to="localePath('blog')" @click.native="CloseMenu">{{ $t('pages.blog') }}</n-link>
			<n-link :to="localePath('winter')" @click.native="CloseMenu">{{ $t('pages.winter') }}</n-link>
			<n-link :to="localePath('summer')" @click.native="CloseMenu">{{ $t('pages.summer') }}</n-link>
			<n-link :to="localePath('panorama')" @click.native="CloseMenu">{{ $t('pages.panorama') }}</n-link>
			<n-link :to="localePath('contact')" @click.native="CloseMenu">{{ $t('pages.contact') }}</n-link>
			<n-link v-for="locale in availableLocales" :key="locale.code" class="locale" :class="{ current: locale.code == currentLocale }" :to="switchLocalePath(locale.code)"> {{ locale.name }} <i class="icon icon-play" /> </n-link>
		</div>

		<div class="button" :class="{ active: isActive }" @click="ShowHideMenu">
			<span class="top" />
			<span class="middle" />
			<span class="bottom" />
		</div>
	</nav>
</template>

<script>
export default {
	data: () => ({
		isActive: false,
	}),
	computed: {
		availableLocales() {
			return this.$i18n.locales
		},
		currentLocale() {
			return this.$i18n.locale
		},
	},
	methods: {
		ShowHideMenu() {
			this.isActive = !this.isActive
		},
		CloseMenu() {
			this.isActive = false
		},
	},
}
</script>

<style lang="scss" scooped>
@import '~/assets/colors.scss';

.navbar {
	position: fixed;
	top: 0;
	z-index: 9;
	height: 80px;
	width: 100%;
	padding: 0 100px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	background: $bg;
	user-select: none;

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-basis: 50%;
		a {
			text-decoration: none;
			text-transform: uppercase;
			font-size: 1rem;
			font-weight: 600;
			color: white;
			outline: none;

			&.locale {
				.icon {
					color: $green;
				}
				&::after {
					display: none;
				}
			}

			&.current.locale {
				display: none;
			}

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 3px;
				border-radius: 10px;
				background: $blue;

				opacity: 0;
				transition: all 0.3s;
				transform: translateY(10px);
			}

			&:hover::after {
				opacity: 1;
				transform: translateY(5px);
			}

			&.nuxt-link-active::after {
				opacity: 1;
				transform: translateY(5px);
			}
		}

		&.active {
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;

			padding: 25% 0;

			background: $bg;
			overflow: hidden;

			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;

			a {
				animation: fadeInRight 0.5s ease forwards;
				color: white;
				font-size: 1.5rem;
				&::after {
					background: #4a88c8;
					height: 5px;
				}
				&.nuxt-link-active {
					color: #7eb241;
				}
			}
		}
	}

	.logo {
		display: flex;
		align-items: bottom;
		flex-basis: 50%;
		color: white;
		img {
			height: 60px;
		}
	}

	.button {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		margin: 25px;
		height: 27px;
		width: 35px;
		cursor: pointer;

		transition: all 0.3s ease;
		&.active {
			.top {
				transform: translateY(11px) translateX(0) rotate(45deg);
				background: white;
			}
			.middle {
				opacity: 0;
			}

			.bottom {
				transform: translateY(-11px) translateX(0) rotate(-45deg);
				background: white;
			}
		}

		span {
			background: #4a88c8;
			//border-radius: 10px;
			height: 5px;
			border-radius: 5px;
			width: 100%;
			position: absolute;
			top: 0;
			transition: all 0.3s ease;

			&:nth-of-type(2) {
				top: 11px;
				width: 80%;
				right: 0;
				background: #7eb241;
			}

			&:nth-of-type(3) {
				top: 22px;
			}
		}
	}
}

@keyframes fadeInRight {
	0% {
		opacity: 0;
		transform: translateX(50px);
	}
	100% {
		opacity: 1;
		transform: translateX(0px);
	}
}

@media (max-width: 1200px) {
	.navbar {
		padding: 0 25px;
		.links {
			display: none;
		}
		.button {
			display: flex;
		}
	}
}
</style>
