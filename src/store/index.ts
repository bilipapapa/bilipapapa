import { obj } from './type'
let file: any = import.meta.glob('./modules/*.ts', {
  eager: true, // 立即导出
  import: 'default', // 默认值，不加时写法egg: file[path].default.$id，file[path].default
})
const modules: obj = {}
for (let path in file) {
  modules[file[path]().$id] = file[path]()
}
export default modules
