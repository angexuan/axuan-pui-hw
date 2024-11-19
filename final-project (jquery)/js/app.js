$(document).ready(function () {
  $("#egg-rolls img").hover(
    function () {
      $(this).attr("src", "images/egg-rolls-hover.png");
    },
    function () {
      $(this).attr("src", "images/egg-rolls.png");
    }
  );

  $("#wontons img").hover(
    function () {
      $(this).attr("src", "images/wontons-hover.png");
    },
    function () {
      $(this).attr("src", "images/wontons.png");
    }
  );

  $("#egg-dumplings img").hover(
    function () {
      $(this).attr("src", "images/egg-dumplings-hover.png");
    },
    function () {
      $(this).attr("src", "images/egg-dumplings.png");
    }
  );

  $("#fish-balls img").hover(
    function () {
      $(this).attr("src", "images/fish-balls-hover.png");
    },
    function () {
      $(this).attr("src", "images/fish-balls.png");
    }
  );

  $("#sweet-sour-pork img").hover(
    function () {
      $(this).attr("src", "images/sweet-sour-pork-hover.png");
    },
    function () {
      $(this).attr("src", "images/sweet-sour-pork.png");
    }
  );
});
