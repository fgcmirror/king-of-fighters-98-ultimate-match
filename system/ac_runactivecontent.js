// Minimal stub for Adobe's AC_FL_RunContent helper.
// Original: Scripts/AC_RunActiveContent.js (Adobe shipped this with Dreamweaver Flash inserts).
// Emits an <object>/<embed> block via document.write so Ruffle can detect and replace it.
function AC_FL_RunContent() {
  var attrs = {};
  for (var i = 0; i < arguments.length - 1; i += 2) attrs[arguments[i]] = arguments[i + 1];
  var src = attrs.src || attrs.movie || '';
  if (src && !/\.swf(\?|$)/i.test(src)) src += '.swf';
  var w = attrs.width || '100%', h = attrs.height || '100%';
  var quality = attrs.quality || 'high';
  var bgcolor = attrs.bgcolor || '#000000';
  var html =
    '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + w + '" height="' + h + '">' +
      '<param name="movie" value="' + src + '">' +
      '<param name="quality" value="' + quality + '">' +
      '<param name="bgcolor" value="' + bgcolor + '">' +
      '<param name="allowscriptaccess" value="always">' +
      '<embed src="' + src + '" quality="' + quality + '" bgcolor="' + bgcolor +
        '" width="' + w + '" height="' + h +
        '" type="application/x-shockwave-flash" allowscriptaccess="always"></embed>' +
    '</object>';
  document.write(html);
}
