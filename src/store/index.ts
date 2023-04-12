import { obj } from './type'
let files: any = import.meta.glob('./modules/*.ts', {
  eager: true, // 立即导出(非异步方式)
  import: 'default', // 默认值，不加时写法egg: files[path].default.$id，files[path].default
})
const modules: obj = {}
for (let path in files) {
  modules[files[path]().$id] = files[path]()
}
export default modules
