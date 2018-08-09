<template>
	<div>
		<h1>Interactive desktop</h1>
		<Desktop />
	</div>
</template>

<script>
	import Desktop from '@/components/desktop/Desktop.component.vue';

	export default {
		name: 'desktop',
		components: {
			Desktop
		}
	}
</script>