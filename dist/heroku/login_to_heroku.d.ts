declare type HerokuCredentials = {
    herokuApiKey: string;
    cwd: string;
};
export declare const loginToHeroku: ({ herokuApiKey, cwd }: HerokuCredentials) => Promise<boolean>;
export {};
