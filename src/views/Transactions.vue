<template>
	<div class="transactions">
		<h1>Transactions</h1>
		<Transactions />
	</div>
</template>

<script>
	import Transactions from '@/components/transactions/Transactions.component.vue';

	export default {
		name: 'transactions',
		components: {
			Transactions
		}
	}
</script>

