<template>
  <v-container class="fill-height" fluid>
    <div ref="pixiBox" class="pixiBox d-flex justify-center align-center" />
  </v-container>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import * as PIXI from 'pixi.js'
  import { PixiFactory } from '@md5crypt/dragonbones-pixi'
  import { Assets } from '@pixi/assets'

  const pixiBox = ref<HTMLElement | null>(null)

  // 定义要加载的资源列表
  const assetsToLoad = [
    { src: '/cashbox_ske.json', alias: ['dragonBonesData'] },
    { src: '/cashbox_tex.json', alias: ['textureAtlasData'] },
    { src: '/cashbox_tex.png', alias: ['textureImage'] },
  ]

  onMounted(async () => {
    const app = new PIXI.Application({
      width: 800,
      height: 800,
      backgroundAlpha: 0,
    })
    pixiBox.value!.appendChild(app.view)

    let assets: any | Record<string, any>
    // 加载资源
    if (!assets) {
      assets = await Assets.load(assetsToLoad)
    }

    // 获取加载的资源
    const dragonBonesData = Assets.get('dragonBonesData')
    const textureAtlasData = Assets.get('textureAtlasData')
    const textureImage = Assets.get('textureImage')

    const factory = new PixiFactory()

    // const dragonBonesName = 'cashbox' // 您可以根据需要指定名称
    factory.parseDragonBonesData(dragonBonesData)
    // factory.parseDragonBonesData(dragonBonesData)
    factory.parseTextureAtlasData(
      textureAtlasData,
      textureImage
    )

    const armatureDisplay = factory.buildArmatureDisplay('Armature')

    if (!armatureDisplay) {
      console.error('Failed to build armature display for ArmatureName')
      return
    }

    // const animationNames = armatureDisplay.animation.animationNames
    // console.log(`Available animation names for ${animationNames[0]}:`, animationNames)

    armatureDisplay.visible = true
    armatureDisplay.alpha = 1
    // 缩小动画，倍率为 0.5
    armatureDisplay.scale.set(0.5)
    armatureDisplay.x = app.renderer.width / 2
    armatureDisplay.y = app.renderer.height / 2
    armatureDisplay.animation.play('box_1_2_en')
    app.stage.addChild(armatureDisplay)

    // 添加 ticker 更新
    app.ticker.add(() => {
      armatureDisplay.armature.advanceTime(app.ticker.deltaMS / 1000)
    })
  })
</script>
<style scoped>
.pixiBox{
  width: 100%;
  height: 100%;
}
</style>
