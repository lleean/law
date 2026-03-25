import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz-Konfiguration – Law Vault von Kilian Lerch
 *
 * lleean und law werden beim
 * Setup-Skript automatisch ersetzt.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Law – Kilian Lerch",
    pageTitleSuffix: " | Law",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,   // kein Tracking
    locale: "de-CH",
    baseUrl: "lleean.github.io/law",

    // Ordner/Dateien die NICHT veröffentlicht werden:
    ignorePatterns: [
      ".obsidian",
      "_Templates",
      "Drafts",
      "Excalidraw",
      "private",
      "*.canvas",         // Obsidian Canvas-Dateien
    ],

    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",    // Klassisch, passend für Jura
        body: "Source Serif 4",        // Gut lesbar für lange Texte
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf8",           // Leicht warmes Weiß
          lightgray: "#e8e8e4",
          gray: "#a0a09a",
          darkgray: "#3d3d38",
          dark: "#1a1a18",
          secondary: "#1a4a7a",       // Dunkelblau (juristisch, seriös)
          tertiary: "#5a8a5a",        // Grün für Akzente
          highlight: "rgba(26, 74, 122, 0.10)",
          textHighlight: "#fff176",
        },
        darkMode: {
          light: "#18181a",
          lightgray: "#2c2c30",
          gray: "#5a5a60",
          darkgray: "#c8c8cc",
          dark: "#ebebed",
          secondary: "#6fa3d4",       // Hellblau im Dark Mode
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
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        wikilinks: true,          // [[Wikilinks]] unterstützen
        callouts: true,           // Obsidian Callouts (> [!info] etc.)
        mermaid: true,            // Diagramme
        parseTags: true,
        parseArrows: true,
        parseBlockReferences: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        maxDepth: 3,
        minEntries: 2,            // Inhaltsverzeichnis nur bei >2 Überschriften
      }),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: false,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],

    filters: [
      Plugin.RemoveDrafts(),      // Notizen mit "draft: true" ausblenden
                                  // ← Auskommentieren wenn ALLE Notizen veröffentlicht werden sollen
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
