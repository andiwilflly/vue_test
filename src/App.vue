<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/desktop">Interactive desktop</router-link>
			|
			<router-link to="/transactions">Transactions</router-link>
			|
			<router-link to="/big-table">Big table</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
