<template>
	<div class="container">
		<Title value="contact" />
		<div class="info">
			<div class="wrap">
				<h4>chairlift</h4>
				<p href="#"><i class="icon icon-location" /> Таќа Бербер Бр 15</p>
				<a href="tel:389070707072"><i class="icon icon-phone" /> (+389) 070 70 70 72</a>
				<p href="#"><i class="icon icon-clock" /> 09:00 - 16:00</p>
			</div>
			<div class="wrap">
				<h4>alto lounge bar</h4>
				<p href="#"><i class="icon icon-location" /> Таќа Бербер Бр 15</p>
				<a href="tel:389070707072"><i class="icon icon-phone" /> (+389) 070 70 70 72</a>
				<p href="#"><i class="icon icon-clock" /> 09:00 - 16:00</p>
			</div>
			<div class="wrap">
				<h4>panorama &amp; spa</h4>
				<p href="#"><i class="icon icon-location" /> Таќа Бербер Бр 15</p>
				<a href="tel:389070707072"><i class="icon icon-phone" /> (+389) 070 70 70 72</a>
				<p href="#"><i class="icon icon-clock" /> 09:00 - 16:00</p>
			</div>
		</div>
		<Title value="write us" />

		<div class="contact_form">
			<div class="wrap">
				<InputItem name="name" rules="required" placeholder="With who we speaking" />
				<InputItem name="email" rules="email" placeholder="Your email Adress" />
				<Checkbox name="I have read and agree with Terms of Service and our Privacy Policy." />
			</div>
			<div class="wrap">
				<InputItem name="message" rules="required" type="textarea" placeholder="Share the adventures on your mind" />
				<Btn value="submit" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.container {
	background: $bg;
	color: white;
}

.info {
	width: 100%;
	padding: 0 200px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.wrap {
		.policy {
			height: 40px;
		}
		a {
			display: block;
			text-decoration: none;
			color: white;
		}
		.icon {
			margin-right: 20px;
		}
		& > * {
			text-transform: capitalize;
			margin-bottom: 20px;
			cursor: pointer;
			&:hover {
				opacity: 0.75;
			}
			&:first-child {
				margin-bottom: 40px;
			}
			&:last-child {
				margin: 0;
			}
		}
	}
}

.contact_form {
	width: 100%;
	padding: 0 200px;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	.wrap {
		width: 45%;
	}
}

.btn {
	width: 100%;
	height: 40px;

	margin: 50px 0;
}
</style>
