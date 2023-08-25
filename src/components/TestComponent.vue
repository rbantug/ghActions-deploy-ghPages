<template>
    <div>
        <h1>Hey</h1>
        <div data-testid="count">Count: {{ count }}</div>
        <button data-testid="btnIncrement" @click="increment">Click me!</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function increment() {
    count.value += 1
}
</script>