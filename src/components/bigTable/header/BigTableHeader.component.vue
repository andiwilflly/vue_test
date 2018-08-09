<template src="@/components/bigTable/header/BigTableHeader.template.vue"></template>

<script>
	export default {
		name: 'BigTableHeader',
		computed: {
			bigTable() {
				return this.$store.state.bigTable
			}
		}
	}
</script>

