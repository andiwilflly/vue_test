<style scoped src="@/components/desktop/Desktop.styles.css" ></style>
<template src="@/components/desktop/Desktop.template.vue"></template>


<script>
	import { createNamespacedHelpers } from 'vuex';
	import draggable from 'vuedraggable';
	// @SOURCE: https://github.com/KyleAMathews/element-resize-event
	import elementResizeEvent from "element-resize-event";

	const { mapState } = createNamespacedHelpers('desktop');

	export default {
		name: 'Desktop',
		mounted() {
			this.items.forEach((item)=> {
				elementResizeEvent(this.$item(item.id), this.onResize.bind(this, item.id));
			});
		},
		watch: {
			items(items) {
				window.localStorage.setItem("desktopItems", JSON.stringify(items));
			}
		},
		components: {
			draggable
		},
		methods: {
			$item(id) { return this.$el.querySelectorAll(`#${id}`)[0]; },
			arrayMove(arr, oldIndex, nexIndex) {
				// Fix FF issue with [vuedraggable]
				if (nexIndex >= arr.length) {
					let k = nexIndex - arr.length + 1;
					while (k--) { arr.push(undefined); }
				}
				arr.splice(nexIndex, 0, arr.splice(oldIndex, 1)[0]);
				return arr;
			},
			onDragEnd(e) {
				if(e.oldIndex === e.newIndex) return;
				let list = [...this.items.map(item=> ({ ...item }))];
				this.$store.dispatch("desktop/updateItems", this.arrayMove(list, e.oldIndex, e.newIndex));
			},
			onResize(id) {
				const item = this.items.find((item)=> item.id === id);
				// Fix FF issue with [vuedraggable]
				const height = this.$item(id).offsetHeight || item.height;
				this.$store.dispatch("desktop/updateItem", { id, height: height || item.height });
			},
			onRemoveClick(e) {
				this.$store.dispatch("desktop/removeItem", { id: e.target.id });
			},
			onRestoreRemovedItem() {
				this.$store.dispatch("desktop/restoreItem");
			},
			onRestoreDefault() {
				this.$store.dispatch("desktop/restoreDefault");
			}
		},
		computed: {
			...mapState([
				'items',
				'minHeight',
				'removedItem'
			])
		}
	}
</script>

