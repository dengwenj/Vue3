import { mapGetters } from "vuex"

import useMap from "./useMap"

export default function(mappedGetters) {
  return useMap(mappedGetters, mapGetters)
}