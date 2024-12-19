'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface YouTubePlayerProps {
  videoId: string
  title: string
  thumbnailQuality?: 'default' | 'hq' | 'mq' | 'sd' | 'maxres'
}

export function YouTubePlayer({ videoId, title, thumbnailQuality = 'maxres' }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}default.jpg`

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div 
      className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden cursor-pointer group"
      onClick={handlePlay}
      onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 transition-colors">
          <Play className="w-8 h-8 text-white fill-current" />
        </div>
      </div>
    </div>
  )
} 