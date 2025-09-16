import { ashir} from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
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
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
