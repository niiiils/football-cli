const news = require('../commands/news.js');
const standings = require('../commands/standings.js');

exports.handle = function handle(args) {
    let command = args._[0];

    if(command != undefined) {
        if (command == news.command) {
            news.showNews();
        } else if (command == standings.command) {
            standings.showStandings();
        }
    } else {
        console.log("Please specify your call");
    }
}