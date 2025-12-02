import Link from "next/link"
import { Chrome, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Chrome className="h-5 w-5 text-primary" />
              <span className="font-semibold">Infinity2Chrome</span>
            </div>
            <p className="text-sm text-muted-foreground">
              安全、免费的 Infinity 新标签页书签迁移工具，帮助您轻松将书签导出到 Chrome 浏览器。
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-medium">相关链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  关于
                </Link>
              </li>
              <li>
                <a
                  href="https://inftab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  Infinity 官方网页版
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <div className="space-y-3">
            <h4 className="font-medium">技术支持</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://v0.app/ref/938XEW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  使用 v0 构建
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://meta.appinn.net/t/topic/78159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  安全讨论帖
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Infinity2Chrome. 纯本地处理，不收集任何用户数据。</p>
        </div>
      </div>
    </footer>
  )
}
