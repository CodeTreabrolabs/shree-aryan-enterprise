"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EngagementPopups() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [showTimedPopup, setShowTimedPopup] = useState(false)
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false)
  const [hasShownTimedPopup, setHasShownTimedPopup] = useState(false)

  // Exit intent detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShownExitPopup && !showTimedPopup) {
      setShowExitPopup(true)
      setHasShownExitPopup(true)
    }
  }, [hasShownExitPopup, showTimedPopup])

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [handleMouseLeave])

  // Timed popup (every 2 minutes, but only once per session)
  useEffect(() => {
    if (hasShownTimedPopup) return
    
    const timer = setTimeout(() => {
      if (!showExitPopup && !hasShownTimedPopup) {
        setShowTimedPopup(true)
        setHasShownTimedPopup(true)
      }
    }, 120000) // 2 minutes

    return () => clearTimeout(timer)
  }, [showExitPopup, hasShownTimedPopup])

  const closeExitPopup = () => setShowExitPopup(false)
  const closeTimedPopup = () => setShowTimedPopup(false)

  return (
    <>
      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={closeExitPopup}
          />
          <Card className="relative z-10 max-w-md w-full animate-in zoom-in-95 duration-200">
            <button
              onClick={closeExitPopup}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Wait! Do Not Miss Out
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the best property deals in your inbox. Talk to our expert consultants and find your dream property today.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact" onClick={closeExitPopup}>
                    Talk to an Expert
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent" size="lg">
                  <a href="tel:++919322635844">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              <button
                onClick={closeExitPopup}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I will browse on my own
              </button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Timed Popup */}
      {showTimedPopup && !showExitPopup && (
        <div className="fixed bottom-24 right-6 z-[60] max-w-sm animate-in slide-in-from-right duration-300">
          <Card className="shadow-xl border-primary/20">
            <button
              onClick={closeTimedPopup}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Looking for the right property?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Get a free consultation with our experts.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/contact" onClick={closeTimedPopup}>
                        Get Free Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
