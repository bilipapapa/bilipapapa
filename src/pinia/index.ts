import { obj } from '@/types/common'

let modules: obj = {}
const files = import.meta.glob('./modules/*.ts')
Object.keys(files).forEach((item: string) => {
  const name = item.match(/\/([^\/]+)\.ts$/)?.[1]
  if(typeof name === 'string') {
		modules[name] = files[item]
	}
})
export default { ...modules }
