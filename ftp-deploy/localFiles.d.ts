import { Stats } from "@jsdevtools/readdir-enhanced";
import { IFileList, IFtpDeployArgumentsWithDefaults } from "./types";
export declare function applyExcludeFilter(stat: Stats, excludeFilter: string[]): boolean;
export declare function getLocalFiles(args: IFtpDeployArgumentsWithDefaults): Promise<IFileList>;
