// this ts file has the configuration for all me projects!! :3

export interface ProjectLink {
    type: "github" | "demo" | "download" | "website" | "video"
    url: string
    label: string
}

export interface Project {
    title: string
    description: string
    image: string
    links: ProjectLink[]
    status?: "completed" | "ongoing" | "stalled" | "archived"
    year?: number
}

export const projects: Project[] = [
    // all projects go here basically :p
    {
        title: "Arsenal and Anvil",
        description: "A QoL Minecraft mod for NeoForge 1.21.1 aimed to add a variety of new weapons and tools for all tiers!",
        image: "https://github.com/junyali/arsenalandanvil/blob/main/preview/demo_1.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/arsenalandanvil/", label: "View Source" },
            { type: "download", url: "https://modrinth.com/mod/arsenal-and-anvil", label: "Download on Modrinth" },
            { type: "download", url: "https://www.curseforge.com/minecraft/mc-mods/arsenal-and-anvil", label: "Download on Curseforge" }
        ],
        status: "ongoing",
        year: 2025
    },
    {
        title: "Extra Ores & Items",
        description: "A QoL Minecraft mod for Fabric 1.21.4 that adds a variety of new ores, tools, equipment and consumables into the game!",
        image: "https://github.com/junyali/extra-ores/blob/master/preview/demo_main.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/extra-ores", label: "View Source" },
            { type: "download", url: "https://modrinth.com/mod/extra-ores-items", label: "Download on Modrinth" },
            { type: "download", url: "https://www.curseforge.com/minecraft/mc-mods/extra-ores-items", label: "Download on Curseforge" }
        ],
        status: "stalled",
        year: 2025
    },
    {
        title: "KawaiiPad",
        description: "A 3D printed macropad with 3x3 switches, per-key RGB neopixel LEDs, and along with the cute case, a super cute PCB!",
        image: "https://github.com/junyali/KawaiiPad/blob/main/demo/case_render.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/kawaiipad", label: "View Source" }
        ],
        status: "completed",
        year: 2025
    },
    {
        title: "Flourish",
        description: "A languageless exploration game featuring unique enemies with the goal of restoring wildlife and defeating the source of evil.",
        image: "https://github.com/junyali/flourish/blob/main/banner_wide.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/flourish", label: "View Source" },
            { type: "demo", url: "https://junyali.itch.io/flourish", label: "Download Game" }
        ],
        status: "completed",
        year: 2025
    },
    {
        title: "Conway's Game of Life",
        description: "A PyGame implementation of John Horton Conway's Game of Life - Cellular Automata at its finest :3",
        image: "https://github.com/junyali/game-of-life/blob/master/images/demo1.gif?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/game-of-life", label: "View Source" }
        ],
        status: "completed",
        year: 2024
    },
    {
        title: "Boykisser PCB",
        description: "A small circuit board project featuring the Boykisser character with basic LEDs and mini vibrating motor disc - made for Hack Club's Solder.",
        image: "https://github.com/junyali/boykisser-pcb/blob/main/demo/pcb.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/boykisser-pcb", label: "View Source" }
        ],
        status: "completed",
        year: 2025
    },
    {
        title: "Goldbach Conjecture Explorer",
        description: "A Python implementation exploring one of the oldest, best-known unsolved problems in mathematics, theorised by Christian Goldbach.",
        image: "https://github.com/junyali/goldbach-conjecture-python/blob/master/program-icon.png?raw=true",
        links: [
            { type: "github", url: "https://github.com/junyali/goldbach-conjecture-python", label: "View Source" }
        ],
        status: "completed",
        year: 2024
    },
]
