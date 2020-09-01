## 用法

### 语法

```
cutdown(option)
```

### 参数

| 参数 | 描述 |
| :-----| :---- |
| option.count | 倒计时的总次数 |
| option.gap | 倒计时的时间间隔，单位是ms |
| option.onStart | 倒计时开始的回调，该回调有参数count |
| option.onGoing | 倒计时进行中的回调，该回调有参数count，timer |
| option.onFinish | 倒计时结束时的回调 |

### 返回

没有返回

### Vue中使用

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

### React中使用

同理