<template>
  <transition name="gl-fade" appear>
    <div
      v-if="modelValue"
      class="global-loader__overlay"
      role="status"
      aria-live="polite"
      aria-hidden="false"
      @click.self="onBackdropClick"
    >
      <div class="global-loader__panel" :aria-busy="modelValue">
        <div class="global-loader__spinner" aria-hidden="true"></div>
        <div class="global-loader__message" v-if="$slots.default || message">
          <slot>{{ message }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// Props & emits for v-model support
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  /** v-model binding — true to show the loader */
  modelValue: boolean;
  /** Optional text message shown under the spinner (slot preferred) */
  message?: string;
  /** If true, allow clicking backdrop to close (emits update:modelValue) */
  backdropClosable?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

function onBackdropClick() {
  if (props.backdropClosable) {
    emit('update:modelValue', false);
  }
}
</script>

<style scoped>
/* Overlay covers entire viewport */
.global-loader__overlay {
  position: fixed;
  inset: 0;                 /* top:0; right:0; bottom:0; left:0; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  padding: 1rem;
  box-sizing: border-box;
}

/* Centered panel (keeps spinner + message together) */
.global-loader__panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  min-width: 160px;
  max-width: 90%;
  box-shadow: 0 8px 28px rgba(0,0,0,0.45);
  color: #fff;
  text-align: center;
}

/* Pure-CSS spinner (ring) */
.global-loader__spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  /* ring */
  border: 5px solid rgba(255, 255, 255, 0.12);
  border-top-color: #ffffff;
  animation: gl-spin 0.9s linear infinite;
  /* subtle inner glow */
  filter: drop-shadow(0 2px 6px rgba(255,255,255,0.06));
}

/* Message text */
.global-loader__message {
  font-size: 0.95rem;
  line-height: 1.2;
  color: #f1f1f1;
  opacity: 0.95;
  max-width: 320px;
  word-break: break-word;
}

/* spinner animation */
@keyframes gl-spin {
  to { transform: rotate(360deg); }
}

/* Fade transition for overlay */
.gl-fade-enter-active,
.gl-fade-leave-active {
  transition: opacity 300ms ease, transform 300ms ease;
}
.gl-fade-enter-from,
.gl-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
.gl-fade-enter-to,
.gl-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Responsive: slightly smaller spinner on small screens */
@media (max-width: 420px) {
  .global-loader__spinner { width: 44px; height: 44px; border-width: 4px; }
  .global-loader__panel { padding: 0.9rem 1rem; border-radius: 10px; }
}
</style>
