'use client'

import * as React from "react"

export function Dialog({ children, open, onClose }: { 
  children: React.ReactNode
  open: boolean
  onClose: () => void 
}) {
  if (!open) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6">
        {children}
      </div>
    </div>
  )
}