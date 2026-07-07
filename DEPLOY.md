# 道奎部署指南

## 部署到 Cloudflare Pages

### 方法一：GitHub 自动部署（推荐）

1. 将代码推送到 GitHub
2. 登录 [cloudflare.com](https://cloudflare.com)
3. 进入 **Workers & Pages** → **Create application** → **Pages**
4. 选择 **Connect to Git** → 选择 `leoshumcom/Daokui` 仓库
5. 配置构建设置：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
6. 点击 **Save and Deploy**

### 方法二：手动部署

```bash
# 构建
npm run build

# 使用 wrangler 部署
npx wrangler pages deploy dist --project-name=daokui
```

## 配置 DNS 解析

在 Cloudflare 域名面板中添加：

| 类型 | 名称 | 内容 | Proxy |
|------|------|------|-------|
| CNAME | @ | daokui.pages.dev | Orange (代理) |
| CNAME | www | daokui.pages.dev | Orange (代理) |

## 配置 Decap CMS 管理后台

1. 确保 `public/admin/index.html` 和 `config.yml` 在正确位置
2. 部署后访问 `https://daokui.com/admin`
3. 首次使用需要配置 GitHub OAuth

## 环境变量（如需）

在 Cloudflare Pages 设置中添加：

- `CF_API_TOKEN`: Cloudflare API Token（用于 CMS 自动部署）
- `SITE_URL`: https://daokui.com
