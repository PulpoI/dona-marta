$("#productos").click(function () {
  $('html, body').animate({
    scrollTop: $("#titulo").offset().top
  }, 0400);
});

// Filtrar productos
$(document).ready(function () {
  // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
  $('.category_list .category_item[category="all"]').addClass("active");

  // FILTRANDO PRODUCTOS

  $(".category_item").click(function () {
    var catProduct = $(this).attr("category");
    console.log(catProduct);

    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $(".category_item").removeClass("active");
    $(this).addClass("active");

    // OCULTANDO PRODUCTOS
    $(".product-item").css("transform", "scale(0)");

    function hideProduct() {
      $(".product-item").css("display", "none");
      $(".product-item").hide();
    }
    setTimeout(hideProduct, 100);
    // MOSTRANDO PRODUCTOS
    function showProduct() {
      $('.product-item[category="' + catProduct + '"]').show();
      $('.product-item[category="' + catProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(showProduct, 100);
  });

  // MOSTRANDO TODOS LOS PRODUCTOS
  $('.category_item[category="all"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 100);
  });
});