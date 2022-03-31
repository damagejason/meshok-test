<template>
  <div class="home">
    <button v-if="!actionsSheetModalVisible" @click="openActionsSheetModal">Открыть модальное окно</button>
    <button v-else @click="closeActionsSheetModal">Закрыть модальное окно</button>
    <router-view/>
  </div>
  <transition name="fade">
    <SheetModal
      :active="actionsSheetModalVisible"
      v-if="actionsSheetModalVisible"
      @close-sheet="closeActionsSheetModal"
  >
    <Menu>
      <MenuItem style="color: #f16767" @click="closeActionsSheetModal">Закрыть</MenuItem>
      <MenuItem>
        <a href="https://meshok.net/item/265668040_%D0%A2%D0%B0%D1%80%D0%B5%D0%BB%D0%BA%D0%B0_%D0%94%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D0%9C%D0%B8%D1%84%D1%8B_%D0%93%D1%80%D0%B5%D1%86%D0%B8%D1%8F_24_K_GOLD_%D0%A4%D0%B0%D1%8F%D0%BD%D1%81_%D0%A2%D0%B0%D1%80%D0%B5%D0%BB%D0%BA%D0%B8_%D0%9F%D0%B0%D1%80%D0%BD%D1%8B%D0%B5_%D0%9D%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5_%D0%A0%D1%83%D1%87%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D0%92%D0%B8%D0%BD%D1%82%D0%B0%D0%B6"
           target="_blank">Смотреть лот на Meshok.net</a>
      </MenuItem>
      <MenuItem>
        <a href="https://api.whatsapp.com/send?phone=79027909262"
           target="_blank">Пригласить на работу</a>
      </MenuItem>
      <MenuItem>Просто кнопка</MenuItem>
    </Menu>
  </SheetModal>
  </transition>
</template>

<script>
import SheetModal from '@/components/base/SheetModal/SheetModal.vue'
import Menu from '@/components/base/Menu/Menu.vue'
import MenuItem from '@/components/base/Menu/MenuItem.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    SheetModal,
    Menu,
    MenuItem
  },
  data () {
    return {
      actionsSheetModalVisible: false
    }
  },
  watch: {
    '$route.query': {
      handler(newQueryValue, oldQueryValue) {
        if (
            Object.prototype.hasOwnProperty.call(newQueryValue, 'actions_sheet')
            && +newQueryValue.actions_sheet === 1
        ) {
          this.openActionsSheetModal()
        }

        if (typeof oldQueryValue === 'undefined') {
          return
        }

        if (
            Object.prototype.hasOwnProperty.call(oldQueryValue, 'actions_sheet')
            && +oldQueryValue.actions_sheet === 1
        ) {
          this.closeActionsSheetModal()
        }
        // this.modalHistorySupport = newRouteValue.meta && newRouteValue.meta.modalHistorySupport;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    openActionsSheetModal () {
      this.$router.push({ query: {
          ...this.$route.query,
          actions_sheet: 1
        }})
      this.actionsSheetModalVisible = true
    },
    closeActionsSheetModal () {
      const editedRouteQuery = {
        ...this.$route.query
      }
      delete editedRouteQuery['actions_sheet']
      this.$router.push({ query: editedRouteQuery})
      this.actionsSheetModalVisible = false

    }
  }
}
</script>
<style>
</style>
