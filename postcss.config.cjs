module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer')({
            // Optional: Specify the browsers you want to support
            overrideBrowserslist: ['last 2 versions', '> 1%', 'not dead'],
        }),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-preset-env')({
            stage: 1, // Enables experimental features (stage 0–4, lower stage = more experimental)
            features: {
                'nesting-rules': true, // Enable nesting (like SCSS)
            },
        }),
        require('postcss-nested'),
        require('postcss-mixins'),
    ],
};