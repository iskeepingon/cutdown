const cutdown = ({ count = 60, gap = 1000, onStart, onGoing, onFinish }) => {
  //倒计时
  if (typeof onStart === 'function') {
    onStart(count)
  }
  let timer = setInterval(() => {
    count--
    if (typeof onGoing === 'function') {
      onGoing(count, timer)
    }
    if (count == 0) {
      clearInterval(timer)
      if (typeof onFinish === 'function') {
        onFinish()
      }
    }
  }, gap)
}

export default cutdown