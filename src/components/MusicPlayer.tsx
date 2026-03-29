import { useState, useRef, useEffect, useCallback } from "react";

const YOUTUBE_VIDEO_ID = "ebjXsc0UjdQ";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
        },
        events: {
          onReady: () => setIsReady(true),
        },
      });
    };

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

  const toggle = useCallback(() => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <>
      <div id="yt-player" className="hidden" />
      <button
        onClick={toggle}
        disabled={!isReady}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-border bg-background text-foreground flex items-center justify-center transition-colors hover:bg-foreground hover:text-background disabled:opacity-30 focus:outline-none focus-visible:outline-none"
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
