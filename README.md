# Infinity2Chrome

一个帮助你将 Infinity 新标签页书签安全迁移到 Chrome 浏览器的在线工具。

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0-black?style=for-the-badge)](https://v0.app/ref/938XEW)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

## 项目背景

使用 Infinity 新标签页近 7 年，近期发现疑似被黑产投毒的安全问题（[相关讨论](https://meta.appinn.net/t/topic/78159)），因此开发了这个迁移工具，帮助用户将书签数据安全迁移到 Chrome 原生书签。

## 功能特性

- 支持导入 `.infinity` 和 `.json` 格式的备份文件
- 解析并展示所有书签数据
- 导出为标准 Chrome 书签 HTML 格式
- 所有数据仅在本地浏览器处理，不上传服务器
- 完全开源，代码透明可审计

## 使用方法

1. 从 Infinity 扩展导出备份文件（.infinity 格式）
2. 访问 Infinity2Chrome 网站，上传备份文件
3. 点击"导出到 Chrome 书签"按钮
4. 在 Chrome 书签管理器中导入生成的 HTML 文件

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [v0](https://v0.app/ref/938XEW) - AI 驱动开发

## 本地开发

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

## 相关链接

- [Infinity 官方网页版](https://inftab.com/)
- [安全问题讨论帖](https://meta.appinn.net/t/topic/78159)

## 许可证

本项目采用 [MIT License](./LICENSE) 开源许可证。

## 免责声明

本工具仅提供数据格式转换功能，不对用户数据的完整性和安全性负责。请在使用前妥善备份原始数据。
\`\`\`

```text file="LICENSE"
MIT License

Copyright (c) 2025 Infinity2Chrome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
