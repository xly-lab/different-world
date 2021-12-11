const { override } = require("customize-cra");

module.exports = {
  webpack: override((config) => {
    let oneOfLoader = config.module.rules.find((rule) =>
      Array.isArray(rule.oneOf)
    ).oneOf;
    oneOfLoader.unshift({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "markdown-loader",
          options: {},
        },
      ],
    });
    return config;
  }),
};
