let modules = import.meta.glob('./modules/*/index.vue', {
  eager: true, // 立即导出(非异步方式)
  import: 'default', // 默认值，不加时写法: files[path].default
})
console.log(modules)
export default {}
