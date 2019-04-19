# FreedomZone-RPGMaker

## Basic Info

平台: Windows/Mac

制作工具：RPG Maker MV - version 1.6.1 [百度云盘链接](https://pan.baidu.com/s/1jvPU2yPRNP6CAVad_foYZA) 提取码uqmx

开发语言：

> * RPG Maker MV内置操作(90%)
> * JavaScript(10%)

## Get Started

> 1. 选择一个你喜欢的文件夹并把Repo中的文件Clone到本地
> 2. 访问你RPG Maker MV安装目录下的NewData文件夹（或者新建一个项目），把audio,fonts,img,icon文件夹拷贝到Repo对应的文件夹下
> 3. 打开Game.rpgproject，为电子浮泽世界出一份力吧！


## Pushing Rules

为了避免麻烦/降低操作难度，此项目暂时不会使用Pull Requests和分支（不排除将来有使用的可能）
> * 开始肝锅时请先Fetch并Pull最新的更新
> * 添加资源文件时请告知@水鱼
> * 提交时（特别是提交重大更新时），请写明Commit Message

## GitIgnore & Files Info

### .gitignore

```
/audio/
/fonts/
/icon/
/img/
/movies/
/save/
```

### Files & Directory

#### Non-ignored

`Game.rpgproject`: RPG Maker MV的项目文件，相当于文件入口，无具体信息。

`index.html`: 游戏的执行入口，无具体信息。

`package.json`: 无具体信息。

`/data/`: 数据文件所在的目录，包含了游戏内部所有的数据，以json格式存储。

`/js/`: 脚本文件所在的目录
- `libs`是游戏运行所需的library
- `plugins`是插件
- 目录下的js文件是游戏内核文件

#### Ignored

`/audio/`: 音频文件，包括音效和音乐。

`/fonts/`: 字体文件以及调用字体文件的接口文件。

`/icon/`: 图标。

`/img/`: 所有的图片资源文件，包括人物立绘、地图背景、动画等等。

`/movies/`: 有可能存在的影片文件。

`/save/`: 存档文件。


## External Links

RPG Maker MV汉化文档：http://help.rpgmakermv.cn 

yanfly团队的免费插件：http://yanfly.moe

rpgmakerforum：https://forums.rpgmakerweb.com

### 一起努力鸭！

#### 如果没有Git使用经验并且要进行不确定的操作时，请先联系水鱼（2300756578）或鸦（504949105）
