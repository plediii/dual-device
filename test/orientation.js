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

    t.test('module broadcasts orientation gamma', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('gamma'));
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });

    t.test('module broadcasts orientation gamma in radians', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(1e-4 > Math.abs(body.gamma - Math.PI), "expected value for gamma");
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });

    t.test('module broadcasts orientation beta', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('beta'));
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });

    t.test('module broadcasts orientation beta in radians', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(1e-4 > Math.abs(body.beta - Math.PI), "expected value for beta");
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });

    t.test('module broadcasts orientation alpha', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(body.hasOwnProperty('alpha'));
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });

    t.test('module broadcasts orientation beta in alpha', function (s) {
        s.plan(1);
        mockContext()
        .spread(function (w, d) {
            var target = ['plutocrat'];
            var data = {
                gamma: 180
                , beta: 180
                , alpha: 180
            };
            d.mount(target, function (body) {
                s.ok(1e-4 > Math.abs(body.alpha - Math.PI), "expected value for alpha");
            });
            d.deviceOrientation(target, { window: w });
            w.mockEvent('deviceorientation', data);
        });
    });
});
