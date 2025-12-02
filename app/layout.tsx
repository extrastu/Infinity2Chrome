import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infinity2Chrome - Infinity 新标签页书签迁移工具 | 安全导出到 Chrome",
  description:
    "Infinity2Chrome 是一款免费、安全的 Infinity 新标签页书签迁移工具。支持导入 .infinity 和 .json 备份文件，一键导出为 Chrome 书签格式。纯本地处理，不上传任何数据。",
  keywords: [
    "Infinity2Chrome",
    "Infinity新标签页",
    "书签迁移",
    "Chrome书签导入",
    "Infinity备份",
    "书签导出",
    "浏览器书签",
    "infinity to chrome",
    "bookmark migration",
  ],
  authors: [{ name: "Infinity2Chrome" }],
  creator: "Infinity2Chrome",
  publisher: "Infinity2Chrome",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "Infinity2Chrome - Infinity 书签安全迁移到 Chrome",
    description: "免费、安全的 Infinity 新标签页书签迁移工具，支持一键导出为 Chrome 书签格式，纯本地处理不上传数据。",
    siteName: "Infinity2Chrome",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity2Chrome - Infinity 书签迁移工具",
    description: "安全迁移 Infinity 新标签页书签到 Chrome，纯本地处理，保护您的隐私。",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://infinity2chrome.vercel.app" />
      </head>
      <body className={`font-sans antialiased flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
