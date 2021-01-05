<template>
	<div class="activity_form">
		<div class="title">
			<div class="line"></div>
			<h2>{{ name }}</h2>
		</div>
		<form>
			<div class="wrap">
				<InputItem name="name" rules="required" placeholder="With who we speaking" />
				<InputItem name="email" rules="email" placeholder="Your email adress" />
				<InputItem name="phone" rules="required" placeholder="Phone number" />
				<Checkbox name="I have read and agree with Terms of Service and our Privacy Policy." />
			</div>
			<div class="wrap">
				<InputItem name="date" rules="required" placeholder="Select your date" />
				<InputItem name="message" rules="required" type="textarea" placeholder="Share the adventures on your mind" />
				<Btn value="submit" />
			</div>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.activity_form {
	width: 100%;
	min-height: 100vh;
	padding: 100px 200px;

	display: flex;
	flex-direction: column;
	align-items: center;

	background: $bg;
	color: white;

	.title {
		flex-basis: 100%;
		align-self: flex-start;
		padding: 100px 0;
		.line {
			width: 100%;
			height: 7px;
			background: $green;
			clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
		}
		h2 {
			width: max-content;

			font-size: 2.5rem;
			padding: 5px 20px;
			text-transform: uppercase;
		}
	}

	form {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.wrap {
			width: 45%;
		}
		.btn {
			width: 100%;
			height: 40px;
			margin: 50px 0;
		}
	}
}
</style>
