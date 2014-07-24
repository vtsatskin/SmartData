(function() {
  var forEach = Array.prototype.forEach;

  var usageBars = document.querySelectorAll(".usage-bar");
  forEach.call(usageBars, function(bar) {
    bar.addEventListener('click', function() {
      document.querySelector('#application-usage').className = 'current';
      document.querySelector('[data-position="current"]').className = 'left';
    });
  });

  document.querySelector("#application-usage-back").addEventListener("click", function() {
    document.querySelector('#application-usage').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
})();
