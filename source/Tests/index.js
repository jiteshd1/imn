'use sctrict';

var Horseman = require('node-horseman');
var horseman = new Horseman();
var assert = require('assert');
var mocha = require('mocha');
var should = require('should');
var parallel = require('mocha.parallel');

var defaultPort = 3000;
var defaultTimeout = 8000; // Increase timeout for Travis
var localhost = 'http://localhost:3000';


describe('Login/Logout', function() {

    it('User can login', function() {
        this.timeout(15000);
        var horseman = new Horseman({
            timeout: defaultTimeout
        });

        return horseman
            .open(localhost)
            .type('input[id="username"]', 'jitesh@320digital.com')
            .type('input[id="password"]', 'test1234')
            .click("button:contains('Login')")
            .waitForNextPage()
            .evaluate(function() {
                return document.title;
            })
            .close()
            .should.eventually
        	.equal('Interview Me Now - My Profile');
    });

     it('User can logout', function() {
        this.timeout(15000);
        var horseman = new Horseman({
            timeout: defaultTimeout
        });

        return horseman
            .open(localhost)
            .type('input[id="username"]', 'jitesh@320digital.com')
            .type('input[id="password"]', 'test1234')
            .click("button:contains('Login')")
            .waitForNextPage()
            .evaluate(function() {
            	$("#optionsDropdown").click();
            	$('#logoutLink').click();
                return true;
            })
            .waitForNextPage()
            .evaluate(function() {
                return document.title;
            })
            .close()
            .should.eventually
        	.equal('Interview Me Now');
    });
});

/* horseman
  .open('http://localhost:3000')
  .type('input[id="username"]', 'jitesh@320digital.com')
  .type('input[id="password"]', 'test1234')
  .click("button:contains('Login')")
  .waitForNextPage()
  .title()
  .then(function(pagetitle){
	console.log("Title: " +pagetitle);
	horseman.close();
  }); 

  */
