'use client'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface WelcomePopoverProps {
  open: boolean
  onClose: () => void
}

export function WelcomePopover({ open, onClose }: WelcomePopoverProps) {
  return (
    <Popover open={open} onOpenChange={onClose}>
      <PopoverTrigger asChild>
        <div className="fixed top-0 pt-16 right-4">
          <Button className="hidden">Welcome</Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Welcome to PaletteGen!</h4>
            <p className="text-sm text-muted-foreground">Upload an image to generate a colour palette</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

