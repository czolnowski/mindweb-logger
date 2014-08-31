var colors = require('colors'),
    sprintf = require('util').format;

module.exports.log = function ()
{
    process.stdout.write(
        sprintf.apply(
            this,
            arguments
        ) + '\n'
    );
};

module.exports.success = function ()
{
    process.stdout.write(
        sprintf.apply(
            this,
            arguments
        ).green + '\n'
    );
};

module.exports.error = function ()
{
    process.stdout.write(
        sprintf.apply(
            this,
            arguments
        ).red + '\n'
    );
};
