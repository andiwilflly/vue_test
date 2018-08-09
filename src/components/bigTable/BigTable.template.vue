<template type="text/x-template" id="big-table-template">

	<div class="big-table">

		<BigTableHeader />

		<div class="big-table-container" v-on:scroll="onTableScroll" v-bind:style="{ width: bigTable.visible.width + 'px', height: bigTable.visible.height + 'px' }">
			<div class="big-table-inner" v-bind:style="{ width: tableWidth + 'px', height: tableHeight + 'px' }">
				<ul v-bind:key="rowIndex" v-for="(row, rowIndex) in bigTable.visible.table">
					<li v-bind:key="item.id"
						v-for="item in row"
						v-bind:style="{ top: cellTop(item.id) + 'px', left: cellLeft(item.id) + 'px' }">
						<p>row: {{ rowIndex }}</p>
						<p>index: {{ item.index }}</p>
						<p>id: {{ item.id }}</p>
						<p>value: {{ item.value }}</p>
						<input type="text" :id="item.id" @input="onTableItemChange" :value="item.value">
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
