const h = (tag, props, children) => {
  // vnode 就是 js 对象
  return {
    tag,
    props,
    children
  }
}

// 通过 mount 函数，将 vnode 挂载到 div#app 上  就是将虚拟 dom 挂载到真实 dom 上
const mount = (vnode, container) => {
  // vnode -> element
  // 1 创建出真实的元素，并且在 vnode 上保存了一份真实 DOM
  const el = vnode.el = document.createElement(vnode.tag)

  // 2 处理 props
  if (vnode.props) {
    for(const key in vnode.props) {
      const value = vnode.props[key]

      // 对事件监听判断
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3 处理 children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach((item) => {
        mount(item, el) // 放在父元素上
      })
    }
  }

  // 4 将 el 挂载到 container 上
  container.appendChild(el)
}