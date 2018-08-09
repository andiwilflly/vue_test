<template type="text/x-template" id="desktop-template">

	<div class="desktop" id="desktop">

		<draggable :options="{ animation: 150, handle: '.desktop-item-title' }" @end="onDragEnd">
			<transition-group>
				<div v-for="item in items" :id="item.id" :key="item.id" class="desktop-item" v-bind:style="{ minHeight: minHeight + 'px', height: item.height + 'px' }">
					<p class="desktop-item-title">
						{{ item.title }} <button @click="onRemoveClick" :id="item.id">X</button>
					</p>
					<p>id: {{ item.id }} | height: {{ item.height }} | index: {{ item.index }}</p>
				</div>
			</transition-group>
		</draggable>

		<button v-if="removedItem" @click="onRestoreRemovedItem">Restore removed item</button>
		<br>
		<button @click="onRestoreDefault">Reset to default</button>
	</div>
</template>
