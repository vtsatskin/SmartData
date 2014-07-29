(function() {
  var data1 = {
    simID: "SIM1",
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
    usageLimit: {
      value: 1000,
      unit: "MB"
    },
    usage: {
      value: 500,
      unit: "MB",
      progress: 0.5
    }
  };

  var data2 = {
    simID: "SIM2",
    apps: [
      {
        title: "Browser",
        icon: "browser_84.png",
        usage: "100",
        useMobileData: true
      },
      {
        title: "Email",
        icon: "email_84.png",
        usage: "50",
        useMobileData: true
      },
      {
        title: "Music",
        icon: "music_84.png",
        usage: "10",
        useMobileData: true,
      },
    ],
    usageLimit: {
      value: 256,
      unit: "MB"
    },
    usage: {
      value: 160,
      unit: "MB",
      progress: 0.625
    }
  };

  source = $("#application-usage-template").html();
  var appUsageTemplate = Handlebars.compile(source);

  function renderTotalUsage(data) {
    return function() {
      var source   = $("#total-usage-template").html();
      var template = Handlebars.compile(source);
      $("#total-usage-container").html(template(data));

      $("#usage-bars .usage-bar").each(function(index) {
        $(this).click(usageBarClickEventGenerator(data, index));
      });
    }
  }

  function usageBarClickEventGenerator(data, index) {
    return function() {
      $('#application-usage')[0].className = 'current';
      $('[data-position="current"]')[0].className = 'left';

      $("#application-usage").html(appUsageTemplate(data.apps[index]));
      $("#application-usage-back").attr("href", "#" + data.simID);

      $("#application-usage-back").click(function() {
        $('#application-usage')[0].className = 'right';
        $('[data-position="current"]')[0].className = 'current';
      });
    }
  }

  renderTotalUsage(data1)();

  //
  // Mulit-SIM
  //

  $("#SIM1").click(renderTotalUsage(data1));
  $("#SIM2").click(renderTotalUsage(data2));
})();
