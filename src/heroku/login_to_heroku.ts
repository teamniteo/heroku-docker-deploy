import * as core from '@actions/core';
import { exec } from '../utils';

type HerokuCredentials = {
  herokuApiKey: string;
  cwd: string;
};

export const loginToHeroku = async ({ herokuApiKey, cwd }: HerokuCredentials): Promise<boolean> => {
  try {
    core.startGroup('Logging into the Heroku docker registry...');
    const data = await exec(
      `echo ${herokuApiKey} | docker login --username=_ registry.heroku.com --password-stdin`,
      { cwd },
    );
    console.log(data.stdout);
    core.endGroup();
    return true;
  } catch (error) {
    core.endGroup();
    core.setFailed(`Logging failed.\nError: ${error.message}`);
    return false;
  }
};
