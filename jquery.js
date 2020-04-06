<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="server-app" style="border:2px solid black"></div>

<script>
 const urlParams = new URLSearchParams(window.location.search);
 const bundleParam = urlParams.get('bundle')
  if (bundleParam.length > 0) {
  $.ajax({
  type: "GET",
  url: 'https://mytemplate.site/ajax/',
  async: true,
  crossDomain: true,
  success: function (data, status, xhr) {
  $("#server-app").html(data);
  }
  });
}
</script>