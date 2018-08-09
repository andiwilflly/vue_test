<style scoped src="@/components/transactions/Transactions.styles.css" ></style>
<template src="@/components/transactions/Transactions.template.vue"></template>

<script>
	import { createNamespacedHelpers } from 'vuex';
	import TransactionsTable from '@/components/transactions/table/TransactionsTable.component';

	const { mapState, mapGetters, mapActions } = createNamespacedHelpers('transactions');

	export default {
		name: 'Transactions',
		created() {
			this.$store.dispatch("transactions/init");
		},
		destroyed() {
			this.$store.dispatch("transactions/destroy");
		},
		components: {
			TransactionsTable
		},
		methods: {
			...mapActions([
				'startTransactions',
				'stopTransactions',
				'resetTransactions'
			])
		},
		computed: {
			...mapGetters([
				'sum'
			]),
			...mapState([
				'socket',
				'transactions',
				'status'
			])
		}
	}
</script>

