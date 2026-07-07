# 道奎 - 道教/周易/占卜门户网站

## 项目结构

```
daokui/
├── astro.config.mjs          # Astro 配置
├── tailwind.config.js        # Tailwind 主题（道系四色）
├── package.json              # 依赖
├── config.yml                # Decap CMS 配置
├── public/
│   └── admin/
│       └── index.html        # 管理后台入口
└── src/
    ├── layouts/
    │   └── Layout.astro      # 全局布局（导航+页脚+阴阳鱼）
    └── pages/
        ├── index.astro       # 首页（阴阳鱼大屏+八卦动画）
        ├── dao.astro         # 道教文化
        ├── yijing.astro      # 周易易学
        ├── shushu.astro      # 术数占卜
        ├── blog.astro        # 博文专栏
        └── about.astro       # 关于本站
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

访问 http://localhost:4321 查看网站
访问 http://localhost:4321/admin 查看管理后台

## 设计系统

- **配色**: 玄黑(#1a1a2e)、朱砂红(#8b0000)、金色(#d4a574)、青色(#00ced1)
- **字体**: Noto Serif SC（标题）、Noto Sans SC（正文）
- **动画**: 阴阳鱼10秒旋转、八卦呼吸闪烁、卡片水墨扩散

## 部署

详见 DEPLOY.md

## 版权

© 2026 道奎 daokui.com | 占卜命理仅供参考
