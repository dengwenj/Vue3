import { mapGetters, createNamespacedHelpers } from "vuex"

import useMap from "./useMap"

export default function(moduleName, mappedGetters) {
  let mapFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFn = createNamespacedHelpers(moduleName).mapGetters
  }
  return useMap(mappedGetters, mapFn)
}