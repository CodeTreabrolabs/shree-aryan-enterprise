"use client"

import Script from "next/script"
import { useCallback } from "react"

declare global {
  interface Window {
    LiveChatWidget?: {
      init: (options: { widgetId: string }) => void
    }
  }
}

export function LiveChatWidget() {
  const handleLoad = useCallback(() => {
    if (window.LiveChatWidget?.init) {
      window.LiveChatWidget.init({
        widgetId: "4ff1a432-3d84-4a10-88c9-cbf12d9d27fb",
      })
    }
  }, [])

  return (
    <>
      <div id="livechat-root"></div>
      <Script
        src="https://unpkg.com/@getwidgets/live-chat-widget@latest/dist/live-chat-widget.umd.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </>
  )
}
