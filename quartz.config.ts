import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Law – Kilian Lerch",
    pageTitleSuffix: " | Law",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "de-DE",
    baseUrl: "lleean.github.io/law",
    ignorePatterns: [".obsidian", "_Templates", "Drafts", "Excalidraw", "private"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf8",
          lightgray: "#e8e8e4",
          gray: "#a0a09a",
          darkgray: "#3d3d38",
          dark: "#1a1a18",
          secondary: "#1a4a7a",
          tertiary: "#5a8a5a",
          highlight: "rgba(26, 74, 122, 0.10)",
          textHighlight: "#fff176",
        },
        darkMode: {
          light: "#18181a",
          lightgray: "#2c2c30",
          gray: "#5a5a60",
          darkgray: "#c8c8cc",
          dark: "#ebebed",
          secondary: "#6fa3d4",
          tertiary: "#84a98c",
          highlight: "rgba(111, 163, 212, 0.15)",
          textHighlight: "#fff17680",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
