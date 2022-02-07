import { computed } from "vue"
import { mapState, useStore } from "vuex" 

export default function (mappedState) {
  const store = useStore()

  const objKeyFns = mapState(mappedState)
  const storeState = {}
  Object.keys(objKeyFns).forEach(fnKey => {
    storeState[fnKey] = computed(objKeyFns[fnKey].bind({ $store: store }))
  })
  return storeState
}