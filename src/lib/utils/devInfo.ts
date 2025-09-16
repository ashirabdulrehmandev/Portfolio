export interface Developer {
  about: string;
  code: string[];
  interests: string[];
  operatingSystems: string[];
  toolsUsed: string[];
  ides: string[];
}

export const ashir: Developer = {
  about: "Hey, I'm Ashir, a Web Developer with a keen interest in building scalable, beautiful \nand secure applications.Always eager to learn and experiment with new technologies.",
  code: [ "Svelte", "TS", "JS","React.JS","Next.JS","Express", "Python"],
  interests: [
    "Full-Stack Development",
    "Helping people on Discord",
    "Experimenting with New Technologies",
  ],
  operatingSystems: ["Ubuntu" , "Windows" , "Linux Mint"],
  toolsUsed: ["Docker", "Git", "Termius", "Postman"],
  ides: ["Cursor", "Zed", "VSCode",],
};