"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MediumIcon } from "@/components/ui/MediumIcon"
import { OpenaiIcon } from "@/components/ui/OpenaiIcon"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // This ensures the component only renders on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
        <Avatar className="h-24 w-24 border-2 border-gray-700">
          <AvatarImage src="/placeholder.jpg" alt="Profile picture" className="object-cover"  />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Julio Bellano Laksana 鍾國榮</h1>
          <p className="text-gray-400">
            <span className="flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4" /> Taipei, Taiwan
            </span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5">
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 mb-2"
              asChild
            >
              <a href="https://github.com/juliobellano" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-9 w-9" />
              </a>
            </Button>
            <span className="text-xs text-gray-400">GitHub</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 mb-2"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/juliobellano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-9 w-9" />
              </a>
            </Button>
            <span className="text-xs text-gray-400">LinkedIn</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 mb-2"
              asChild
            >
              <a
                href="https://chatgpt.com/?q=Julio%20Bellano%20Laksana&hints=search"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Try Me!"
              >
                <OpenaiIcon className="h-9 w-9" />
              </a>
            </Button>
            <span className="text-xs text-gray-400">Chat GPT [TRY ME]</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 mb-2"
              asChild
            >
              <a href="mailto:juliobellanolaksana@gmail.com" aria-label="Email">
                <Mail className="h-9 w-9" />
              </a>
            </Button>
            <span className="text-xs text-gray-400">Email</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              className="rounded-xl px-4 py-2 border-gray-700 bg-transparent text-white hover:bg-gray-800 mb-2"
              asChild
            >
              <a
                href="https://medium.com/@juliobellanolaksana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <MediumIcon className="h-9 w-9" />
              </a>
            </Button>
            <span className="text-xs text-gray-400">Medium</span>
          </div>
        </div>
      </div>
    </main>
  )
}
