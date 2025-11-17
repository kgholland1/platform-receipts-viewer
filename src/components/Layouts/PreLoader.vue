<template>
  <div class="preloader-container">
    <!-- Animated background -->
    <div class="bg-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
    </div>

    <div class="content">
      <!-- Letter animation -->
      <div class="letters">
        <span v-for="(letter, index) in letters" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
          {{ letter }}
        </span>
      </div>

      <!-- Progress bar -->
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: `${progress}%` }">
          <div class="shimmer"></div>
        </div>
      </div>

      <!-- Progress percentage -->
      <div class="percentage">{{ progress }}%</div>

      <!-- Spinning loader -->
      <!-- <div class="spinner-container">
        <div class="spinner-bg"></div>
        <div class="spinner"></div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const letters = ['E', '-', 'G', 'C', 'R'];
const progress = ref(0);
let interval: number;

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(interval);
    } else {
      progress.value++;
    }
  }, 20);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.preloader-container {
  position: fixed;
  inset: 0;
  background: linear-gradient(to bottom right, #020617, #172554, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.bg-orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: pulse 3s ease-in-out infinite;
}

.orb-1 {
  top: 25%;
  left: 25%;
  width: 384px;
  height: 384px;
  background: rgba(59, 130, 246, 0.1);
}

.orb-2 {
  bottom: 25%;
  right: 25%;
  width: 384px;
  height: 384px;
  background: rgba(168, 85, 247, 0.1);
  animation-delay: 700ms;
}

.content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.letters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.letters span {
  font-size: 3.75rem;
  font-weight: bold;
  background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  animation: float 2s ease-in-out infinite;
}

.progress-container {
  width: 16rem;
  height: 0.375rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 9999px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  margin: 0 auto;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #3b82f6, #a855f7, #ec4899);
  border-radius: 9999px;
  transition: width 0.3s ease-out;
  position: relative;
}

.shimmer {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.3);
  animation: shimmer 2s infinite;
}

.percentage {
  margin-top: 1rem;
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
}

.spinner-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
  width: 4rem;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
}

.spinner-bg {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid #1e293b;
}

.spinner {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #3b82f6;
  border-right-color: #a855f7;
  animation: spin 1s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

