"use strict";

module.exports = function (Domain) {
    Domain.prototype.deviceOrientation = function (point, options) {
        var d = this;
        var convert = Math.PI / 180;
        var window = (options && options.window) || window;
        window.addEventListener('deviceorientation', function (eventData) {
            d.send(point, [], {
                alpha: eventData.alpha * convert
                , beta: eventData.beta * convert
                , gamma: eventData.gamma * convert
            });
        });
    };

    Domain.prototype.deviceMotion = function (point, options) {
        var d = this;
        var convert = Math.PI / 180;
        var window = (options && options.window) || window;
        window.addEventListener('devicemotion', function (eventData) {
            d.send(point, [], {
                acceleration: {
                    x: eventData.acceleration.x
                    , y: eventData.acceleration.y
                    , z: eventData.acceleration.z
                }
            });
        });
    };
};
