import { mapState, createNamespacedHelpers } from "vuex" 

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

export default function (moduleName, mappedState) {
  let mapFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFn = createNamespacedHelpers(moduleName).mapState
  } else {
    moduleName = mappedState
  }
  return useMap(mappedState, mapFn)
}