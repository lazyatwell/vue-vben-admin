---
outline: deep
---

# 快速开始 {#quick-start}

## 前置准备

::: info 环境要求

在启动项目前，你需要确保你的环境满足以下要求：

- [Node.js](https://nodejs.org/en) 22.14.0 及以上版本
- [Git](https://git-scm.com/) 任意版本

验证你的环境是否满足以上要求，你可以通过以下命令查看版本：

```bash
# 出现相应 node LTS版本即可
node -v
# 出现相应 git 版本即可
git -v
```

:::

## 启动项目

### 获取源码

```bash
# clone 代码
git clone http://10.3.0.218:800/vue3/ocean-frontend.git
```

::: danger 注意

注意存放代码的目录及所有父级目录不能存在中文及空格，否则安装依赖后启动会出错。

:::

### 安装依赖

在你的代码目录内打开终端，并执行以下命令:

```bash
# 进入项目目录
cd ocean-frontend

# 安装pnpm
npm i -g pnpm

# 安装依赖
pnpm install
```

### 运行项目

#### 选择项目

执行以下命令运行项目:

```bash
# 启动项目
pnpm dev
```

此时，你会看到类似如下的输出，选择你需要运行的项目：

```bash
│
◆  Select the app you need to run [dev]:
│  ○ @ocean/web
│  ● @ocean/docs
└
```

现在，你可以在浏览器通过 `localhost + 端口` 访问查看项目。

#### 运行指定项目

如果你不想选择项目，可以直接运行以下命令运行你需要的应用：

```bash
pnpm run dev:web
pnpm run dev:docs
```
