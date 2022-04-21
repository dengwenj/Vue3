import day from 'dayjs'

export default function(app) {
  let formatString = 'YYYY-MM-DD HH:mm:ss'

  app.directive('format-time', {
    created(el, bindings) {
      if (bindings.value) {
        formatString = bindings.value
      }
    },
    mounted(el, bindings) {
      let textContent = el.textContent
      
      if (textContent.length === 10) {
        textContent = textContent * 1000
      }

      el.textContent = day(textContent).format(formatString)
    },
  })
}