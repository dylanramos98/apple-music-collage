export function loadMusicKit() {
  return new Promise<void>((resolve) => {
    if (window.MusicKit) return resolve();

    const script = document.createElement("script");
    script.src = "https://js-cdn.music.apple.com/musickit/v3/musickit.js";
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}
