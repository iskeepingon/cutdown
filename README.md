## 用法

## Vue中使用

```
<a href="javascript:void(0)" @click="getCode">
  {{cutdownCount==0?(cutdowned?'重新获取':'获取验证码'):(cutdownCount+'s')}}
</a>

import cutdown from 'cutdown'

export default {
  data() {
    return {
      cutdownCount: 0,//倒计时的时间 60s 59s 58s 57s...
      cutdownTimer: 0,//倒计时定时器的timer
      cutdowned: false,//是否倒计时过
      isCutdowning: false//是否正在倒计时
    }
  },
  beforeDestroy() {
    clearInterval(this.cutdownTimer)
  },
  methods: {
    getCode() {
      if (this.isCutdowning) {
        return
      }
      cutdown({
        count: 5,
        gap: 1000,
        onStart: (count) => {
          this.cutdowned = true
          this.isCutdowning = true
          this.cutdownCount = count
        },
        onGoing: (count, timer) => {
          this.cutdownTimer = timer
          this.cutdownCount = count
        },
        onFinish: () => {
          this.isCutdowning = false
        }
      })
    }
  }
}
```

## React中使用

同理