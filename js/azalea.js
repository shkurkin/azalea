$(function() {
  console.log("azalea loaded");

  var container = document.querySelector('#featured-products_block_center');
  var msnry = new Masonry( container, {
    "columnWidth": 210,
    "itemSelector": ".masonry_item",
    "gutter": 6,
    "isFitWidth": true,
    "isOriginLeft": false
    });

  $('.masonry_item img').on("load", function(event){
    var $currentContainer = $(event.target).closest('.masonry_item');
    var height = $currentContainer.height();
    $currentContainer.css('height', height);
    msnry.layout();
  });
});
