// import * as PIXI from 'pixi.js'
// import { dragonBones } from 'dragonbones-pixi'
// import { ResolverAssetsObject, ResolverBundle } from '@pixi/assets'

// export abstract class BaseDragonBonesPixi extends PIXI.Application {
//   // private static BACKGROUND_URL: string = 'resource/background.png'
//   protected readonly _renderer = new PIXI.Renderer({ width: 1136, height: 640 })
//   // protected readonly _background: PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.EMPTY)
//   protected readonly _resources: { alias: string; src: string; type: string }[] = []
//   protected _pixiResources: dragonBones.Map<(typeof PIXI.Resource)> | undefined
//   protected armatureContainer: PIXI.Container = new PIXI.Container()

//   public constructor () {
//     super({ width: 1136, height: 640, backgroundColor: 0x666666 })
//     // this._resources.push(BaseDragonBonesPixi.BACKGROUND_URL)
//     document.body.appendChild(this.view as HTMLCanvasElement)
//     // 初始化一下dbbin的loader parser；
//     // const factory = new dragonBones.PixiFactory()
//     setTimeout(() => {
//       this.armatureContainer.x = this.stageWidth * 0.5
//       this.armatureContainer.y = this.stageHeight * 0.5
//     }, 10)
//   }

//   protected abstract _onStart(): void;

//   public _loadResources (): void {
//     const bundles: ResolverBundle[] = [
//       {
//         name: 'all',
//         assets: this._resources.reduce((acc, resource) => {
//           acc[resource.alias] = { src: resource.src, type: resource.type }
//           return acc
//         }, {} as ResolverAssetsObject),
//       },
//     ]

//     // PIXI.Assets = Assets
//     // 初始化 Assets
//     PIXI.Assets.init({
//       manifest: {
//         bundles,
//       },
//     })
//     PIXI.Assets.loadBundle('all').then((resources:any) => {
//       console.log('skk load complete:', resources)
//       this._pixiResources = resources
//       //
//       // this._background.texture = this._pixiResources[BaseDragonBonesPixi.BACKGROUND_URL]
//       // this._background.x = -this._background.texture.width * 0.5
//       // this._background.y = -this._background.texture.height * 0.5
//       // this.stage.addChild(this._background)
//       this.stage.addChild(this.armatureContainer)
//       this._onStart()
//     })
//   }

//   public addChild (child: PIXI.DisplayObject): PIXI.DisplayObject {
//     return this.armatureContainer.addChild(child)
//   }

//   public removeChild (child: PIXI.DisplayObject): PIXI.DisplayObject {
//     return this.armatureContainer.removeChild(child)
//   }

//   public createText (string: string): PIXI.Text {
//     const text = new PIXI.Text(string, { align: 'center' })
//     text.text = string
//     text.scale.x = 0.7
//     text.scale.y = 0.7
//     text.x = -text.width * 0.5
//     text.y = this.stageHeight * 0.5 - 100.0
//     this.armatureContainer.addChild(text)

//     return text
//   }

//   public get stageWidth (): number {
//     return this._renderer.width
//   }

//   public get stageHeight (): number {
//     return this._renderer.height
//   }

//   public addListener (event: string, handler: (...args: any[]) => void, thisObj: any): void {
//     this.stage.on(event, handler, thisObj)
//   }

//   public get interactive (): boolean {
//     return this.stage.interactive
//   }

//   public set interactive (value: boolean) {
//     this.stage.interactive = value
//   }

//   public get x () {
//     return this.armatureContainer.x
//   }

//   public get y () {
//     return this.armatureContainer.y
//   }
// }
