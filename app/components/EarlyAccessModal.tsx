import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Mic } from 'lucide-react'

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

interface UserType {
  id: string;
  label: string;
}

const userTypes: UserType[] = [
  { id: "student", label: "Student" },
  { id: "creator", label: "Creator" },
  { id: "business", label: "Business" },
]

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Submitted:', { name, email, userTypes: selectedTypes })
    // Reset form and close modal
    setName('')
    setEmail('')
    setSelectedTypes([])
    onClose()
  }

  const handleTypeChange = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#111111] to-[#1A1A1A] text-white border-[#FF4500]/20">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Mic className="w-10 h-10 text-[#FF4500]" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center text-white">Request Early Access</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Be among the first to experience SonicScribe's revolutionary AI-powered audio transcription.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#222222] border-[#FF4500]/30 text-white focus:border-[#FF4500] focus:ring-[#FF4500]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#222222] border-[#FF4500]/30 text-white focus:border-[#FF4500] focus:ring-[#FF4500]"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              I am a: (Select all that apply)
            </label>
            <div className="space-y-2">
              {userTypes.map((type) => (
                <div key={type.id} className="flex items-center">
                  <Checkbox
                    id={type.id}
                    checked={selectedTypes.includes(type.id)}
                    onCheckedChange={() => handleTypeChange(type.id)}
                    className="border-[#FF4500]/30 data-[state=checked]:bg-[#FF4500] data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor={type.id}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                  >
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white">
              Get Early Access
            </Button>
          </DialogFooter>
        </form>
        <p className="text-xs text-center text-gray-400 mt-4">
          By requesting early access, you agree to our Terms of Service and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  )
}

