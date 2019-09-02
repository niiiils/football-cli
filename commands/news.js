'use strict';

const unirest = require('unirest');
const color = require('chalk');
const table = require('cli-table');

exports.command = 'news';

exports.showNews = function showNews() {
    
    console.log('📰 Todays news: \n\n ');
    console.log(color.grey('Hint: If the table seems to be ugly formatted, resize your terminal window.'));
    
}

unirest.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
    .end(function (response) {
        var newsTable = new table();
        
        for(var i = 0; i < response.body['articles'].length; i++) {
            
            newsTable.push([response.body['articles'][i]['description']]);
            
        }
        
        console.log(newsTable.toString());
    });
