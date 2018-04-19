export const switchBack = (link, cb) => {
  link.removeEventListener(`click`, switchBack);

  setTimeout(() => {
    cb();

  }, 0);
};
