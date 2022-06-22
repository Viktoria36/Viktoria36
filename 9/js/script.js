(function (global) {

    var ns = {};
    var allCategoriesUrl = "data/categories.json";
    var categoriesTitleHtml = "fragments/Catalog-title.html";
    var categoryHtml = "fragments/Catalog-fragment.html";
  
    var catalogItemsUrl = "data/catalog/";
    var catalogItemsTitleHtml = "fragments/Catalog-item-title.html";
    var catalogItemHtml = "fragments/Catalog-item-fragment.html";
  
  
    var homeHtml = "fragments/home-fragment.html";
  
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
  
    };
  
    var showLoading = function (selector) {
      var html = "<div class='text-center'>";
      html += "<img src='images/loading.gif' alt='loading'></div>";
      insertHtml(selector, html);
    }
  
    var insertProperty = function (string, propName, propValue) {
      var propToReplace = "{{" + propName + "}}";
      string = string
        .replace(new RegExp(propToReplace, "g"), propValue);
      return string;
    }
  
    ns.LoadCategories = function () {
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHtml);
    }
  
    document.addEventListener("DOMContentLoaded", ns.LoadCategories());
    
  
    ns.loadCatalogItems = function (category) {
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        catalogItemsUrl + category + ".json",
        buildAndShowCatalogItemsHTML);
    }
  
  
    function buildAndShowCategoriesHtml(categories) {
  
      $ajaxUtils.sendGetRequest(
        categoriesTitleHtml,
        function (categoriesTitleHtml) {
          $ajaxUtils.sendGetRequest(
            categoryHtml,
            function (categoryHtml) {
              var categoriesViewHtml =
                buildCategoriesViewHtml(categories,
                  categoriesTitleHtml, categoryHtml);
              insertHtml("#main-content", categoriesViewHtml);
  
            },
            false);
        },
        false)
    }
  
    function buildCategoriesViewHtml(categories,
      categoriesTitleHtml,
      categoryHtml) {
      var finalHtml = "<div class='container'>" + categoriesTitleHtml;
      finalHtml += "<div class='our_categories'><div class='row'>";
  
      for (var i = 0; i < categories.length; i++) {
  
        var html = categoryHtml;
        var name = "" + categories[i].name;
        var shortname="" + categories[i].shortname;
        html = insertProperty(html, "name", name);
        html = insertProperty(html, "shortname", shortname);
        finalHtml += html;
      }
      var randomNum=getRandomInt(4);
      var html = categoryHtml;
      var name = "Specials" ;
      var shortname="" + categories[randomNum].shortname;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "shortname", shortname);
      finalHtml += html;
      finalHtml += "</div></div></div>";
      return finalHtml;
    }
  
    function buildAndShowCatalogItemsHTML(categoryCatalogItems) {
      $ajaxUtils.sendGetRequest(
        catalogItemsTitleHtml,
        function (catalogItemsTitleHtml) {
          $ajaxUtils.sendGetRequest(
            catalogItemHtml,
            function (catalogItemHtml) {
              var catalogItemsViewHtml = buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemsTitleHtml, catalogItemHtml);
              insertHtml("#main-content", catalogItemsViewHtml);
            },
            false)
        },
        false)
    }
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    function buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemsTitleHtml, catalogItemHtml) {
      catalogItemsTitleHtml = insertProperty(catalogItemsTitleHtml,
        "name",
        categoryCatalogItems.category.name);
  
      var finalHtml = "<div class='container'>" + catalogItemsTitleHtml;
      finalHtml += "<div class='row'>";
  
      var catalogItems = categoryCatalogItems.catalog_items;
      var categoryName = categoryCatalogItems.category.shortname;
  
      for (var i = 0; i < catalogItems.length; i++) {
        var html = catalogItemHtml;
        html = insertProperty(html, "name", catalogItems[i].name);
        html = insertProperty(html, "shortname", catalogItems[i].shortname);
        html = insertProperty(html, "price", catalogItems[i].price);
        html = insertProperty(html, "description", catalogItems[i].description);
        html = insertProperty(html, "categoryName", categoryName);
        finalHtml+=html;
      }
      
      finalHtml += "</div></div>";
     
      return finalHtml;
    }
  
    global.$ns = ns;
  })(window)