var colors = require('colors'),
    sprintf = require('util').format;

module.export.log = function ()
{
    process.stdout.writeln(
        sprintf.apply(
            this,
            arguments
        )
    )
};
