var colors = require('colors'),
    sprintf = require('util').format,
    verbosityLevels = ['error', 'info', 'debug'],
    level = 'error';

var isVerbose = function isVerbose(verbose)
    {
        return verbosityLevels.indexOf(level) >= verbosityLevels.indexOf(verbose)
    },
    guessVerboseFromArguments = function guessVerboseFromArguments(args, defaultVerbose)
    {
        var verbose = defaultVerbose;

        if (args.length > 0) {
            var last = args[args.length - 1];

            if (verbosityLevels.indexOf(last) > -1) {
                verbose = last;
                args.splice(-1);
            }
        }

        return verbose;
    };

module.exports.setLevel = function (_level)
{
    if (verbosityLevels.indexOf(_level) > -1) {
        level = _level;
    }
};

module.exports.info = function ()
{
    var args = Array.prototype.slice.call(arguments, 0),
        verbose = guessVerboseFromArguments(args, 'info');

    if (isVerbose(verbose)) {
        process.stdout.write(sprintf.apply(this, args) + '\n');
    }
};

module.exports.success = function ()
{
    var args = Array.prototype.slice.call(arguments, 0),
        verbose = guessVerboseFromArguments(args, 'info');

    if (isVerbose(verbose)) {
        process.stdout.write(sprintf.apply(this, args).green + '\n');
    }
};

module.exports.error = function ()
{
    var args = Array.prototype.slice.call(arguments, 0),
        verbose = guessVerboseFromArguments(args, 'error');

    if (isVerbose(verbose)) {
        process.stdout.write(sprintf.apply(this, args).red + '\n');
    }
};
