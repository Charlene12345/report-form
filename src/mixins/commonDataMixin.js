function format (v) {
  // return v.toLocaleString() // toLocaleString与本地语言相关，不推荐用
  const reg = /\d{1,3}(?=(\d{3})+$)/g // {1, 3}指匹配1-3个数字，优先匹配3个数字
  return `${v}`.replace(reg, '$&,')
}

function wrapperMoney (o, k) {
  return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0.00'
}

function wrapperOriginNumber (o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}

function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

// 品类分布获取数据用的
function wrapperObject (o, k) {
  // k当中存在点  category.data1中存在点
  // 'category.data1'.split(".")
  // keys = ["category", "data1"]
  // this.reportData[category][data1]
  if (o && k.includes('.')) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

export default {
  computed: {
    // 获取数据 reportData
    reportData () {
      return this.getReportData()
    },
    // 累计销售额
    salesToday () {
      // return this.reportData && this.reportData.salesToday
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay () {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    // 累计订单量
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },

    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },

    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },

    // 今日交易用户数
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },

    returnRate () {
      return wrapperPercentage(this.reportData, 'returnRate')
    },

    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },

    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },

    // 累计用户数
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },

    userTodayNumber () {
      return wrapperOriginNumber(this.reportData, 'userToday')
    },

    userLastMonth () {
      return wrapperOriginNumber(this.reportData, 'userLastMonth')
    },

    userGrowthLastDay () {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },

    userGrowthLastMonth () {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },

    // 获取数据 wordCloud 搜索量
    wordCloud () {
      return this.getWordCloud()
    },

    // 品类分布
    category1 () {
      return wrapperObject(this.reportData, 'category.data1')
    },

    category2 () {
      return wrapperObject(this.reportData, 'category.data2')
    }
  },
  filters: {
    format (v) {
      return format(v)
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
