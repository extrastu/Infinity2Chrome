"use client"

import { AlertTitle } from "@/components/ui/alert"

import type React from "react"
import { useState, useMemo, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, Download, ExternalLink, Grid3X3, List, FileText, Upload, AlertTriangle } from "lucide-react"

interface Site {
  id: string
  uuid: string
  name: string
  bgImage: string
  bgColor?: string
  bgFont: number
  bgText: string
  type: "web" | "app" | "folder"
  updatetime: number
  target: string
  bgType: string
  initials: string
  parentId: string
}

interface InfinityBackupData {
  version: string
  browserEnv: string
  editionEnv: string
  backupType: string
  time: number
  extVersion: string
  data: {
    site: {
      sites: Site[][]
    }
  }
}

export function SitesViewer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["web", "app", "folder"])
  const [sitesData, setSitesData] = useState<InfinityBackupData | null>(null)
  const [importError, setImportError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith(".json") && !file.name.endsWith(".infinity")) {
      setImportError("请选择 .json 或 .infinity 文件")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const parsed = JSON.parse(content) as InfinityBackupData

        if (!parsed.data?.site?.sites || !Array.isArray(parsed.data.site.sites)) {
          setImportError("无效的 Infinity 备份文件格式")
          return
        }

        setSitesData(parsed)
        setFileName(file.name)
        setImportError(null)
      } catch {
        setImportError("解析文件失败，请确保文件格式正确")
      }
    }
    reader.onerror = () => {
      setImportError("读取文件失败")
    }
    reader.readAsText(file)
  }

  const handleClearImport = () => {
    setSitesData(null)
    setFileName(null)
    setImportError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const allSites: Site[] = useMemo(() => {
    if (!sitesData) return []
    return sitesData.data.site.sites.flat()
  }, [sitesData])

  const filteredSites = useMemo(() => {
    return allSites.filter((site) => {
      const matchesSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.target.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = selectedTypes.includes(site.type)
      return matchesSearch && matchesType
    })
  }, [allSites, searchQuery, selectedTypes])

  const webSites = useMemo(() => {
    return allSites.filter((site) => site.type === "web" && site.target.startsWith("http"))
  }, [allSites])

  const generateChromeBookmarksHTML = () => {
    const now = Math.floor(Date.now() / 1000)

    let html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
    <DT><H3 ADD_DATE="${now}" LAST_MODIFIED="${now}">Infinity 导入书签</H3>
    <DL><p>
`

    webSites.forEach((site) => {
      const addDate = Math.floor(site.updatetime / 1000)
      html += `        <DT><A HREF="${site.target}" ADD_DATE="${addDate}" ICON="">${site.name}</A>\n`
    })

    html += `    </DL><p>
</DL><p>`

    return html
  }

  const handleExportToChrome = () => {
    const html = generateChromeBookmarksHTML()
    const blob = new Blob([html], { type: "text/html;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "chrome_bookmarks.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const stats = {
    total: allSites.length,
    web: allSites.filter((s) => s.type === "web").length,
    app: allSites.filter((s) => s.type === "app").length,
    folder: allSites.filter((s) => s.type === "folder").length,
  }

  const pageCount = sitesData?.data.site.sites.length || 0

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ExternalLink className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Infinity2Chrome</h1>
              <p className="text-muted-foreground">Infinity 新标签页书签安全迁移工具</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="gap-2 shrink-0 bg-transparent"
              onClick={() => window.open("/about", "_blank")}
            >
              <AlertTriangle className="h-4 w-4" />
              关于
            </Button>
            {allSites.length > 0 && (
              <Button onClick={handleExportToChrome} className="gap-2 shrink-0">
                <Download className="h-4 w-4" />
                导出到 Chrome 书签
              </Button>
            )}
          </div>
        </div>

        {/* Disclaimer Alert */}
        <Alert className="mb-8" variant="default">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>免责声明</AlertTitle>
          <AlertDescription className="text-sm">
            本工具仅用于帮助用户迁移 Infinity
            新标签页的书签数据。所有数据处理均在您的浏览器本地完成，我们不会收集、存储或传输任何用户数据。
            使用本工具的风险由用户自行承担，开发者不对任何数据丢失或损坏负责。导出前请妥善保管好原始备份文件。
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              导入 Infinity 备份文件
            </CardTitle>
            <CardDescription>选择 infinityBackup-*.json 或 infinityBackup-*.infinity 文件进行导入</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,.infinity"
                  onChange={handleFileImport}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="outline" className="gap-2 cursor-pointer bg-transparent" asChild>
                    <span>
                      <Upload className="h-4 w-4" />
                      选择文件
                    </span>
                  </Button>
                </label>
              </div>

              {fileName && (
                <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{fileName}</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleClearImport}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {importError && <p className="text-sm text-destructive">{importError}</p>}
            </div>

            {sitesData && (
              <div className="mt-4 p-3 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">
                  版本: {sitesData.version} | 环境: {sitesData.browserEnv} | 备份时间:{" "}
                  {new Date(sitesData.time).toLocaleString()}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Show placeholder when no data */}
        {!sitesData ? (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">请先导入 Infinity 备份文件</p>
              <p className="text-muted-foreground">点击上方的"选择文件"按钮，导入 .json 或 .infinity 文件</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>总计</CardDescription>
                  <CardTitle className="text-2xl">{stats.total}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>网站</CardDescription>
                  <CardTitle className="text-2xl text-blue-600">{stats.web}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>应用</CardDescription>
                  <CardTitle className="text-2xl text-green-600">{stats.app}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>文件夹</CardDescription>
                  <CardTitle className="text-2xl text-orange-600">{stats.folder}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜索站点名称或 URL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  {["web", "app", "folder"].map((type) => (
                    <Button
                      key={type}
                      variant={selectedTypes.includes(type) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleType(type)}
                    >
                      {type === "web" && "网站"}
                      {type === "app" && "应用"}
                      {type === "folder" && "文件夹"}
                    </Button>
                  ))}
                </div>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sites List */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4 flex-wrap h-auto gap-1">
                <TabsTrigger value="all">全部 ({filteredSites.length})</TabsTrigger>
                {Array.from({ length: pageCount }, (_, i) => (
                  <TabsTrigger key={i} value={`page${i + 1}`}>
                    页面 {i + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredSites.map((site) => (
                      <SiteCard key={site.id} site={site} />
                    ))}
                  </div>
                ) : (
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {filteredSites.map((site) => (
                        <SiteListItem key={site.id} site={site} />
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </TabsContent>

              {sitesData.data.site.sites.map((page, index) => (
                <TabsContent key={index} value={`page${index + 1}`}>
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {page
                        .filter(
                          (site) =>
                            selectedTypes.includes(site.type) &&
                            (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              site.target.toLowerCase().includes(searchQuery.toLowerCase())),
                        )
                        .map((site) => (
                          <SiteCard key={site.id} site={site} />
                        ))}
                    </div>
                  ) : (
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {page
                          .filter(
                            (site) =>
                              selectedTypes.includes(site.type) &&
                              (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                site.target.toLowerCase().includes(searchQuery.toLowerCase())),
                          )
                          .map((site) => (
                            <SiteListItem key={site.id} site={site} />
                          ))}
                      </div>
                    </ScrollArea>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            {filteredSites.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>没有找到匹配的站点</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function SiteCard({ site }: { site: Site }) {
  const isClickable = site.target.startsWith("http")

  return (
    <Card
      className={`group overflow-hidden transition-all hover:shadow-md ${isClickable ? "cursor-pointer" : ""}`}
      onClick={() => isClickable && window.open(site.target, "_blank")}
    >
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: site.bgColor || "#f0f0f0" }}
          >
            {site.bgImage ? (
              <img
                src={site.bgImage || "/placeholder.svg"}
                alt={site.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            ) : (
              <span className="text-lg font-bold text-white">{site.initials}</span>
            )}
          </div>
          <div className="w-full">
            <p className="font-medium text-sm truncate" title={site.name}>
              {site.name}
            </p>
            <Badge variant="outline" className="mt-1 text-xs">
              {site.type === "web" && "网站"}
              {site.type === "app" && "应用"}
              {site.type === "folder" && "文件夹"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SiteListItem({ site }: { site: Site }) {
  const isClickable = site.target.startsWith("http")

  return (
    <Card
      className={`transition-all hover:shadow-sm ${isClickable ? "cursor-pointer" : ""}`}
      onClick={() => isClickable && window.open(site.target, "_blank")}
    >
      <CardContent className="p-3">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
            style={{ backgroundColor: site.bgColor || "#f0f0f0" }}
          >
            {site.bgImage ? (
              <img
                src={site.bgImage || "/placeholder.svg"}
                alt={site.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            ) : (
              <span className="text-sm font-bold text-white">{site.initials}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{site.name}</p>
            <p className="text-sm text-muted-foreground truncate">{site.target}</p>
          </div>
          <Badge variant="outline" className="shrink-0">
            {site.type === "web" && "网站"}
            {site.type === "app" && "应用"}
            {site.type === "folder" && "文件夹"}
          </Badge>
          {isClickable && <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />}
        </div>
      </CardContent>
    </Card>
  )
}
