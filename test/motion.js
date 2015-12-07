"use strict";

var dual = require('dualapi').use(require('..'));
var test = require('tape');
var m = require('..');
var Promise = require('bluebird');

test('dual-device', function (t) {
    var mockWindow = function (params) {
        var eventDispatch = {};
        var w = {
            addEventListener: function (name, cb) {
                eventDispatch[name] = cb;
            }
            , mockEvent: function (name, data) {
                eventDispatch[name](data);
            }
        };
        return w;
    };

    var mockContext = Promise.method(function () {
        var d = dual();
        var w = mockWindow();
        return [w, d];
    });

    t.test('module broadcasts device acceleration x', function (s) {
        s.plan(2);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                acceleration: {
                    x: 1
                    , y: 2
                    , z: 3
                }
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('acceleration'));
                s.equal(1, body.acceleration.x);
            });
            d.deviceMotion(target, { window: w });
            w.mockEvent('devicemotion', data);
        });
    });

    t.test('module broadcasts device acceleration y', function (s) {
        s.plan(2);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                acceleration: {
                    x: 1
                    , y: 2
                    , z: 3
                }
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('acceleration'));
                s.equal(2, body.acceleration.y);
            });
            d.deviceMotion(target, { window: w });
            w.mockEvent('devicemotion', data);
        });
    });

    t.test('module broadcasts device acceleration z', function (s) {
        s.plan(2);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                acceleration: {
                    x: 1
                    , y: 2
                    , z: 3
                }
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('acceleration'));
                s.equal(3, body.acceleration.z);
            });
            d.deviceMotion(target, { window: w });
            w.mockEvent('devicemotion', data);
        });
    });
});
