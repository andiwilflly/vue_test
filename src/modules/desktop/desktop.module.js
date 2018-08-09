import Vue from 'vue';

const defaultItems = [
	{ id: '_id1', index: 0, height: 100, title: "Title 1" },
	{ id: '_id2', index: 1, height: 100, title: "Title 2" },
	{ id: '_id3', index: 2, height: 100, title: "Title 3" },
	{ id: '_id4', index: 3, height: 100, title: "Title 4" },
	{ id: '_id5', index: 4, height: 100, title: "Title 5" }
];

const clonedDefaultItems = function() {
	return defaultItems.map(item=> ({ ...item }));
};


export default {

	state: {
		minHeight: 50,
		defaultHeight: 100,
		items: JSON.parse(window.localStorage.getItem("desktopItems")) || clonedDefaultItems(),
		removedItem: JSON.parse(window.localStorage.getItem("removedDesktopItem")) || null
	},
	mutations: {
		removeItem(state, { id }) {
			const item = state.items.find((item)=> item.id === id);
			window.localStorage.setItem("removedDesktopItem", JSON.stringify(item));
			state.removedItem = item;
			state.items.splice(state.items.indexOf(item), 1);
			this.commit("desktop/restoreIndexes");
		},
		updateItem(state, { id , ...rest }) {
			const item = state.items.find((item)=> item.id === id);
			Vue.set(state.items, state.items.indexOf(item), { ...item, ...rest });
		},
		updateItems(state, items) {
			state.items = items;
			this.commit("desktop/restoreIndexes");
		},
		restoreItem(state) {
			window.localStorage.removeItem("removedDesktopItem");
			state.items.push({ ...state.removedItem, height: state.defaultHeight });
			state.removedItem = null;
			this.commit("desktop/restoreIndexes");
		},
		restoreIndexes(state) {
			state.items.forEach((item, index)=> item.index = index);
		},
		restoreDefault(state) {
			window.localStorage.removeItem("desktopItems");
			window.localStorage.removeItem("removedDesktopItem");

			state.removedItem = null;
			state.items = clonedDefaultItems();
		}
	},
	actions: {
		removeItem(context, { id }) {
			context.commit("removeItem", { id });
		},
		updateItem(context, item) {
			context.commit("updateItem", item);
		},
		updateItems(context, items) {
			context.commit("updateItems", items);
		},
		restoreItem(context) {
			context.commit("restoreItem");
		},
		restoreDefault(context) {
			context.commit("restoreDefault");
		}
	}
};