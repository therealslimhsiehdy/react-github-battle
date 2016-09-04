var axios = require('axios');


var id ='cbb8bb66d47080299ad3';
var sec = '88137ea66189390fa72497d8f5ca6e129780c975';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param); // Returns a "promise"
}

var helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username) // Will evaluate to an array of promises
		})).then(function (info) {
			return info.map(function (user) {
				return user.data; //console.log('INFO', info)
			})
		}).catch(function (err) {
			console.warn('Error in getPlayersInfo', err)
		})
	}
};


module.exports = helpers;