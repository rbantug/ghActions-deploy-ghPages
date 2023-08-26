<template>
    <div>
        <h1>Hey</h1>
        <div>
            <div data-testid="count">Count: {{ count }}</div>
            <button data-testid="btnIncrement" @click="increment">Click me!</button>
        </div>
        <div>
            <div v-if="state" data-testid="conditional">Conditional element</div>
            <button data-testid="conditionalBtn" @click="updateState">Show element</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function increment() {
    count.value += 1
}

const state = ref(false)
function updateState() {
    state.value = false
}
</script>