<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="InputItem">
		<label :for="name">{{ name }}</label>
		<span class="error" :class="classes"> {{ errors[0] }} </span>

		<input v-if="type === 'input'" v-model="input_value" :type="type" :placeholder="placeholder" :name="name" autocomplete="off" @change="emitValue" />
		<textarea v-else-if="type === 'textarea'" v-model="input_value" :name="name" rows="4" :placeholder="placeholder"></textarea>
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
	components: {
		ValidationProvider,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'input',
		},
		rules: {
			type: [Object, String],
			required: true,
		},
		mode: {
			type: String,
			default: 'lazy',
		},
	},
	data: () => ({
		input_value: '',
	}),
	methods: {
		emitValue(event) {
			this.$emit('getValue', this.input_value)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~/assets/mixins.scss';
@import '~/assets/colors.scss';

.InputItem {
	width: 100%;
	position: relative;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	input,
	textarea {
		width: 100%;
		border: 0;
		outline: 0;
		padding: 0.5rem 1rem;

		font-family: 'next';
		font-weight: 500;
		font-size: 1.2em;
		line-height: 1.6rem;
		color: $text;
		background: white;
	}
	label {
		width: max-content;
		margin: 1rem;
		text-transform: capitalize;
	}
	.error {
		width: max-content;
		margin: 1rem;
		align-self: flex-end;

		font-size: 1rem;
		color: #ff1461;
	}
}
</style>
