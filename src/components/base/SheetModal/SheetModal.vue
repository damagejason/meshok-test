<template>
  <div class="sheet-modal-overlay">
    <div :class="{
      'sheet-modal': true
    }"
         v-click-outside="clickOutsideConfig"
    >
      <div class="sheet-modal__wrapper">
        <slot></slot>
      </div>
    </div>
    <button class="sheet-modal__button">Эта кнопка не должна закрыть Modal Sheet</button>
  </div>
</template>

<script>
export default {
  name: "SheetModal",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clickOutsideConfig: {
        handler: this.onClickOutside,
        middleware: this.onClickOutsideMiddleware,
        events: ['click'],
        // Note: The default value is true, but in case you want to activate / deactivate
        //       this directive dynamically use this attribute.
        // isActive: true,
        // Note: The default value is true. See "Detecting Iframe Clicks" section
        //       to understand why this behaviour is behind a flag.
        // detectIFrame: true,
        // Note: The default value is false. Sets the capture option for EventTarget addEventListener method.
        //       Could be useful if some event's handler calls stopPropagation method preventing event bubbling.
        // capture: false
      }
    }
  },
  methods: {
    onClickOutside () {
      this.$emit('close-sheet')
    },
    onClickOutsideMiddleware (event) {
      return event.target.tagName !== 'BUTTON'
    }
  }
}
</script>

<style scoped>
  .sheet-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
  }

  .sheet-modal {
    width: 350px;
    position: fixed;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    border-radius: 10px 10px 0px 0px;
    background-color: #fff;
    box-shadow: 0px 4px 16px rgba(20, 21, 23, 0.4);
  }

  .sheet-modal__wrapper {
    padding: 16px;
  }

  .sheet-modal__button {
    position: fixed;
    bottom: 250px;
    transform: translateX(-50%);
    left: calc(50%);
  }

  .fade-enter-active {
    animation: fade 0.3s;
  }
  .fade-leave-active {
    animation: fade 0.3s reverse;
  }

  .fade-enter-active .sheet-modal {
    animation: fade 0.3s;
  }
  .fade-leave-active .sheet-modal {
    animation: fade 0.3s reverse;
  }
  @keyframes fade {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 0;
    }
  }
</style>
