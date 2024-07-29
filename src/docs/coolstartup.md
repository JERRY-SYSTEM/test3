---
author: Glow Studio
date: 2024-06-01
article: false
category: 文档
---

# 写入教程

## 写入U盘

::: warning 注意
**此处涉及数据安全，请仔细选择**
:::

准备一个空U盘。

1. 运行 `写入工具.exe` ；
2. 插入U盘，点击 `R` 刷新；
3. 选中你的U盘；
4. 制作模式建议默认；
5. 分区格式建议默认；
6. 如果你想清除U盘里的PE启动，请点击 `还原空间` 几个字；
7. 如果你想全新制作启动盘，请点击 `开始制作` 。

  ![写入U盘](https://yanxuan.nosdn.127.net/02905d7d95226aa6ae4afaa6feb39b51.png)

U盘制作完后，建议进行QEMU测试。

1. 右键标题栏；
2. 选中 `模拟启动测试` ；
3. 如果是旧电脑测试BIOS，新电脑测试EFIX64，也可以两个都测试一遍。

  ![QEMU测试](https://yanxuan.nosdn.127.net/923bac35d5771b58fadc5e7daa994ffb.png)

## 本地模式

此处将PE装入本地硬盘，仅安装11PE。

1. 右键标题栏；
2. 点击 `安装PE到本地硬盘` 。

![本地模式](https://yanxuan.nosdn.127.net/0333778a94065736170cc4c07b376936.png)