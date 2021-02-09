"use strict";

(function ($, window, document) {
  $(function () {
    $(window).on("load", function () {
      $("head").prepend();
    });
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
