/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */
const moduleOverridePlugin = require('./src/plugins/moduleOverrideWebPack');

function localIntercept(targets) {
    const componentOverrideMapping = {
        '@magento/venia-ui/lib/components/Footer/footer.js': './src/components/Footer/footer.js',
        '@magento/venia-ui/lib/components/Header/header.js': './src/components/Header/header.js',
        '@magento/venia-ui/lib/components/Header/header.js': './src/components/Header/header.js',
        '@magento/peregrine/lib/talons/MegaMenu/useMegaMenu.js': './src/lib/talons/MegaMenu/useMegaMenu.js',
    };

    targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
        def.staticFromRoot.inline.body.file.template.inline =
            './public/{{ filename }}';
    });

    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    });
}

module.exports = (targets) = localIntercept;
