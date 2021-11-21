module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/website/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
