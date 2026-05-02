# THE KING OF FIGHTERS '98 ULTIMATE MATCH

Mirror of [https://game.snk-corp.co.jp/official/kof98um/](https://game.snk-corp.co.jp/official/kof98um/), preserved as part of the [fgcmirror](https://github.com/fgcmirror) project.

Live at <https://king-of-fighters-98-ultimate-match.fgcmirror.com>.

## Source

- **Original URL**: <https://game.snk-corp.co.jp/official/kof98um/>
- **Original host**: `game.snk-corp.co.jp`
- **Captured at**: 2026-05-02T22:57:33.165448Z
- **Tool**: `wget`

## Snapshots used

- **Captured live** from <https://game.snk-corp.co.jp/official/kof98um/> on 2026-05-02T22:57:33.165150Z.

## Notes

Mostly static HTML with three Flash widgets: movie/ (2 PV trailers via pv1.swf/pv2.swf embedding pv_video1.swf/pv_video2.swf), screenshot/ (60-screenshot gallery via ss.swf reading state.txt), info/ (legacy AC_RunActiveContent stub stripped). 41 HTML pages: 22 character profiles, 13 hakase lessons + index, plus index/system/info/ps2/movie/screenshot. Ruffle (https://ruffle.rs) self-hosted under system/ruffle/ with autoplay+allowscriptaccess. AC_FL_RunContent shim under system/ac_runactivecontent.js so Adobe Dreamweaver embeds work without the out-of-scope /Scripts/AC_RunActiveContent.js. The screenshot gallery's ss.swf was patched with JPEXS ffdec: real Flash fires onClipEvent(data) when a JPG loadMovie completes but Ruffle does not, so the SWF froze; gotoAndStop('ok2') was moved from onClipEvent(data) into onClipEvent(load) to advance the timeline. Embedded SWF media (22 png, 5 ttf, 3 jpg, 2 flv) extracted to _assets/. Source pages were Shift_JIS, transcoded to UTF-8.

## Contributing

Found a missing asset or better version?

Feel free to open a PR.
