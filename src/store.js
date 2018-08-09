import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// Models
import bigTableModule from "@/modules/bigTable/bigTable.module";
import desktopModule from "@/modules/desktop/desktop.module";
import transactionsModule from "@/modules/transactions/transactions.module";


Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createLogger()],
	state: {
	},
	modules: {
		bigTable: {
			namespaced: true,
			...bigTableModule
		},
		desktop: {
			namespaced: true,
			...desktopModule
		},
		transactions: {
			namespaced: true,
			...transactionsModule
		}
	}
})
