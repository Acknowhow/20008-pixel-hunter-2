export default (screen) => {

  return Object.keys(screen).map((option) => (
    {option, params: screen[option]}));
};
