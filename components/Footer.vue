<template>
	<div class="footer">
		<div class="heading">
			<h2>all seasons <span class="green">panorama</span></h2>
		</div>
		<div class="contact">
			<h4>get in touch</h4>
			<n-link :to="localePath('contact')"><i class="icon icon-mail"></i> adventure@panorama.com</n-link>
			<a href="tel:389070707072"><i class="icon icon-phone"></i> (+389) 070 70 70 72</a>
			<a href="http://m.me/PanoramaAdventure" target="blank"><i class="icon icon-facebook"></i> Facebook live chat</a>
		</div>
		<div class="site_map">
			<div class="page">
				<h4>
					<n-link :to="localePath('winter')">winter</n-link>
				</h4>
				<n-link :to="localePath('winter')">Freeride tours</n-link>
				<n-link :to="localePath('winter')">Snow Mobiling</n-link>
				<n-link :to="localePath('winter')">Ski Schools</n-link>
			</div>
			<div class="page">
				<h4>
					<n-link :to="localePath('summer')">summer</n-link>
				</h4>
				<n-link :to="localePath('summer')">Biking</n-link>
				<n-link :to="localePath('summer')">Hiking</n-link>
				<n-link :to="localePath('summer')">ATB</n-link>
			</div>
			<div class="page">
				<h4>
					<n-link :to="localePath('panorama')">panorama</n-link>
				</h4>
				<n-link :to="localePath('panorama')">Hotel</n-link>
				<n-link :to="localePath('panorama')">Corporate Activities</n-link>
				<n-link :to="localePath('panorama')">Team Buildings</n-link>
			</div>
			<div class="page">
				<h4>
					<n-link :to="localePath('blog')">blog</n-link>
				</h4>
				<n-link :to="localePath('blog')">News</n-link>
				<n-link :to="localePath('blog')">Events</n-link>
			</div>
		</div>
		<div class="subscribe">
			<h4>subscribe</h4>
			<Subscribe name="email" rules="email" placeholder="Your email Adress" />
			<Btn bg="#7EB241" value="submit" />
		</div>
		<div class="copyright">
			<p>CopyRight <i class="icon icon-copyright" /> {{ year }}</p>
			<p><n-link to="/">Privacy Policy </n-link> | <n-link to="/"> Terms and Conditions</n-link></p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear()
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.footer {
	width: 100%;
	padding: 50px 100px;
	background: $bg;
	color: white;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	h2 {
		text-transform: uppercase;
		font-size: 1.5rem;
	}
	h4 {
		text-transform: uppercase;
		font-size: 1rem;
	}
	a {
		text-decoration: none;
		color: white;
		&:hover {
			opacity: 0.75;
		}
	}

	.heading {
		flex-basis: 100%;
		margin-bottom: 50px;
		span {
			color: $green;
			font-weight: 700;
		}
	}
	.contact {
		display: flex;
		flex-direction: column;
		& > * {
			margin-bottom: 20px;
			&:first-child {
				margin-bottom: 40px;
			}
			&:last-child {
				margin: 0;
			}
		}
		.icon {
			margin-right: 20px;
		}
	}
	.site_map {
		display: flex;
		flex-basis: 40%;
		justify-content: space-between;
		flex-wrap: wrap;

		.page {
			display: flex;
			flex-direction: column;

			& > * {
				margin-bottom: 20px;
				&:first-child {
					margin-bottom: 40px;
				}
				&:last-child {
					margin: 0;
				}
			}
		}
	}
	.subscribe {
		flex-basis: 20%;
		.InputItem {
			max-width: 250px;
		}
		& > * {
			margin-bottom: 20px;
			&:first-child {
				margin-bottom: 40px;
			}
			&:last-child {
				margin: 0;
			}
		}
	}
	.copyright {
		flex-basis: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}
}

@media (max-width: 1200px) {
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;

		.heading,
		.contact,
		.site_map,
		.subscribe,
		.copyright {
			width: 80%;
			flex-basis: auto;
			margin-bottom: 50px;
		}
	}
}

@media (max-width: 800px) {
	.footer {
		padding: 25px;
		height: calc(100vh - 80px);
		min-height: 630px;
		.heading,
		.contact,
		.subscribe,
		.copyright {
			width: 100%;
		}

		.site_map {
			display: none;
		}
		.copyright {
			width: inherit;
			font-size: 0.8rem;
			margin: 0;
		}
	}
}
</style>
