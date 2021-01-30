import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default (ctx, inject) => {
  Vue.use(VueAnalytics, {
    id: 'G-PGEJ6ZCNVX',
    checkDuplicatedScript: true,
    debug: {
      enabled: false,
      trace: false,
      sendHitTask: process.env.NODE_ENV === 'production',
    },
    router: ctx.app.router,
  })

  ctx.$ga = Vue.$ga
  inject('ga', Vue.$ga)
}
