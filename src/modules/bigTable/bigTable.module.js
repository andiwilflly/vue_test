import Vue from 'vue';


export default {

	state: {
		size: 40000,
		x: 0,
		y: 0,
		visible: {
			width: window.innerWidth - 10,
			height: window.innerHeight / 1.5,
			table: {}
		},
		cell: {
			width: 200,
			height: 100
		},
		valuesTable: {}
	},
	mutations: {
		clear(state) {
			state.x = 0;
			state.y = 0;
			state.valuesTable = {};
		},
		update(state, { id, value }) {
			state.valuesTable = { ...state.valuesTable, [id]: value };
			this.dispatch("bigTable/redrawTable");
		},
		setAxes(state, { x, y }) {
			state.x = x;
			state.y = y;
		},
		redrawTable(state, { rows, cells }) {
			state.visible.table = {};
			for(let row of rows) {
				Vue.set(state.visible.table, row, {});

				for(let cell of cells) {
					const id = cell + (row-1) * state.size;
					Vue.set(state.visible.table[row], cell, {
						index: cell,
						id,
						value: state.valuesTable[id]
					});
				}
			}
		},
		onWindowResize(state) {
			state.visible.width = window.innerWidth - 10;
			state.visible.height = window.innerHeight / 1.5;
		}
	},
	actions: {
		clear(context) { context.commit("clear"); },
		update(context, {id, value}) { context.commit("update", {id, value}); },
		setAxes(context, { x, y }) { context.commit("setAxes", { x, y }); },
		redrawTable({ state, commit }) {
			const x = state.x;
			const y = state.y;
			const sensibility = 7;
			const visibleRows = Math.ceil(state.visible.height / state.cell.height);
			const visibleCells = Math.ceil(state.visible.width / state.cell.width);

			const startRow = Math.ceil(y / state.cell.height) - sensibility;
			const rows = [];
			for(let i = startRow; i <= (visibleRows + startRow + sensibility); i++) {
				if(i <= state.size && i > 0) rows.push(i);
			}

			const startPos = Math.ceil(x / state.cell.width) - sensibility;
			const cells = [];
			for(let i = startPos; i <= (visibleCells + startPos + sensibility); i++) {
				if(i <= state.size && i > 0) cells.push(i);
			}
			commit("redrawTable", { rows, cells });
		},
		onWindowResize({ commit }) { commit("onWindowResize"); }
	},
	getters: {
		bigTable(state) { return state },
		tableWidth(state) { return state.size * state.cell.width; },
		tableHeight(state) { return state.size * state.cell.height; }
	}
};