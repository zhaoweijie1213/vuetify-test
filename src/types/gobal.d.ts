// 导入 PIXI
import * as PIXI from 'pixi.js'
import { Assets } from '@pixi/assets'

// 将 PIXI 挂载到全局 window 对象上
// 使用类型断言来扩展 window 对象
declare global {
  interface Window {
    PIXI: typeof PIXI;
  }

  interface PIXI{
    Assets:typeof Assets
  }
}
