const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

//###ENABLE LESS COMPILER OPTION FOR PROD ONLY TO USE ANTD CONFIG VARS
// const withLess = require("next-with-less");
// module.exports = withLess({
//     lessLoaderOptions: {
//         /* ... */
//     },
// });

module.exports = withBundleAnalyzer({})
