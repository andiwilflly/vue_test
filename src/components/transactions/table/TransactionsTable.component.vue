<template type="text/x-template" id="transactions-table-template">

	<table class="transactions-table">
		<thead>
		<tr>
			<th>From</th>
			<th>To</th>
			<th>Sum</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="transaction of transactions" :key="transaction.hash">
			<td>{{ transaction.from }}</td>
			<td>{{ transaction.to }}</td>
			<td>{{ transaction.sum }} BTC</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: 'TransactionsTable',
		props: {
			transactions: Array
		}
	}
</script>


<style>
	.transactions-table {
		margin: 20px 0;
	}

	table {
		background: whitesmoke;
		font-size: 14px;
		border-spacing: 0;
		margin: 20px 0;
		width: 100%;
	}

	th {
		height: 50px;
	}

	td, th {
		border: 1px solid darkgray;
		padding: 5px;
	}

</style>
