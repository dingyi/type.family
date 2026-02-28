# type.family

全球字体厂商目录，收录 416+ 家字体设计公司与工作室。

## 技术栈

- [Vite](https://vitejs.dev/) — 构建工具
- [React](https://react.dev/) 18 — UI 框架
- [TypeScript](https://www.typescriptlang.org/) — 类型系统
- [Tailwind CSS](https://tailwindcss.com/) 3 — 样式方案
- [shadcn/ui](https://ui.shadcn.com/) — 组件库（基于 Radix UI）
- [React Router](https://reactrouter.com/) — 路由
- [TanStack Query](https://tanstack.com/query) — 数据请求
- [Lucide React](https://lucide.dev/) — 图标

## 本地开发

```sh
# 安装依赖
bun install

# 启动开发服务器 (localhost:8080)
bun dev

# 构建生产版本
bun run build

# 预览生产构建
bun run preview
```

## 项目结构

```
src/
├── components/
│   ├── ui/             # shadcn/ui 组件
│   ├── FoundryTable.tsx # 厂商列表表格（搜索 + 表格）
│   ├── HeroSection.tsx  # 页面头部
│   └── Footer.tsx       # 页脚
├── data/
│   └── foundries.ts     # 字体厂商数据（416+ 条）
├── pages/
│   ├── Index.tsx         # 首页
│   └── NotFound.tsx      # 404 页面
├── App.tsx              # 路由配置
└── main.tsx             # 入口
```
