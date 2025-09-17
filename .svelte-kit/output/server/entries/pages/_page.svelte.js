import { b as get_store_value, c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "marked";
import "prismjs";
import "prismjs/components/prism-go.js";
import { e as escape } from "../../chunks/escape.js";
const windows = writable([]);
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
const css$1 = {
  code: ".boot-screen.svelte-1sa20qe{position:fixed;inset:0;background:black;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999}.apple-logo.svelte-1sa20qe{width:120px;height:140px;fill:white;margin-bottom:40px;-webkit-user-select:none;-moz-user-select:none;user-select:none;filter:drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))}.progress-bar.svelte-1sa20qe{width:220px;height:8px;background:rgba(255, 255, 255, 0.15);border-radius:4px;overflow:hidden}.progress-fill.svelte-1sa20qe{background:white;height:100%;width:0%;border-radius:4px;transition:width 0.3s ease-out}",
  map: '{"version":3,"file":"LoadingScreen.svelte","sources":["LoadingScreen.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  let progress = 0;\\n\\n  onMount(() => {\\n    const interval = setInterval(() => {\\n      if (progress < 100) {\\n        progress += 1;\\n      } else {\\n        clearInterval(interval);\\n      }\\n    }, 48); // speed of the bar fill in miliseconds\\n  });\\n<\/script>\\n\\n<div class=\\"boot-screen\\">\\n  <svg\\n    fill=\\"#ffffff\\"\\n    class=\\"apple-logo\\"\\n    viewBox=\\"0 0 24 24\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n    stroke=\\"#ffffff\\"\\n    ><g id=\\"SVGRepo_bgCarrier\\" stroke-width=\\"0\\"></g><g\\n      id=\\"SVGRepo_tracerCarrier\\"\\n      stroke-linecap=\\"round\\"\\n      stroke-linejoin=\\"round\\"\\n    ></g><g id=\\"SVGRepo_iconCarrier\\">\\n      <path\\n        d=\\"M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z\\"\\n      ></path>\\n    </g></svg\\n  >\\n  <div class=\\"progress-bar\\">\\n    <div class=\\"progress-fill\\" style=\\"width: {progress}%\\"></div>\\n  </div>\\n</div>\\n\\n<style>\\n  .boot-screen {\\n    position: fixed;\\n    inset: 0;\\n    background: black;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 9999;\\n  }\\n\\n  .apple-logo {\\n    width: 120px;\\n    height: 140px;\\n    fill: white;\\n    margin-bottom: 40px;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));\\n  }\\n\\n  .progress-bar {\\n    width: 220px;\\n    height: 8px;\\n    background: rgba(255, 255, 255, 0.15);\\n    border-radius: 4px;\\n    overflow: hidden;\\n  }\\n\\n  .progress-fill {\\n    background: white;\\n    height: 100%;\\n    width: 0%;\\n    border-radius: 4px;\\n    transition: width 0.3s ease-out;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsCE,2BAAa,CACX,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACX,CAEA,0BAAY,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,KAAK,CACX,aAAa,CAAE,IAAI,CACnB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACtD,CAEA,4BAAc,CACZ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACrC,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACZ,CAEA,6BAAe,CACb,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,EAAE,CACT,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,QACzB"}'
};
const LoadingScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress = 0;
  $$result.css.add(css$1);
  return `<div class="boot-screen svelte-1sa20qe"><svg fill="#ffffff" class="apple-logo svelte-1sa20qe" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path></g></svg> <div class="progress-bar svelte-1sa20qe"><div class="progress-fill svelte-1sa20qe" style="${"width: " + escape(progress, true) + "%"}"></div></div> </div>`;
});
const css = {
  code: "body{margin:0;padding:0}#background.svelte-1hpsmp1{background-image:url('/src/lib/assets/images/bg.jpg');background-size:cover;background-position:center;background-repeat:no-repeat}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport Desktop from \\"./../lib/components/Desktop.svelte\\";\\nimport Dock from \\"../lib/components/Dock.svelte\\";\\nimport Window from \\"../lib/components/Window.svelte\\";\\nimport Launchpad from \\"../lib/components/Launchpad.svelte\\";\\nimport { windows, addWindow, isAppRunning, isAppMinimized } from \\"../lib/stores/windowStore\\";\\nimport MacBootLoading from \\"../lib/components/LoadingScreen.svelte\\";\\nlet isLaunchpadOpen = false;\\nlet showLoading = true;\\nonMount(() => {\\n  if (browser) {\\n    document.title = \\"Home | Ashir\\";\\n    if (window.innerWidth >= 768) {\\n      addWindow(\\"terminal\\");\\n    }\\n    setTimeout(() => {\\n      showLoading = false;\\n    }, 5e3);\\n  }\\n});\\nfunction handleOpenLaunchpad() {\\n  isLaunchpadOpen = true;\\n}\\nfunction handleLaunchApp(event) {\\n  addWindow(event.detail);\\n  isLaunchpadOpen = false;\\n}\\n<\/script>\\n\\n<main class=\\"min-h-screen font-mono relative overflow-hidden\\">\\n  <!-- Show the Mac boot screen while 'showLoading' is true -->\\n  {#if showLoading}\\n    <MacBootLoading />\\n  {:else}\\n    <div class=\\"absolute inset-0\\" id=\\"background\\"></div>\\n    <Desktop />\\n    \\n    {#each $windows as window (window.id)}\\n      <Window {window} />\\n    {/each}\\n    \\n    <Dock {isAppRunning} {isAppMinimized} {addWindow} on:openLaunchpad={handleOpenLaunchpad} />\\n    \\n    <Launchpad isOpen={isLaunchpadOpen} on:launchApp={handleLaunchApp} on:closeLaunchpad={() => isLaunchpadOpen = false} />\\n  {/if}\\n</main>\\n\\n<style>\\n  :global(body) {\\n    margin: 0;\\n    padding: 0;\\n  }\\n  #background {\\n    background-image: url('/src/lib/assets/images/bg.jpg');\\n    background-size: cover; \\n    background-position: center; \\n    background-repeat: no-repeat;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiDU,IAAM,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACX,CACA,0BAAY,CACV,gBAAgB,CAAE,oCAAoC,CACtD,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_windows;
  $$unsubscribe_windows = subscribe(windows, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_windows();
  return `<main class="min-h-screen font-mono relative overflow-hidden"> ${`${validate_component(LoadingScreen, "MacBootLoading").$$render($$result, {}, {}, {})}`} </main>`;
});
export {
  Page as default
};
