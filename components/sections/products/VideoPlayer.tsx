"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Loader2 } from "lucide-react";

interface VideoPlayerProps {
  url: string;
  title: string;
}

export function VideoPlayer({ url, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/5">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[var(--primary-blue)]" />
        </div>
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={false}
        onReady={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },
          vimeo: {
            playerOptions: { title: true }
          }
        }}
        title={title}
        className="rounded-xl"
      />
    </div>
  );
}