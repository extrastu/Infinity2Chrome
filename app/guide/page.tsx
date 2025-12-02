import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome, Download, Upload, FileJson, Settings, BookmarkPlus, CheckCircle, AlertCircle } from "lucide-react"

export const metadata = {
  title: "使用说明 - Infinity2Chrome | 书签迁移工具",
  description: "详细了解如何使用 Infinity2Chrome 将 Infinity 新标签页的书签导出并迁移到 Chrome 浏览器书签。",
}

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Chrome className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">使用说明</h1>
          <p className="text-muted-foreground">详细的书签迁移教程</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* 准备工作 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              准备工作
            </CardTitle>
            <CardDescription>开始迁移前需要完成的准备</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>确保你的 Infinity 新标签页扩展可以正常访问</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>建议在迁移前备份你的 Infinity 数据</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>使用 Chrome、Edge 或其他支持书签导入的现代浏览器</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 第一步：导出 Infinity 备份 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                1
              </div>
              导出 Infinity 备份文件
            </CardTitle>
            <CardDescription>从 Infinity 扩展中导出数据备份</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  a
                </span>
                <div>
                  <p className="font-medium">打开 Infinity 新标签页</p>
                  <p className="text-sm text-muted-foreground">在浏览器中打开新标签页，进入 Infinity 界面</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  b
                </span>
                <div>
                  <p className="font-medium">进入设置</p>
                  <p className="text-sm text-muted-foreground">点击右上角的设置图标（齿轮图标）进入设置页面</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  c
                </span>
                <div>
                  <p className="font-medium">找到备份选项</p>
                  <p className="text-sm text-muted-foreground">在设置中找到"备份与恢复"或"数据管理"选项</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  d
                </span>
                <div>
                  <p className="font-medium">导出备份文件</p>
                  <p className="text-sm text-muted-foreground">
                    点击"导出"或"备份"按钮，保存生成的 <code className="px-1 py-0.5 rounded bg-muted">.infinity</code>{" "}
                    或 <code className="px-1 py-0.5 rounded bg-muted">.json</code> 文件
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700 dark:text-amber-400">
                导出的文件名通常为{" "}
                <code className="px-1 py-0.5 rounded bg-amber-500/10">infinityBackup-日期.infinity</code>{" "}
                格式，请妥善保管此文件。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 第二步：上传到 Infinity2Chrome */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                2
              </div>
              上传到 Infinity2Chrome
            </CardTitle>
            <CardDescription>将备份文件导入到本工具进行解析</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Upload className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">点击导入按钮</p>
                  <p className="text-sm text-muted-foreground">在首页找到"选择文件"按钮，点击打开文件选择器</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <FileJson className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">选择备份文件</p>
                  <p className="text-sm text-muted-foreground">
                    选择之前导出的 <code className="px-1 py-0.5 rounded bg-muted">.infinity</code> 或{" "}
                    <code className="px-1 py-0.5 rounded bg-muted">.json</code> 文件
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">查看解析结果</p>
                  <p className="text-sm text-muted-foreground">文件导入成功后，你可以看到所有书签和网站的列表</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 第三步：导出到 Chrome 书签 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                3
              </div>
              导出到 Chrome 书签
            </CardTitle>
            <CardDescription>生成 Chrome 可识别的书签文件</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <Download className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">点击导出按钮</p>
                  <p className="text-sm text-muted-foreground">在页面顶部找到"导出到 Chrome 书签"按钮并点击</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <FileJson className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">保存 HTML 文件</p>
                  <p className="text-sm text-muted-foreground">
                    浏览器会自动下载一个 <code className="px-1 py-0.5 rounded bg-muted">infinity-bookmarks.html</code>{" "}
                    文件
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 第四步：导入到 Chrome */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                4
              </div>
              导入到 Chrome 浏览器
            </CardTitle>
            <CardDescription>将书签导入 Chrome 书签管理器</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  a
                </span>
                <div>
                  <p className="font-medium">打开 Chrome 书签管理器</p>
                  <p className="text-sm text-muted-foreground">
                    按 <code className="px-1 py-0.5 rounded bg-muted">Ctrl+Shift+O</code>（Windows）或{" "}
                    <code className="px-1 py-0.5 rounded bg-muted">Cmd+Option+B</code>（Mac）打开书签管理器
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  b
                </span>
                <div>
                  <p className="font-medium">打开导入菜单</p>
                  <p className="text-sm text-muted-foreground">点击右上角的三个点菜单，选择"导入书签"</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  c
                </span>
                <div>
                  <p className="font-medium">选择 HTML 文件</p>
                  <p className="text-sm text-muted-foreground">
                    在文件选择器中找到并选择之前下载的{" "}
                    <code className="px-1 py-0.5 rounded bg-muted">infinity-bookmarks.html</code> 文件
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                  d
                </span>
                <div>
                  <p className="font-medium">完成导入</p>
                  <p className="text-sm text-muted-foreground">
                    导入完成后，你的 Infinity 书签将出现在 Chrome 书签栏中的"Infinity Bookmarks"文件夹内
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-green-700 dark:text-green-400">
                恭喜！你已成功将 Infinity 书签迁移到 Chrome 浏览器。你可以在书签栏找到所有导入的书签。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 常见问题 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookmarkPlus className="h-5 w-5 text-primary" />
              常见问题
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Q: 支持哪些文件格式？</h4>
              <p className="text-sm text-muted-foreground">
                A: 支持 <code className="px-1 py-0.5 rounded bg-muted">.infinity</code> 和{" "}
                <code className="px-1 py-0.5 rounded bg-muted">.json</code> 两种格式，这两种格式本质上都是 JSON 数据。
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Q: 我的数据安全吗？</h4>
              <p className="text-sm text-muted-foreground">
                A: 完全安全。所有数据处理都在你的浏览器本地完成，不会上传到任何服务器。
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Q: 导入后书签图标不显示怎么办？</h4>
              <p className="text-sm text-muted-foreground">
                A: Chrome 会在你访问对应网站后自动获取图标，这是正常现象。
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Q: 可以导入到其他浏览器吗？</h4>
              <p className="text-sm text-muted-foreground">
                A: 是的，导出的 HTML 格式是通用的书签格式，Edge、Firefox、Safari 等浏览器都支持导入。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
