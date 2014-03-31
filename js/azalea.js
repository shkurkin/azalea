$(function() {
  console.log("azalea loaded");

  var container = document.querySelector('#featured-products_block_center');
  var msnry = new Masonry( container, {
    // options
    columnWidth: 300,
    itemSelector: '.masonry_item'
  });
});