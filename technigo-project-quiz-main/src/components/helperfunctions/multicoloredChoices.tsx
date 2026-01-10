import guildData from "/home/jesper/repositories/technigo-projects/technigo-project-quiz-main/src/guilddata.json";

type  Guild = {
        name: string;
        colors: string[];
        img_src: string;
        description: string;
        quote: string;
        }

const { guilds } = guildData;

if (!guilds[1].twoColorCombinations) {
  throw new Error(`twoColorCombinations doesn't exist`);
};

const twoColorArray: Guild[] = guilds[1].twoColorCombinations;

// A helperfunction for finding the correstponding guild matching the choices made.

export const twoColorChoices = (choices:[string, string]) => {
  return twoColorArray.find(guild => guild.colors.includes(choices[0]) && guild.colors.includes(choices[1]));
};