function loadPageLayout() {
  $("#result").load("layout.html", function (response, status, xhr) {
    if (status == 'success') {
      const innerHmlForAddInPageContent = $("#pageContent").html();

      $("#renderPageContent").html(innerHmlForAddInPageContent);
      $("#pageContent").html(' ');
    }
  });


}


loadPageLayout();
