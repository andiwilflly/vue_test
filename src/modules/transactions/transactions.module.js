
const socket = new WebSocket('wss://ws.blockchain.info/inv');



export default {

	state: {
		status: "stopped",
		transactions: [],
		socket: null
	},

	mutations: {
		init(state) {
			state.socket = new WebSocket('wss://ws.blockchain.info/inv');
			state.socket.onmessage = (msg)=> {
				msg = JSON.parse(msg.data);
				const sumInputs = msg.x.inputs.reduce((aggregator, input)=> {
					return aggregator + input.prev_out.value;
				}, 0);
				const sumOut = msg.x.out.reduce((aggregator, out)=> {
					return aggregator + out.value;
				}, 0);

				this.dispatch("transactions/addTransaction", {
					time: msg.x.time,
					hash: msg.x.hash,
					from: msg.x.inputs.map((input)=> input.prev_out.addr).join(" "),
					to: msg.x.out.map((out)=> out.addr).join(" "),
					sum: (sumInputs + sumOut) / 100000000
				});
			}
		},
		destroy(state) {
			this.dispatch("transactions/stopTransactions");
			this.dispatch("transactions/resetTransactions");
			state.socket = null;
		},
		addTransaction(state, transaction) {
			state.transactions.push(transaction);
		},
		resetTransactions(state) {
			state.transactions = [];
		},
		startTransactions(state) {
			state.status = "started";
			state.socket.send(JSON.stringify({ op: "unconfirmed_sub" }));
		},
		stopTransactions(state) {
			state.status = "stopped";
			state.socket.send(JSON.stringify({ op: "unconfirmed_unsub" }));
		}
	},
	actions: {
		init(context) {
			context.commit('init');
		},
		destroy(context) {
			context.commit('destroy');
		},
		addTransaction(context, transaction) {
			context.commit('addTransaction', transaction);
		},
		startTransactions(context) {
			context.commit('startTransactions');
		},
		stopTransactions(context) {
			context.commit('stopTransactions');
		},
		resetTransactions(context) {
			context.commit('resetTransactions');
		}
	},
	getters: {
		sum(state) {
			return  state.transactions.reduce((aggregator, transaction)=> aggregator + transaction.sum, 0);
		}
	}
};