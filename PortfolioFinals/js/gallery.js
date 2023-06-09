$(document).ready(function() {


var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  transitionDuration: '0.5s',
  masonry: {
    columnWidth: ".all"
  }
})


  var initShow = 8; 
  var counter = initShow; 
  var iso = $grid.data('isotope'); 

  loadMore(initShow); 

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
        console.log(item.element);
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $grid.isotope('layout');

    
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };
  }


  
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  $('.btn-portfolio').click(function(){
        $('.btn-portfolio').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
});
  
});