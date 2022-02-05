class Dep {
  constructor() {
    this.substribers = new Set()
  }

  depend() {
    if (activeEffect) {
      this.substribers.add(activeEffect)
    }
  }

  notify() {
    this.substribers.forEach((effect) => {
      effect()
    })
  }
}

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// Map({key: value}): key 是一个字符串
// weakMap({key(对象): value}): key 是一个对象，弱引用
const targetMap = new WeakMap()
function getDep(target, key) {
  // 1 根据对象（target）取出对应的 Map 对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2 取出具体的 dep 对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}

function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key)
    let value = raw[key]

    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        value = newValue
        dep.notify()
      }
    })
  })

  return raw
}

const info = reactive({
  counter: 100,
  name: 'dwj'
})
console.log(info);

watchEffect(function () {
  console.log(info.counter * 2);
})

watchEffect(function () {
  console.log(info.counter * info.counter)
})

info.counter++