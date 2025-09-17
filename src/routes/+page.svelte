<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from '$app/environment';
  import Desktop from "./../lib/components/Desktop.svelte";
  import Dock from "../lib/components/Dock.svelte";
  import Window from "../lib/components/Window.svelte";
  import Launchpad from "../lib/components/Launchpad.svelte";
  import { windows, addWindow, isAppRunning, isAppMinimized } from "../lib/stores/windowStore";
  import MacBootLoading from "../lib/components/LoadingScreen.svelte"; // Import the Mac boot loader

  let isLaunchpadOpen = false;
  let showLoading = true;

  onMount(() => {
    if (browser) {
      document.title = "Home | Ashir";
      if (window.innerWidth >= 768) {
        addWindow("terminal");
      }
      setTimeout(() => {
        showLoading = false;
      }, 5000);
    }
  });

  function handleOpenLaunchpad() {
    isLaunchpadOpen = true;
  }

  function handleLaunchApp(event: CustomEvent<string>) {
    addWindow(event.detail as "terminal" | "safari" | "photos" | "blog" | "projects" | "github");
    isLaunchpadOpen = false;
  }
</script>

<main class="min-h-screen font-mono relative overflow-hidden">
  <!-- Show the Mac boot screen while 'showLoading' is true -->
  {#if showLoading}
    <MacBootLoading />
  {:else}
    <div class="absolute inset-0" id="background"></div>
    <Desktop />
    
    {#each $windows as window (window.id)}
      <Window {window} />
    {/each}
    
    <Dock {isAppRunning} {isAppMinimized} {addWindow} on:openLaunchpad={handleOpenLaunchpad} />
    
    <Launchpad isOpen={isLaunchpadOpen} on:launchApp={handleLaunchApp} on:closeLaunchpad={() => isLaunchpadOpen = false} />
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  #background {
    background-image: url('/src/lib/assets/images/bg.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
  }
</style>
