<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is modal</h1>
      <p>Lorem ipsum do lore</p>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>
<script setup></script>
<style>
.modal {
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #00bd7e;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
