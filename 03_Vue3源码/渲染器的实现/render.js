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
        el.addEventListener(key.slice(2).toLowerCase(), value)
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

const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const parentEl = n1.el.parentElement
    parentEl.removeChild(n1.el)
    mount(n2, parentEl)
  } else {
    // 1 取出 element 对象， 并且在 n2 中进行保存
    const el = n2.el = n1.el

    // 2 处理 props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}

    // 获取所有的 newProps 添加到 el
    for(const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]

      if (oldValue !== newValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }

    // 删除旧的 props
    for(const key in oldProps) {
      const value = oldProps[key]
      if (key.startsWith('on')) {
        el.removeEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }
}