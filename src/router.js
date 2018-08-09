import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import(/* webpackChunkName: "HomePage" */ '@/views/Home.vue')
		},
		{
			path: '/desktop',
			name: 'desktop',
			component: () => import(/* webpackChunkName: "DesktopPage" */ '@/views/Desktop.vue')
		},
		{
			path: '/transactions',
			name: 'transactions',
			component: () => import(/* webpackChunkName: "TransactionsPage" */ '@/views/Transactions.vue')
		},
		{
			path: '/big-table',
			name: 'bigTable',
			component: () => import(/* webpackChunkName: "BigTablePage" */ '@/views/BigTable.vue')
		}
	]
})
