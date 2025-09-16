import { n as noop, c as create_ssr_component, e as escape, b as assign, i as identity, a as subscribe, d as add_attribute, v as validate_component, f as get_store_value, h as createEventDispatcher, j as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "marked";
import "prismjs";
import "prismjs/components/prism-go.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const css$7 = {
  code: ".font-sf.svelte-1gbubtw{font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif}",
  map: `{"version":3,"file":"TopBar.svelte","sources":["TopBar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nlet currentTime = /* @__PURE__ */ new Date();\\nonMount(() => {\\n  const timer = setInterval(() => {\\n    currentTime = /* @__PURE__ */ new Date();\\n  }, 1e3);\\n  return () => clearInterval(timer);\\n});\\nfunction formatDate(date) {\\n  return date.toLocaleDateString(\\"en-US\\", { weekday: \\"short\\", month: \\"short\\", day: \\"numeric\\" });\\n}\\nfunction formatTime(date) {\\n  return date.toLocaleTimeString(\\"en-US\\", { hour: \\"numeric\\", minute: \\"2-digit\\" });\\n}\\n<\/script>\\n\\n<!-- Status Bar -->\\n<div class=\\"hidden md:flex h-6 bg-black/20 backdrop-blur-md items-center justify-between px-2 text-xs text-white font-sf\\">\\n  <!-- Left side -->\\n  <div class=\\"flex items-center space-x-4\\">\\n    <svg class=\\"w-4 h-4\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\n      <path d=\\"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z\\"/>\\n    </svg>\\n    <span class=\\"font-semibold\\">Finder</span>\\n    <span>File</span>\\n    <span>Edit</span>\\n    <span>View</span>\\n    <span>Go</span>\\n    <span>Window</span>\\n    <span>Help</span>\\n  </div>\\n  \\n  <!-- Right side -->\\n  <div class=\\"flex items-center space-x-4\\">\\n    <span>100%</span>\\n    <svg class=\\"w-4 h-4\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\n      <path d=\\"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z\\"/>\\n    </svg>\\n    <svg class=\\"w-4 h-4\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\n      <path d=\\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\\"/>\\n    </svg>\\n    <svg viewBox=\\"0 0 29 29\\" width=\\"16\\" height=\\"16\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"currentColor\\"><path d=\\"M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z\\"></path></svg>\\n    <span>{formatDate(currentTime)}</span>\\n    <span>{formatTime(currentTime)}</span>\\n  </div>\\n</div>\\n\\n<style>\\n  .font-sf {\\n    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgDE,uBAAS,CACP,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,eAAe,CAAC,CAAC,gBAAgB,CAAC,CAAC,UACrF"}`
};
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}
function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTime = /* @__PURE__ */ new Date();
  $$result.css.add(css$7);
  return ` <div class="hidden md:flex h-6 bg-black/20 backdrop-blur-md items-center justify-between px-2 text-xs text-white font-sf svelte-1gbubtw"> <div class="flex items-center space-x-4" data-svelte-h="svelte-iyw5q5"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg> <span class="font-semibold">Finder</span> <span>File</span> <span>Edit</span> <span>View</span> <span>Go</span> <span>Window</span> <span>Help</span></div>  <div class="flex items-center space-x-4"><span data-svelte-h="svelte-1b8ejoo">100%</span> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> <svg viewBox="0 0 29 29" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z"></path></svg> <span>${escape(formatDate(currentTime))}</span> <span>${escape(formatTime(currentTime))}</span></div> </div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function") duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const ALL_MUSIC = [
  {
    name: "Hearty",
    artist: "Aventure",
    img: "hearty.png",
    src: "hearty.mp3",
    genre: "Calm"
  },
  {
    name: "Prism",
    artist: "Theatre Of Delays",
    img: "prism.png",
    src: "prism.mp3",
    genre: "Ambient"
  },
  {
    name: "Soft Vibes",
    artist: "Vitale",
    img: "softvibes.png",
    src: "softvibes.mp3",
    genre: "Hip-Hop / R&B"
  },
  {
    name: "Moon Light Drive",
    artist: "Yunior Arronte",
    img: "moonlightdrive.png",
    src: "moonlightdrive.mp3",
    genre: "Calm"
  },
  {
    name: "Slow Life",
    artist: "Benjamin Lazzarus",
    img: "slowlife.png",
    src: "slowlife.mp3",
    genre: "Cinematic"
  },
  {
    name: "Dawn of Change",
    artist: "Roman Senyk",
    img: "dawnofchange.png",
    src: "dawnofchange.mp3",
    genre: "Cinematic"
  },
  {
    name: "Hope",
    artist: "Hugo Dujardin",
    img: "hope.png",
    src: "hope.mp3",
    genre: "Cinematic"
  },
  {
    name: "Echo of Sadness",
    artist: "TURNIQUE",
    img: "echoofsadness.png",
    src: "echoofsadness.mp3",
    genre: "Cinematic"
  },
  {
    name: "Prism",
    artist: "Theatre Of Delays",
    img: "prism.png",
    src: "prism.mp3",
    genre: "Cinematic"
  },
  {
    name: "Sleepless",
    artist: "Diffie Bosman",
    img: "sleepless.png",
    src: "sleepless.mp3",
    genre: "Cinematic"
  },
  {
    name: "The Inside",
    artist: "Benjamin Lazzarus",
    img: "theinside.png",
    src: "theinside.mp3",
    genre: "Cinematic"
  },
  {
    name: "Kammo Ji",
    artist: "Talwiinder",
    img: "kammoji.png",
    src: "kammoji.mp3",
    genre: "Talwiinder"
  }
];
const INITIAL_VOLUME = 70;
const PROGRESS_UPDATE_DURATION = 200;
const css$6 = {
  code: "@keyframes svelte-61kue1-rotation{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.rotate.svelte-61kue1{animation:svelte-61kue1-rotation 7s infinite linear}@keyframes svelte-61kue1-wave{0%,100%{transform:scaleY(0.5)}50%{transform:scaleY(1)}}.wave.svelte-61kue1{animation:svelte-61kue1-wave 1.5s ease-in-out infinite;transform-origin:bottom}.custom-scrollbar.svelte-61kue1{scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.3) transparent}.custom-scrollbar.svelte-61kue1::-webkit-scrollbar{width:6px}.custom-scrollbar.svelte-61kue1::-webkit-scrollbar-track{background:transparent}.custom-scrollbar.svelte-61kue1::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.3);border-radius:3px}.custom-scrollbar.svelte-61kue1::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.5)}.custom-select.svelte-61kue1{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);border:1px solid rgba(255, 255, 255, 0.18)}.custom-select.svelte-61kue1:focus{background-color:rgba(255, 255, 255, 0.15);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.5);border:1px solid rgba(255, 255, 255, 0.3)}.custom-select.svelte-61kue1:hover{background-color:rgba(255, 255, 255, 0.12);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}",
  map: '{"version":3,"file":"MusicPlayer.svelte","sources":["MusicPlayer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { tweened } from \\"svelte/motion\\";\\nimport { cubicOut } from \\"svelte/easing\\";\\nimport {\\n  ALL_MUSIC,\\n  INITIAL_VOLUME,\\n  PROGRESS_UPDATE_DURATION\\n} from \\"../utils/musicPlaylists\\";\\nlet musicIndex = 0;\\nlet isPlaying = false;\\nlet audio;\\nlet progress = tweened(0, {\\n  duration: PROGRESS_UPDATE_DURATION,\\n  easing: cubicOut\\n});\\nlet currentTime = \\"0:00\\";\\nlet duration = \\"0:00\\";\\nlet volume = INITIAL_VOLUME;\\nlet isMuted = false;\\nlet isPlaylistVisible = false;\\nlet repeatMode = \\"shuffle\\";\\nlet selectedGenre = \\"All\\";\\nlet isGenreDropdownOpen = false;\\n$: genres = [\\"All\\", ...new Set(ALL_MUSIC.map((song) => song.genre))];\\n$: filteredPlaylist = selectedGenre === \\"All\\" ? ALL_MUSIC : ALL_MUSIC.filter((song) => song.genre === selectedGenre);\\n$: currentSong = ALL_MUSIC[musicIndex];\\nfunction getImagePath(imageName) {\\n  return new URL(`../assets/images/${imageName}`, import.meta.url).href;\\n}\\nonMount(() => {\\n  loadMusic(musicIndex);\\n  audio.addEventListener(\\"timeupdate\\", updateProgress);\\n  audio.addEventListener(\\"loadedmetadata\\", setTotalDuration);\\n  audio.addEventListener(\\"ended\\", handleSongEnd);\\n  return () => {\\n    audio.removeEventListener(\\"timeupdate\\", updateProgress);\\n    audio.removeEventListener(\\"loadedmetadata\\", setTotalDuration);\\n    audio.removeEventListener(\\"ended\\", handleSongEnd);\\n  };\\n});\\nfunction loadMusic(index) {\\n  musicIndex = index;\\n  audio.src = new URL(`../assets/mp3s/${ALL_MUSIC[index].src}`, import.meta.url).href;\\n  audio.load();\\n  if (\\"mediaSession\\" in navigator) {\\n    navigator.mediaSession.metadata = new MediaMetadata({\\n      title: ALL_MUSIC[index].name,\\n      artist: ALL_MUSIC[index].artist,\\n      artwork: [\\n        {\\n          src: getImagePath(ALL_MUSIC[index].img),\\n          sizes: \\"512x512\\",\\n          type: \\"image/png\\"\\n        }\\n      ]\\n    });\\n    navigator.mediaSession.setActionHandler(\\"play\\", () => {\\n      audio.play();\\n      isPlaying = true;\\n    });\\n    navigator.mediaSession.setActionHandler(\\"pause\\", () => {\\n      audio.pause();\\n      isPlaying = false;\\n    });\\n    navigator.mediaSession.setActionHandler(\\"previoustrack\\", prevSong);\\n    navigator.mediaSession.setActionHandler(\\"nexttrack\\", nextSong);\\n  }\\n}\\nfunction togglePlay() {\\n  if (isPlaying) {\\n    audio.pause();\\n  } else {\\n    audio.play();\\n  }\\n  isPlaying = !isPlaying;\\n}\\nfunction updateProgress() {\\n  const newProgress = audio.currentTime / audio.duration * 100;\\n  progress.set(newProgress);\\n  currentTime = formatTime(audio.currentTime);\\n}\\nfunction setTotalDuration() {\\n  duration = formatTime(audio.duration);\\n}\\nfunction formatTime(time) {\\n  const minutes = Math.floor(time / 60);\\n  const seconds = Math.floor(time % 60);\\n  return `${minutes}:${seconds.toString().padStart(2, \\"0\\")}`;\\n}\\nfunction setProgress(e) {\\n  const progressBar = e.currentTarget;\\n  const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;\\n  audio.currentTime = clickPosition * audio.duration;\\n}\\nfunction prevSong() {\\n  let newIndex = (musicIndex - 1 + ALL_MUSIC.length) % ALL_MUSIC.length;\\n  while (!filteredPlaylist.includes(ALL_MUSIC[newIndex])) {\\n    newIndex = (newIndex - 1 + ALL_MUSIC.length) % ALL_MUSIC.length;\\n  }\\n  musicIndex = newIndex;\\n  loadMusic(musicIndex);\\n  if (isPlaying) audio.play();\\n}\\nfunction nextSong() {\\n  let newIndex = (musicIndex + 1) % ALL_MUSIC.length;\\n  while (!filteredPlaylist.includes(ALL_MUSIC[newIndex])) {\\n    newIndex = (newIndex + 1) % ALL_MUSIC.length;\\n  }\\n  musicIndex = newIndex;\\n  loadMusic(musicIndex);\\n  if (isPlaying) audio.play();\\n}\\nfunction toggleMute() {\\n  audio.muted = !audio.muted;\\n  isMuted = audio.muted;\\n  if (isMuted) {\\n    volume = 0;\\n  } else {\\n    volume = audio.volume * 100;\\n  }\\n}\\nfunction changeVolume() {\\n  audio.volume = volume / 100;\\n  isMuted = volume === 0;\\n}\\nfunction togglePlaylist() {\\n  isPlaylistVisible = !isPlaylistVisible;\\n}\\nfunction selectSong(index) {\\n  musicIndex = getGlobalIndex(index);\\n  loadMusic(musicIndex);\\n  if (isPlaying) audio.play();\\n  isPlaylistVisible = false;\\n}\\nfunction toggleRepeatMode() {\\n  switch (repeatMode) {\\n    case \\"repeat\\":\\n      repeatMode = \\"repeat_one\\";\\n      break;\\n    case \\"repeat_one\\":\\n      repeatMode = \\"shuffle\\";\\n      break;\\n    case \\"shuffle\\":\\n      repeatMode = \\"repeat\\";\\n      break;\\n  }\\n}\\nfunction handleSongEnd() {\\n  switch (repeatMode) {\\n    case \\"repeat\\":\\n      nextSong();\\n      break;\\n    case \\"repeat_one\\":\\n      audio.currentTime = 0;\\n      audio.play();\\n      break;\\n    case \\"shuffle\\":\\n      let randIndex;\\n      do {\\n        randIndex = Math.floor(Math.random() * ALL_MUSIC.length);\\n      } while (randIndex === musicIndex);\\n      musicIndex = randIndex;\\n      loadMusic(musicIndex);\\n      audio.play();\\n      break;\\n  }\\n}\\nfunction changeGenre(genre) {\\n  selectedGenre = genre;\\n  isGenreDropdownOpen = false;\\n  const newFilteredPlaylist = selectedGenre === \\"All\\" ? ALL_MUSIC : ALL_MUSIC.filter((song) => song.genre === selectedGenre);\\n  if (!newFilteredPlaylist.includes(ALL_MUSIC[musicIndex])) {\\n    musicIndex = ALL_MUSIC.findIndex((song) => newFilteredPlaylist.includes(song));\\n    loadMusic(musicIndex);\\n    if (isPlaying) audio.play();\\n  } else {\\n    musicIndex = ALL_MUSIC.findIndex((song) => song === currentSong);\\n  }\\n  filteredPlaylist = newFilteredPlaylist;\\n}\\nfunction toggleGenreDropdown() {\\n  isGenreDropdownOpen = !isGenreDropdownOpen;\\n}\\nfunction getGlobalIndex(filteredIndex) {\\n  return ALL_MUSIC.findIndex((song) => song === filteredPlaylist[filteredIndex]);\\n}\\n<\/script>\\n\\n\\n<div\\n  class=\\"bg-white/10 backdrop-blur-md rounded-xl p-6 pb-8 text-white w-full max-w-md\\"\\n>\\n  <div class=\\"flex justify-between items-center mb-4\\">\\n    <h2 class=\\"text-xl font-semibold\\">Now Playing</h2>\\n    <div class=\\"flex items-center space-x-2\\">\\n      <div class=\\"relative\\">\\n        <button \\n          class=\\"custom-select w-40 appearance-none bg-white/10 backdrop-blur-sm border border-white/20 text-white py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white/20 focus:border-white transition-all duration-300  text-left\\"\\n          on:click={toggleGenreDropdown}\\n        >\\n          {selectedGenre}\\n        </button>\\n        <div class=\\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white\\">\\n          <svg class=\\"fill-current h-4 w-4 transform transition-transform duration-200\\" class:rotate-180={isGenreDropdownOpen} xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 20 20\\"><path d=\\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\\"/></svg>\\n        </div>\\n        \\n        {#if isGenreDropdownOpen}\\n          <div class=\\"absolute top-full left-0 mt-1 w-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50 overflow-hidden\\">\\n            {#each genres as genre}\\n              <button\\n  class={`w-40 text-left px-3 py-2 text-white hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:bg-white/20 ${genre === selectedGenre ? \'bg-white/15 font-semibold\' : \'\'}`}\\n  on:click={() => changeGenre(genre)}\\n>\\n\\n                {genre}\\n              </button>\\n            {/each}\\n          </div>\\n        {/if}\\n      </div>\\n      <button class=\\"focus:outline-none\\" on:click={togglePlaylist}>\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-6 w-6\\"\\n          fill=\\"none\\"\\n          viewBox=\\"0 0 24 24\\"\\n          stroke=\\"currentColor\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M4 6h16M4 10h16M4 14h16M4 18h16\\"\\n          />\\n        </svg>\\n      </button>\\n    </div>\\n  </div>\\n\\n\\n  <div class=\\"flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6\\">\\n    <div class=\\"w-24 h-24 bg-gray-600 rounded-full overflow-hidden flex-shrink-0 shadow-lg\\">\\n      <img\\n        src={getImagePath(currentSong.img)}\\n        alt=\\"Album Art\\"\\n        class=\\"w-full h-full object-cover\\"\\n        class:rotate={isPlaying}\\n      />\\n    </div>\\n    <div class=\\"flex-1 min-w-0 text-center md:text-left\\">\\n      <p class=\\"font-bold text-lg truncate\\">{currentSong.name}</p>\\n      <p class=\\"text-sm text-gray-300 truncate\\">{currentSong.artist}</p>\\n      <span class=\\"inline-block bg-blue-500 text-xs font-semibold px-2 py-1 rounded-full mt-1\\">{currentSong.genre}</span>\\n    </div>\\n  </div>\\n\\n\\n  <div class=\\"mb-4\\">\\n    <div\\n      class=\\"bg-white/20 rounded-full h-2 cursor-pointer overflow-hidden\\"\\n      on:click={setProgress}\\n    >\\n      <div\\n        class=\\"bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300 ease-out\\"\\n        style=\\"width: {$progress}%\\"\\n      ></div>\\n    </div>\\n    <div class=\\"flex justify-between text-sm mt-1\\">\\n      <span>{currentTime}</span>\\n      <span>{duration}</span>\\n    </div>\\n  </div>\\n\\n\\n  <div class=\\"flex justify-between items-center mb-4\\">\\n    <button\\n      class=\\"focus:outline-none transform transition hover:scale-110\\"\\n      on:click={toggleRepeatMode}\\n    >\\n      {#if repeatMode === \\"repeat\\"}\\n        <svg\\n          width=\\"24px\\"\\n          height=\\"24px\\"\\n          viewBox=\\"-0.5 0 25 25\\"\\n          fill=\\"none\\"\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n        >\\n          <path\\n            d=\\"M22 19.4199H8C6.4087 19.4199 4.88254 18.7878 3.75732 17.6626C2.63211 16.5374 2 15.0112 2 13.4199V11.6699\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M19 22.4199L22 19.4199L19 16.4199\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M2 5.41992H16C17.5913 5.41992 19.1174 6.05203 20.2426 7.17725C21.3678 8.30246 22 9.82862 22 11.4199V13.22\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M5 2.41992L2 5.41992L5 8.41992\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n        </svg>\\n      {:else if repeatMode === \\"repeat_one\\"}\\n        <svg\\n          width=\\"24px\\"\\n          height=\\"24px\\"\\n          viewBox=\\"0 0 24 24\\"\\n          fill=\\"none\\"\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-6 w-6\\"\\n        >\\n          <path\\n            d=\\"M17 17H8C6.33333 17 3 16 3 12\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M8 7H16C17.6667 7 21 8 21 12C21 13.4943 20.5348 14.57 19.865 15.3312\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M14.5 14.5L17 17L14.5 19.5\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n          <path\\n            d=\\"M4 8V5V3L2 4\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"1.5\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n        </svg>\\n      {:else}\\n        <svg\\n          width=\\"24px\\"\\n          height=\\"24px\\"\\n          viewBox=\\"0 0 24 24\\"\\n          fill=\\"none\\"\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-6 w-6\\"\\n        >\\n          <path\\n            d=\\"M18 15L21 18M21 18L18 21M21 18H18.5689C17.6297 18 17.1601 18 16.7338 17.8705C16.3564 17.7559 16.0054 17.5681 15.7007 17.3176C15.3565 17.0348 15.096 16.644 14.575 15.8626L14.3333 15.5M18 3L21 6M21 6L18 9M21 6H18.5689C17.6297 6 17.1601 6 16.7338 6.12945C16.3564 6.24406 16.0054 6.43194 15.7007 6.68236C15.3565 6.96523 15.096 7.35597 14.575 8.13744L9.42496 15.8626C8.90398 16.644 8.64349 17.0348 8.29933 17.3176C7.99464 17.5681 7.64357 17.7559 7.2662 17.8705C6.83994 18 6.37033 18 5.43112 18H3M3 6H5.43112C6.37033 6 6.83994 6 7.2662 6.12945C7.64357 6.24406 7.99464 6.43194 8.29933 6.68236C8.64349 6.96523 8.90398 7.35597 9.42496 8.13744L9.66667 8.5\\"\\n            stroke=\\"currentColor\\"\\n            stroke-width=\\"2\\"\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n          />\\n        </svg>\\n      {/if}\\n    </button>\\n    <button\\n      class=\\"focus:outline-none transform transition hover:scale-110\\"\\n      on:click={prevSong}\\n    >\\n      <svg\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n        class=\\"h-6 w-6\\"\\n        fill=\\"none\\"\\n        viewBox=\\"0 0 24 24\\"\\n        stroke=\\"currentColor\\"\\n      >\\n        <path\\n          stroke-linecap=\\"round\\"\\n          stroke-linejoin=\\"round\\"\\n          stroke-width=\\"2\\"\\n          d=\\"M11 19l-7-7 7-7m8 14l-7-7 7-7\\"\\n        />\\n      </svg>\\n    </button>\\n    <button\\n      class=\\"focus:outline-none transform transition hover:scale-110 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center\\"\\n      on:click={togglePlay}\\n    >\\n      {#if isPlaying}\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-8 w-8\\"\\n          fill=\\"none\\"\\n          viewBox=\\"0 0 24 24\\"\\n          stroke=\\"currentColor\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z\\"\\n          />\\n        </svg>\\n      {:else}\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-8 w-8\\"\\n          fill=\\"none\\"\\n          viewBox=\\"0 0 24 24\\"\\n          stroke=\\"currentColor\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z\\"\\n          />\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M21 12a9 9 0 11-18 0 9 9 0 0118 0z\\"\\n          />\\n        </svg>\\n      {/if}\\n    </button>\\n    <button\\n      class=\\"focus:outline-none transform transition hover:scale-110\\"\\n      on:click={nextSong}\\n    >\\n      <svg\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n        class=\\"h-6 w-6\\"\\n        fill=\\"none\\"\\n        viewBox=\\"0 0 24 24\\"\\n        stroke=\\"currentColor\\"\\n      >\\n        <path\\n          stroke-linecap=\\"round\\"\\n          stroke-linejoin=\\"round\\"\\n          stroke-width=\\"2\\"\\n          d=\\"M13 5l7 7-7 7M5 5l7 7-7 7\\"\\n        />\\n      </svg>\\n    </button>\\n    <button\\n      class=\\"focus:outline-none transform transition hover:scale-110\\"\\n      on:click={toggleMute}\\n    >\\n      {#if isMuted}\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-6 w-6\\"\\n          fill=\\"none\\"\\n          viewBox=\\"0 0 24 24\\"\\n          stroke=\\"currentColor\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z\\"\\n            clip-rule=\\"evenodd\\"\\n          />\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2\\"\\n          />\\n        </svg>\\n      {:else}\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          class=\\"h-6 w-6\\"\\n          fill=\\"none\\"\\n          viewBox=\\"0 0 24 24\\"\\n          stroke=\\"currentColor\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d=\\"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z\\"\\n          />\\n        </svg>\\n      {/if}\\n    </button>\\n  </div>\\n\\n\\n  <div class=\\"flex items-center mb-4\\">\\n    <svg\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      class=\\"h-5 w-5 mr-2\\"\\n      fill=\\"none\\"\\n      viewBox=\\"0 0 24 24\\"\\n      stroke=\\"currentColor\\"\\n    >\\n      <path\\n        stroke-linecap=\\"round\\"\\n        stroke-linejoin=\\"round\\"\\n        stroke-width=\\"2\\"\\n        d=\\"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z\\"\\n      />\\n    </svg>\\n    <input\\n      type=\\"range\\"\\n      min=\\"0\\"\\n      max=\\"100\\"\\n      bind:value={volume}\\n      on:input={changeVolume}\\n      class=\\"w-full\\"\\n    />\\n    <span class=\\"ml-2 text-sm\\">{volume}</span>\\n  </div>\\n\\n\\n  {#if isPlaying}\\n    <div class=\\"flex justify-center items-center h-12 mb-4\\">\\n      {#each Array(5) as _, i}\\n        <span\\n          class=\\"w-2 mx-1 h-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-full wave\\"\\n          style=\\"animation-delay: {i * 0.2}s\\"\\n        ></span>\\n      {/each}\\n    </div>\\n  {/if}\\n\\n\\n  {#if isPlaylistVisible}\\n    <div class=\\"mt-4 bg-white/5 rounded-lg p-4 max-h-60 overflow-y-auto custom-scrollbar\\">\\n      <h3 class=\\"text-lg font-semibold mb-2\\">Playlist</h3>\\n      <ul class=\\"px-2\\">\\n        {#each filteredPlaylist as song, index}\\n          <li class=\\"py-2 px-3 cursor-pointer hover:bg-white/10 rounded\\" on:click={() => selectSong(index)}>\\n            <div class=\\"flex justify-between items-center\\">\\n              <div>\\n                <p class=\\"font-medium\\">{song.name}</p>\\n                <p class=\\"text-sm text-gray-300\\">{song.artist}</p>\\n              </div>\\n              {#if song === currentSong}\\n                <svg xmlns=\\"http://www.w3.org/2000/svg\\" class=\\"h-6 w-6 text-blue-500\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\">\\n                  <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3\\" />\\n                </svg>\\n              {/if}\\n            </div>\\n          </li>\\n        {/each}\\n      </ul>\\n    </div>\\n  {/if}\\n</div>\\n\\n\\n<audio bind:this={audio}></audio>\\n\\n\\n<style>\\n  @keyframes rotation {\\n    from {\\n      transform: rotate(0deg);\\n    }\\n    to {\\n      transform: rotate(359deg);\\n    }\\n  }\\n\\n\\n  .rotate {\\n    animation: rotation 7s infinite linear;\\n  }\\n\\n\\n  @keyframes wave {\\n    0%,\\n    100% {\\n      transform: scaleY(0.5);\\n    }\\n    50% {\\n      transform: scaleY(1);\\n    }\\n  }\\n\\n\\n  .wave {\\n    animation: wave 1.5s ease-in-out infinite;\\n    transform-origin: bottom;\\n  }\\n\\n\\n  .custom-scrollbar {\\n    scrollbar-width: thin;\\n    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;\\n  }\\n\\n\\n  .custom-scrollbar::-webkit-scrollbar {\\n    width: 6px;\\n  }\\n\\n\\n  .custom-scrollbar::-webkit-scrollbar-track {\\n    background: transparent;\\n  }\\n\\n\\n  .custom-scrollbar::-webkit-scrollbar-thumb {\\n    background-color: rgba(255, 255, 255, 0.3);\\n    border-radius: 3px;\\n  }\\n\\n\\n  .custom-scrollbar::-webkit-scrollbar-thumb:hover {\\n    background-color: rgba(255, 255, 255, 0.5);\\n  }\\n\\n  /* Custom dropdown styling with transparent blur effect */\\n  .custom-select {\\n    backdrop-filter: blur(10px);\\n    -webkit-backdrop-filter: blur(10px);\\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\\n    border: 1px solid rgba(255, 255, 255, 0.18);\\n  }\\n\\n  .custom-select:focus {\\n    background-color: rgba(255, 255, 255, 0.15);\\n    backdrop-filter: blur(15px);\\n    -webkit-backdrop-filter: blur(15px);\\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);\\n    border: 1px solid rgba(255, 255, 255, 0.3);\\n  }\\n\\n  .custom-select:hover {\\n    background-color: rgba(255, 255, 255, 0.12);\\n    backdrop-filter: blur(12px);\\n    -webkit-backdrop-filter: blur(12px);\\n  }\\n</style>"],"names":[],"mappings":"AAujBE,WAAW,sBAAS,CAClB,IAAK,CACH,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,EAAG,CACD,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF,CAGA,qBAAQ,CACN,SAAS,CAAE,sBAAQ,CAAC,EAAE,CAAC,QAAQ,CAAC,MAClC,CAGA,WAAW,kBAAK,CACd,EAAE,CACF,IAAK,CACH,SAAS,CAAE,OAAO,GAAG,CACvB,CACA,GAAI,CACF,SAAS,CAAE,OAAO,CAAC,CACrB,CACF,CAGA,mBAAM,CACJ,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,WAAW,CAAC,QAAQ,CACzC,gBAAgB,CAAE,MACpB,CAGA,+BAAkB,CAChB,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,WAC5C,CAGA,+BAAiB,mBAAoB,CACnC,KAAK,CAAE,GACT,CAGA,+BAAiB,yBAA0B,CACzC,UAAU,CAAE,WACd,CAGA,+BAAiB,yBAA0B,CACzC,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,aAAa,CAAE,GACjB,CAGA,+BAAiB,yBAAyB,MAAO,CAC/C,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CAGA,4BAAe,CACb,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,uBAAuB,CAAE,KAAK,IAAI,CAAC,CACnC,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC5C,CAEA,4BAAc,MAAO,CACnB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,uBAAuB,CAAE,KAAK,IAAI,CAAC,CACnC,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/C,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CAEA,4BAAc,MAAO,CACnB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,uBAAuB,CAAE,KAAK,IAAI,CACpC"}'
};
function getImagePath(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}
const MusicPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSong;
  let $progress, $$unsubscribe_progress;
  let musicIndex = 0;
  let audio;
  let progress = tweened(0, {
    duration: PROGRESS_UPDATE_DURATION,
    easing: cubicOut
  });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  let currentTime = "0:00";
  let duration = "0:00";
  let volume = INITIAL_VOLUME;
  let selectedGenre = "All";
  $$result.css.add(css$6);
  ["All", ...new Set(ALL_MUSIC.map((song) => song.genre))];
  currentSong = ALL_MUSIC[musicIndex];
  $$unsubscribe_progress();
  return `<div class="bg-white/10 backdrop-blur-md rounded-xl p-6 pb-8 text-white w-full max-w-md"><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-semibold" data-svelte-h="svelte-a5uptk">Now Playing</h2> <div class="flex items-center space-x-2"><div class="relative"><button class="custom-select w-40 appearance-none bg-white/10 backdrop-blur-sm border border-white/20 text-white py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white/20 focus:border-white transition-all duration-300 text-left svelte-61kue1">${escape(selectedGenre)}</button> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white"><svg class="${[
    "fill-current h-4 w-4 transform transition-transform duration-200",
    ""
  ].join(" ").trim()}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div> ${``}</div> <button class="focus:outline-none" data-svelte-h="svelte-1nu548x"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg></button></div></div> <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6"><div class="w-24 h-24 bg-gray-600 rounded-full overflow-hidden flex-shrink-0 shadow-lg"><img${add_attribute("src", getImagePath(currentSong.img), 0)} alt="Album Art" class="${["w-full h-full object-cover svelte-61kue1", ""].join(" ").trim()}"></div> <div class="flex-1 min-w-0 text-center md:text-left"><p class="font-bold text-lg truncate">${escape(currentSong.name)}</p> <p class="text-sm text-gray-300 truncate">${escape(currentSong.artist)}</p> <span class="inline-block bg-blue-500 text-xs font-semibold px-2 py-1 rounded-full mt-1">${escape(currentSong.genre)}</span></div></div> <div class="mb-4"><div class="bg-white/20 rounded-full h-2 cursor-pointer overflow-hidden"><div class="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300 ease-out" style="${"width: " + escape($progress, true) + "%"}"></div></div> <div class="flex justify-between text-sm mt-1"><span>${escape(currentTime)}</span> <span>${escape(duration)}</span></div></div> <div class="flex justify-between items-center mb-4"><button class="focus:outline-none transform transition hover:scale-110">${`${`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M18 15L21 18M21 18L18 21M21 18H18.5689C17.6297 18 17.1601 18 16.7338 17.8705C16.3564 17.7559 16.0054 17.5681 15.7007 17.3176C15.3565 17.0348 15.096 16.644 14.575 15.8626L14.3333 15.5M18 3L21 6M21 6L18 9M21 6H18.5689C17.6297 6 17.1601 6 16.7338 6.12945C16.3564 6.24406 16.0054 6.43194 15.7007 6.68236C15.3565 6.96523 15.096 7.35597 14.575 8.13744L9.42496 15.8626C8.90398 16.644 8.64349 17.0348 8.29933 17.3176C7.99464 17.5681 7.64357 17.7559 7.2662 17.8705C6.83994 18 6.37033 18 5.43112 18H3M3 6H5.43112C6.37033 6 6.83994 6 7.2662 6.12945C7.64357 6.24406 7.99464 6.43194 8.29933 6.68236C8.64349 6.96523 8.90398 7.35597 9.42496 8.13744L9.66667 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`}`}</button> <button class="focus:outline-none transform transition hover:scale-110" data-svelte-h="svelte-5a6rxx"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg></button> <button class="focus:outline-none transform transition hover:scale-110 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">${`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`}</button> <button class="focus:outline-none transform transition hover:scale-110" data-svelte-h="svelte-vcnx5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></button> <button class="focus:outline-none transform transition hover:scale-110">${`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`}</button></div> <div class="flex items-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg> <input type="range" min="0" max="100" class="w-full"${add_attribute("value", volume, 0)}> <span class="ml-2 text-sm">${escape(volume)}</span></div> ${``} ${``}</div> <audio${add_attribute("this", audio, 0)}></audio>`;
});
const css$5 = {
  code: '@keyframes svelte-vwl0ri-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.font-sf.svelte-vwl0ri{font-family:-apple-system, BlinkMacSystemFont, "San Francisco",\n      "Helvetica Neue", sans-serif}',
  map: '{"version":3,"file":"Desktop.svelte","sources":["Desktop.svelte"],"sourcesContent":["<script lang=\\"ts\\">import TopBar from \\"./TopBar.svelte\\";\\nimport MusicPlayer from \\"./MusicPlayer.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nlet currentTime = /* @__PURE__ */ new Date();\\nonMount(() => {\\n  const timer = setInterval(() => {\\n    currentTime = /* @__PURE__ */ new Date();\\n  }, 1e3);\\n  return () => {\\n    clearInterval(timer);\\n  };\\n});\\n<\/script>\\n\\n<div class=\\"h-screen w-screen bg-[#2D3748] overflow-hidden font-sf\\">\\n  <TopBar />\\n  <div class=\\"p-4 flex flex-col items-start\\">\\n    <!-- Clock Widget -->\\n    <div\\n      class=\\"bg-white/10 backdrop-blur-md rounded-xl p-6 text-white w-full max-w-md mb-4 shadow-lg\\"\\n    >\\n      <div class=\\"flex flex-col items-center\\">\\n        <div class=\\"text-6xl font-light mb-2\\">\\n          {currentTime.toLocaleTimeString(\\"en-US\\", {\\n            hour: \\"2-digit\\",\\n            minute: \\"2-digit\\",\\n            hour12: true,\\n          })}\\n        </div>\\n        <div class=\\"text-lg font-medium\\">\\n          {currentTime.toLocaleDateString(\\"en-US\\", {\\n            weekday: \\"long\\",\\n            month: \\"long\\",\\n            day: \\"numeric\\",\\n          })}\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- Music Player Widget -->\\n    <MusicPlayer />\\n  </div>\\n</div>\\n\\n<style>\\n  @keyframes gradient {\\n    0% {\\n      background-position: 0% 50%;\\n    }\\n    50% {\\n      background-position: 100% 50%;\\n    }\\n    100% {\\n      background-position: 0% 50%;\\n    }\\n  }\\n\\n  .bg-gradient-to-r {\\n    background-size: 200% 200%;\\n    animation: gradient 5s ease infinite;\\n  }\\n\\n  .font-sf {\\n    font-family: -apple-system, BlinkMacSystemFont, \\"San Francisco\\",\\n      \\"Helvetica Neue\\", sans-serif;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6CE,WAAW,sBAAS,CAClB,EAAG,CACD,mBAAmB,CAAE,EAAE,CAAC,GAC1B,CACA,GAAI,CACF,mBAAmB,CAAE,IAAI,CAAC,GAC5B,CACA,IAAK,CACH,mBAAmB,CAAE,EAAE,CAAC,GAC1B,CACF,CAOA,sBAAS,CACP,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,eAAe;AACnE,MAAM,gBAAgB,CAAC,CAAC,UACtB"}'
};
const Desktop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTime = /* @__PURE__ */ new Date();
  $$result.css.add(css$5);
  return `<div class="h-screen w-screen bg-[#2D3748] overflow-hidden font-sf svelte-vwl0ri">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="p-4 flex flex-col items-start"> <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white w-full max-w-md mb-4 shadow-lg"><div class="flex flex-col items-center"><div class="text-6xl font-light mb-2">${escape(currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }))}</div> <div class="text-lg font-medium">${escape(currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }))}</div></div></div>  ${validate_component(MusicPlayer, "MusicPlayer").$$render($$result, {}, {}, {})}</div> </div>`;
});
const windows = writable([]);
let nextZIndex = 1;
function addWindow(type) {
  if (type === "github") {
    window.open("https://github.com/ansxuman", "_blank");
    return;
  }
  const currentWindows = get_store_value(windows);
  const existingWindow = currentWindows.find((w) => w.type === type);
  if (existingWindow) {
    focusWindow(existingWindow.id);
    if (existingWindow.minimized) {
      toggleMinimize(existingWindow.id);
    }
    return;
  }
  const windowWidth = 900;
  const windowHeight = 600;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const newWindow = {
    id: `${type}-${Date.now()}`,
    type,
    minimized: false,
    maximized: false,
    position: {
      x: (screenWidth - windowWidth) / 2,
      y: (screenHeight - windowHeight) / 2
    },
    size: { width: windowWidth, height: windowHeight },
    zIndex: nextZIndex++
  };
  windows.update((w) => [...w, newWindow]);
}
function focusWindow(id) {
  windows.update((currentWindows) => {
    return currentWindows.map((w) => ({
      ...w,
      zIndex: w.id === id ? nextZIndex++ : w.zIndex
    })).sort((a, b) => a.zIndex - b.zIndex);
  });
}
function toggleMinimize(id) {
  windows.update(
    (currentWindows) => currentWindows.map(
      (w) => w.id === id ? { ...w, minimized: !w.minimized } : w
    )
  );
}
function isAppRunning(type) {
  const currentWindows = get_store_value(windows);
  return currentWindows.some((w) => w.type === type && !w.minimized);
}
function isAppMinimized(type) {
  const currentWindows = get_store_value(windows);
  return currentWindows.some((w) => w.type === type && w.minimized);
}
const launchpad = "/_app/immutable/assets/launchpad.CgD6-Nla.png";
const terminal = "/_app/immutable/assets/terminal.0clKkOCv.avif";
const safari = "/_app/immutable/assets/safari.BEygW2Sh.png";
const photos = "/_app/immutable/assets/photos.8hGOpb6v.avif";
const projects$1 = "/_app/immutable/assets/projects.CAEO0KFT.png";
const github = "/_app/immutable/assets/github.CYmlC3Ue.png";
const css$4 = {
  code: ".dock.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t{height:68px}.dock-item.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t{position:relative;display:flex;height:3rem;width:3rem;cursor:pointer;align-items:center;justify-content:center;border-radius:9999px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));transition:all 0.2s ease}.dock.svelte-10wpr0t:hover .dock-item.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t{transform:translateY(0px) scale(1)}.dock.svelte-10wpr0t .dock-item.svelte-10wpr0t.svelte-10wpr0t.svelte-10wpr0t:hover{transform:translateY(-10px) scale(1.2)}.dock.svelte-10wpr0t:hover .dock-item.svelte-10wpr0t:hover+.dock-item.svelte-10wpr0t.svelte-10wpr0t{transform:translateY(-5px) scale(1.1)}.dock.svelte-10wpr0t:hover .dock-item.svelte-10wpr0t:hover+.dock-item.svelte-10wpr0t+.dock-item.svelte-10wpr0t{transform:translateY(-2px) scale(1.05)}",
  map: `{"version":3,"file":"Dock.svelte","sources":["Dock.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher, onMount } from \\"svelte\\";\\nimport { windows } from \\"../stores/windowStore\\";\\nexport let isAppRunning;\\nexport let isAppMinimized;\\nexport let addWindow;\\nimport launchpad from \\"$lib/assets/icons/launchpad.png\\";\\nimport terminal from \\"$lib/assets/icons/terminal.avif\\";\\nimport safari from \\"$lib/assets/icons/safari.png\\";\\nimport photos from \\"$lib/assets/icons/photos.avif\\";\\nimport blog from \\"$lib/assets/icons/blog.png\\";\\nimport projects from \\"$lib/assets/icons/projects.png\\";\\nimport github from \\"$lib/assets/icons/github.png\\";\\nimport clave from \\"$lib/assets/icons/clave.png\\";\\nconst dispatch = createEventDispatcher();\\nlet showPopup = false;\\nlet windowWidth = 0;\\nonMount(() => {\\n  windowWidth = window.innerWidth;\\n  const handleResize = () => {\\n    windowWidth = window.innerWidth;\\n  };\\n  window.addEventListener(\\"resize\\", handleResize);\\n  return () => {\\n    window.removeEventListener(\\"resize\\", handleResize);\\n  };\\n});\\nfunction handleDockClick(appType) {\\n  if (!isLargeScreen && appType !== \\"github\\" && appType !== \\"clave\\") {\\n    showPopup = true;\\n  } else {\\n    if (appType === \\"launchpad\\") {\\n      dispatch(\\"openLaunchpad\\");\\n    } else if (appType === \\"github\\") {\\n      window.open(\\"https://github.com/ashirabdulrehmandev\\", \\"_blank\\");\\n    } else {\\n      addWindow(appType);\\n    }\\n  }\\n}\\nfunction closePopup() {\\n  showPopup = false;\\n}\\n$: terminalWindow = $windows.find((w) => w.type === \\"terminal\\");\\n$: safariWindow = $windows.find((w) => w.type === \\"safari\\");\\n$: photosWindow = $windows.find((w) => w.type === \\"photos\\");\\n$: blogWindow = $windows.find((w) => w.type === \\"blog\\");\\n$: projectsWindow = $windows.find((w) => w.type === \\"projects\\");\\n$: isLargeScreen = windowWidth >= 1024;\\n<\/script>\\n\\n<div class=\\"dock fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex space-x-4 items-end\\">\\n  <div class=\\"dock-item\\" on:click={() => handleDockClick('launchpad')}>\\n    <img src={launchpad} alt=\\"Launchpad\\" class=\\"h-12 w-12\\" />\\n  </div>\\n  \\n  <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"terminal\\")}>\\n    <img src={terminal} alt=\\"Terminal\\" class=\\"h-12 w-12\\" />\\n    {#if terminalWindow}\\n      <div class=\\"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full\\"></div>\\n    {/if}\\n  </div>\\n  \\n  {#if isLargeScreen}\\n    <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"safari\\")}>\\n      <img src={safari} alt=\\"safari\\" class=\\"h-12 w-12\\" />\\n      {#if safariWindow}\\n        <div class=\\"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full\\"></div>\\n      {/if}\\n    </div>\\n  {/if}\\n\\n  <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"photos\\")}>\\n    <img src={photos} alt=\\"Photos\\" class=\\"h-12 w-12\\" />\\n    {#if photosWindow}\\n      <div class=\\"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full\\"></div>\\n    {/if}\\n  </div>\\n\\n  <!-- {#if isLargeScreen}\\n  <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"blog\\")}>\\n    <img src={blog} alt=\\"Blog\\" class=\\"h-12 w-12\\" />\\n    {#if blogWindow}\\n      <div class=\\"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full\\"></div>\\n    {/if}\\n    </div>\\n  {/if} -->\\n\\n  <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"projects\\")}>\\n    <img src={projects} alt=\\"Projects\\" class=\\"h-12 w-12\\" />\\n    {#if projectsWindow}\\n      <div class=\\"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full\\"></div>\\n    {/if}\\n  </div>\\n\\n  <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"github\\")}>\\n    <img src={github} alt=\\"Github\\" class=\\"h-12 w-12\\" />\\n  </div>\\n\\n  <!-- <div class=\\"dock-item\\" on:click={() => handleDockClick(\\"clave\\")}>\\n    <img src={clave} alt=\\"Clave\\" class=\\"h-12 w-12\\" />\\n  </div> -->\\n</div>\\n\\n\\n{#if showPopup}\\n  <div class=\\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\\">\\n    <div class=\\"bg-white rounded-lg p-6 shadow-lg text-center max-w-sm mx-auto\\">\\n      <h2 class=\\"text-lg font-semibold mb-4\\">Limited Features</h2>\\n      <p class=\\"mb-4\\">For full feature access, please use a desktop device.</p>\\n      <button class=\\"bg-blue-500 text-white px-4 py-2 rounded\\" on:click={closePopup}>Close</button>\\n    </div>\\n  </div>\\n{/if}\\n\\n<style>\\n  .dock {\\n    height: 68px;\\n  }\\n\\n  .dock-item {\\n    position: relative;\\n    display: flex;\\n    height: 3rem;\\n    width: 3rem;\\n    cursor: pointer;\\n    align-items: center;\\n    justify-content: center;\\n    border-radius: 9999px;\\n    --tw-text-opacity: 1;\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\\n    transition: all 0.2s ease;\\n}\\n\\n  .dock:hover .dock-item {\\n    transform: translateY(0px) scale(1);\\n  }\\n\\n  .dock .dock-item:hover {\\n    transform: translateY(-10px) scale(1.2);\\n  }\\n\\n  .dock:hover .dock-item:hover + .dock-item {\\n    transform: translateY(-5px) scale(1.1);\\n  }\\n\\n  .dock:hover .dock-item:hover + .dock-item + .dock-item {\\n    transform: translateY(-2px) scale(1.05);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAmHE,iEAAM,CACJ,MAAM,CAAE,IACV,CAEA,sEAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,MAAM,CACrB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CACnD,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACzB,CAEE,oBAAK,MAAM,CAAC,uDAAW,CACrB,SAAS,CAAE,WAAW,GAAG,CAAC,CAAC,MAAM,CAAC,CACpC,CAEA,oBAAK,CAAC,uDAAU,MAAO,CACrB,SAAS,CAAE,WAAW,KAAK,CAAC,CAAC,MAAM,GAAG,CACxC,CAEA,oBAAK,MAAM,CAAC,yBAAU,MAAM,CAAG,wCAAW,CACxC,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,MAAM,GAAG,CACvC,CAEA,oBAAK,MAAM,CAAC,yBAAU,MAAM,CAAG,yBAAU,CAAG,yBAAW,CACrD,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,MAAM,IAAI,CACxC"}`
};
const Dock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let terminalWindow;
  let safariWindow;
  let photosWindow;
  let projectsWindow;
  let isLargeScreen;
  let $windows, $$unsubscribe_windows;
  $$unsubscribe_windows = subscribe(windows, (value) => $windows = value);
  let { isAppRunning: isAppRunning2 } = $$props;
  let { isAppMinimized: isAppMinimized2 } = $$props;
  let { addWindow: addWindow2 } = $$props;
  createEventDispatcher();
  let windowWidth = 0;
  if ($$props.isAppRunning === void 0 && $$bindings.isAppRunning && isAppRunning2 !== void 0) $$bindings.isAppRunning(isAppRunning2);
  if ($$props.isAppMinimized === void 0 && $$bindings.isAppMinimized && isAppMinimized2 !== void 0) $$bindings.isAppMinimized(isAppMinimized2);
  if ($$props.addWindow === void 0 && $$bindings.addWindow && addWindow2 !== void 0) $$bindings.addWindow(addWindow2);
  $$result.css.add(css$4);
  terminalWindow = $windows.find((w) => w.type === "terminal");
  safariWindow = $windows.find((w) => w.type === "safari");
  photosWindow = $windows.find((w) => w.type === "photos");
  $windows.find((w) => w.type === "blog");
  projectsWindow = $windows.find((w) => w.type === "projects");
  isLargeScreen = windowWidth >= 1024;
  $$unsubscribe_windows();
  return `<div class="dock fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex space-x-4 items-end svelte-10wpr0t"><div class="dock-item svelte-10wpr0t" data-svelte-h="svelte-16sg68x"><img${add_attribute("src", launchpad, 0)} alt="Launchpad" class="h-12 w-12"></div> <div class="dock-item svelte-10wpr0t"><img${add_attribute("src", terminal, 0)} alt="Terminal" class="h-12 w-12"> ${terminalWindow ? `<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>` : ``}</div> ${isLargeScreen ? `<div class="dock-item svelte-10wpr0t"><img${add_attribute("src", safari, 0)} alt="safari" class="h-12 w-12"> ${safariWindow ? `<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>` : ``}</div>` : ``} <div class="dock-item svelte-10wpr0t"><img${add_attribute("src", photos, 0)} alt="Photos" class="h-12 w-12"> ${photosWindow ? `<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>` : ``}</div>  <div class="dock-item svelte-10wpr0t"><img${add_attribute("src", projects$1, 0)} alt="Projects" class="h-12 w-12"> ${projectsWindow ? `<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>` : ``}</div> <div class="dock-item svelte-10wpr0t" data-svelte-h="svelte-i1vx9i"><img${add_attribute("src", github, 0)} alt="Github" class="h-12 w-12"></div> </div> ${``}`;
});
const ashir = {
  about: "Hey, I'm Ashir, a Web Developer with a keen interest in building scalable, beautiful \nand secure applications.Always eager to learn and experiment with new technologies.",
  code: ["Svelte", "TS", "JS", "React.JS", "Next.JS", "Express", "Python"],
  interests: [
    "Full-Stack Development",
    "Helping people on Discord",
    "Experimenting with New Technologies"
  ],
  operatingSystems: ["Ubuntu", "Windows", "Linux Mint"],
  toolsUsed: ["Docker", "Git", "Termius", "Postman"],
  ides: ["Cursor", "Zed", "VSCode"]
};
const initialProjects = [
  {
    id: "macOS-Themed-Portfolio",
    name: "macOS Themed Portfolio",
    icon: "svelte",
    shortDescription: "An interactive portfolio website inspired by the macOS interface, built with SvelteKit, TailwindCSS, and TypeScript.",
    githubUrl: "https://github.com/ashirabdulrehmandev/Portfolio",
    readmeUrl: "https://raw.githubusercontent.com/ashirabdulrehmandev/Portfolio/refs/heads/main/README.md",
    technologies: ["Svelte", "TypeScript", "TailwindCSS"],
    type: "application"
  },
  {
    id: "Ecomerece Website",
    name: "Ecomerece Website",
    icon: "nextjs",
    shortDescription: "An interactive Ecomerece website , built with NextJs, Sass, and MongoDB.",
    githubUrl: "https://github.com/ashirabdulrehmandev/macOS-Themed-Portfolio",
    readmeUrl: "https://raw.githubusercontent.com/ashirabdulrehman/macOS-Themed-Portfolio/main/README.md",
    technologies: ["NextJs", "Sass", "MongoDB"],
    type: "application"
  },
  {
    id: "Music Player",
    name: "Music Player",
    icon: "react",
    shortDescription: "An interactive and functional Music PLayer , built with React and Sass.",
    githubUrl: "https://github.com/ashirabdulrehmandev/spotify-clone",
    readmeUrl: "https://raw.githubusercontent.com/ashirabdulrehmandev/spotify-clone/refs/heads/main/README.md",
    technologies: ["React", "Sass"],
    type: "application"
  }
];
const projects = writable(initialProjects);
function syncProjectsToFileSystem(fileSystem2) {
  const projectsList = get_store_value(projects);
  if (!fileSystem2.home.projects || typeof fileSystem2.home.projects !== "object") {
    fileSystem2.home.projects = {};
  }
  projectsList.forEach((project) => {
    fileSystem2.home.projects[project.id] = `
Name: ${project.name}
Type: ${project.type}
Description: ${project.shortDescription}
Technologies: ${project.technologies.join(", ")}
GitHub: ${project.githubUrl}
    `.trim();
  });
}
const fileSystem = {
  home: {
    about: `
${ashir.about}

Programming Languages:
${ashir.code.join(", ")}

Operating Systems:
${ashir.operatingSystems.join(", ")}

Tools Used:
${ashir.toolsUsed.join(", ")}

IDEs:
${ashir.ides.join(", ")}
    `,
    projects: {},
    interests: `
${ashir.interests.join("\n")}
    `
  }
};
syncProjectsToFileSystem(fileSystem);
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { startDrag } = $$props;
  let { window: window2 } = $$props;
  let terminalLines = [];
  let terminalRef;
  let currentDirectory = ["home"];
  if ($$props.startDrag === void 0 && $$bindings.startDrag && startDrag !== void 0) $$bindings.startDrag(startDrag);
  if ($$props.window === void 0 && $$bindings.window && window2 !== void 0) $$bindings.window(window2);
  return `<div class="bg-gray-900/40 backdrop-blur-md h-full border border-white/20"> <div class="bg-gray-800/80 px-4 py-2 flex items-center cursor-move"><div class="flex space-x-2"><div class="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div> <div class="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div></div> <div class="flex-grow text-center text-sm text-gray-400">ashir@macbook: ~/${escape(currentDirectory.join("/"))}</div></div>  <div class="bg-black/30 p-4 overflow-y-auto" style="height: calc(100% - 80px);"${add_attribute("this", terminalRef, 0)}>${each(terminalLines, (line) => {
    return `<br> <span class="text-gray-200 whitespace-pre"><!-- HTML_TAG_START -->${line}<!-- HTML_TAG_END --> </span>`;
  })}</div>  ${``}</div>`;
});
const css$3 = {
  code: ".font-sf.svelte-1gbubtw{font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif}",
  map: `{"version":3,"file":"Safari.svelte","sources":["Safari.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { closeWindow, toggleMinimize, toggleMaximize } from \\"../stores/windowStore\\";\\nimport { onMount } from \\"svelte\\";\\nexport let startDrag;\\nexport let window;\\nlet url = \\"\\";\\nlet iframeUrl = \\"\\";\\nlet isLoading = false;\\nlet canGoBack = false;\\nlet canGoForward = false;\\nlet iframeElement;\\nlet showHomepage = true;\\nfunction handleSubmit() {\\n  if (url) {\\n    navigateTo(url);\\n  }\\n}\\nfunction navigateTo(newUrl) {\\n  if (!newUrl.startsWith(\\"http://\\") && !newUrl.startsWith(\\"https://\\")) {\\n    newUrl = \\"https://\\" + newUrl;\\n  }\\n  isLoading = true;\\n  iframeUrl = newUrl;\\n  url = newUrl;\\n  showHomepage = false;\\n}\\nfunction openEndlessHorse(url2) {\\n  if (typeof globalThis !== \\"undefined\\") {\\n    globalThis.window.open(url2, \\"_blank\\");\\n  }\\n}\\nfunction goBack() {\\n  if (canGoBack) {\\n    isLoading = true;\\n    iframeElement.contentWindow?.history.back();\\n  }\\n}\\nfunction goForward() {\\n  if (canGoForward) {\\n    isLoading = true;\\n    iframeElement.contentWindow?.history.forward();\\n  }\\n}\\nfunction refresh() {\\n  isLoading = true;\\n  iframeElement.src = iframeElement.src;\\n}\\nfunction goHome() {\\n  iframeUrl = \\"\\";\\n  url = \\"\\";\\n  isLoading = false;\\n  showHomepage = true;\\n}\\nonMount(() => {\\n  const handleMessage = (event) => {\\n    if (event.data.type === \\"navigate\\") {\\n      navigateTo(event.data.url);\\n    }\\n  };\\n  globalThis.addEventListener(\\"message\\", handleMessage);\\n  return () => {\\n    globalThis.removeEventListener(\\"message\\", handleMessage);\\n  };\\n});\\n<\/script>\\n\\n<div class=\\"bg-white h-full rounded-lg flex flex-col overflow-hidde font-sf\\">\\n  <!-- Safari Header -->\\n  <div class=\\"bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200\\" on:mousedown={(e) => startDrag(e, window.id, \\"move\\")}>\\n    <div class=\\"flex space-x-2 mr-4\\">\\n      <button class=\\"w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none\\" on:click={() => closeWindow(window.id)}>\\n        <svg class=\\"w-3 h-3 text-red-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M6 18L18 6M6 6l12 12\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none\\" on:click={() => toggleMinimize(window.id)}>\\n        <svg class=\\"w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M20 12H4\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none\\" on:click={() => toggleMaximize(window.id)}>\\n        <svg class=\\"w-3 h-3 text-green-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3\\" />\\n        </svg>\\n      </button>\\n    </div>\\n    <div class=\\"flex-grow flex items-center space-x-2\\">\\n      <button class=\\"text-gray-600 hover:text-gray-800 disabled:opacity-50\\" on:click={goBack} disabled={!canGoBack}>\\n        <svg class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M15 19l-7-7 7-7\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"text-gray-600 hover:text-gray-800 disabled:opacity-50\\" on:click={goForward} disabled={!canGoForward}>\\n        <svg class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M9 5l7 7-7 7\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"text-gray-600 hover:text-gray-800\\" on:click={refresh}>\\n        <svg class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"text-gray-600 hover:text-gray-800\\" on:click={goHome}>\\n        <svg class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\\" />\\n        </svg>\\n      </button>\\n      <form on:submit|preventDefault={handleSubmit} class=\\"flex-grow\\">\\n        <input \\n          type=\\"text\\" \\n          bind:value={url} \\n          class=\\"w-full px-3 py-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm\\"\\n          placeholder=\\"Enter URL\\"\\n        />\\n      </form>\\n    </div>\\n  </div>\\n\\n  <!-- Safari Body -->\\n  <div class=\\"flex-grow relative\\">\\n    {#if showHomepage}\\n    <div class=\\"min-h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center\\">\\n      <div class=\\"text-center text-white\\">\\n        <h1 class=\\"text-4xl font-bold mb-4\\">Welcome to Safari</h1>\\n        <p class=\\"text-xl mb-4\\">Explore the web with ease</p>\\n        <p class=\\"text-sm mb-8\\">Note: Some websites may not load due to security restrictions</p>\\n        <div class=\\"flex space-x-4 justify-center\\">\\n          <button on:click={() => openEndlessHorse('http://endless.horse/')} class=\\"bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-200 flex items-center justify-center\\">\\n            <span class=\\"mr-2 text-sm\\">Endless Horse</span>\\n            <!-- <svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" version=\\"1.1\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 256 256\\" xml:space=\\"preserve\\" class=\\"w-5 h-5\\">\\n              <g style=\\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\\" transform=\\"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)\\">\\n                <path d=\\"M 30 15 C 13.431 15 0 28.431 0 45 s 13.431 30 30 30 s 30 -13.431 30 -30 S 46.569 15 30 15 z M 30 54 c -4.971 0 -9 -4.029 -9 -9 s 4.029 -9 9 -9 s 9 4.029 9 9 c 0.007 4.964 -4.012 8.993 -8.976 9 C 30.016 54 30.008 54 30 54 z\\" style=\\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,174,239); fill-rule: nonzero; opacity: 1;\\" transform=\\" matrix(1 0 0 1 0 0) \\" stroke-linecap=\\"round\\" />\\n                <path d=\\"M 63.72 37.5 c 7.622 2.194 16.62 0 16.62 0 c -2.611 11.4 -10.891 18.54 -22.831 19.409 C 52.777 67.893 41.96 75.007 30 75 l 9 -28.606 C 48.252 16.992 52.994 15 74.935 15 H 90 C 87.48 26.1 78.794 34.579 63.72 37.5 z\\" style=\\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,140,207); fill-rule: nonzero; opacity: 1;\\" transform=\\" matrix(1 0 0 1 0 0) \\" stroke-linecap=\\"round\\" />\\n              </g>\\n            </svg> -->\\n            <!-- <span class=\\"ml-2 text-sm\\"></span> -->\\n          </button>\\n          <button on:click={() => navigateTo('https://www.wikipedia.org')} class=\\"bg-white text-purple-500 px-6 py-2 rounded-full hover:bg-purple-100 transition duration-200\\">\\n            Wikipedia\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n    {:else}\\n      {#if isLoading}\\n        <div class=\\"absolute inset-0 flex items-center justify-center bg-white\\">\\n          <svg class=\\"animate-spin h-8 w-8 text-blue-500\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\">\\n            <circle class=\\"opacity-25\\" cx=\\"12\\" cy=\\"12\\" r=\\"10\\" stroke=\\"currentColor\\" stroke-width=\\"4\\"></circle>\\n            <path class=\\"opacity-75\\" fill=\\"currentColor\\" d=\\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\\"></path>\\n          </svg>\\n        </div>\\n      {/if}\\n      <iframe \\n      bind:this={iframeElement}\\n      src={iframeUrl}\\n      title=\\"browser-frame\\" \\n      class=\\"w-full h-full border-none\\"\\n      on:load={() => {\\n        isLoading = false;\\n        try {\\n          canGoBack = iframeElement.contentWindow?.history.length > 1;\\n          canGoForward = false;\\n          url = iframeElement.contentWindow?.location.href || url;\\n        } catch (error) {\\n          console.log('Unable to access iframe content due to security restrictions');\\n          canGoBack = false;\\n          canGoForward = false;\\n        }\\n      }}\\n      sandbox=\\"allow-scripts allow-same-origin allow-forms\\"\\n    ></iframe>\\n    {/if}\\n  </div>\\n</div>\\n\\n<style>\\n  .font-sf {\\n    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif;\\n  }\\n</style>"],"names":[],"mappings":"AA+KE,uBAAS,CACP,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,eAAe,CAAC,CAAC,gBAAgB,CAAC,CAAC,UACrF"}`
};
const Safari = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { startDrag } = $$props;
  let { window: window2 } = $$props;
  let url = "";
  if ($$props.startDrag === void 0 && $$bindings.startDrag && startDrag !== void 0) $$bindings.startDrag(startDrag);
  if ($$props.window === void 0 && $$bindings.window && window2 !== void 0) $$bindings.window(window2);
  $$result.css.add(css$3);
  return `<div class="bg-white h-full rounded-lg flex flex-col overflow-hidde font-sf svelte-1gbubtw"> <div class="bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200"><div class="flex space-x-2 mr-4"><button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none" data-svelte-h="svelte-j425fg"><svg class="w-3 h-3 text-red-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"></path></svg></button> <button class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none" data-svelte-h="svelte-1wpphxt"><svg class="w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 12H4"></path></svg></button> <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none" data-svelte-h="svelte-1qgcjgx"><svg class="w-3 h-3 text-green-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"></path></svg></button></div> <div class="flex-grow flex items-center space-x-2"><button class="text-gray-600 hover:text-gray-800 disabled:opacity-50" ${"disabled"}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7"></path></svg></button> <button class="text-gray-600 hover:text-gray-800 disabled:opacity-50" ${"disabled"}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"></path></svg></button> <button class="text-gray-600 hover:text-gray-800" data-svelte-h="svelte-t64rb9"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button> <button class="text-gray-600 hover:text-gray-800" data-svelte-h="svelte-7gjd81"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button> <form class="flex-grow"><input type="text" class="w-full px-3 py-1 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Enter URL"${add_attribute("value", url, 0)}></form></div></div>  <div class="flex-grow relative">${`<div class="min-h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"><div class="text-center text-white"><h1 class="text-4xl font-bold mb-4" data-svelte-h="svelte-puqhrh">Welcome to Safari</h1> <p class="text-xl mb-4" data-svelte-h="svelte-1ussvul">Explore the web with ease</p> <p class="text-sm mb-8" data-svelte-h="svelte-1p9dnuf">Note: Some websites may not load due to security restrictions</p> <div class="flex space-x-4 justify-center"><button class="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-200 flex items-center justify-center" data-svelte-h="svelte-1advbba"><span class="mr-2 text-sm">Endless Horse</span>  </button> <button class="bg-white text-purple-500 px-6 py-2 rounded-full hover:bg-purple-100 transition duration-200" data-svelte-h="svelte-44eb2h">Wikipedia</button></div></div></div>`}</div> </div>`;
});
const Photos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredPhotos;
  let { startDrag } = $$props;
  let { windowInstance } = $$props;
  let photos2 = [];
  let currentAlbum = "All Photos";
  if ($$props.startDrag === void 0 && $$bindings.startDrag && startDrag !== void 0) $$bindings.startDrag(startDrag);
  if ($$props.windowInstance === void 0 && $$bindings.windowInstance && windowInstance !== void 0) $$bindings.windowInstance(windowInstance);
  filteredPhotos = photos2;
  return `<div class="bg-white h-full rounded-lg flex flex-col shadow-lg overflow-hidden font-sans"> <div class="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200"><div class="flex space-x-2"><div class="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div> <div class="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div></div> <div class="flex-grow flex justify-center space-x-4"><button class="${"text-gray-600 hover:text-gray-800 transition-colors " + escape("font-semibold", true)}"><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        Library</button> <button class="${"text-gray-600 hover:text-gray-800 transition-colors " + escape("", true)}"><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        For You</button> <button class="${"text-gray-600 hover:text-gray-800 transition-colors " + escape("", true)}"><svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Memories</button></div> <button class="text-gray-600 hover:text-gray-800 transition-colors" data-svelte-h="svelte-1fgoca8"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></button> <button class="text-gray-600 hover:text-gray-800 transition-colors ml-2">${`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`}</button> <button class="text-gray-600 hover:text-gray-800 transition-colors ml-2 flex items-center" data-svelte-h="svelte-y7ctco">Pexels <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg></button></div>  <div class="flex-grow flex overflow-hidden">${`<div class="w-48 bg-gray-50 border-r border-gray-200 p-4"><h3 class="font-semibold text-gray-700 mb-2" data-svelte-h="svelte-1eryma9">Albums</h3> <ul class="space-y-2">${each(["All Photos", "Recents", "Favorites", "Shared"], (album) => {
    return `<li class="${"text-gray-600 hover:text-gray-800 cursor-pointer p-2 rounded transition-colors duration-200 " + escape(
      currentAlbum === album ? "bg-blue-100 text-blue-600" : "",
      true
    )}">${escape(album)} </li>`;
  })}</ul></div>`} <div class="flex-grow overflow-auto p-6">${`${``} <div${add_attribute(
    "class",
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
    0
  )}>${each(filteredPhotos, (photo) => {
    return `<div class="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"><img${add_attribute("src", photo.path, 0)}${add_attribute("alt", photo.name, 0)}${add_attribute(
      "class",
      "w-full h-40 object-cover",
      0
    )}> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div> <button class="absolute bottom-2 right-2 text-white hover:text-red-500 transition-colors duration-200"><svg class="w-6 h-6"${add_attribute("fill", photo.isFavorite ? "red" : "none", 0)}${add_attribute("stroke", photo.isFavorite ? "red" : "white", 0)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button> ${``} </div>`;
  })}</div>`}</div></div></div>`;
});
const ProjectIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iconName } = $$props;
  if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0) $$bindings.iconName(iconName);
  return ` ${iconName === "nextjs" ? `<svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"></path></g></g></svg>` : `${iconName === "svelte" ? `<svg xmlns="http://www.w3.org/2000/svg" aria-label="Svelte" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path fill="#ff3e00" d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"></path><path fill="#ffffff" d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"></path></svg>` : `${iconName === "react" ? `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path></g></svg>` : `${iconName === "wails" ? `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" viewBox="0 0 550 310" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><g><path d="M0.883,-0.081L0.121,0.081L0.256,-0.063L0.883,-0.081Z" transform="matrix(-166.599,4.57132,4.57132,166.599,147.403,167.648)" style="fill:url(#_Linear1);fill-rule:nonzero"></path></g><g><path d="M0.878,-0.285L-0.073,0.71L-1.186,0.542L0.015,0.207L-0.846,0.077L0.355,-0.258L-0.505,-0.388L0.649,-0.71L0.878,-0.285Z" transform="matrix(-106.443,-16.0669,-16.0669,106.443,428.19,188.033)" style="fill:url(#_Linear2);fill-rule:nonzero"></path></g><g><path d="M0.44,-0.04L0.265,-0.056L0.177,0.437L-0.311,-0.255L0.262,-0.437L0.568,-0.437L0.44,-0.04Z" transform="matrix(-114.484,-162.408,-162.408,114.484,333.291,285.804)" style="fill:url(#_Linear3);fill-rule:nonzero"></path></g><g><path d="M0.622,-0.115L0.761,-0.115L0.806,-0.013L0.826,0.182L0.622,-0.115Z" transform="matrix(238.126,298.893,298.893,-238.126,113.516,-150.536)" style="fill:url(#_Linear4);fill-rule:nonzero"></path></g><g><path d="M0.467,0.005L0.49,0.062L0.271,-0.062L0.467,0.005Z" transform="matrix(-369.529,-97.4118,-97.4118,369.529,582.38,94.027)" style="fill:url(#_Linear5);fill-rule:nonzero"></path></g><g><path d="M0.2,0.001L0.219,-0.018L0.614,0.012L0.519,0.089L0.282,0.068L0.2,0.135L0.463,0.194L0.374,0.266L0.138,0.186L0.047,0.033L-0.131,-0.266L0.2,0.001Z" transform="matrix(-496.156,-53.9751,-53.9751,496.156,367.888,125.085)" style="fill:url(#_Linear6);fill-rule:nonzero"></path></g><g><path d="M269.095,104.527L287.764,111.419L263.632,106.75L269.095,104.527Z" transform="matrix(0.436503,-1.22916,4.88651,1.73532,-368.043,253.619)" style="fill:#fff"></path></g><defs><linearGradient id="_Linear1" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(1,-3.46945e-18,3.46945e-18,1,0,-3.05761e-06)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient><linearGradient id="_Linear2" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(1,0,0,1,0,-2.75467e-06)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient><linearGradient id="_Linear3" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(1,-1.11022e-16,1.11022e-16,1,0,-2.61861e-06)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient><linearGradient id="_Linear4" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(-0.801899,-0.59746,0.59746,-0.801899,1.3495,0.447457)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient><linearGradient id="_Linear5" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(1,-2.77556e-17,2.77556e-17,1,0,-1.92826e-06)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient><linearGradient id="_Linear6" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(1,0,0,1,0,9.68429e-07)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#e33232;stop-opacity:1"></stop><stop offset="1" style="stop-color:#6b000d;stop-opacity:1"></stop></linearGradient></defs></svg>` : ``}`}`}`}`;
});
const techColors = {
  "Go": "bg-blue-200 text-blue-800",
  "macOS": "bg-gray-200 text-gray-800",
  "TouchID": "bg-green-200 text-green-800",
  "Svelte": "bg-orange-200 text-orange-800",
  "TypeScript": "bg-blue-200 text-blue-800",
  "JavaScript": "bg-yellow-200 text-yellow-800",
  "React": "bg-cyan-200 text-cyan-800",
  "Vue": "bg-emerald-200 text-emerald-800",
  "Node.js": "bg-green-200 text-green-800",
  "Python": "bg-blue-200 text-blue-800",
  "Java": "bg-red-200 text-red-800",
  "C#": "bg-purple-200 text-purple-800",
  "Ruby": "bg-red-200 text-red-800",
  "PHP": "bg-indigo-200 text-indigo-800",
  "HTML": "bg-orange-200 text-orange-800",
  "CSS": "bg-blue-200 text-blue-800",
  "SQL": "bg-yellow-200 text-yellow-800",
  "MongoDB": "bg-green-200 text-green-800",
  "Docker": "bg-blue-200 text-blue-800",
  "Kubernetes": "bg-blue-200 text-blue-800",
  "AWS": "bg-yellow-200 text-yellow-800",
  "Azure": "bg-blue-200 text-blue-800",
  "GCP": "bg-red-200 text-red-800"
};
const typeColors = {
  "library": "bg-purple-200 text-purple-800",
  "application": "bg-green-200 text-green-800",
  "framework": "bg-blue-200 text-blue-800",
  "tool": "bg-yellow-200 text-yellow-800"
};
function getTagColor(tech) {
  return techColors[tech] || "bg-gray-200 text-gray-800";
}
function getTypeColor(type) {
  return typeColors[type.toLowerCase()] || "bg-gray-200 text-gray-800";
}
const css$2 = {
  code: ".markdown-body{box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:45px}@media(max-width: 767px){.markdown-body{padding:15px}}",
  map: `{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { projects } from \\"../stores/projectStore\\";\\nimport { closeWindow, toggleMinimize, toggleMaximize } from \\"../stores/windowStore\\";\\nimport SvelteMarkdown from \\"svelte-markdown\\";\\nimport CodeBlockWrapper from \\"./CodeBlockWrapper.svelte\\";\\nimport ProjectIcons from \\"./ProjectIcons.svelte\\";\\nimport { getTagColor, getTypeColor } from \\"../utils/tagColors\\";\\nimport \\"github-markdown-css/github-markdown-light.css\\";\\nexport let startDrag;\\nexport let window;\\nlet selectedProject = null;\\nlet readmeContent = \\"\\";\\nlet isLoading = false;\\nonMount(() => {\\n  if ($projects.length > 0) {\\n    selectProject($projects[0]);\\n  }\\n});\\nasync function selectProject(project) {\\n  selectedProject = project;\\n  isLoading = true;\\n  try {\\n    const response = await fetch(project.readmeUrl);\\n    readmeContent = await response.text();\\n  } catch (error) {\\n    console.error(\\"Failed to fetch README:\\", error);\\n    readmeContent = \\"Failed to load README content.\\";\\n  } finally {\\n    isLoading = false;\\n  }\\n}\\nfunction openProjectLink(url) {\\n  if (typeof globalThis !== \\"undefined\\") {\\n    globalThis.window.open(url, \\"_blank\\");\\n  }\\n}\\nconst renderers = {\\n  code: CodeBlockWrapper\\n};\\n<\/script>\\n\\n<div class=\\"bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans\\">\\n  <!-- Projects Header -->\\n  <div class=\\"bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200\\" on:mousedown={(e) => startDrag(e, window.id, \\"move\\")}>\\n    <div class=\\"flex space-x-2 mr-4\\">\\n      <button class=\\"w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none\\" on:click={() => closeWindow(window.id)}>\\n        <svg class=\\"w-3 h-3 text-red-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M6 18L18 6M6 6l12 12\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none\\" on:click={() => toggleMinimize(window.id)}>\\n        <svg class=\\"w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M20 12H4\\" />\\n        </svg>\\n      </button>\\n      <button class=\\"w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none\\" on:click={() => toggleMaximize(window.id)}>\\n        <svg class=\\"w-3 h-3 text-green-800 opacity-0 hover:opacity-100\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3\\" />\\n        </svg>\\n      </button>\\n    </div>\\n    <div class=\\"flex-grow text-center font-semibold\\">Projects</div>\\n  </div>\\n\\n  <div class=\\"flex-grow flex overflow-hidden\\">\\n    <div class=\\"w-80 border-r border-gray-200 overflow-y-auto bg-gray-50\\">\\n      {#each $projects as project,index}\\n        <div \\n          class=\\"p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200 {selectedProject === project ? 'bg-blue-100 border-l-2 border-blue-500' : ''}\\"\\n          on:click={() => selectProject(project)}\\n        >\\n          <div class=\\"flex items-center mb-2\\">\\n            <div class=\\"w-6 h-6 mr-2 text-gray-600\\">\\n              <ProjectIcons iconName={project.icon} />\\n            </div>\\n            <h3 class=\\"font-semibold flex-grow text-gray-800 truncate\\">{project.name}</h3>\\n            <button \\n              class=\\"text-gray-500 hover:text-gray-700 transition-colors duration-200\\"\\n              on:click|stopPropagation={() => openProjectLink(project.githubUrl)}\\n            >\\n              <svg class=\\"w-5 h-5\\" fill=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n                <path d=\\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\\"/>\\n              </svg>\\n            </button>\\n          </div>\\n          <p class=\\"text-sm text-gray-600 mb-2 line-clamp-2\\">{project.shortDescription}</p>\\n          <div class=\\"flex flex-wrap gap-1 mt-2\\">\\n            <span class=\\"px-2 py-1 text-xs font-medium rounded-full capitalize {getTypeColor(project.type)}\\">\\n              {project.type}\\n            </span>\\n            {#each project.technologies as tech}\\n              <span class=\\"px-2 py-1 text-xs font-medium rounded-full {getTagColor(tech)}\\">\\n                {tech}\\n              </span>\\n            {/each}\\n          </div>\\n        </div>\\n        {#if index < $projects.length - 1}\\n          <hr class=\\"border-gray-300\\" />\\n        {/if}\\n      {/each}\\n    </div>\\n\\n    <div class=\\"flex-1 overflow-hidden flex flex-col bg-white\\">\\n      {#if selectedProject}\\n        <div class=\\"overflow-y-auto flex-grow\\">\\n          {#if isLoading}\\n            <div class=\\"flex justify-center items-center h-64\\">\\n              <div class=\\"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900\\"></div>\\n            </div>\\n          {:else}\\n            <div class=\\"markdown-body prose prose-sm max-w-none\\">\\n              <SvelteMarkdown source={readmeContent} {renderers} />\\n            </div>\\n          {/if}\\n        </div>\\n      {:else}\\n        <div class=\\"p-6 flex items-center justify-center h-full\\">\\n          <p class=\\"text-gray-600 text-center\\">Select a project to view details</p>\\n        </div>\\n      {/if}\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  :global(.markdown-body) {\\n    box-sizing: border-box;\\n    min-width: 200px;\\n    max-width: 980px;\\n    margin: 0 auto;\\n    padding: 45px;\\n  }\\n\\n  @media (max-width: 767px) {\\n    :global(.markdown-body) {\\n      padding: 15px;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8HU,cAAgB,CACtB,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IACX,CAEA,MAAO,YAAY,KAAK,CAAE,CAChB,cAAgB,CACtB,OAAO,CAAE,IACX,CACF"}`
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projects, $$unsubscribe_projects;
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  let { startDrag } = $$props;
  let { window: window2 } = $$props;
  let selectedProject = null;
  if ($$props.startDrag === void 0 && $$bindings.startDrag && startDrag !== void 0) $$bindings.startDrag(startDrag);
  if ($$props.window === void 0 && $$bindings.window && window2 !== void 0) $$bindings.window(window2);
  $$result.css.add(css$2);
  $$unsubscribe_projects();
  return `<div class="bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans"> <div class="bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200"><div class="flex space-x-2 mr-4"><button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none" data-svelte-h="svelte-j425fg"><svg class="w-3 h-3 text-red-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"></path></svg></button> <button class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none" data-svelte-h="svelte-1wpphxt"><svg class="w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 12H4"></path></svg></button> <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none" data-svelte-h="svelte-1qgcjgx"><svg class="w-3 h-3 text-green-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"></path></svg></button></div> <div class="flex-grow text-center font-semibold" data-svelte-h="svelte-1m1o2oi">Projects</div></div> <div class="flex-grow flex overflow-hidden"><div class="w-80 border-r border-gray-200 overflow-y-auto bg-gray-50">${each($projects, (project, index) => {
    return `<div class="${"p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200 " + escape(
      selectedProject === project ? "bg-blue-100 border-l-2 border-blue-500" : "",
      true
    )}"><div class="flex items-center mb-2"><div class="w-6 h-6 mr-2 text-gray-600">${validate_component(ProjectIcons, "ProjectIcons").$$render($$result, { iconName: project.icon }, {}, {})}</div> <h3 class="font-semibold flex-grow text-gray-800 truncate">${escape(project.name)}</h3> <button class="text-gray-500 hover:text-gray-700 transition-colors duration-200" data-svelte-h="svelte-6wn3au"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> </button></div> <p class="text-sm text-gray-600 mb-2 line-clamp-2">${escape(project.shortDescription)}</p> <div class="flex flex-wrap gap-1 mt-2"><span class="${"px-2 py-1 text-xs font-medium rounded-full capitalize " + escape(getTypeColor(project.type), true)}">${escape(project.type)}</span> ${each(project.technologies, (tech) => {
      return `<span class="${"px-2 py-1 text-xs font-medium rounded-full " + escape(getTagColor(tech), true)}">${escape(tech)} </span>`;
    })} </div></div> ${index < $projects.length - 1 ? `<hr class="border-gray-300">` : ``}`;
  })}</div> <div class="flex-1 overflow-hidden flex flex-col bg-white">${`<div class="p-6 flex items-center justify-center h-full" data-svelte-h="svelte-l8dyu8"><p class="text-gray-600 text-center">Select a project to view details</p></div>`}</div></div> </div>`;
});
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { window: window2 } = $$props;
  function startDrag(event, id, type) {
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = window2.size.width;
    const startHeight = window2.size.height;
    const startLeft = window2.position.x;
    const startTop = window2.position.y;
    function onMouseMove(e) {
      if (type === "move") {
        window2.position.x = startLeft + e.clientX - startX;
        window2.position.y = startTop + e.clientY - startY;
      } else {
        window2.size.width = Math.max(300, startWidth + e.clientX - startX);
        window2.size.height = Math.max(200, startHeight + e.clientY - startY);
      }
    }
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  if ($$props.window === void 0 && $$bindings.window && window2 !== void 0) $$bindings.window(window2);
  if ($$props.startDrag === void 0 && $$bindings.startDrag && startDrag !== void 0) $$bindings.startDrag(startDrag);
  return `<div${add_attribute("id", window2.id, 0)} class="${[
    "absolute rounded-lg shadow-2xl overflow-hidden",
    window2.minimized ? "hidden" : ""
  ].join(" ").trim()}" style="${"left: " + escape(window2.position.x, true) + "px; top: " + escape(window2.position.y, true) + "px; width: " + escape(window2.size.width, true) + "px; height: " + escape(window2.size.height, true) + "px; z-index: " + escape(window2.zIndex, true) + ";"}">${window2.type === "terminal" ? `${validate_component(Terminal, "Terminal").$$render($$result, { window: window2, startDrag }, {}, {})}` : `${window2.type === "safari" ? `${validate_component(Safari, "Safari").$$render($$result, { window: window2, startDrag }, {}, {})}` : `${window2.type === "photos" ? `${validate_component(Photos, "Photos").$$render($$result, { windowInstance: window2, startDrag }, {}, {})}` : `${window2.type === "projects" ? `${validate_component(Projects, "Projects").$$render($$result, { window: window2, startDrag }, {}, {})}` : `${window2.type === "blog" ? `${validate_component(Blog, "Blog").$$render($$result, { window: window2, startDrag }, {}, {})}` : ``}`}`}`}`} ${!window2.maximized ? `<div class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"></div>` : ``}</div>`;
});
const css$1 = {
  code: ".font-sf.svelte-1gbubtw{font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif}",
  map: `{"version":3,"file":"Launchpad.svelte","sources":["Launchpad.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nimport { fade, scale } from \\"svelte/transition\\";\\nimport photos from \\"$lib/assets/icons/photos.avif\\";\\nimport terminal from \\"$lib/assets/icons/terminal.avif\\";\\nimport safari from \\"$lib/assets/icons/safari.png\\";\\nimport projects from \\"$lib/assets/icons/projects.png\\";\\nimport blog from \\"$lib/assets/icons/blog.png\\";\\nimport github from \\"$lib/assets/icons/github.png\\";\\nexport let isOpen;\\nconst dispatch = createEventDispatcher();\\nlet searchText = \\"\\";\\nlet searchFocused = false;\\nconst apps = [\\n  { id: \\"photos\\", name: \\"Photos\\", icon: photos },\\n  { id: \\"terminal\\", name: \\"Terminal\\", icon: terminal },\\n  { id: \\"safari\\", name: \\"Safari\\", icon: safari },\\n  { id: \\"projects\\", name: \\"Projects\\", icon: projects },\\n  { id: \\"github\\", name: \\"Github\\", icon: github }\\n];\\n$: filteredApps = apps.filter(\\n  (app) => app.name.toLowerCase().includes(searchText.toLowerCase())\\n);\\nfunction launchApp(appId) {\\n  dispatch(\\"launchApp\\", appId);\\n  dispatch(\\"closeLaunchpad\\");\\n}\\n<\/script>\\n\\n{#if isOpen}\\n  <div \\n    class=\\"fixed inset-0 z-50 bg-black/30 backdrop-blur-2xl font-sf\\"\\n    transition:fade={{ duration: 200 }}\\n    on:click={() => dispatch('closeLaunchpad')}\\n  >\\n    <div class=\\"w-full h-full flex flex-col items-center pt-8\\">\\n      <div \\n        class=\\"w-64 h-8 bg-white/10 rounded-md flex items-center px-3 mb-8 transition-all duration-300 focus-within:bg-white/20 focus-within:ring-1 focus-within:ring-white/30\\"\\n        on:click|stopPropagation\\n      >\\n        <div class=\\"flex items-center justify-center w-full\\">\\n          <svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" class=\\"w-4 h-4 text-white/50 mr-2\\">\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\\" />\\n          </svg>\\n          <input\\n            type=\\"text\\"\\n            placeholder=\\"Search\\"\\n            bind:value={searchText}\\n            class=\\"w-full bg-transparent text-white placeholder-white/50 outline-none font-light text-sm\\"\\n          />\\n        </div>\\n      </div>\\n      <div class=\\"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-x-8 gap-y-12 p-8 max-w-7xl mx-auto\\">\\n        {#if filteredApps.length > 0}\\n          {#each filteredApps as app}\\n            <div \\n              class=\\"flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-110\\"\\n              on:click|stopPropagation={() => launchApp(app.id)}\\n              in:scale={{duration: 200, delay: 100}}\\n              out:scale={{duration: 200}}\\n            >\\n              <img src={app.icon} alt={app.name} class=\\"w-20 h-20 mb-2 object-contain\\" />\\n              <span class=\\"text-white text-sm text-center font-light\\">{app.name}</span>\\n            </div>\\n          {/each}\\n        {:else}\\n          <div class=\\"col-span-full text-center text-white/70 font-light text-xl\\">\\n            No Results\\n          </div>\\n        {/if}\\n      </div>\\n    </div>\\n  </div>\\n{/if}\\n\\n\\n<style>\\n  .font-sf {\\n    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif;\\n  }\\n</style>"],"names":[],"mappings":"AA4EE,uBAAS,CACP,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,eAAe,CAAC,CAAC,gBAAgB,CAAC,CAAC,UACrF"}`
};
const Launchpad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredApps;
  let { isOpen } = $$props;
  createEventDispatcher();
  let searchText = "";
  const apps = [
    {
      id: "photos",
      name: "Photos",
      icon: photos
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: terminal
    },
    {
      id: "safari",
      name: "Safari",
      icon: safari
    },
    {
      id: "projects",
      name: "Projects",
      icon: projects$1
    },
    {
      id: "github",
      name: "Github",
      icon: github
    }
  ];
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  $$result.css.add(css$1);
  filteredApps = apps.filter((app) => app.name.toLowerCase().includes(searchText.toLowerCase()));
  return `${isOpen ? `<div class="fixed inset-0 z-50 bg-black/30 backdrop-blur-2xl font-sf svelte-1gbubtw"><div class="w-full h-full flex flex-col items-center pt-8"><div class="w-64 h-8 bg-white/10 rounded-md flex items-center px-3 mb-8 transition-all duration-300 focus-within:bg-white/20 focus-within:ring-1 focus-within:ring-white/30"><div class="flex items-center justify-center w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-white/50 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search" class="w-full bg-transparent text-white placeholder-white/50 outline-none font-light text-sm"${add_attribute("value", searchText, 0)}></div></div> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-x-8 gap-y-12 p-8 max-w-7xl mx-auto">${filteredApps.length > 0 ? `${each(filteredApps, (app) => {
    return `<div class="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-110"><img${add_attribute("src", app.icon, 0)}${add_attribute("alt", app.name, 0)} class="w-20 h-20 mb-2 object-contain"> <span class="text-white text-sm text-center font-light">${escape(app.name)}</span> </div>`;
  })}` : `<div class="col-span-full text-center text-white/70 font-light text-xl" data-svelte-h="svelte-5c15wl">No Results</div>`}</div></div></div>` : ``}`;
});
const css = {
  code: "body{margin:0;padding:0}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport Desktop from \\"./../lib/components/Desktop.svelte\\";\\nimport Dock from \\"../lib/components/Dock.svelte\\";\\nimport Window from \\"../lib/components/Window.svelte\\";\\nimport Launchpad from \\"../lib/components/Launchpad.svelte\\";\\nimport { windows, addWindow, isAppRunning, isAppMinimized } from \\"../lib/stores/windowStore\\";\\nlet isLaunchpadOpen = false;\\nonMount(() => {\\n  if (browser) {\\n    document.title = \\"Home | Ashir\\";\\n    if (window.innerWidth >= 768) {\\n      addWindow(\\"terminal\\");\\n    }\\n  }\\n});\\nfunction handleOpenLaunchpad() {\\n  isLaunchpadOpen = true;\\n}\\nfunction handleLaunchApp(event) {\\n  addWindow(event.detail);\\n  isLaunchpadOpen = false;\\n}\\n<\/script>\\n\\n<main class=\\"min-h-screen font-mono relative overflow-hidden\\">\\n  <div class=\\"absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 opacity-80\\"></div>\\n  \\n  <Desktop />\\n  \\n  {#each $windows as window (window.id)}\\n    <Window {window} />\\n  {/each}\\n  \\n  <Dock {isAppRunning} {isAppMinimized} {addWindow} on:openLaunchpad={handleOpenLaunchpad} />\\n  \\n  <Launchpad isOpen={isLaunchpadOpen} on:launchApp={handleLaunchApp} on:closeLaunchpad={() => isLaunchpadOpen = false} />\\n</main>\\n\\n<style>\\n  :global(body) {\\n    margin: 0;\\n    padding: 0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwCU,IAAM,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $windows, $$unsubscribe_windows;
  $$unsubscribe_windows = subscribe(windows, (value) => $windows = value);
  let isLaunchpadOpen = false;
  $$result.css.add(css);
  $$unsubscribe_windows();
  return `<main class="min-h-screen font-mono relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 opacity-80"></div> ${validate_component(Desktop, "Desktop").$$render($$result, {}, {}, {})} ${each($windows, (window2) => {
    return `${validate_component(Window, "Window").$$render($$result, { window: window2 }, {}, {})}`;
  })} ${validate_component(Dock, "Dock").$$render($$result, { isAppRunning, isAppMinimized, addWindow }, {}, {})} ${validate_component(Launchpad, "Launchpad").$$render($$result, { isOpen: isLaunchpadOpen }, {}, {})} </main>`;
});
export {
  Page as default
};
