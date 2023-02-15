export const getScreenWidth = () => {
  let screenWidth = window.innerWidth;
  if (screenWidth < 481) {
    return "SM";
  } else if (screenWidth < 768) {
    return "MD";
  } else {
    return "LG";
  }
};
