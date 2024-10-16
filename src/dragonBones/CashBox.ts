// import * as PIXI from 'pixi.js'
// import { dragonBones } from 'dragonbones-pixi'
// import { BaseDragonBonesPixi } from './BaseDragonBonesPixi'

// /**
//  * How to use
//  * 1. Load data.
//  *
//  * 2. Parse data.
//  *    factory.parseDragonBonesData();
//  *    factory.parseTextureAtlasData();
//  *
//  * 3. Build armature.
//  *    armatureDisplay = factory.buildArmatureDisplay("armatureName");
//  *
//  * 4. Play animation.
//  *    armatureDisplay.animation.play("animationName");
//  *
//  * 5. Add armature to stage.
//  *    addChild(armatureDisplay);
//  */
// export class CashBox extends BaseDragonBonesPixi {
//   public constructor () {
//     super()
//     // 添加资源路径，使用独立的 alias
//     this._resources.push(
//       { alias: 'cashbox_ske', src: '/cashbox_ske.json', type: 'json' },
//       { alias: 'cashbox_tex_json', src: '/cashbox_tex.json', type: 'json' },
//       { alias: 'cashbox_tex_png', src: '/cashbox_tex.png', type: 'image' }
//     )
//   }

//   protected _onStart (): void {
//     const factory = dragonBones.PixiFactory.factory
//     console.log('skk', this._pixiResources)
//     // factory.parseDragonBonesData(this._pixiResources["resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json"]);
//     factory.parseDragonBonesData(this._pixiResources!['/cashbox_ske.json'])
//     factory.parseTextureAtlasData(this._pixiResources!['/cashbox_tex.json'], this._pixiResources!['/cashbox_tex.png'])

//     const armatureDisplay = factory.buildArmatureDisplay('cashbox_ske_1', 'box_2-1')
//     if (armatureDisplay != null) {
//       armatureDisplay.animation.play('idle')
//       // armatureDisplay.x = 0.0
//       // armatureDisplay.y = 200.0
//       this.addChild(armatureDisplay as unknown as PIXI.DisplayObject)
//     }
//   }
// }
