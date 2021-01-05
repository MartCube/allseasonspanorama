<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="InputItem">
		<span class="error" :class="classes"> {{ errors[0] }} </span>

		<input v-model="input_value" :type="type" :placeholder="placeholder" :name="name" autocomplete="off" @change="emitValue" />
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

.InputItem {
	width: 100%;
	position: relative;

	display: flex;
	flex-direction: column;
	input {
		width: 100%;
		border: 0;
		border-bottom: 2px solid white;
		outline: 0;
		padding-bottom: 0.8rem;

		font-family: inherit;
		font-size: 1em;
		color: white;
		background: transparent;
		transition: border-color 0.2s;
	}
	.error {
		width: max-content;
		height: 0.8rem;
		align-self: flex-end;
		font-size: 0.8rem;
		color: #ff1461;
	}
}
</style>
