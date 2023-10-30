function run() {
  let htmlcode = document.getElementById("html-code");

  let csscode = document.getElementById("css-code");
  let jscode = document.getElementById("js-code");

  let out = document.getElementById("output");

  out.contentDocument.body.innerHTML =
    htmlcode.value + "<style>" + csscode.value + "<style>";
  out.contentWindow.eval(jscode.value);
}
