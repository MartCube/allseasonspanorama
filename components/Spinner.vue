<template>
	<div class="spinner">
		<div class="circle circle-1"></div>
		<div class="circle circle-2"></div>
	</div>
</template>

<style lang="scss" scoped>
.spinner,
.spinner * {
	box-sizing: border-box;
}

.spinner {
	z-index: -1;

	width: 60px;
	height: 60px;
	border-radius: 100%;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.spinner .circle {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	border: calc(60px / 10) solid transparent;
}

.spinner .circle.circle-1 {
	border-top-color: #7eb241;
	animation: spinner-animation 1s infinite;
}

.spinner .circle.circle-2 {
	border-bottom-color: #4a88c8;
	animation: spinner-animation 1s infinite alternate;
}

@keyframes spinner-animation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
