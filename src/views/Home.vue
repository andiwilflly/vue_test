<template>
	<div class="home">
		<h2>Структуры данных</h2>
		<p>Для работы с данными выбрал <span>Vuex</span>. Он схож с привычным мне <span>mobx/mobx-state-tree</span>.</p>
		<p>Для работы с данными создавал отдельные модули (namespaced: true) внутри <span>Vuex store</span>.</p>
		<p>Активно использовался <span>createNamespacedHelpers</span>.</p>
		<p>Обновлял данные только через <span>actions</span>. Была возможность это делать напрямую через <span>mutations</span>, но мне показалось, что выбранный мной вариант более декларативен и подходит для любых ситуаций. В том числе и для асинхронных действий. </p>
		<p>Логику шаблонов и стилей почти везде вынес в отдельные файлы. Это улучшает читабельность кода.</p>
		<p>Роутер подгружает страницы по мере надобности. Используются <span>webpack chunks</span>.</p>
		<p>При обновлении вложенных структур данных использовал <span>Vue.set</span>.</p>

		<h2>Interactive desktop</h2>
		<a target="blank" href="https://www.npmjs.com/package/element-resize-event">element-resize-event</a>
		<p>Аналог [vue-element-resize-event] работает некорректно и очень мало скачиваний.</p>
		<a target="blank" href="https://www.npmjs.com/package/vuedraggable">vuedraggable</a>
		<p>Мне этот модуль показался удобным и простым в использовании. Но так как у меня еще мало опыта с выбором модулей под Vue.js, мой выбор может быть неоптимальным.</p>

		<h2>Transactions</h2>
		<p>Для написания данного компонента дополнительных модулей не потребовалось.</p>

		<h2>Big table</h2>
		<p>Отдельное тестовое задание, которое мне когда-то высылали. Решил его сделать, когда учил Vue.js</p>
		<p>Нужно было создать большую таблицу размером 40000х40000 (1 600 000 000 ячеек). В каждой ячейке поле ввода, в которое можно записать значение. Заданное значение сохраняется в таблице.</p>
	</div>
</template>

<style>
	.home {
		text-align: left;
		padding: 10px;
	}
    .home p {
		margin: 0;
		line-height: 150%;
	}
    .home p span {
        color: darkred;
        font-weight: bold;
    }
    a {
        color: #1a75ff;
    }
    a:hover {
        text-decoration: none;
    }
</style>
