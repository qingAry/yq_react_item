const { override, fixBabelImports, addLessLoader,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const { resolve } = require("path");
module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: true,
     }),
     addLessLoader({
      // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#21A279' },
    }),
    addWebpackAlias({
      "@": resolve(__dirname, "src")
    }),
    addDecoratorsLegacy()
   )