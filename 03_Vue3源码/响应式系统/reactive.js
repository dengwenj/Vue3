class Dep {
  constructor() {
    this.substribers = new Set()
  }

  addEffect(effect) {
    this.substribers.add(effect)
  }

  notify() {
    this.substribers.forEach((effect) => {
      console.log(effect)
      effect()
    })
  }
}

const d = new Dep()

let n = 100

function foo1() {
  console.log(n * n);
}

function foo2() {
  console.log(n * 100);
}

d.addEffect(foo1)
d.addEffect(foo2)

n++
d.notify()