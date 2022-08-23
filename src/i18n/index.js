import Vue from 'vue'

import VueI18n from 'vue-i18n'
import en from './message/en'
import zh from './message/zh'
import Cookie from 'js-cookie'

Vue.use(VueI18n)

export const messages = {
  zh,
  en
}

const i18n = new VueI18n({
  locale: Cookie.get('lang') || 'zh',
  messages
})

export default i18n
