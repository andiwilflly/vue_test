<style scoped src="@/components/bigTable/BigTable.styles.css" ></style>
<template src="@/components/bigTable/BigTable.template.vue"></template>

<script>
	import { createNamespacedHelpers } from 'vuex';
	import BigTableHeader from '@/components/bigTable/header/BigTableHeader.component';

	const { mapState, mapActions, mapGetters } = createNamespacedHelpers('bigTable');

	export default {
		name: 'BigTable',
		timeout: null,
		components: {
			BigTableHeader
		},
		created: function () {
			this.clearAction();
			this.redrawTableAction();
			window.addEventListener('resize', this.onWindowResize);
		},
		destroyed: function() {
			window.removeEventListener('resize', this.onWindowResize);
		},
		methods: {
			...mapActions({
				clearAction: "clear",
				updateAction: "update",
				setAxesAction: "setAxes",
				redrawTableAction: "redrawTable",
				onWindowResizeAction: "onWindowResize"
			}),
			onWindowResize() {
				this.onWindowResizeAction();
				this.redrawTableAction();
			},
			onTableScroll(e) {
				clearTimeout(this.timeout);
				this.timeout = setTimeout(()=> {
					this.setAxesAction({ x: e.target.scrollLeft, y: e.target.scrollTop });
					this.redrawTableAction();
				}, 50);
			},
			onTableItemChange(e) {
				this.updateAction({
					id: e.target.id,
					value: e.target.value
				});
			},
			cellTop(id) {
				const row = Math.ceil(id / this.size) - 1;
				return row * this.cell.height;
			},
			cellLeft(id) {
				const row = Math.ceil(id / this.size);
				const numberInRow = this.size - (row * this.size - id) -1;
				return numberInRow * this.cell.width;
			}
		},
		computed: {
			...mapState([
				'cell',
				'size'
			]),
			...mapGetters([
				'bigTable',
				'tableWidth',
				'tableHeight'
			])
		}
	}
</script>

