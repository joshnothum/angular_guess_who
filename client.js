var myApp = angular.module('myApp', []);

var instructors = [{name: 'Chris',github: 'christopher-black'}, 
{name: 'Josh', github: 'josh-nothum'}];

myApp.controller('WelcomeController', function () {
    var welcome = this;
    welcome.message = 'Hello!';
});


myApp.controller('GuessWhoController', function () {
    var guess = this;

    guess.peoples = [{name: 'Chris', github: 'christopher-black', display: false},
        {name: 'Josh', github: 'joshnothum', display: false},
        {name: 'Kris', github: 'kdszafranski', display: false}];

    guess.checkthis = function () {
        console.log('this button works');
    };
    guess.append = function () {
        var newPeoples = {
           name: '',
           github: '',
           display: false
        };
        guess.peoples.push(guess.newPeoples);
        console.log('the next',guess.newPeoples);
        console.log('these are new:',guess.peoples);
    };  
    guess.nameShow = function (person) {
        person.display = !person.display;

    };
});