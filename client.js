var myApp = angular.module('myApp', []);

var instructors = [{name: 'Chris',github: 'christopher-black'}, 
{name: 'Josh', github: 'josh-nothum'}];

myApp.controller('WelcomeController', function () {
    var welcome = this;
    welcome.message = 'Hello!';
});


myApp.controller('GuessWhoController', function () {
    var guess = this;

    guess.instructors = [
            {name: 'Chris',github: 'christopher-black'},
            {name: 'Josh',github: 'josh-nothum'}
    ];
    guess.checkthis = function () {
        console.log('this button works');
      
    guess.append = function () {
        var person = {
            name: input.name,
            github: input.github
        };
    };   
    };
});