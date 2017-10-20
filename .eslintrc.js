module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        jasmine: true
    },
    extends: 'standard',
    globals: {
        Vue: true
    },
    plugins: [
        'html'
    ],
    rules: {
        'max-len': 0,
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "semi": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "object-property-newline": 0,
        "indent": ["error", 4, {SwitchCase: 1}]
    }
}
