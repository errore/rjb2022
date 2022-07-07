# rjb2022
**软件杯2022**

## 环境
- Anaconda
- Python 3.7.x
    - Django
    - PaddleRS
- Nodejs (开发)

## 语言
- Python
- TypeScript
- HTML, CSS

采用原生HTML + TypeScript，无框架

## 启动服务

```
$ cd ./server
$ python ./manage.py run
```
如果顺利，前端网址在 http://127.0.0.1:8000/static/index.html 已打开 

后端调试地址在 http://127.0.0.1:8000/post_test.html

## 开发环境自动编译TS
```
$ cd ./client
$ npm run wpw
```
需要vscode live server插件

## 设计概要
本代码设计实现了4个功能，在基于现有卫星图的基础上，做了路网分析、图像分割、物体识别三大功能，实现了所见即所得的一站式地理数据分析体验。并且单独分出来了变化检测的窗口。使得整个系统操作简单，但是能够完美实现所需功能。由于系统设计的无界性，本系统给人带来的第一感受就是“自由”，目标提取、目标检测、地物分类三大功能都是点击即用，并且实时在卫星图上进行分析，能够让使用者很直观的看到分析的结果。

## 路网分析
点击“路网分析”按钮即可对卫星图像进行实时的路网分析，并且能自由调节分析结果的透明度。路网分析能够及时对道路状况进行分析。以视频中的北京卫星图为例，路网分析能够识别出80%的主干路和70%的辅路网，并且识别结果简单直观。

## 图像分割
点击“图像分割”按钮即可看到采用红蓝两色进行的实时图像分割结果，同时也能自由调节分析结果的透明度。图像分割能够对卫星图进行地物分离，能够更加方便对卫星图像进行像素级的分类。

## 物体识别
点击“物体识别”按钮即可看到卫星图中的所有“操场”元素被蓝色圆标进行了标识，系统开始对整个卫星图的范围内所有的“操场”进行了物体识别，并且加上了标识。

## 时相分析
点击“时相分析”按钮即可打开一个新窗口，用户可自由上传两张同一地段的不同时刻拍摄的卫星图，后台即可快速给出变化检测出的结果。
