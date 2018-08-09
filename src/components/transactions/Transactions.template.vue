<template type="text/x-template" id="transactions-template">

	<div class="transactions">
		<h5>status: {{ status }}</h5>
		<h5>total sum: {{ sum.toFixed(5) }} BTC</h5>

		<div>
			<button :disabled="status === 'started'" @click="startTransactions">Start</button>
			<button :disabled="status === 'stopped'" @click="stopTransactions">Stop</button>
			<button :disabled="!transactions.length" @click="resetTransactions">Reset</button>
		</div>

		<TransactionsTable :transactions="transactions" />
	</div>
</template>
