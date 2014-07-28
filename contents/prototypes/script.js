(function() {
  var data = {
    apps: [
      {
        title: "Browser",
        icon: "browser_84.png",
        usage: "250",
        useMobileData: true
      },
      {
        title: "Music",
        icon: "music_84.png",
        usage: "145",
        useMobileData: true,
      },
      {
        title: "Email",
        icon: "email_84.png",
        usage: "105",
        useMobileData: true
      }
    ],
    maxUsage: 1000
  };

  var source   = $("#usage-bars-template").html();
  var template = Handlebars.compile(source);
  $("#usage-bars").html(template(data));

  source = $("#application-usage-template").html();
  var appUsageTemplate = Handlebars.compile(source);

  $("#usage-bars .usage-bar").each(function(index) {
    $(this).click(usageBarClickEventGenerator(index));
  });

  function usageBarClickEventGenerator(index) {
    return function() {
      $('#application-usage')[0].className = 'current';
      $('[data-position="current"]')[0].className = 'left';

      $("#application-usage").html(appUsageTemplate(data.apps[index]));

      $("#application-usage-back").click(function() {
        $('#application-usage')[0].className = 'right';
        $('[data-position="current"]')[0].className = 'current';
      });
    }
  }
})();
