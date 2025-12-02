import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome, Shield, Code, ExternalLink, Lock, Upload, Download, Sparkles } from "lucide-react"

export const metadata = {
  title: "关于 - Infinity2Chrome | 书签迁移工具",
  description: "了解 Infinity2Chrome 的开发初衷、技术架构和安全特性。帮助 Infinity 新标签页用户安全迁移书签到 Chrome。",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Chrome className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">关于 Infinity2Chrome</h1>
          <p className="text-muted-foreground">Infinity 新标签页书签安全迁移工具</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* 项目初衷 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              项目初衷
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              作为 Infinity 新标签页的老用户，我已经使用这款插件将近 7 年了。它一直是我日常浏览器使用中不可或缺的工具。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              然而，最近在社区看到了一些{" "}
              <a
                href="https://meta.appinn.net/t/topic/78159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                疑似被黑产投毒的讨论
              </a>
              ，出于安全考虑，我开发了 Infinity2Chrome 这个迁移工具，帮助用户将书签数据安全导出并迁移到 Chrome
              原生书签系统中。
            </p>
          </CardContent>
        </Card>

        {/* 为什么选择 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              为什么选择 Infinity2Chrome
            </CardTitle>
            <CardDescription>安全、透明、高效的书签迁移方案</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">纯本地处理</h4>
                  <p className="text-sm text-muted-foreground">所有数据解析和导出均在浏览器本地完成</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">零数据上传</h4>
                  <p className="text-sm text-muted-foreground">不收集、不存储、不传输任何用户数据</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Code className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">开源透明</h4>
                  <p className="text-sm text-muted-foreground">代码完全公开，欢迎审查</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Download className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">一键迁移</h4>
                  <p className="text-sm text-muted-foreground">简单三步完成书签迁移</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 使用步骤 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              如何使用
            </CardTitle>
            <CardDescription>三步完成书签迁移</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium">导出 Infinity 备份文件</h4>
                  <p className="text-sm text-muted-foreground">
                    在 Infinity 扩展设置中导出备份文件（.infinity 或 .json 格式）
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium">上传到 Infinity2Chrome</h4>
                  <p className="text-sm text-muted-foreground">点击首页的导入按钮，选择你的备份文件</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium">导出到 Chrome 书签</h4>
                  <p className="text-sm text-muted-foreground">
                    点击"导出到 Chrome 书签"，然后在 Chrome 书签管理器中导入生成的 HTML 文件
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 技术架构 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              技术架构
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                前端框架：Next.js + React
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                UI 组件：shadcn/ui + Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                部署平台：Vercel
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                AI 开发：
                <a
                  href="https://v0.app/ref/938XEW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  v0 by Vercel
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* AI 驱动开发 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI 驱动开发
            </CardTitle>
            <CardDescription>本项目由 v0 AI 辅助开发</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Infinity2Chrome 使用 Vercel 的 AI 开发工具 v0 进行快速原型设计和代码生成。 v0
              能够根据自然语言描述生成高质量的 React 组件和完整的 Web 应用。
            </p>
            <a href="https://v0.app/ref/938XEW" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Sparkles className="h-4 w-4" />
                体验 v0 AI 开发
                <ExternalLink className="h-3 w-3" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* 继续使用 Infinity */}
        <Card>
          <CardHeader>
            <CardTitle>继续使用 Infinity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">如果您仍希望继续使用 Infinity，官方提供了网页版服务：</p>
            <a href="https://inftab.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="h-4 w-4" />
                访问 inftab.com
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
