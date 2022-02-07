import { mapState } from "vuex" 

import useMap from "./useMap"

// export default function (mappedState) {
//   const store = useStore()

//   const objKeyFns = mapState(mappedState) // { name: function, age: function } 这里面的函数还是有用到 this 的拿的是 store 这个大对象
//   const storeState = {} // { name: ref, age: ref }
//   Object.keys(objKeyFns).forEach(fnKey => {
//     const fn = objKeyFns[fnKey].bind({ $store: store })
//     storeState[fnKey] = computed(fn) // 返回的是 ref
//   })
//   return storeState
// }

export default function (mappedState) {
  return useMap(mappedState, mapState)
}