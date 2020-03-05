

export const DARK_MODE ="dark";
export const LIGHT_MODE = "light";


const common = {
  primaryColor: '#F4F4F4',
  colorD8: "#D8D8D8",
  color9B: "#9B9B9B",
  colorDE: "#DE2A21",
};

const appColors = {
  primaryBg: [`#FFFFFF`, `#000000`],
  text: [`#333333`, `#FFFFFF`],
};

const colors = theme => {
  const themeColors = {};
  for (const key in appColors) {
    themeColors[key] = appColors[key][theme === DARK_MODE ? 1 : 0];
  }
  return {common: common, ...themeColors};
};

export default colors;
