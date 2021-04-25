const rimraf = require('rimraf')

module.exports = (snowpackConfig, pluginOptions) => {
    const { patterns = [] } = pluginOptions

    return {
        name: 'snowpack-plugin-delete',
        async optimize() {
            if (patterns.length > 0) {
                patterns.forEach(function (pattern, index) {
                    console.log(`Deleting ${pattern}`)
                    rimraf(pattern, function (error) {
                        console.log(
                            `Error deleting ${pattern}. Error msg: ${error}`
                        )
                    })
                })
            }
        },
    }
}
