<template>
  <div>
    <h1>Big table</h1>
    <p>Optimized table with 1.600.000.000 cells. <br /> In each cell you can set a custom value..</p>
    <BigTable />
  </div>
</template>

<script>
	import BigTable from '@/components/bigTable/BigTable.component.vue';

	export default {
		name: 'bigTable',
		components: {
			BigTable
		}
	}
</script>
