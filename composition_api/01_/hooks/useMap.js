import { computed } from 'vue'
import { useStore } from 'vuex'

export default function (mappedGetters, map) {
  const store = useStore()

  const objKeyFn = map(mappedGetters)

  const storeState = {}
  Object.keys(objKeyFn).forEach(fnKey => {
    const fn = objKeyFn[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })

  return storeState
}