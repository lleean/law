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
        body: "Lora",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F9F7F2",
          lightgray: "#EAE7DF",
          gray: "#A09880",
          darkgray: "#5C5347",
          dark: "#2D2926",
          secondary: "#84754E",
          tertiary: "#6B5D3F",
          highlight: "rgba(132, 117, 78, 0.12)",
          textHighlight: "#f0e68c",
        },
        darkMode: {
          light: "#1C1A17",
          lightgray: "#2E2B26",
          gray: "#6B6255",
          darkgray: "#C8C0B0",
          dark: "#F0EDE6",
          secondary: "#B8A878",
          tertiary: "#8F7D5A",
          highlight: "rgba(184, 168, 120, 0.15)",
          textHighlight: "#f0e68c80",
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
