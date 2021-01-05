<template>
	<label class="checkbox">
		<input type="checkbox" :name="name" :value="name" />
		<span class="checkmark">{{ name }} </span>
	</label>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

/* The container */
.checkbox {
	width: 100%;
	height: 40px;
	margin: 50px 0;

	position: relative;

	display: flex;
	align-items: center;
	align-content: center;

	cursor: pointer;
	user-select: none;
	font-family: 'next';
	font-size: 0.9rem;
	color: white;
	text-align: left;

	// Hide the browser's default checkbox
	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	//Create a custom checkbox
	.checkmark {
		display: flex;
		align-items: center;
		align-content: center;
		position: relative;
		height: inherit;
		&:before {
			content: '';
			display: flex;
			height: 25px;
			width: 25px;
			margin-right: 25px;
			background-color: white;
		}
		&:after {
			content: '';
			position: absolute;
			display: none;

			left: 9px;
			top: 12px;
			width: 5px;
			height: 10px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}

	input:checked ~ .checkmark {
		&:before {
			transition: all 0.2s ease;
			background-color: #2196f3;
		}
		&:after {
			display: block;
		}
	}
}
</style>
