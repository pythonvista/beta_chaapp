'use strict';
var Countdown = function () {};
(Countdown.timer = function (o, t, r) {
  var n = o - new Date(),
    e = { DAYS: 864e5, HOURS: 36e5, MINUTES: 6e4, SECONDS: 1e3 },
    a = function () {
      if (n > 0) {
        var o = n,
          a = Math.floor(o / e.DAYS);
        o %= e.DAYS;
        var l = Math.floor(o / e.HOURS);
        o %= e.HOURS;
        var u = Math.floor(o / e.MINUTES);
        o %= e.MINUTES;
        var i = Math.floor(o / e.SECONDS),
          s = { days: a, hours: l, minutes: u, seconds: i };
        t(s), (n -= 1e3);
      } else (n -= 1e3), clearInterval(S), r();
    },
    S = setInterval(
      (function (o) {
        return function () {
          a.call(o);
        };
      })(this),
      1e3
    ),
    l = function () {
      var o = n,
        t = Math.floor(o / e.DAYS);
      o %= e.DAYS;
      var r = Math.floor(o / e.HOURS);
      o %= e.HOURS;
      var a = Math.floor(o / e.MINUTES);
      o %= e.MINUTES;
      var S = Math.floor(o / e.SECONDS);
      return { days: t, hours: r, minutes: a, seconds: S };
    };
  return (
    a.call(this),
    {
      abort: function () {
        clearInterval(S);
      },
      getTimeRemaining: l,
    }
  );
})

export const countdown = () => {
  return Countdown;
};
