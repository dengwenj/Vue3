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
  d.depend()
  effect()
  activeEffect = null
}

const info = {
  counter: 100
}

const d = new Dep()

watchEffect(function () {
  console.log(info.counter * 2);
})

watchEffect(function () {
  console.log(info.counter * info.counter)
})

info.counter++
d.notify()