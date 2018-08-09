// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue
    // https://cn.vuejs.org/v2/style-guide/index.html
    // 'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "vue/order-in-components": ["error", {
      "order": [
        "el", //组件挂载点
        "name", //组件名---->书写的必要性(3种功能)
        "parent", //指定父级组件
        "functional", //使用jsx虚拟node编程时需要,去除了data和this
        ["delimiters", "comments"], //改变模板的编译方式
        ["components", "directives", "filters"], //模板内使用的资源
        "extends", //合并属性
        "mixins", //合并属性
        "inheritAttrs", // 继承属性---解决父子组件间的传值问题
        "model", //v-model的定制peop和event
        ["props", "propsData"], //属性值,propsData只能用于new vue的场景
        "data", //组件内部响应式数据的集合
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"], //元素渲染方式
        "renderError" //render出错时的替代输出
      ]
    }],

    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
