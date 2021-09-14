// extends 設定啟用檢查的規則，可使用共享配置的套件
// plugins 增加 stylelint 規則的套件
// rules 已啟用的規則需要調整的話可以在這邊增加設定，這裡的設定會覆蓋原設定
// ignoreFiles 排除要檢查的檔案，目前排除的是 npm 安裝的套件與 webpack 打包後產出的資料夾


module.exports = {
  extends: [
    // 'stylelint-config-standard',
    // 'stylelint-config-prettier',
    // 'stylelint-config-sass-guidelines'
    
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // "order/properties-alphabetical-order": null, // 不照字母順序排序
    // "order/properties-order": [ // 設定自己的排序
    //   "position",
    //   "top",
    //   "right",
    //   "bottom",
    //   "left",
    //   "z-index",
    //   "display",
    //   "justify-content",
    //   "align-items",
    //   "float",
    //   "clear",
    //   "overflow",
    //   "overflow-x",
    //   "overflow-y",
    //   "padding",
    //   "padding-top",
    //   "padding-right",
    //   "padding-bottom",
    //   "padding-left",
    //   "margin",
    //   "margin-top",
    //   "margin-right",
    //   "margin-bottom",
    //   "margin-left",
    //   "width",
    //   "min-width",
    //   "max-width",
    //   "height",
    //   "min-height",
    //   "max-height",
    //   "font-size",
    //   "font-family",
    //   "text-align",
    //   "text-justify",
    //   "text-indent",
    //   "text-overflow",
    //   "text-decoration",
    //   "white-space",
    //   "color",
    //   "background",
    //   "background-position",
    //   "background-repeat",
    //   "background-size",
    //   "background-color",
    //   "background-clip",
    //   "border",
    //   "border-style",
    //   "border-width",
    //   "border-color",
    //   "border-top-style",
    //   "border-top-width",
    //   "border-top-color",
    //   "border-right-style",
    //   "border-right-width",
    //   "border-right-color",
    //   "border-bottom-style",
    //   "border-bottom-width",
    //   "border-bottom-color",
    //   "border-left-style",
    //   "border-left-width",
    //   "border-left-color",
    //   "border-radius",
    //   "opacity",
    //   "filter",
    //   "list-style",
    //   "outline",
    //   "visibility",
    //   "box-shadow",
    //   "text-shadow",
    //   "resize",
    //   "transition"
    // ]

  }
}
