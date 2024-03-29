(() => {
  var Tt = Object.create,
    ze = Object.defineProperty,
    Nt = Object.getOwnPropertyDescriptor,
    Ke = Object.getOwnPropertyNames,
    It = Object.getPrototypeOf,
    Rt = Object.prototype.hasOwnProperty,
    Mt = (o, t) =>
      function () {
        return (
          t || (0, o[Ke(o)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    Et = (o, t, n, e) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Ke(t))
          !Rt.call(o, r) &&
            r !== n &&
            ze(o, r, {
              get: () => t[r],
              enumerable: !(e = Nt(t, r)) || e.enumerable,
            });
      return o;
    },
    We = (o, t, n) => (
      (n = o != null ? Tt(It(o)) : {}),
      Et(
        t || !o || !o.__esModule
          ? ze(n, "default", { value: o, enumerable: !0 })
          : n,
        o,
      )
    ),
    Xe = Mt({
      "lib/fingerprint2.min.js"(o, t) {
        (function (n, e, r) {
          "use strict";
          typeof t != "undefined" && t.exports
            ? (t.exports = r())
            : typeof define == "function" && define.amd
            ? define(r)
            : (e[n] = r());
        })("Fingerprint2", o, function () {
          "use strict";
          Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (e, r) {
              var i;
              if (this == null)
                throw new TypeError("'this' is null or undefined");
              var s = Object(this),
                a = s.length >>> 0;
              if (a === 0) return -1;
              var l = +r || 0;
              if ((Math.abs(l) === 1 / 0 && (l = 0), l >= a)) return -1;
              for (i = Math.max(l >= 0 ? l : a - Math.abs(l), 0); a > i; ) {
                if (i in s && s[i] === e) return i;
                i++;
              }
              return -1;
            });
          var n = function (e) {
            var r = {
              swfContainerId: "fingerprintjs2",
              swfPath: "flash/compiled/FontList.swf",
              detectScreenOrientation: !0,
              sortPluginsFor: [/palemoon/i],
            };
            (this.options = this.extend(e, r)),
              (this.nativeForEach = Array.prototype.forEach),
              (this.nativeMap = Array.prototype.map);
          };
          return (
            (n.prototype = {
              extend: function (e, r) {
                if (e == null) return r;
                for (var i in e) e[i] != null && r[i] !== e[i] && (r[i] = e[i]);
                return r;
              },
              log: function (e) {
                window.console && console.log(e);
              },
              get: function (e) {
                var r = [];
                (r = this.userAgentKey(r)),
                  (r = this.languageKey(r)),
                  (r = this.colorDepthKey(r)),
                  (r = this.screenResolutionKey(r)),
                  (r = this.availableScreenResolutionKey(r)),
                  (r = this.timezoneOffsetKey(r)),
                  (r = this.sessionStorageKey(r)),
                  (r = this.localStorageKey(r)),
                  (r = this.indexedDbKey(r)),
                  (r = this.addBehaviorKey(r)),
                  (r = this.openDatabaseKey(r)),
                  (r = this.cpuClassKey(r)),
                  (r = this.platformKey(r)),
                  (r = this.doNotTrackKey(r)),
                  (r = this.pluginsKey(r)),
                  (r = this.canvasKey(r)),
                  (r = this.webglKey(r)),
                  (r = this.adBlockKey(r)),
                  (r = this.hasLiedLanguagesKey(r)),
                  (r = this.hasLiedResolutionKey(r)),
                  (r = this.hasLiedOsKey(r)),
                  (r = this.hasLiedBrowserKey(r)),
                  (r = this.touchSupportKey(r));
                var i = this;
                this.fontsKey(r, function (s) {
                  var a = [];
                  i.each(s, function (g) {
                    var v = g.value;
                    typeof g.value.join != "undefined" &&
                      (v = g.value.join(";")),
                      a.push(v);
                  });
                  var l = i.x64hash128(a.join("~~~"), 31);
                  return e(l, s);
                });
              },
              userAgentKey: function (e) {
                return (
                  this.options.excludeUserAgent ||
                    e.push({ key: "user_agent", value: this.getUserAgent() }),
                  e
                );
              },
              getUserAgent: function () {
                return navigator.userAgent;
              },
              languageKey: function (e) {
                return (
                  this.options.excludeLanguage ||
                    e.push({
                      key: "language",
                      value:
                        navigator.language ||
                        navigator.userLanguage ||
                        navigator.browserLanguage ||
                        navigator.systemLanguage,
                    }),
                  e
                );
              },
              colorDepthKey: function (e) {
                return (
                  this.options.excludeColorDepth ||
                    e.push({ key: "color_depth", value: screen.colorDepth }),
                  e
                );
              },
              screenResolutionKey: function (e) {
                return this.options.excludeScreenResolution
                  ? e
                  : this.getScreenResolution(e);
              },
              getScreenResolution: function (e) {
                var r;
                return (
                  (r =
                    this.options.detectScreenOrientation &&
                    screen.height > screen.width
                      ? [screen.height, screen.width]
                      : [screen.width, screen.height]),
                  typeof r != "undefined" &&
                    e.push({ key: "resolution", value: r }),
                  e
                );
              },
              availableScreenResolutionKey: function (e) {
                return this.options.excludeAvailableScreenResolution
                  ? e
                  : this.getAvailableScreenResolution(e);
              },
              getAvailableScreenResolution: function (e) {
                var r;
                return (
                  screen.availWidth &&
                    screen.availHeight &&
                    (r = this.options.detectScreenOrientation
                      ? screen.availHeight > screen.availWidth
                        ? [screen.availHeight, screen.availWidth]
                        : [screen.availWidth, screen.availHeight]
                      : [screen.availHeight, screen.availWidth]),
                  typeof r != "undefined" &&
                    e.push({ key: "available_resolution", value: r }),
                  e
                );
              },
              timezoneOffsetKey: function (e) {
                return (
                  this.options.excludeTimezoneOffset ||
                    e.push({
                      key: "timezone_offset",
                      value: new Date().getTimezoneOffset(),
                    }),
                  e
                );
              },
              sessionStorageKey: function (e) {
                return (
                  !this.options.excludeSessionStorage &&
                    this.hasSessionStorage() &&
                    e.push({ key: "session_storage", value: 1 }),
                  e
                );
              },
              localStorageKey: function (e) {
                return (
                  !this.options.excludeSessionStorage &&
                    this.hasLocalStorage() &&
                    e.push({ key: "local_storage", value: 1 }),
                  e
                );
              },
              indexedDbKey: function (e) {
                return (
                  !this.options.excludeIndexedDB &&
                    this.hasIndexedDB() &&
                    e.push({ key: "indexed_db", value: 1 }),
                  e
                );
              },
              addBehaviorKey: function (e) {
                return (
                  document.body &&
                    !this.options.excludeAddBehavior &&
                    document.body.addBehavior &&
                    e.push({ key: "add_behavior", value: 1 }),
                  e
                );
              },
              openDatabaseKey: function (e) {
                return (
                  !this.options.excludeOpenDatabase &&
                    window.openDatabase &&
                    e.push({ key: "open_database", value: 1 }),
                  e
                );
              },
              cpuClassKey: function (e) {
                return (
                  this.options.excludeCpuClass ||
                    e.push({
                      key: "cpu_class",
                      value: this.getNavigatorCpuClass(),
                    }),
                  e
                );
              },
              platformKey: function (e) {
                return (
                  this.options.excludePlatform ||
                    e.push({
                      key: "navigator_platform",
                      value: this.getNavigatorPlatform(),
                    }),
                  e
                );
              },
              doNotTrackKey: function (e) {
                return (
                  this.options.excludeDoNotTrack ||
                    e.push({
                      key: "do_not_track",
                      value: this.getDoNotTrack(),
                    }),
                  e
                );
              },
              canvasKey: function (e) {
                return (
                  !this.options.excludeCanvas &&
                    this.isCanvasSupported() &&
                    e.push({ key: "canvas", value: this.getCanvasFp() }),
                  e
                );
              },
              webglKey: function (e) {
                return (
                  this.options.excludeWebGL ||
                    (this.isWebGlSupported() &&
                      e.push({ key: "webgl", value: this.getWebglFp() })),
                  e
                );
              },
              adBlockKey: function (e) {
                return (
                  this.options.excludeAdBlock ||
                    e.push({ key: "adblock", value: this.getAdBlock() }),
                  e
                );
              },
              hasLiedLanguagesKey: function (e) {
                return (
                  this.options.excludeHasLiedLanguages ||
                    e.push({
                      key: "has_lied_languages",
                      value: this.getHasLiedLanguages(),
                    }),
                  e
                );
              },
              hasLiedResolutionKey: function (e) {
                return (
                  this.options.excludeHasLiedResolution ||
                    e.push({
                      key: "has_lied_resolution",
                      value: this.getHasLiedResolution(),
                    }),
                  e
                );
              },
              hasLiedOsKey: function (e) {
                return (
                  this.options.excludeHasLiedOs ||
                    e.push({ key: "has_lied_os", value: this.getHasLiedOs() }),
                  e
                );
              },
              hasLiedBrowserKey: function (e) {
                return (
                  this.options.excludeHasLiedBrowser ||
                    e.push({
                      key: "has_lied_browser",
                      value: this.getHasLiedBrowser(),
                    }),
                  e
                );
              },
              fontsKey: function (e, r) {
                return this.options.excludeJsFonts
                  ? this.flashFontsKey(e, r)
                  : this.jsFontsKey(e, r);
              },
              flashFontsKey: function (e, r) {
                return this.options.excludeFlashFonts
                  ? r(e)
                  : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled()
                  ? typeof this.options.swfPath == "undefined"
                    ? r(e)
                    : void this.loadSwfAndDetectFonts(function (i) {
                        e.push({ key: "swf_fonts", value: i.join(";") }), r(e);
                      })
                  : r(e);
              },
              jsFontsKey: function (e, r) {
                var i = this;
                return setTimeout(function () {
                  var s = ["monospace", "sans-serif", "serif"],
                    a = "mmmmmmmmmmlli",
                    l = "72px",
                    g = document.getElementsByTagName("body")[0],
                    v = document.createElement("span");
                  (v.style.fontSize = l), (v.innerHTML = a);
                  var w = {},
                    y = {};
                  for (var c in s)
                    (v.style.fontFamily = s[c]),
                      g.appendChild(v),
                      (w[s[c]] = v.offsetWidth),
                      (y[s[c]] = v.offsetHeight),
                      g.removeChild(v);
                  var h = function (b) {
                      var x = !1;
                      for (var k in s) {
                        (v.style.fontFamily = b + "," + s[k]), g.appendChild(v);
                        var N =
                          v.offsetWidth !== w[s[k]] ||
                          v.offsetHeight !== y[s[k]];
                        g.removeChild(v), (x = x || N);
                      }
                      return x;
                    },
                    f = [
                      "Andale Mono",
                      "Arial",
                      "Arial Black",
                      "Arial Hebrew",
                      "Arial MT",
                      "Arial Narrow",
                      "Arial Rounded MT Bold",
                      "Arial Unicode MS",
                      "Bitstream Vera Sans Mono",
                      "Book Antiqua",
                      "Bookman Old Style",
                      "Calibri",
                      "Cambria",
                      "Cambria Math",
                      "Century",
                      "Century Gothic",
                      "Century Schoolbook",
                      "Comic Sans",
                      "Comic Sans MS",
                      "Consolas",
                      "Courier",
                      "Courier New",
                      "Garamond",
                      "Geneva",
                      "Georgia",
                      "Helvetica",
                      "Helvetica Neue",
                      "Impact",
                      "Lucida Bright",
                      "Lucida Calligraphy",
                      "Lucida Console",
                      "Lucida Fax",
                      "LUCIDA GRANDE",
                      "Lucida Handwriting",
                      "Lucida Sans",
                      "Lucida Sans Typewriter",
                      "Lucida Sans Unicode",
                      "Microsoft Sans Serif",
                      "Monaco",
                      "Monotype Corsiva",
                      "MS Gothic",
                      "MS Outlook",
                      "MS PGothic",
                      "MS Reference Sans Serif",
                      "MS Sans Serif",
                      "MS Serif",
                      "MYRIAD",
                      "MYRIAD PRO",
                      "Palatino",
                      "Palatino Linotype",
                      "Segoe Print",
                      "Segoe Script",
                      "Segoe UI",
                      "Segoe UI Light",
                      "Segoe UI Semibold",
                      "Segoe UI Symbol",
                      "Tahoma",
                      "Times",
                      "Times New Roman",
                      "Times New Roman PS",
                      "Trebuchet MS",
                      "Verdana",
                      "Wingdings",
                      "Wingdings 2",
                      "Wingdings 3",
                    ],
                    u = [
                      "Abadi MT Condensed Light",
                      "Academy Engraved LET",
                      "ADOBE CASLON PRO",
                      "Adobe Garamond",
                      "ADOBE GARAMOND PRO",
                      "Agency FB",
                      "Aharoni",
                      "Albertus Extra Bold",
                      "Albertus Medium",
                      "Algerian",
                      "Amazone BT",
                      "American Typewriter",
                      "American Typewriter Condensed",
                      "AmerType Md BT",
                      "Andalus",
                      "Angsana New",
                      "AngsanaUPC",
                      "Antique Olive",
                      "Aparajita",
                      "Apple Chancery",
                      "Apple Color Emoji",
                      "Apple SD Gothic Neo",
                      "Arabic Typesetting",
                      "ARCHER",
                      "ARNO PRO",
                      "Arrus BT",
                      "Aurora Cn BT",
                      "AvantGarde Bk BT",
                      "AvantGarde Md BT",
                      "AVENIR",
                      "Ayuthaya",
                      "Bandy",
                      "Bangla Sangam MN",
                      "Bank Gothic",
                      "BankGothic Md BT",
                      "Baskerville",
                      "Baskerville Old Face",
                      "Batang",
                      "BatangChe",
                      "Bauer Bodoni",
                      "Bauhaus 93",
                      "Bazooka",
                      "Bell MT",
                      "Bembo",
                      "Benguiat Bk BT",
                      "Berlin Sans FB",
                      "Berlin Sans FB Demi",
                      "Bernard MT Condensed",
                      "BernhardFashion BT",
                      "BernhardMod BT",
                      "Big Caslon",
                      "BinnerD",
                      "Blackadder ITC",
                      "BlairMdITC TT",
                      "Bodoni 72",
                      "Bodoni 72 Oldstyle",
                      "Bodoni 72 Smallcaps",
                      "Bodoni MT",
                      "Bodoni MT Black",
                      "Bodoni MT Condensed",
                      "Bodoni MT Poster Compressed",
                      "Bookshelf Symbol 7",
                      "Boulder",
                      "Bradley Hand",
                      "Bradley Hand ITC",
                      "Bremen Bd BT",
                      "Britannic Bold",
                      "Broadway",
                      "Browallia New",
                      "BrowalliaUPC",
                      "Brush Script MT",
                      "Californian FB",
                      "Calisto MT",
                      "Calligrapher",
                      "Candara",
                      "CaslonOpnface BT",
                      "Castellar",
                      "Centaur",
                      "Cezanne",
                      "CG Omega",
                      "CG Times",
                      "Chalkboard",
                      "Chalkboard SE",
                      "Chalkduster",
                      "Charlesworth",
                      "Charter Bd BT",
                      "Charter BT",
                      "Chaucer",
                      "ChelthmITC Bk BT",
                      "Chiller",
                      "Clarendon",
                      "Clarendon Condensed",
                      "CloisterBlack BT",
                      "Cochin",
                      "Colonna MT",
                      "Constantia",
                      "Cooper Black",
                      "Copperplate",
                      "Copperplate Gothic",
                      "Copperplate Gothic Bold",
                      "Copperplate Gothic Light",
                      "CopperplGoth Bd BT",
                      "Corbel",
                      "Cordia New",
                      "CordiaUPC",
                      "Cornerstone",
                      "Coronet",
                      "Cuckoo",
                      "Curlz MT",
                      "DaunPenh",
                      "Dauphin",
                      "David",
                      "DB LCD Temp",
                      "DELICIOUS",
                      "Denmark",
                      "DFKai-SB",
                      "Didot",
                      "DilleniaUPC",
                      "DIN",
                      "DokChampa",
                      "Dotum",
                      "DotumChe",
                      "Ebrima",
                      "Edwardian Script ITC",
                      "Elephant",
                      "English 111 Vivace BT",
                      "Engravers MT",
                      "EngraversGothic BT",
                      "Eras Bold ITC",
                      "Eras Demi ITC",
                      "Eras Light ITC",
                      "Eras Medium ITC",
                      "EucrosiaUPC",
                      "Euphemia",
                      "Euphemia UCAS",
                      "EUROSTILE",
                      "Exotc350 Bd BT",
                      "FangSong",
                      "Felix Titling",
                      "Fixedsys",
                      "FONTIN",
                      "Footlight MT Light",
                      "Forte",
                      "FrankRuehl",
                      "Fransiscan",
                      "Freefrm721 Blk BT",
                      "FreesiaUPC",
                      "Freestyle Script",
                      "French Script MT",
                      "FrnkGothITC Bk BT",
                      "Fruitger",
                      "FRUTIGER",
                      "Futura",
                      "Futura Bk BT",
                      "Futura Lt BT",
                      "Futura Md BT",
                      "Futura ZBlk BT",
                      "FuturaBlack BT",
                      "Gabriola",
                      "Galliard BT",
                      "Gautami",
                      "Geeza Pro",
                      "Geometr231 BT",
                      "Geometr231 Hv BT",
                      "Geometr231 Lt BT",
                      "GeoSlab 703 Lt BT",
                      "GeoSlab 703 XBd BT",
                      "Gigi",
                      "Gill Sans",
                      "Gill Sans MT",
                      "Gill Sans MT Condensed",
                      "Gill Sans MT Ext Condensed Bold",
                      "Gill Sans Ultra Bold",
                      "Gill Sans Ultra Bold Condensed",
                      "Gisha",
                      "Gloucester MT Extra Condensed",
                      "GOTHAM",
                      "GOTHAM BOLD",
                      "Goudy Old Style",
                      "Goudy Stout",
                      "GoudyHandtooled BT",
                      "GoudyOLSt BT",
                      "Gujarati Sangam MN",
                      "Gulim",
                      "GulimChe",
                      "Gungsuh",
                      "GungsuhChe",
                      "Gurmukhi MN",
                      "Haettenschweiler",
                      "Harlow Solid Italic",
                      "Harrington",
                      "Heather",
                      "Heiti SC",
                      "Heiti TC",
                      "HELV",
                      "Herald",
                      "High Tower Text",
                      "Hiragino Kaku Gothic ProN",
                      "Hiragino Mincho ProN",
                      "Hoefler Text",
                      "Humanst 521 Cn BT",
                      "Humanst521 BT",
                      "Humanst521 Lt BT",
                      "Imprint MT Shadow",
                      "Incised901 Bd BT",
                      "Incised901 BT",
                      "Incised901 Lt BT",
                      "INCONSOLATA",
                      "Informal Roman",
                      "Informal011 BT",
                      "INTERSTATE",
                      "IrisUPC",
                      "Iskoola Pota",
                      "JasmineUPC",
                      "Jazz LET",
                      "Jenson",
                      "Jester",
                      "Jokerman",
                      "Juice ITC",
                      "Kabel Bk BT",
                      "Kabel Ult BT",
                      "Kailasa",
                      "KaiTi",
                      "Kalinga",
                      "Kannada Sangam MN",
                      "Kartika",
                      "Kaufmann Bd BT",
                      "Kaufmann BT",
                      "Khmer UI",
                      "KodchiangUPC",
                      "Kokila",
                      "Korinna BT",
                      "Kristen ITC",
                      "Krungthep",
                      "Kunstler Script",
                      "Lao UI",
                      "Latha",
                      "Leelawadee",
                      "Letter Gothic",
                      "Levenim MT",
                      "LilyUPC",
                      "Lithograph",
                      "Lithograph Light",
                      "Long Island",
                      "Lydian BT",
                      "Magneto",
                      "Maiandra GD",
                      "Malayalam Sangam MN",
                      "Malgun Gothic",
                      "Mangal",
                      "Marigold",
                      "Marion",
                      "Marker Felt",
                      "Market",
                      "Marlett",
                      "Matisse ITC",
                      "Matura MT Script Capitals",
                      "Meiryo",
                      "Meiryo UI",
                      "Microsoft Himalaya",
                      "Microsoft JhengHei",
                      "Microsoft New Tai Lue",
                      "Microsoft PhagsPa",
                      "Microsoft Tai Le",
                      "Microsoft Uighur",
                      "Microsoft YaHei",
                      "Microsoft Yi Baiti",
                      "MingLiU",
                      "MingLiU_HKSCS",
                      "MingLiU_HKSCS-ExtB",
                      "MingLiU-ExtB",
                      "Minion",
                      "Minion Pro",
                      "Miriam",
                      "Miriam Fixed",
                      "Mistral",
                      "Modern",
                      "Modern No. 20",
                      "Mona Lisa Solid ITC TT",
                      "Mongolian Baiti",
                      "MONO",
                      "MoolBoran",
                      "Mrs Eaves",
                      "MS LineDraw",
                      "MS Mincho",
                      "MS PMincho",
                      "MS Reference Specialty",
                      "MS UI Gothic",
                      "MT Extra",
                      "MUSEO",
                      "MV Boli",
                      "Nadeem",
                      "Narkisim",
                      "NEVIS",
                      "News Gothic",
                      "News GothicMT",
                      "NewsGoth BT",
                      "Niagara Engraved",
                      "Niagara Solid",
                      "Noteworthy",
                      "NSimSun",
                      "Nyala",
                      "OCR A Extended",
                      "Old Century",
                      "Old English Text MT",
                      "Onyx",
                      "Onyx BT",
                      "OPTIMA",
                      "Oriya Sangam MN",
                      "OSAKA",
                      "OzHandicraft BT",
                      "Palace Script MT",
                      "Papyrus",
                      "Parchment",
                      "Party LET",
                      "Pegasus",
                      "Perpetua",
                      "Perpetua Titling MT",
                      "PetitaBold",
                      "Pickwick",
                      "Plantagenet Cherokee",
                      "Playbill",
                      "PMingLiU",
                      "PMingLiU-ExtB",
                      "Poor Richard",
                      "Poster",
                      "PosterBodoni BT",
                      "PRINCETOWN LET",
                      "Pristina",
                      "PTBarnum BT",
                      "Pythagoras",
                      "Raavi",
                      "Rage Italic",
                      "Ravie",
                      "Ribbon131 Bd BT",
                      "Rockwell",
                      "Rockwell Condensed",
                      "Rockwell Extra Bold",
                      "Rod",
                      "Roman",
                      "Sakkal Majalla",
                      "Santa Fe LET",
                      "Savoye LET",
                      "Sceptre",
                      "Script",
                      "Script MT Bold",
                      "SCRIPTINA",
                      "Serifa",
                      "Serifa BT",
                      "Serifa Th BT",
                      "ShelleyVolante BT",
                      "Sherwood",
                      "Shonar Bangla",
                      "Showcard Gothic",
                      "Shruti",
                      "Signboard",
                      "SILKSCREEN",
                      "SimHei",
                      "Simplified Arabic",
                      "Simplified Arabic Fixed",
                      "SimSun",
                      "SimSun-ExtB",
                      "Sinhala Sangam MN",
                      "Sketch Rockwell",
                      "Skia",
                      "Small Fonts",
                      "Snap ITC",
                      "Snell Roundhand",
                      "Socket",
                      "Souvenir Lt BT",
                      "Staccato222 BT",
                      "Steamer",
                      "Stencil",
                      "Storybook",
                      "Styllo",
                      "Subway",
                      "Swis721 BlkEx BT",
                      "Swiss911 XCm BT",
                      "Sylfaen",
                      "Synchro LET",
                      "System",
                      "Tamil Sangam MN",
                      "Technical",
                      "Teletype",
                      "Telugu Sangam MN",
                      "Tempus Sans ITC",
                      "Terminal",
                      "Thonburi",
                      "Traditional Arabic",
                      "Trajan",
                      "TRAJAN PRO",
                      "Tristan",
                      "Tubular",
                      "Tunga",
                      "Tw Cen MT",
                      "Tw Cen MT Condensed",
                      "Tw Cen MT Condensed Extra Bold",
                      "TypoUpright BT",
                      "Unicorn",
                      "Univers",
                      "Univers CE 55 Medium",
                      "Univers Condensed",
                      "Utsaah",
                      "Vagabond",
                      "Vani",
                      "Vijaya",
                      "Viner Hand ITC",
                      "VisualUI",
                      "Vivaldi",
                      "Vladimir Script",
                      "Vrinda",
                      "Westminster",
                      "WHITNEY",
                      "Wide Latin",
                      "ZapfEllipt BT",
                      "ZapfHumnst BT",
                      "ZapfHumnst Dm BT",
                      "Zapfino",
                      "Zurich BlkEx BT",
                      "Zurich Ex BT",
                      "ZWAdobeF",
                    ];
                  i.options.extendedJsFonts && (f = f.concat(u));
                  for (var p = [], d = 0, m = f.length; m > d; d++)
                    h(f[d]) && p.push(f[d]);
                  e.push({ key: "js_fonts", value: p }), r(e);
                }, 1);
              },
              pluginsKey: function (e) {
                return (
                  this.options.excludePlugins ||
                    e.push(
                      this.isIE()
                        ? { key: "ie_plugins", value: this.getIEPlugins() }
                        : {
                            key: "regular_plugins",
                            value: this.getRegularPlugins(),
                          },
                    ),
                  e
                );
              },
              getRegularPlugins: function () {
                for (
                  var e = [], r = 0, i = navigator.plugins.length;
                  i > r;
                  r++
                )
                  e.push(navigator.plugins[r]);
                return (
                  this.pluginsShouldBeSorted() &&
                    (e = e.sort(function (s, a) {
                      return s.name > a.name ? 1 : s.name < a.name ? -1 : 0;
                    })),
                  this.map(
                    e,
                    function (s) {
                      var a = this.map(s, function (l) {
                        return [l.type, l.suffixes].join("~");
                      }).join(",");
                      return [s.name, s.description, a].join("::");
                    },
                    this,
                  )
                );
              },
              getIEPlugins: function () {
                if (window.ActiveXObject) {
                  var e = [
                    "AcroPDF.PDF",
                    "Adodb.Stream",
                    "AgControl.AgControl",
                    "DevalVRXCtrl.DevalVRXCtrl.1",
                    "MacromediaFlashPaper.MacromediaFlashPaper",
                    "Msxml2.DOMDocument",
                    "Msxml2.XMLHTTP",
                    "PDF.PdfCtrl",
                    "QuickTime.QuickTime",
                    "QuickTimeCheckObject.QuickTimeCheck.1",
                    "RealPlayer",
                    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                    "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                    "Scripting.Dictionary",
                    "SWCtl.SWCtl",
                    "Shell.UIHelper",
                    "ShockwaveFlash.ShockwaveFlash",
                    "Skype.Detection",
                    "TDCCtl.TDCCtl",
                    "WMPlayer.OCX",
                    "rmocx.RealPlayer G2 Control",
                    "rmocx.RealPlayer G2 Control.1",
                  ];
                  return this.map(e, function (r) {
                    try {
                      return new ActiveXObject(r), r;
                    } catch (i) {
                      return null;
                    }
                  });
                }
                return [];
              },
              pluginsShouldBeSorted: function () {
                for (
                  var e = !1, r = 0, i = this.options.sortPluginsFor.length;
                  i > r;
                  r++
                ) {
                  var s = this.options.sortPluginsFor[r];
                  if (navigator.userAgent.match(s)) {
                    e = !0;
                    break;
                  }
                }
                return e;
              },
              touchSupportKey: function (e) {
                return (
                  this.options.excludeTouchSupport ||
                    e.push({
                      key: "touch_support",
                      value: this.getTouchSupport(),
                    }),
                  e
                );
              },
              hasSessionStorage: function () {
                try {
                  return !!window.sessionStorage;
                } catch (e) {
                  return !0;
                }
              },
              hasLocalStorage: function () {
                try {
                  return !!window.localStorage;
                } catch (e) {
                  return !0;
                }
              },
              hasIndexedDB: function () {
                try {
                  return !!window.indexedDB;
                } catch (e) {
                  return !0;
                }
              },
              getNavigatorCpuClass: function () {
                return navigator.cpuClass ? navigator.cpuClass : "unknown";
              },
              getNavigatorPlatform: function () {
                return navigator.platform ? navigator.platform : "unknown";
              },
              getDoNotTrack: function () {
                return navigator.doNotTrack ? navigator.doNotTrack : "unknown";
              },
              getTouchSupport: function () {
                var e = 0,
                  r = !1;
                typeof navigator.maxTouchPoints != "undefined"
                  ? (e = navigator.maxTouchPoints)
                  : typeof navigator.msMaxTouchPoints != "undefined" &&
                    (e = navigator.msMaxTouchPoints);
                try {
                  document.createEvent("TouchEvent"), (r = !0);
                } catch (s) {}
                var i = "ontouchstart" in window;
                return [e, r, i];
              },
              getCanvasFp: function () {
                var e = [],
                  r = document.createElement("canvas");
                (r.width = 2e3), (r.height = 200), (r.style.display = "inline");
                var i = r.getContext("2d");
                return (
                  i.rect(0, 0, 10, 10),
                  i.rect(2, 2, 6, 6),
                  e.push(
                    "canvas winding:" +
                      (i.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no"),
                  ),
                  (i.textBaseline = "alphabetic"),
                  (i.fillStyle = "#f60"),
                  i.fillRect(125, 1, 62, 20),
                  (i.fillStyle = "#069"),
                  (i.font = this.options.dontUseFakeFontInCanvas
                    ? "11pt Arial"
                    : "11pt no-real-font-123"),
                  i.fillText(
                    "Cwm fjordbank glyphs vext quiz, \u{1F603}",
                    2,
                    15,
                  ),
                  (i.fillStyle = "rgba(102, 204, 0, 0.7)"),
                  (i.font = "18pt Arial"),
                  i.fillText(
                    "Cwm fjordbank glyphs vext quiz, \u{1F603}",
                    4,
                    45,
                  ),
                  (i.globalCompositeOperation = "multiply"),
                  (i.fillStyle = "rgb(255,0,255)"),
                  i.beginPath(),
                  i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                  i.closePath(),
                  i.fill(),
                  (i.fillStyle = "rgb(0,255,255)"),
                  i.beginPath(),
                  i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                  i.closePath(),
                  i.fill(),
                  (i.fillStyle = "rgb(255,255,0)"),
                  i.beginPath(),
                  i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                  i.closePath(),
                  i.fill(),
                  (i.fillStyle = "rgb(255,0,255)"),
                  i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                  i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                  i.fill("evenodd"),
                  e.push("canvas fp:" + r.toDataURL()),
                  e.join("~")
                );
              },
              getWebglFp: function () {
                var e,
                  r = function (h) {
                    return (
                      e.clearColor(0, 0, 0, 1),
                      e.enable(e.DEPTH_TEST),
                      e.depthFunc(e.LEQUAL),
                      e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                      "[" + h[0] + ", " + h[1] + "]"
                    );
                  },
                  i = function (h) {
                    var f,
                      u =
                        h.getExtension("EXT_texture_filter_anisotropic") ||
                        h.getExtension(
                          "WEBKIT_EXT_texture_filter_anisotropic",
                        ) ||
                        h.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return u
                      ? ((f = h.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
                        f === 0 && (f = 2),
                        f)
                      : null;
                  };
                if (((e = this.getWebglCanvas()), !e)) return null;
                var s = [],
                  a =
                    "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                  l =
                    "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                  g = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, g);
                var v = new Float32Array([
                  -0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0,
                ]);
                e.bufferData(e.ARRAY_BUFFER, v, e.STATIC_DRAW),
                  (g.itemSize = 3),
                  (g.numItems = 3);
                var w = e.createProgram(),
                  y = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(y, a), e.compileShader(y);
                var c = e.createShader(e.FRAGMENT_SHADER);
                return (
                  e.shaderSource(c, l),
                  e.compileShader(c),
                  e.attachShader(w, y),
                  e.attachShader(w, c),
                  e.linkProgram(w),
                  e.useProgram(w),
                  (w.vertexPosAttrib = e.getAttribLocation(w, "attrVertex")),
                  (w.offsetUniform = e.getUniformLocation(w, "uniformOffset")),
                  e.enableVertexAttribArray(w.vertexPosArray),
                  e.vertexAttribPointer(
                    w.vertexPosAttrib,
                    g.itemSize,
                    e.FLOAT,
                    !1,
                    0,
                    0,
                  ),
                  e.uniform2f(w.offsetUniform, 1, 1),
                  e.drawArrays(e.TRIANGLE_STRIP, 0, g.numItems),
                  e.canvas != null && s.push(e.canvas.toDataURL()),
                  s.push("extensions:" + e.getSupportedExtensions().join(";")),
                  s.push(
                    "webgl aliased line width range:" +
                      r(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE)),
                  ),
                  s.push(
                    "webgl aliased point size range:" +
                      r(e.getParameter(e.ALIASED_POINT_SIZE_RANGE)),
                  ),
                  s.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                  s.push(
                    "webgl antialiasing:" +
                      (e.getContextAttributes().antialias ? "yes" : "no"),
                  ),
                  s.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                  s.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                  s.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                  s.push("webgl max anisotropy:" + i(e)),
                  s.push(
                    "webgl max combined texture image units:" +
                      e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                  ),
                  s.push(
                    "webgl max cube map texture size:" +
                      e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
                  ),
                  s.push(
                    "webgl max fragment uniform vectors:" +
                      e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
                  ),
                  s.push(
                    "webgl max render buffer size:" +
                      e.getParameter(e.MAX_RENDERBUFFER_SIZE),
                  ),
                  s.push(
                    "webgl max texture image units:" +
                      e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                  ),
                  s.push(
                    "webgl max texture size:" +
                      e.getParameter(e.MAX_TEXTURE_SIZE),
                  ),
                  s.push(
                    "webgl max varying vectors:" +
                      e.getParameter(e.MAX_VARYING_VECTORS),
                  ),
                  s.push(
                    "webgl max vertex attribs:" +
                      e.getParameter(e.MAX_VERTEX_ATTRIBS),
                  ),
                  s.push(
                    "webgl max vertex texture image units:" +
                      e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                  ),
                  s.push(
                    "webgl max vertex uniform vectors:" +
                      e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
                  ),
                  s.push(
                    "webgl max viewport dims:" +
                      r(e.getParameter(e.MAX_VIEWPORT_DIMS)),
                  ),
                  s.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                  s.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                  s.push(
                    "webgl shading language version:" +
                      e.getParameter(e.SHADING_LANGUAGE_VERSION),
                  ),
                  s.push(
                    "webgl stencil bits:" + e.getParameter(e.STENCIL_BITS),
                  ),
                  s.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                  s.push("webgl version:" + e.getParameter(e.VERSION)),
                  e.getShaderPrecisionFormat &&
                    (s.push(
                      "webgl vertex shader high float precision:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.HIGH_FLOAT,
                        ).precision,
                    ),
                    s.push(
                      "webgl vertex shader high float precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.HIGH_FLOAT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader high float precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.HIGH_FLOAT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl vertex shader medium float precision:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_FLOAT,
                        ).precision,
                    ),
                    s.push(
                      "webgl vertex shader medium float precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_FLOAT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader medium float precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_FLOAT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl vertex shader low float precision:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                          .precision,
                    ),
                    s.push(
                      "webgl vertex shader low float precision rangeMin:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                          .rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader low float precision rangeMax:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                          .rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader high float precision:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_FLOAT,
                        ).precision,
                    ),
                    s.push(
                      "webgl fragment shader high float precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_FLOAT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader high float precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_FLOAT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader medium float precision:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_FLOAT,
                        ).precision,
                    ),
                    s.push(
                      "webgl fragment shader medium float precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_FLOAT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader medium float precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_FLOAT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader low float precision:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.LOW_FLOAT,
                        ).precision,
                    ),
                    s.push(
                      "webgl fragment shader low float precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.LOW_FLOAT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader low float precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.LOW_FLOAT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl vertex shader high int precision:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                          .precision,
                    ),
                    s.push(
                      "webgl vertex shader high int precision rangeMin:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                          .rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader high int precision rangeMax:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                          .rangeMax,
                    ),
                    s.push(
                      "webgl vertex shader medium int precision:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_INT,
                        ).precision,
                    ),
                    s.push(
                      "webgl vertex shader medium int precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_INT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader medium int precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.VERTEX_SHADER,
                          e.MEDIUM_INT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl vertex shader low int precision:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                          .precision,
                    ),
                    s.push(
                      "webgl vertex shader low int precision rangeMin:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                          .rangeMin,
                    ),
                    s.push(
                      "webgl vertex shader low int precision rangeMax:" +
                        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                          .rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader high int precision:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_INT,
                        ).precision,
                    ),
                    s.push(
                      "webgl fragment shader high int precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_INT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader high int precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.HIGH_INT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader medium int precision:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_INT,
                        ).precision,
                    ),
                    s.push(
                      "webgl fragment shader medium int precision rangeMin:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_INT,
                        ).rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader medium int precision rangeMax:" +
                        e.getShaderPrecisionFormat(
                          e.FRAGMENT_SHADER,
                          e.MEDIUM_INT,
                        ).rangeMax,
                    ),
                    s.push(
                      "webgl fragment shader low int precision:" +
                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                          .precision,
                    ),
                    s.push(
                      "webgl fragment shader low int precision rangeMin:" +
                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                          .rangeMin,
                    ),
                    s.push(
                      "webgl fragment shader low int precision rangeMax:" +
                        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                          .rangeMax,
                    )),
                  s.join("~")
                );
              },
              getAdBlock: function () {
                var e = document.createElement("div");
                e.setAttribute("id", "ads");
                try {
                  return (
                    document.body.appendChild(e),
                    !document.getElementById("ads")
                  );
                } catch (r) {
                  return !1;
                }
              },
              getHasLiedLanguages: function () {
                if (typeof navigator.languages != "undefined")
                  try {
                    var e = navigator.languages[0].substr(0, 2);
                    if (e !== navigator.language.substr(0, 2)) return !0;
                  } catch (r) {
                    return !0;
                  }
                return !1;
              },
              getHasLiedResolution: function () {
                return screen.width < screen.availWidth
                  ? !0
                  : screen.height < screen.availHeight;
              },
              getHasLiedOs: function () {
                var e,
                  r = navigator.userAgent.toLowerCase(),
                  i = navigator.oscpu,
                  s = navigator.platform.toLowerCase();
                e =
                  r.indexOf("windows phone") >= 0
                    ? "Windows Phone"
                    : r.indexOf("win") >= 0
                    ? "Windows"
                    : r.indexOf("android") >= 0
                    ? "Android"
                    : r.indexOf("linux") >= 0
                    ? "Linux"
                    : r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0
                    ? "iOS"
                    : r.indexOf("mac") >= 0
                    ? "Mac"
                    : "Other";
                var a;
                return (
                  (a =
                    "ontouchstart" in window ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0),
                  (a &&
                    e !== "Windows Phone" &&
                    e !== "Android" &&
                    e !== "iOS" &&
                    e !== "Other") ||
                  (typeof i != "undefined" &&
                    ((i = i.toLowerCase()),
                    (i.indexOf("win") >= 0 &&
                      e !== "Windows" &&
                      e !== "Windows Phone") ||
                      (i.indexOf("linux") >= 0 &&
                        e !== "Linux" &&
                        e !== "Android") ||
                      (i.indexOf("mac") >= 0 && e !== "Mac" && e !== "iOS") ||
                      (i.indexOf("win") === 0 &&
                        i.indexOf("linux") === 0 &&
                        i.indexOf("mac") >= 0 &&
                        e !== "other"))) ||
                  (s.indexOf("win") >= 0 &&
                    e !== "Windows" &&
                    e !== "Windows Phone") ||
                  ((s.indexOf("linux") >= 0 ||
                    s.indexOf("android") >= 0 ||
                    s.indexOf("pike") >= 0) &&
                    e !== "Linux" &&
                    e !== "Android") ||
                  ((s.indexOf("mac") >= 0 ||
                    s.indexOf("ipad") >= 0 ||
                    s.indexOf("ipod") >= 0 ||
                    s.indexOf("iphone") >= 0) &&
                    e !== "Mac" &&
                    e !== "iOS") ||
                  (s.indexOf("win") === 0 &&
                    s.indexOf("linux") === 0 &&
                    s.indexOf("mac") >= 0 &&
                    e !== "other")
                    ? !0
                    : typeof navigator.plugins == "undefined" &&
                      e !== "Windows" &&
                      e !== "Windows Phone"
                );
              },
              getHasLiedBrowser: function () {
                var e,
                  r = navigator.userAgent.toLowerCase(),
                  i = navigator.productSub;
                if (
                  ((e =
                    r.indexOf("firefox") >= 0
                      ? "Firefox"
                      : r.indexOf("opera") >= 0 || r.indexOf("opr") >= 0
                      ? "Opera"
                      : r.indexOf("chrome") >= 0
                      ? "Chrome"
                      : r.indexOf("safari") >= 0
                      ? "Safari"
                      : r.indexOf("trident") >= 0
                      ? "Internet Explorer"
                      : "Other"),
                  (e === "Chrome" || e === "Safari" || e === "Opera") &&
                    i !== "20030107")
                )
                  return !0;
                var s = eval.toString().length;
                if (
                  (s === 37 &&
                    e !== "Safari" &&
                    e !== "Firefox" &&
                    e !== "Other") ||
                  (s === 39 && e !== "Internet Explorer" && e !== "Other") ||
                  (s === 33 && e !== "Chrome" && e !== "Opera" && e !== "Other")
                )
                  return !0;
                var a;
                try {
                  throw "a";
                } catch (l) {
                  try {
                    l.toSource(), (a = !0);
                  } catch (g) {
                    a = !1;
                  }
                }
                return !!(a && e !== "Firefox" && e !== "Other");
              },
              isCanvasSupported: function () {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"));
              },
              isWebGlSupported: function () {
                if (!this.isCanvasSupported()) return !1;
                var e,
                  r = document.createElement("canvas");
                try {
                  e =
                    r.getContext &&
                    (r.getContext("webgl") ||
                      r.getContext("experimental-webgl"));
                } catch (i) {
                  e = !1;
                }
                return !!window.WebGLRenderingContext && !!e;
              },
              isIE: function () {
                return navigator.appName === "Microsoft Internet Explorer"
                  ? !0
                  : !!(
                      navigator.appName === "Netscape" &&
                      /Trident/.test(navigator.userAgent)
                    );
              },
              hasSwfObjectLoaded: function () {
                return typeof window.swfobject != "undefined";
              },
              hasMinFlashInstalled: function () {
                return swfobject.hasFlashPlayerVersion("9.0.0");
              },
              addFlashDivNode: function () {
                var e = document.createElement("div");
                e.setAttribute("id", this.options.swfContainerId),
                  document.body.appendChild(e);
              },
              loadSwfAndDetectFonts: function (e) {
                var r = "___fp_swf_loaded";
                window[r] = function (l) {
                  e(l);
                };
                var i = this.options.swfContainerId;
                this.addFlashDivNode();
                var s = { onReady: r },
                  a = { allowScriptAccess: "always", menu: "false" };
                swfobject.embedSWF(
                  this.options.swfPath,
                  i,
                  "1",
                  "1",
                  "9.0.0",
                  !1,
                  s,
                  a,
                  {},
                );
              },
              getWebglCanvas: function () {
                var e = document.createElement("canvas"),
                  r = null;
                try {
                  r =
                    e.getContext("webgl") || e.getContext("experimental-webgl");
                } catch (i) {}
                return r || (r = null), r;
              },
              each: function (e, r, i) {
                if (e !== null) {
                  if (this.nativeForEach && e.forEach === this.nativeForEach)
                    e.forEach(r, i);
                  else if (e.length === +e.length) {
                    for (var s = 0, a = e.length; a > s; s++)
                      if (r.call(i, e[s], s, e) === {}) return;
                  } else
                    for (var l in e)
                      if (e.hasOwnProperty(l) && r.call(i, e[l], l, e) === {})
                        return;
                }
              },
              map: function (e, r, i) {
                var s = [];
                return e == null
                  ? s
                  : this.nativeMap && e.map === this.nativeMap
                  ? e.map(r, i)
                  : (this.each(e, function (a, l, g) {
                      s[s.length] = r.call(i, a, l, g);
                    }),
                    s);
              },
              x64Add: function (e, r) {
                (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                  (r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]]);
                var i = [0, 0, 0, 0];
                return (
                  (i[3] += e[3] + r[3]),
                  (i[2] += i[3] >>> 16),
                  (i[3] &= 65535),
                  (i[2] += e[2] + r[2]),
                  (i[1] += i[2] >>> 16),
                  (i[2] &= 65535),
                  (i[1] += e[1] + r[1]),
                  (i[0] += i[1] >>> 16),
                  (i[1] &= 65535),
                  (i[0] += e[0] + r[0]),
                  (i[0] &= 65535),
                  [(i[0] << 16) | i[1], (i[2] << 16) | i[3]]
                );
              },
              x64Multiply: function (e, r) {
                (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                  (r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]]);
                var i = [0, 0, 0, 0];
                return (
                  (i[3] += e[3] * r[3]),
                  (i[2] += i[3] >>> 16),
                  (i[3] &= 65535),
                  (i[2] += e[2] * r[3]),
                  (i[1] += i[2] >>> 16),
                  (i[2] &= 65535),
                  (i[2] += e[3] * r[2]),
                  (i[1] += i[2] >>> 16),
                  (i[2] &= 65535),
                  (i[1] += e[1] * r[3]),
                  (i[0] += i[1] >>> 16),
                  (i[1] &= 65535),
                  (i[1] += e[2] * r[2]),
                  (i[0] += i[1] >>> 16),
                  (i[1] &= 65535),
                  (i[1] += e[3] * r[1]),
                  (i[0] += i[1] >>> 16),
                  (i[1] &= 65535),
                  (i[0] +=
                    e[0] * r[3] + e[1] * r[2] + e[2] * r[1] + e[3] * r[0]),
                  (i[0] &= 65535),
                  [(i[0] << 16) | i[1], (i[2] << 16) | i[3]]
                );
              },
              x64Rotl: function (e, r) {
                return (
                  (r %= 64),
                  r === 32
                    ? [e[1], e[0]]
                    : 32 > r
                    ? [
                        (e[0] << r) | (e[1] >>> (32 - r)),
                        (e[1] << r) | (e[0] >>> (32 - r)),
                      ]
                    : ((r -= 32),
                      [
                        (e[1] << r) | (e[0] >>> (32 - r)),
                        (e[0] << r) | (e[1] >>> (32 - r)),
                      ])
                );
              },
              x64LeftShift: function (e, r) {
                return (
                  (r %= 64),
                  r === 0
                    ? e
                    : 32 > r
                    ? [(e[0] << r) | (e[1] >>> (32 - r)), e[1] << r]
                    : [e[1] << (r - 32), 0]
                );
              },
              x64Xor: function (e, r) {
                return [e[0] ^ r[0], e[1] ^ r[1]];
              },
              x64Fmix: function (e) {
                return (
                  (e = this.x64Xor(e, [0, e[0] >>> 1])),
                  (e = this.x64Multiply(e, [4283543511, 3981806797])),
                  (e = this.x64Xor(e, [0, e[0] >>> 1])),
                  (e = this.x64Multiply(e, [3301882366, 444984403])),
                  (e = this.x64Xor(e, [0, e[0] >>> 1]))
                );
              },
              x64hash128: function (e, r) {
                (e = e || ""), (r = r || 0);
                for (
                  var i = e.length % 16,
                    s = e.length - i,
                    a = [0, r],
                    l = [0, r],
                    g = [0, 0],
                    v = [0, 0],
                    w = [2277735313, 289559509],
                    y = [1291169091, 658871167],
                    c = 0;
                  s > c;
                  c += 16
                )
                  (g = [
                    (255 & e.charCodeAt(c + 4)) |
                      ((255 & e.charCodeAt(c + 5)) << 8) |
                      ((255 & e.charCodeAt(c + 6)) << 16) |
                      ((255 & e.charCodeAt(c + 7)) << 24),
                    (255 & e.charCodeAt(c)) |
                      ((255 & e.charCodeAt(c + 1)) << 8) |
                      ((255 & e.charCodeAt(c + 2)) << 16) |
                      ((255 & e.charCodeAt(c + 3)) << 24),
                  ]),
                    (v = [
                      (255 & e.charCodeAt(c + 12)) |
                        ((255 & e.charCodeAt(c + 13)) << 8) |
                        ((255 & e.charCodeAt(c + 14)) << 16) |
                        ((255 & e.charCodeAt(c + 15)) << 24),
                      (255 & e.charCodeAt(c + 8)) |
                        ((255 & e.charCodeAt(c + 9)) << 8) |
                        ((255 & e.charCodeAt(c + 10)) << 16) |
                        ((255 & e.charCodeAt(c + 11)) << 24),
                    ]),
                    (g = this.x64Multiply(g, w)),
                    (g = this.x64Rotl(g, 31)),
                    (g = this.x64Multiply(g, y)),
                    (a = this.x64Xor(a, g)),
                    (a = this.x64Rotl(a, 27)),
                    (a = this.x64Add(a, l)),
                    (a = this.x64Add(
                      this.x64Multiply(a, [0, 5]),
                      [0, 1390208809],
                    )),
                    (v = this.x64Multiply(v, y)),
                    (v = this.x64Rotl(v, 33)),
                    (v = this.x64Multiply(v, w)),
                    (l = this.x64Xor(l, v)),
                    (l = this.x64Rotl(l, 31)),
                    (l = this.x64Add(l, a)),
                    (l = this.x64Add(
                      this.x64Multiply(l, [0, 5]),
                      [0, 944331445],
                    ));
                switch (((g = [0, 0]), (v = [0, 0]), i)) {
                  case 15:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 14)], 48),
                    );
                  case 14:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 13)], 40),
                    );
                  case 13:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 12)], 32),
                    );
                  case 12:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 11)], 24),
                    );
                  case 11:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 10)], 16),
                    );
                  case 10:
                    v = this.x64Xor(
                      v,
                      this.x64LeftShift([0, e.charCodeAt(c + 9)], 8),
                    );
                  case 9:
                    (v = this.x64Xor(v, [0, e.charCodeAt(c + 8)])),
                      (v = this.x64Multiply(v, y)),
                      (v = this.x64Rotl(v, 33)),
                      (v = this.x64Multiply(v, w)),
                      (l = this.x64Xor(l, v));
                  case 8:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 7)], 56),
                    );
                  case 7:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 6)], 48),
                    );
                  case 6:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 5)], 40),
                    );
                  case 5:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 4)], 32),
                    );
                  case 4:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 3)], 24),
                    );
                  case 3:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 2)], 16),
                    );
                  case 2:
                    g = this.x64Xor(
                      g,
                      this.x64LeftShift([0, e.charCodeAt(c + 1)], 8),
                    );
                  case 1:
                    (g = this.x64Xor(g, [0, e.charCodeAt(c)])),
                      (g = this.x64Multiply(g, w)),
                      (g = this.x64Rotl(g, 31)),
                      (g = this.x64Multiply(g, y)),
                      (a = this.x64Xor(a, g));
                }
                return (
                  (a = this.x64Xor(a, [0, e.length])),
                  (l = this.x64Xor(l, [0, e.length])),
                  (a = this.x64Add(a, l)),
                  (l = this.x64Add(l, a)),
                  (a = this.x64Fmix(a)),
                  (l = this.x64Fmix(l)),
                  (a = this.x64Add(a, l)),
                  (l = this.x64Add(l, a)),
                  ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (l[1] >>> 0).toString(16)).slice(-8)
                );
              },
            }),
            (n.VERSION = "1.1.0"),
            n
          );
        });
      },
    });
  window.init_ViewFlashGame = function (o, t) {
    new I.ViewFlashGame(o, t);
  };
  var Pt = We(Xe()),
    C = window.I,
    U = window._,
    M = window.React,
    pe = window.ReactDOM,
    L = window.ReactDOMFactories,
    At = window.ReactTransitionGroup,
    T = window.PropTypes,
    H = window.classNames,
    A = window.R;
  M ||
    C.libs.react.done(function () {
      return (
        (M = window.React),
        (pe = window.ReactDOM),
        (L = window.ReactDOMFactories),
        (At = window.ReactTransitionGroup),
        (T = window.PropTypes),
        (H = window.classNames),
        (A = window.R)
      );
    });
  var Se,
    K = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    Ce = function (o, t) {
      for (var n in t) Lt.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Lt = {}.hasOwnProperty;
  Se = (function () {
    (o.prototype.event_category = "buy_form"),
      (o.prototype.pay_in_popup = !1),
      (o.prototype.min_price = 100);
    function o(t, n) {
      var e, r;
      (this.opts = n != null ? n : {}),
        (this.billing_address_valid = K(this.billing_address_valid, this)),
        (this.show_billing_address_form = K(
          this.show_billing_address_form,
          this,
        )),
        (this.show_vat_form = K(this.show_vat_form, this)),
        (this.submit_handler = K(this.submit_handler, this)),
        (this.checkout_btn_handler = K(this.checkout_btn_handler, this)),
        (this.set_fingerprint = K(this.set_fingerprint, this)),
        (this.el = $(t)),
        this.el
          .find("input[name=csrf_token][value='']")
          .val($("meta[name=csrf_token]").attr("value")),
        (this.form = this.el.find("form")),
        (this.opts = $.extend({}, this.form.data("opts"), this.opts)),
        this.set_fingerprint(),
        (this.input = this.form.find("input.money_input")),
        this.input.length && C.money_input(this.input),
        this.form.on(
          "submit",
          (function (i) {
            return function () {
              return i.submit_handler.apply(i, arguments);
            };
          })(this),
        ),
        this.el.dispatch("click", {
          add_btn: (function (i) {
            return function (s) {
              var a;
              return (
                (a = +s.attr("data-amount")),
                i.track_add_btn(a),
                i.input.val(
                  C.format_money(i.get_value() + a, i.get_currency()),
                ),
                i.update_items()
              );
            };
          })(this),
          billing_back_btn: (function (i) {
            return function () {
              return (
                i.form.find(".checkout_btn").prop("disabled", !1),
                i.form.removeClass("show_billing_address_form")
              );
            };
          })(this),
          vat_back_btn: (function (i) {
            return function () {
              return (
                i.form.removeClass("show_vat_confirm"),
                i.show_billing_address_form()
              );
            };
          })(this),
          direct_download_btn: (function (i) {
            return function () {
              return i.direct_download();
            };
          })(this),
          save_billing_btn: (function (i) {
            return function (s) {
              if (i.billing_address_valid())
                return i.opts.collect_vat ? i.show_vat_form() : i.form.submit();
            };
          })(this),
          confirm_vat_btn: (function (i) {
            return function (s) {
              return i.form.submit();
            };
          })(this),
        }),
        this.el.on(
          "click",
          ".checkout_btn",
          (function (i) {
            return function (s) {
              return i.checkout_btn_handler(s);
            };
          })(this),
        ),
        this.el.format_timestamps(),
        (r = this.opts.pick_source) &&
          ((e = this.opts.pick_medium || "default"),
          this.el
            .find("[data-source='" + r + "'][data-medium='" + e + "']")
            .click());
    }
    return (
      (o.prototype.set_fingerprint = function () {
        var t;
        try {
          return new Pt.default().get(
            (function (n) {
              return function (e) {
                if (e) return n.form.find(".bp_input").val(e);
              };
            })(this),
          );
        } catch (n) {
          return (
            (t = n),
            (this.set_fingerprint = function () {
              return !1;
            })
          );
        }
      }),
      (o.prototype.checkout_btn_handler = function (t) {
        var n;
        if (((n = this.set_source(t)), this.opts.collect_billing_address))
          return this.is_valid() && this.show_billing_address_form(), !1;
      }),
      (o.prototype.submit_handler = function () {
        if (!this.is_valid()) return !1;
        if (this.form.attr("target") === "_blank")
          return this.form
            .removeClass("show_vat_confirm show_billing_address_form")
            .addClass("show_purchase_complete");
      }),
      (o.prototype.show_vat_form = function () {
        var t, n, e;
        if (!this.form.is(".show_billing_address_form"))
          throw "billing form not visible";
        return (
          (n = this.form
            .addClass("loading")
            .find(".billing_address_view")
            .find("input[type='text'], select, button")),
          n.prop("disabled", !0),
          (e = this.form.find("[name='price']").val()),
          (t = this.form.find("[name='address[country]']").val()),
          $.ajax({
            type: "GET",
            url: this.opts.tax_preview_url,
            data: {
              sub_product_id: this.opts.sub_product_id,
              price: e,
              country: t,
            },
            async: !1,
          }).then(
            (function (r) {
              return function (i) {
                var s, a, l, g, v, w, y;
                if (
                  (n.prop("disabled", !1),
                  r.form.removeClass("loading has_vat_error"),
                  i.errors)
                ) {
                  switch (((s = i.errors[0]), s)) {
                    case "country mismatch":
                      C.event(r.event_category, "vat", "country_mismatch"),
                        r.form
                          .removeClass("show_billing_address_form")
                          .addClass("show_vat_confirm has_vat_error");
                      break;
                    default:
                      C.event(
                        r.event_category,
                        "error",
                        JSON.stringify(i.errors),
                      ),
                        r.form
                          .find(".generic_error_description")
                          .text(i.errors[0]),
                        r.form
                          .removeClass("show_billing_address_form")
                          .addClass("show_vat_confirm has_generic_error");
                  }
                  return;
                }
                if (!i.rate || i.tax === 0) {
                  r.form.submit();
                  return;
                }
                for (
                  r.form
                    .removeClass("show_billing_address_form")
                    .addClass("show_vat_confirm"),
                    r._seen_vat ||
                      (C.event(r.event_category, "vat", "show_tax_preview"),
                      (r._seen_vat = !0)),
                    y = r.form.find(".vat_view"),
                    w = y.find("[data-field]"),
                    g = 0,
                    v = w.length;
                  g < v;
                  g++
                )
                  (l = w[g]), (a = $(l)), a.text(i[a.data("field")] || "");
                return y.toggleClass("no_tip", !i.tip || i.tip === 0);
              };
            })(this),
          )
        );
      }),
      (o.prototype.show_billing_address_form = function () {
        return (
          this._seen_billing ||
            (C.event(this.event_category, "vat", "show_billing"),
            (this._seen_billing = !0)),
          this.form.find(".checkout_btn").prop("disabled", !0),
          this.form.addClass("show_billing_address_form")
        );
      }),
      (o.prototype.set_source = function (t) {
        var n, e, r;
        return (
          (n = $(t.currentTarget).closest(".checkout_btn")),
          n.length ||
            (n = (
              this._checkout_btns ||
              (this._checkout_btns = this.form.find(".checkout_btn"))
            ).first()),
          (r = n.data("source")),
          (
            this._source_input ||
            (this._source_input = this.form.find(".source_input"))
          ).val(r),
          (e = n.data("medium")),
          (
            this._medium_input ||
            (this._medium_input = this.form.find(".medium_input"))
          ).val(e || ""),
          r
        );
      }),
      (o.prototype.set_loading = function (t) {
        return (
          this.form.toggleClass("loading", t),
          this.el.toggleClass("loading", t),
          this.input.prop("disabled", t),
          (
            this.add_buttons || (this.add_buttons = this.form.find(".add_btn"))
          ).toggleClass("disabled", t),
          this.el.triggerHandler("i:loading", t)
        );
      }),
      (o.prototype.has_money_input = function () {
        return !!this.input.length;
      }),
      (o.prototype.get_value = function () {
        return C.parse_money(this.input.val());
      }),
      (o.prototype.get_currency = function () {
        return this.input.data("currency");
      }),
      (o.prototype._clean_error_message = function (t) {
        return (
          t === "paypal failed" &&
            (t =
              "Failed to create PayPal transaction, please try again later."),
          t
        );
      }),
      (o.prototype.set_error = function (t) {
        return (
          (t = this._clean_error_message(t)),
          this.error_text || (this.error_text = this.el.find(".error_text")),
          t
            ? (this.form.addClass("has_error"), this.error_text.text(t))
            : this.form.removeClass("has_error")
        );
      }),
      (o.prototype.remote_submit = function (t) {
        var n, e, r;
        return (
          this.is_valid() &&
            ((n = this.form.serializeArray()),
            n.push({ name: "json", value: "true" }),
            this.set_loading(!0),
            this.track_remote_submit(),
            this.pay_in_popup &&
              ((e = window.open()),
              (r = e.document) != null && r.write("Loading..."),
              U.defer(
                (function (i) {
                  return function () {
                    var s;
                    return (s = e.document) != null
                      ? (s.title = "Loading...")
                      : void 0;
                  };
                })(this),
              )),
            this.el.trigger("i:buy_start", [n]),
            $.ajax({
              url: this.form.attr("action"),
              type: "POST",
              data: n,
              xhrFields: { withCredentials: !0 },
              success: (function (i) {
                return function (s) {
                  return s.url
                    ? (e
                        ? ((e.location = s.url), i.set_loading(!1))
                        : (window.top.location = s.url),
                      i.el.trigger("i:buy_complete", [s]))
                    : (e && e.close(),
                      i.form.removeClass(
                        "show_billing_address_form show_vat_confirm",
                      ),
                      i.set_error(s.errors.join(",")),
                      i.set_loading(!1));
                };
              })(this),
            })),
          !1
        );
      }),
      (o.prototype.is_valid = function () {
        var t;
        return this.has_money_input() &&
          ((t = this.get_value()), t < this.min_price)
          ? (this.set_error(
              "Due to processing fees the minimum amount is 100 cents.",
            ),
            !1)
          : (this.set_error(), !0);
      }),
      (o.prototype.billing_address_valid = function () {
        return this.el
          .find(".billing_address_form_widget")
          .data("object")
          .check_valid();
      }),
      (o.prototype.track_add_btn = function (t) {}),
      (o.prototype.track_remote_submit = function () {}),
      (o.prototype.update_items = function () {}),
      o
    );
  })();
  var qe = (C.BuyForm = (function (o) {
      Ce(t, o),
        (t.prototype.download_url = function () {
          return C.subdomain
            ? "/" + this.game.slug + "/download_url"
            : "/game/download_url/" + this.game.id;
        }),
        (t.prototype.track_add_btn = function (n) {
          return C.event(this.event_category, "add_" + n, "" + this.game.id);
        }),
        (t.prototype.track_remote_submit = function () {
          return C.event(
            this.event_category,
            "purchase",
            "" + this.game.id,
            this.get_value(),
          );
        });
      function t(n, e, r) {
        var i;
        (this.game = e),
          (this.setup_filelist = K(this.setup_filelist, this)),
          (this.download_url = K(this.download_url, this)),
          t.__super__.constructor.call(this, n, r),
          this.setup_filelist(),
          (this.pay_in_popup =
            (i = r != null ? r.pay_in_popup : void 0) != null
              ? i
              : this.game.type_name !== "default"),
          this.pay_in_popup ||
            (this.pay_in_popup = $("base[target]").attr("target") === "_blank");
      }
      return (
        (t.prototype.update_items = function () {
          var n, e, r, i, s, a, l, g;
          if ((a = this.file_list) != null && a.length) {
            for (
              g = g || this.get_value(),
                e = this.file_list.find(".file_row"),
                l = [],
                r = 0,
                i = e.length;
              r < i;
              r++
            )
              (n = e[r]),
                (n = $(n)),
                (s = n.data("min_price")),
                l.push(n.toggleClass("inactive", !!(s && g < s)));
            return l;
          }
        }),
        (t.prototype.setup_filelist = function () {
          if (
            ((this.file_list = this.el.find(".file_list")),
            !!this.file_list.length)
          )
            return (
              this.el.on(
                "keyup blur",
                ".money_input",
                (function (n) {
                  return function () {
                    return n.update_items();
                  };
                })(this),
              ),
              this.file_list.on(
                "click",
                ".inactive",
                (function (n) {
                  return function (e) {
                    var r, i;
                    if (
                      (C.event(n.event_category, "pick_file", "" + n.game.id),
                      (i = $(e.currentTarget)),
                      (r = i.data("min_price")),
                      r)
                    )
                      return (
                        n.el.trigger("i:show_checkout"),
                        n.input.val(C.format_money(r, n.get_currency())),
                        n.update_items()
                      );
                  };
                })(this),
              ),
              this.el.find(".file_size_value").html(function () {
                return C.format_bytes(parseInt($(this).html(), 10));
              }),
              this.update_items()
            );
        }),
        (t.prototype.direct_download = function () {
          var n;
          return (
            C.event(this.event_category, "skip_buy", "" + this.game.id),
            this.set_loading(!0),
            this.pay_in_popup &&
              ((n = window.open()),
              n.document.write("Loading..."),
              U.defer(
                (function (e) {
                  return function () {
                    return (n.document.title = "Loading...");
                  };
                })(this),
              )),
            $.ajax({
              url: this.download_url(),
              type: "POST",
              xhrFields: { withCredentials: !0 },
              data: C.with_csrf({ reward_id: this.opts.reward_id }),
              success: (function (e) {
                return function (r) {
                  return r.url
                    ? n
                      ? ((n.location = r.url), e.set_loading(!1))
                      : (window.top.location = r.url)
                    : (e.set_error(
                        "There was an error generating the download URL, please try again.",
                      ),
                      e.set_loading(!1));
                };
              })(this),
            })
          );
        }),
        (t.prototype.is_valid = function () {
          var n, e;
          if (
            this.has_money_input() &&
            ((e = this.get_value()), !this.opts.is_donate)
          ) {
            if (e === 0 && this.game.actual_price === 0)
              return this.set_error(), this.direct_download(), !1;
            if (e < this.game.actual_price)
              return (
                (n = C.format_money(
                  this.game.actual_price,
                  this.get_currency(),
                )),
                this.set_error("You must pay at least " + n + "."),
                !1
              );
          }
          if (t.__super__.is_valid.call(this)) return !0;
        }),
        t
      );
    })(Se)),
    Br = (C.BundleBuyForm = (function (o) {
      Ce(t, o), (t.prototype.event_category = "bundle_buy_form");
      function t(n, e, r) {
        (this.bundle = e),
          (this.setup_gamelist = K(this.setup_gamelist, this)),
          (this.download_url = K(this.download_url, this)),
          t.__super__.constructor.call(this, n, r),
          this.setup_gamelist();
      }
      return (
        (t.prototype.download_url = function () {
          return "/bundle/" + this.bundle.id + "/download_url";
        }),
        (t.prototype.direct_download = function () {
          return (
            C.event(this.event_category, "skip_buy", "" + this.bundle.id),
            this.set_loading(!0),
            $.ajax({
              url: this.download_url(),
              type: "POST",
              xhrFields: { withCredentials: !0 },
              data: C.with_csrf(),
              success: (function (n) {
                return function (e) {
                  return e.url
                    ? (window.top.location = e.url)
                    : (n.set_error(
                        "There was an error generating the download URL, please try again.",
                      ),
                      n.set_loading(!1));
                };
              })(this),
            })
          );
        }),
        (t.prototype.setup_gamelist = function () {
          if (
            ((this.game_list = this.el.find(".game_list")),
            !!this.game_list.length)
          )
            return (
              this.el.on(
                "keyup blur",
                ".money_input",
                (function (n) {
                  return function () {
                    return n.update_items();
                  };
                })(this),
              ),
              this.game_list.on(
                "click",
                ".inactive",
                (function (n) {
                  return function (e) {
                    var r, i;
                    if (
                      (C.event(n.event_category, "pick_game", "" + n.bundle.id),
                      (i = $(e.currentTarget)),
                      (r = i.data("min_price")),
                      r)
                    )
                      return (
                        n.el.trigger("i:show_checkout"),
                        n.input.val(C.format_money(r, n.get_currency())),
                        n.update_items()
                      );
                  };
                })(this),
              ),
              this.update_items()
            );
        }),
        (t.prototype.update_items = function () {
          var n, e, r, i, s, a, l, g, v, w;
          if ((v = this.game_list) != null && v.length) {
            for (
              w = this.get_value(),
                i = this.game_list.find(".game_row"),
                e = 0,
                a = 0,
                l = i.length;
              a < l;
              a++
            )
              (r = i[a]),
                (r = $(r)),
                (g = r.data("min_price")),
                (n = !(g && w < g)),
                r.toggleClass("inactive", !n),
                n && (e += 1);
            if (((s = this.el.find(".game_list_header_drop")[0]), s))
              return pe.render(
                A.BundleBuyForm.AvailableItems({
                  tiers: this.bundle.tiers,
                  group_noun: this.bundle.group_noun,
                  price: w,
                  currency: this.get_currency(),
                }),
                s,
              );
          }
        }),
        (t.prototype.is_valid = function () {
          var n, e;
          if (((e = this.get_value()), e < this.bundle.actual_price))
            return (
              (n = C.format_money(
                this.bundle.actual_price,
                this.get_currency(),
              )),
              this.set_error("You must pay at least " + n + "."),
              !1
            );
          if (t.__super__.is_valid.call(this)) return !0;
        }),
        t
      );
    })(Se)),
    Dr = (C.BuyPopup = (function (o) {
      Ce(t, o);
      function t(n, e) {
        t.__super__.constructor.call(this, n, e),
          this.check_height(),
          (this.pay_in_popup = !1);
      }
      return (
        (t.prototype.check_height = function () {
          var n, e, r;
          if (
            ((e = 32),
            (r = $(window)),
            (n = $(document.body).height() + e - $(window).height()),
            n > 0)
          )
            return window.resizeTo(window.outerWidth, window.outerHeight + n);
        }),
        t
      );
    })(qe)),
    Ft = (C.BillingAddressForm = (function () {
      function o(t) {
        this.check_valid = K(this.check_valid, this);
        var n, e;
        (this.el = $(t)),
          this.el.data("object", this),
          (n = this.el.find("[data-country_value]")),
          n.length &&
            ((e = n.find("select")),
            e
              .find("[value='" + n.data("country_value") + "']")
              .prop("selected", !0));
      }
      return (
        (o.prototype.check_valid = function () {
          var t, n, e, r, i, s, a, l;
          for (
            s = this.el.find("input[required]"), t = 0, e = s.length;
            t < e;
            t++
          )
            (n = s[t]),
              (n = $(n)),
              (a = n.val()),
              n.toggleClass("has_error", !!a.match(/^\s*$/)),
              (i = n.attr("pattern")) &&
                ((r = new RegExp("^" + i + "$")),
                n.toggleClass("has_error", !a.match(r)));
          return (
            (l = this.el.find(".has_error").length === 0),
            this.el.toggleClass("has_errors", !l),
            l
          );
        }),
        o
      );
    })());
  (window.init_BillingAddressForm = function (o, t) {
    new Ft(o);
  }),
    (window.init_BuyForm = function (o, t) {}),
    (window.init_BuyGameLightbox = function (o, t) {}),
    (window.init_DonateGameLightbox = function (o, t) {}),
    (window.init_ViewGame = function (o, t) {
      new I.ViewGame(o, t);
    }),
    (window.init_ViewHtmlGame = function (o, t) {
      new I.ViewHtmlGame(o, t);
    }),
    (window.init_ViewJavaGame = function (o, t) {
      new I.ViewJavaGame(o, t);
    }),
    (window.init_ViewUnityGame = function (o, t) {
      new I.ViewUnityGame(o, t);
    }),
    C.Lightbox ||
      console.warn(
        "I.Lightbox is being depended on but is missing from the page",
      );
  var j = C.Lightbox,
    Bt,
    X = (Bt = window.$),
    Dt = function (o, t) {
      for (var n in t) Ot.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Ot = {}.hasOwnProperty,
    Je = (function (o) {
      Dt(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return (
        (t.prototype.init = function (n) {
          return this.el.dispatch("click", {
            tab_btn: (function (e) {
              return function (r) {
                var i;
                return (
                  (i = r.data("tab")),
                  e.el
                    .find(".tab_content")
                    .hide()
                    .filter("[data-tab=" + i + "]")
                    .show(),
                  e.el
                    .find(".tab_btn")
                    .removeClass("selected")
                    .filter(r)
                    .addClass("selected")
                );
              };
            })(this),
            pick_image_btn: (function (e) {
              return function (r) {
                return typeof n == "function" ? n(r.data("url")) : void 0;
              };
            })(this),
            upload_image_btn: (function (e) {
              return function (r) {
                return C.upload_image({
                  url: C.root_url("dashboard/upload-image"),
                  thumb_size: "original",
                })
                  .progress(function () {
                    if (!r.prop("disabled"))
                      return (
                        r.prop("disabled", !0).addClass("disabled"),
                        r.data("original_text", r.text()),
                        r.text("Uploading...")
                      );
                  })
                  .fail(function () {
                    return (
                      r.prop("disabled", !1).removeClass("disabled"),
                      r.text(r.data("original_text"))
                    );
                  })
                  .done(function (i) {
                    var s, a;
                    return (
                      r.prop("disabled", !1).removeClass("disabled"),
                      r.text(r.data("original_text")),
                      i.success
                        ? typeof n == "function"
                          ? n(i.upload.thumb_url)
                          : void 0
                        : ((s =
                            ((a = i.errors) != null ? a[0] : void 0) ||
                            "Image upload failed"),
                          C.flash(s, "error"))
                    );
                  });
              };
            })(this),
          });
        }),
        t
      );
    })(j),
    Ye = null,
    jt = {
      plugins: ["source", "table", "alignment", "video", "addimage"],
      toolbarFixed: !1,
      buttons: ["format", "bold", "italic", "deleted", "lists", "link"],
      minHeight: 250,
      linkSize: 80,
    },
    re = function (o, t) {
      var n, e;
      if (
        (t == null && (t = {}),
        !window.location.href.match(/\bredactor=0\b/) && !C.in_test)
      ) {
        if (!X.fn.redactor) {
          console.warn(
            "tried to create redactor text element without redactor on page",
            o[0],
          );
          return;
        }
        (t = X.extend({}, jt, t)),
          t.source === !1 &&
            (delete t.source,
            (t.plugins = (function () {
              var r, i, s, a;
              for (s = t.plugins, a = [], r = 0, i = s.length; r < i; r++)
                (e = s[r]), e !== "source" && a.push(e);
              return a;
            })())),
          o.closest(".lightbox_widget").exists() &&
            t.plugins &&
            (t.plugins = (function () {
              var r, i, s, a;
              if (e !== "addimage") {
                for (s = t.plugins, a = [], r = 0, i = s.length; r < i; r++)
                  (e = s[r]), a.push(e);
                return a;
              }
            })());
        try {
          return o.redactor(t);
        } catch (r) {
          return (
            (n = r),
            C.event("error", "redactor", "invalid_content"),
            o.parent().replaceWith(o).end().val("").redactor(t)
          );
        }
      }
    };
  X.Redactor
    ? (Ye = X.Redactor)
    : C.libs.redactor.done(function () {
        return (
          (Ye = X.Redactor),
          (X.Redactor.prototype.addimage = function () {
            return {
              langs: { en: {} },
              init: function () {
                var o;
                return (
                  (o = this.button.addAfter("image", "image", "Add image")),
                  this.button.setIcon(o, '<i class="re-icon-image"></i>'),
                  this.button.addCallback(o, this.addimage.show)
                );
              },
              show: function () {
                return j.open_remote(
                  C.root_url("dashboard/upload-image"),
                  Je,
                  (function (o) {
                    return function (t) {
                      var n;
                      return (
                        C.Lightbox.close(),
                        (n = X("<img>").attr("src", t)[0].outerHTML),
                        o.placeholder.hide(),
                        o.buffer.set(),
                        o.insert.html(n)
                      );
                    };
                  })(this),
                );
              },
            };
          })
        );
      });
  var Gt = function (o, t) {
      for (var n in t) Ht.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Ht = {}.hasOwnProperty,
    ie = (C.CollectionLightbox = (function (o) {
      Gt(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return (
        (t.prototype.init = function () {
          var n;
          return (
            C.has_follow_button(this.el),
            C.event2("view add to collection lightbox"),
            this.el.find("input[type='radio']:first").prop("checked", !0),
            this.el.on(
              "click change",
              ".collection_option",
              (function (e) {
                return function (r) {
                  var i;
                  return (
                    (i = $(r.currentTarget)),
                    i.find("input[type='radio']").prop("checked", !0)
                  );
                };
              })(this),
            ),
            (n = this.el.find("form").remote_submit(
              (function (e) {
                return function (r) {
                  if (r.errors) {
                    if (C.add_recaptcha_if_necessary(n, r.errors)) return;
                    n.set_form_errors(r.errors);
                    return;
                  }
                  return (
                    e.el.addClass("is_complete"),
                    e.el
                      .find(".after_submit .collection_name")
                      .text(r.title)
                      .attr("href", r.url)
                  );
                };
              })(this),
            )),
            this.with_redactor(
              (function (e) {
                return function () {
                  return re(e.el.find("textarea"), {
                    minHeight: 40,
                    source: !1,
                    buttons: ["bold", "italic", "deleted", "lists", "link"],
                  });
                };
              })(this),
            ),
            this.with_selectize(
              (function (e) {
                return function () {
                  return e.el.find("select.collection_input").selectize();
                };
              })(this),
            )
          );
        }),
        t
      );
    })(j)),
    Te = null;
  C.libs.react.done(function () {
    var o, t, n, e;
    return (
      (t = L),
      (n = t.input),
      (e = t.textarea),
      (o = A.package("Forms")),
      (Te = o("RedactorInput", {
        pure: !0,
        componentDidMount: function () {
          var r;
          return (
            (r = X.extend(
              { minHeight: 80, source: !1 },
              this.props.redactor_opts,
            )),
            r.callbacks || (r.callbacks = {}),
            (r.callbacks.change = (function (i) {
              return function (s) {
                var a;
                if (
                  (typeof (a = i.props).on_change == "function" &&
                    a.on_change(s),
                  i.props.remember_key)
                )
                  return (
                    i.set_memory ||
                      (i.set_memory = U.throttle(function (l) {
                        return C.store_memory(this.remember_key(), l);
                      }, 500)),
                    i.set_memory(s)
                  );
              };
            })(this)),
            re(X(this.input_ref.current), r)
          );
        },
        remember_key: function () {
          return "inputmemory:" + this.props.remember_key;
        },
        clear_memory: function () {
          return C.clear_memory(this.remember_key());
        },
        get_default_value: function () {
          var r;
          if (
            (r = this.props.defaultValue) ||
            (this.props.remember_key &&
              (r =
                typeof localStorage != "undefined" && localStorage !== null
                  ? localStorage.getItem(this.remember_key())
                  : void 0))
          )
            return r;
        },
        render: function () {
          return e({
            ref: this.input_ref || (this.input_ref = M.createRef()),
            name: this.props.name,
            value: this.props.value,
            defaultValue: this.get_default_value(),
            placeholder: this.props.placeholder,
            required: this.props.required,
            autoFocus: this.props.autofocus,
          });
        },
      }))
    );
  });
  var Qe = null;
  C.libs.react.done(function () {
    var o, t, n, e, r, i;
    return (
      (t = L),
      (n = t.button),
      (r = t.label),
      (i = t.span),
      (e = t.input),
      (o = A.package("Forms")),
      (Qe = o("StarPicker", {
        pure: !0,
        getDefaultProps: function () {
          return {
            total_stars: 5,
            star_filled: "icon-star",
            star_empty: "icon-star2",
          };
        },
        getInitialState: function () {
          return {};
        },
        set_value: function (s) {
          var a;
          return (
            this.props.set_value
              ? this.props.set_value(s)
              : this.setState({ value: s }),
            typeof (a = this.props).on_change == "function"
              ? a.on_change(s)
              : void 0
          );
        },
        render: function () {
          var s, a, l, g, v, w, y;
          return (
            (y =
              (l =
                (g = (v = this.props.value) != null ? v : this.state.value) !=
                null
                  ? g
                  : this.props.defaultValue) != null
                ? l
                : 0),
            (s = this.state.preview_value || y),
            (w = function () {
              var c, h, f;
              for (
                f = [], a = c = 1, h = this.props.total_stars;
                1 <= h ? c <= h : c >= h;
                a = 1 <= h ? ++c : --c
              )
                f.push(
                  (function (u) {
                    return function (p) {
                      var d, m, b;
                      return (
                        (d =
                          p > s
                            ? "star icon " + u.props.star_empty
                            : "star icon " + u.props.star_filled),
                        (m = y === p),
                        (b = p + " Star" + (p === 1 ? "" : "s")),
                        n(
                          {
                            key: "star-" + p,
                            type: "button",
                            title: b,
                            role: "radio",
                            "aria-describedby": u.props["aria-describedby"],
                            "aria-label": b,
                            "aria-checked": m ? "true" : "false",
                            onMouseEnter: function () {
                              return u.setState({ preview_value: p });
                            },
                            onMouseLeave: function () {
                              return u.setState({ preview_value: null });
                            },
                            onClick: function () {
                              return u.set_value(p);
                            },
                          },
                          i({ className: d }),
                        )
                      );
                    };
                  })(this)(a),
                );
              return f;
            }.call(this)),
            this.enclose(
              {
                "aria-labelledby": this.props["aria-labelledby"],
                role: "radiogroup",
                className: H(this.props.className, {
                  interactive: !0,
                  previewing: this.state.preview_value != null,
                  has_value: y > 0,
                }),
              },
              this.props.name
                ? e({
                    type: "hidden",
                    name: this.props.name,
                    value: y > 0 ? y : "",
                  })
                : void 0,
              w,
            )
          );
        },
      }))
    );
  });
  var oe,
    Ne = (oe = window.dayjs);
  window._dayjs_setup ||
    (oe.extend(window.dayjs_plugin_duration),
    oe.extend(window.dayjs_plugin_calendar),
    oe.extend(window.dayjs_plugin_advancedFormat),
    oe.extend(window.dayjs_plugin_relativeTime),
    (window._dayjs_setup = !0));
  var Ze,
    $t = [].slice;
  Ze = function (o) {
    var t;
    return (t =
      typeof o == "string" &&
      o.match(/(^\d{4}\-\d{1,2}\-\d{1,2}) (\d{1,2}:\d{1,2}:\d{1,2})$/))
      ? t[1] + "T" + t[2] + "Z"
      : o;
  };
  var se = function () {
      var o, t, n, e;
      switch (
        ((e = arguments[0]),
        (t = arguments[1]),
        (o = 3 <= arguments.length ? $t.call(arguments, 2) : []),
        t == null && (t = "fromNow"),
        (e = Ze(e)),
        t)
      ) {
        case "fromNow":
          return Ne(e).fromNow();
        case "calendar":
          return Ne(e).calendar(null, { sameElse: "MMMM Do YYYY" });
        case "format":
          return (n = Ne(e)).format.apply(n, o);
        default:
          throw new Error("unknown method for format_timestamp: " + t);
      }
    },
    et = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w;
    return (
      (t = L),
      (l = t.input),
      (e = t.button),
      (i = t.form),
      (s = t.fragment),
      (a = t.h2),
      (w = t.span),
      (v = t.p),
      (r = t.div),
      (g = t.label),
      (n = t.a),
      (s = React.createElement.bind(null, React.Fragment)),
      (s.type = React.fragment),
      (o = A.package("Library")),
      (et = o("RateGameLightbox", {
        propTypes: {
          game: T.object.isRequired,
          follow_button: T.object,
          game_rating: T.object,
        },
        is_closable: function () {
          var y, c;
          return (
            ((y = this.props) != null && (c = y.lightbox_props) != null
              ? c.close
              : void 0) !== !1
          );
        },
        submit_rating: function (y) {
          return (
            y.preventDefault(),
            this.setState({ loading: !0 }),
            I.remote_submit($(y.target)).done(
              (function (c) {
                return function (h) {
                  var f, u, p;
                  if (h.errors) {
                    c.setState({ loading: !1, errors: h.errors });
                    return;
                  }
                  return (
                    (u = c.blurb_input_ref.current) != null && u.clear_memory(),
                    c.setState({
                      submitted: !0,
                      loading: !1,
                      saved_score:
                        (p = h.game_rating) != null ? p.score : void 0,
                    }),
                    typeof (f = c.props).on_save_rating == "function"
                      ? f.on_save_rating(h)
                      : void 0
                  );
                };
              })(this),
            )
          );
        },
        delete_rating: function () {
          if (this.props.game_rating)
            return (
              this.setState({ loading: !0 }),
              $.ajax({
                type: "POST",
                dataType: "json",
                url: this.props.rate_url,
                xhrFields: { withCredentials: !0 },
                data: I.with_csrf({ remove_game_rating: "1" }),
              }).done(
                (function (y) {
                  return function (c) {
                    var h, f;
                    if ((y.setState({ loading: !1 }), c.errors)) {
                      y.setState({ errors: c.errors });
                      return;
                    }
                    return (
                      (f = y.blurb_input_ref.current) != null &&
                        f.clear_memory(),
                      y.setState({
                        submitted: !0,
                        deleted: !0,
                        game_rating: !1,
                      }),
                      typeof (h = y.props).on_delete_rating == "function"
                        ? h.on_delete_rating(c)
                        : void 0
                    );
                  };
                })(this),
              )
            );
        },
        render_rating_form: function () {
          var y, c, h, f, u;
          return s(
            {},
            a(
              {},
              this.tt("library.rate_game.rate_header", {
                project_title: w(
                  { className: "object_title" },
                  this.props.game.title,
                ),
              }),
            ),
            i(
              {
                className: "form",
                action: this.props.rate_url,
                onSubmit: this.submit_rating,
              },
              A.CSRF({}),
              (h = this.state) != null && h.errors
                ? A.Forms.FormErrors({
                    animated: !0,
                    errors: this.state.errors,
                  })
                : void 0,
              this.props.game_rating
                ? ((c = this.props.game_rating.created_at),
                  v(
                    {},
                    this.tt("library.rate_game.you_rated_this_project_ago", {
                      time_ago: w(
                        { className: "date_format", title: c },
                        se(c),
                      ),
                    }),
                  ))
                : v({}, this.tt("library.rate_game.choose_stars")),
              r(
                { className: "star_wrapper" },
                Qe({
                  className: "star_picker",
                  name: "game_rating",
                  defaultValue:
                    (f = this.props.game_rating) != null ? f.score : void 0,
                }),
              ),
              r(
                { className: "input_row" },
                r(
                  { className: "label" },
                  "Your review",
                  r(
                    { className: "sub" },
                    "Share what you liked or disliked about this project. Our ",
                    n(
                      {
                        target: "_blank",
                        href: "https://itch.io/docs/general/community-rules",
                      },
                      "community rules",
                    ),
                    " apply here. Reviews are shared with developers and your followers.",
                  ),
                ),
                Te({
                  defaultValue: (y =
                    (u = this.props.game_rating) != null ? u.blurb : void 0)
                    ? y._unsafe || y._safe
                    : void 0,
                  ref:
                    this.blurb_input_ref ||
                    (this.blurb_input_ref = React.createRef()),
                  remember_key: "game_rating:" + this.props.game.id,
                  name: "game_rating_blurb",
                  placeholder: "Optional",
                  redactor_opts: {
                    plugins: ["table", "alignment", "video"],
                    buttons: ["bold", "italic", "deleted", "lists", "link"],
                  },
                }),
              ),
              r(
                { className: "buttons" },
                e(
                  { className: "button" },
                  this.props.game_rating
                    ? this.tt("misc.forms.save")
                    : this.tt("misc.forms.submit"),
                ),
                this.props.game_rating
                  ? e(
                      {
                        type: "button",
                        className: "textlike delete_rating_btn",
                        onClick: (function (p) {
                          return function (d) {
                            if (
                              (d.preventDefault(),
                              confirm(
                                "Are you sure you want to delete your rating & review",
                              ))
                            )
                              return p.delete_rating();
                          };
                        })(this),
                      },
                      this.tt("library.rate_game.delete_button"),
                    )
                  : void 0,
              ),
            ),
          );
        },
        render_after_rating: function () {
          var y;
          return (
            (y = this.is_closable()
              ? v(
                  {},
                  e(
                    {
                      type: "button",
                      onClick: (function (c) {
                        return function (h) {
                          return h.preventDefault(), I.Lightbox.close();
                        };
                      })(this),
                      className: "textlike",
                    },
                    this.tt("misc.lightboxes.close"),
                  ),
                )
              : void 0),
            this.state.deleted
              ? s(
                  {},
                  a({}, this.tt("library.rate_game.rating_removed_header")),
                  v({}, this.tt("library.rate_game.rating_deleted_summary")),
                  y,
                )
              : s(
                  {},
                  a({}, this.tt("library.rate_game.rating_saved_header")),
                  this.props.follow_button && (this.state.saved_score || 0) >= 3
                    ? r(
                        { className: "suggested_follow" },
                        v(
                          {},
                          this.tt("library.rate_game.follow_creator", {
                            project_title: n(
                              { href: this.props.game.url, target: "_blank" },
                              this.props.game.title,
                            ),
                          }),
                        ),
                        v({}, A.FollowButton(this.props.follow_button)),
                      )
                    : v({}, "Your rating has been saved."),
                  y,
                )
          );
        },
        render: function () {
          var y;
          return A.Lightbox(
            Object.assign(
              { className: this.enclosing_class_name() },
              this.props.lightbox_props,
            ),
            (y = this.state) != null && y.submitted
              ? this.render_after_rating()
              : this.render_rating_form(),
          );
        },
      }))
    );
  });
  var Ie = function (o, t) {
      for (var n in t) Vt.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Vt = {}.hasOwnProperty;
  (I.setup_layout = function () {
    return (
      $("#inner_column").max_height($(".header_widget").outerHeight(!0) || 0),
      $(window).on(
        "message",
        (function (o) {
          return function (t) {
            var n, e;
            if (
              ((e = new RegExp(
                "\\/\\/" + $(document.body).data("host") + "\\/",
              )),
              !!t.originalEvent.origin.match)
            )
              switch (((n = t.originalEvent.data), n.name)) {
                case "dimensions":
                  return parent.postMessage(
                    {
                      width: $(document).width(),
                      height: $(document).height(),
                    },
                    "*",
                  );
              }
          };
        })(this),
      ),
      new I.ViewGameFooter("#view_game_footer")
    );
  }),
    (I.EmbedGameLightbox = (function (o) {
      Ie(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return t;
    })(j)),
    (I.ViewGameFooter = (function () {
      function o(t) {
        (this.el = $(t)),
          this.el.dispatch("click", {
            embed_game_btn: (function (n) {
              return function (e) {
                return j.open_remote(
                  e.data("lightbox_url"),
                  I.EmbedGameLightbox,
                );
              };
            })(this),
            report_game_btn: (function (n) {
              return function (e) {
                return j.open_remote_react(
                  e.data("lightbox_url"),
                  function (r) {
                    return R.Game.ReportLightbox(r);
                  },
                );
              };
            })(this),
          });
      }
      return o;
    })()),
    (I.GameUserTools = (function () {
      function o(t) {
        (this.el = $(t)),
          I.tracked_links(this.el, "view_game", "user_tools"),
          I.has_follow_button(this.el, {
            cls: "follow_user_btn",
            animate_follow: I.is_mobile() ? "animate_popout" : void 0,
          }),
          this.el.dispatch("click", {
            add_to_collection_btn: (function (n) {
              return function (e) {
                return I.current_user
                  ? j.open_remote(e.attr("href"), ie)
                  : "continue";
              };
            })(this),
            rate_game_btn: (function (n) {
              return function (e) {
                return I.current_user
                  ? I.Lightbox.open_remote_react(e.attr("href"), function (r) {
                      return (
                        (r.on_save_rating = function (i) {
                          return n.el
                            .find(".rate_game_btn")
                            .addClass("has_rating");
                        }),
                        (r.on_delete_rating = function (i) {
                          return n.el
                            .find(".rate_game_btn")
                            .removeClass("has_rating");
                        }),
                        et(r)
                      );
                    })
                  : "continue";
              };
            })(this),
          }),
          setTimeout(
            (function (n) {
              return function () {
                return n.el.removeClass("hidden");
              };
            })(this),
            200,
          );
      }
      return o;
    })()),
    (I.FirstGameLightbox = (function (o) {
      Ie(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return (
        (t.prototype.first_show = function () {
          return (
            I.event("view_game", "first_game_lb", "show"),
            I.add_facebook(
              (function (n) {
                return function () {
                  var e;
                  return (
                    (e = "view_game"),
                    FB.Event.subscribe("edge.create", function (r) {
                      return I.event(e, "fb", "like");
                    }),
                    FB.Event.subscribe("edge.remove", function (r) {
                      return I.event(e, "fb", "unlike");
                    }),
                    FB.Event.subscribe("message.send", function (r) {
                      return I.event(e, "fb", "share");
                    })
                  );
                };
              })(this),
            ),
            I.add_twitter()
          );
        }),
        t
      );
    })(I.Lightbox)),
    (I.SpamWarningLightbox = (function (o) {
      Ie(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return (
        (t.prototype.first_show = function () {
          return setTimeout(
            (function (n) {
              return function () {
                return (n.is_closable = function () {
                  return !0;
                });
              };
            })(this),
            4e3,
          );
        }),
        (t.prototype.is_closable = function () {
          var n;
          return ((n = I.current_user) != null ? n.id : void 0) === 1;
        }),
        t
      );
    })(I.Lightbox)),
    (I.GameGoalBanner = (function () {
      function o(t) {
        (this.el = $(t)),
          this.el.dispatch("click", {
            buy_btn: (function (n) {
              return function (e) {
                return (
                  I.event("view_game", "goal_banner", "contribute_btn"),
                  I.is_mobile()
                    ? (e.attr(
                        "href",
                        I.add_params(e.attr("href"), { initiator: "mobile" }),
                      ),
                      "continue")
                    : $(".buy_row a.buy_btn").click()
                );
              };
            })(this),
          });
      }
      return o;
    })());
  var Ut = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  I.GameDevlogPost = (function () {
    o.prototype.vote_counts_template = I.lazy_template(o, "like_button");
    function o(t, n) {
      (this.render_like_button = Ut(this.render_like_button, this)),
        (this.el = $(t)),
        (this.image_viewer = new I.ImageViewer(t)),
        this.el.dispatch("click", {
          add_to_collection_btn: (function (e) {
            return function (r) {
              return I.current_user
                ? j.open_remote(r.attr("href"), ie)
                : "continue";
            };
          })(this),
        }),
        this.render_like_button();
    }
    return (
      (o.prototype.render_like_button = function (t) {
        var n, e;
        return (
          (e = this.el.find(".like_button_drop")),
          this.like_button_state || (this.like_button_state = e.data("init")),
          t && $.extend(this.like_button_state, t),
          (n = e
            .html(this.vote_counts_template(this.like_button_state))
            .children()),
          n.find("form").remote_submit(
            (function (r) {
              return function (i) {
                return r.render_like_button({
                  liked: !r.like_button_state.liked,
                  likes_count: i.likes_count,
                });
              };
            })(this),
          )
        );
      }),
      o
    );
  })();
  var zt = function (o, t) {
      for (var n in t) Kt.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Kt = {}.hasOwnProperty;
  I.GameHeader = (function (o) {
    zt(t, o);
    function t() {
      t.__super__.constructor.apply(this, arguments),
        this.el.dispatch("click", {
          edit_theme_btn: (function (n) {
            return function () {
              return n.toggle_theme_editor();
            };
          })(this),
        }),
        window.location.hash.match(/\bedit_theme\b/) &&
          _.defer(
            (function (n) {
              return function () {
                return n.toggle_theme_editor();
              };
            })(this),
          );
    }
    return (
      (t.prototype.toggle_theme_editor = function () {
        var n;
        return (
          (n = !I.theme_editor.state.open),
          I.theme_editor.setState({ open: n }),
          $(document.body).toggleClass("theme_editor_open", n)
        );
      }),
      t
    );
  })(I.Header);
  var Wt = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  I.HtmlEmbed = (function () {
    (o.current = $.Deferred().done(function () {
      return window.addEventListener("popstate", function (t) {
        var n;
        return (
          (n = t.state || {}),
          I.HtmlEmbed.current.done(function (e) {
            return e.synchronize_state(n);
          })
        );
      });
    })),
      (o.prototype.ping_time = 1e3);
    function o(t, n) {
      (this.opts = n),
        (this.load_frame = Wt(this.load_frame, this)),
        (this.el = $(t)),
        I.HtmlEmbed.current.state() === "resolved"
          ? (I.HtmlEmbed.current = $.Deferred().resolve(this))
          : I.HtmlEmbed.current.resolve(this),
        this.load_archive(),
        window.history.state && this.synchronize_state(window.history.state),
        this.opts.width &&
          I.ViewGame.current.then(
            (function (e) {
              return function (r) {
                return r.fit_to_width(e.opts.width);
              };
            })(this),
          ),
        this.el.dispatch("click", {
          load_iframe_btn: (function (e) {
            return function (r) {
              return e.load_frame().done(function (i) {
                if (
                  (setTimeout(function () {
                    var s;
                    return (s = i[0]) != null ? s.focus() : void 0;
                  }, 100),
                  I.is_mobile())
                )
                  return e.enter_fullscreen();
                if (e.opts.start_maximized) return e.enter_maximized();
              });
            };
          })(this),
          fullscreen_btn: (function (e) {
            return function (r) {
              return e.enter_fullscreen();
            };
          })(this),
          restore_btn: (function (e) {
            return function (r) {
              return (
                e.load_frame().done(function (i) {
                  return setTimeout(function () {
                    var s;
                    return (s = i[0]) != null ? s.focus() : void 0;
                  }, 100);
                }),
                I.is_mobile() ? e.enter_fullscreen() : e.enter_maximized()
              );
            };
          })(this),
        });
    }
    return (
      (o.prototype.synchronize_state = function (t) {
        return t.maximized
          ? (this.enter_maximized(!1),
            setTimeout(
              (function (n) {
                return function () {
                  var e;
                  return (e = n.el.find(".game_frame iframe")[0]) != null
                    ? e.focus()
                    : void 0;
                };
              })(this),
              100,
            ))
          : this.exit_maximized();
      }),
      (o.prototype.load_archive = function () {
        if (this.opts.load_url)
          return $.get(
            this.opts.load_url,
            (function (t) {
              return function (n) {
                if (n.html) {
                  t.el.replaceWith(n.html);
                  return;
                }
                if (n.errors) {
                  t.el.replaceWith(
                    $('<div class="missing_game"></div>').text(
                      n.errors.join(", "),
                    ),
                  );
                  return;
                }
                switch (n.status) {
                  case "complete":
                    return t.el.closest(".view_game_page").addClass("ready");
                  case "extracting":
                    return setTimeout(function () {
                      return (t.ping_time += 100), t.load_archive();
                    }, t.ping_time);
                }
              };
            })(this),
          );
      }),
      (o.prototype.mobile_orientation = function () {
        var t;
        if (this.opts.orientation) return this.opts.orientation;
        if (
          !(this.opts.width && this.opts.height) ||
          ((t = this.opts.width / this.opts.height), t >= 1.4)
        )
          return "landscape";
        if (t <= 1.7) return "portrait";
      }),
      (o.prototype.load_frame = function () {
        return (
          this._loaded_frame ||
          (this._loaded_frame = $.Deferred(
            (function (t) {
              return function (n) {
                var e;
                return (
                  (e = t.el.find(".iframe_placeholder")),
                  e.replaceWith(e.data("iframe")),
                  (t.iframe = t.el.find("#game_drop")),
                  t.el
                    .find(".game_frame")
                    .addClass("game_loaded")
                    .removeClass("game_pending"),
                  n.resolve(t.iframe)
                );
              };
            })(this),
          ))
        );
      }),
      (o.prototype.enter_maximized = function (t) {
        if ((t == null && (t = !0), !this.maximized))
          return (
            (this.maximized = !0),
            this.load_frame().done(
              (function (n) {
                return function () {
                  return (
                    window.history &&
                      t &&
                      window.history.pushState(
                        { maximized: !0 },
                        document.title,
                      ),
                    n.el.find(".game_frame").addClass("maximized"),
                    $(document.body).addClass("frame_maximized")
                  );
                };
              })(this),
            )
          );
      }),
      (o.prototype.exit_maximized = function () {
        if (this.maximized)
          return (
            (this.maximized = !1),
            this.el.find(".game_frame").removeClass("maximized"),
            $(document.body).removeClass("frame_maximized")
          );
      }),
      (o.prototype.enter_fullscreen = function () {
        var t, n;
        if (
          ((t = this.el.find(".game_frame iframe")),
          !!t[0] &&
            ((n = this.mobile_orientation()),
            !I.is_fullscreen() && !I.request_fullscreen(t[0], n)))
        )
          return this.enter_maximized();
      }),
      o
    );
  })();
  var Xt = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  I.ImageViewer = (function () {
    (o.prototype.margin = 40),
      (o.prototype._template = function () {
        return `<div class="screenshot_lightbox lightbox loading">
  <div class="screenshot_container">
    <div class="loader"></div>

    <div class="prev_image_btn">
      <span class="icon-arrow-left"></span>
    </div>

    <img class="lb_screenshot hidden" width="400" height="315">

    <div class="next_image_btn">
      <span class="icon-arrow-right"></span>
    </div>
  </div>
</div>`;
      }),
      (o.prototype.size_image = function () {});
    function o(t) {
      (this.size_image = Xt(this.size_image, this)),
        (this.el = $(t)),
        this.el.on(
          "click",
          "[data-image_lightbox]",
          (function (n) {
            return function (e) {
              var r, i, s, a, l, g, v, w;
              if (!I.is_mobile() && Image)
                return (
                  (w = $(e.currentTarget)),
                  (r = w.parent().find("[data-image_lightbox]")),
                  I.event("view_game", "screenshots", "show"),
                  (g = I.Lightbox.open(n._template())),
                  g.el.toggleClass("no_tools", r.length < 2),
                  (i = null),
                  (v = function (y) {
                    var c, h, f, u, p, d, m;
                    return (
                      (i = y),
                      (c = $(window)),
                      (m = c.width() - (n.margin + 20) * 2),
                      (d = c.height() - n.margin * 2),
                      (p = y.naturalWidth),
                      (f = y.naturalHeight),
                      (h = p / f),
                      p > m && ((p = m), (f = m / h)),
                      f > d && ((p = d * h), (f = d)),
                      (u = g.el.find(".lb_screenshot")),
                      u.attr("src", y.src),
                      p !== y.naturalWidth || f !== y.naturalHeight
                        ? u
                            .attr("width", Math.floor(p))
                            .attr("height", Math.floor(f))
                        : u
                            .attr("width", y.naturalWidth)
                            .attr("height", y.naturalHeight),
                      g.position(),
                      u.removeClass("hidden"),
                      g.el.removeClass("loading")
                    );
                  }),
                  (s = function (y) {
                    var c;
                    return (
                      g.el.addClass("loading"),
                      (w = y),
                      (c = new Image()),
                      (c.onload = (function (h) {
                        return function () {
                          return v(c);
                        };
                      })(this)),
                      (c.src = $(y).attr("href"))
                    );
                  }),
                  (l = function () {
                    var y;
                    return (
                      (y = w.prev("[data-image_lightbox]")),
                      y.length || (y = $(r[r.length - 1])),
                      s(y)
                    );
                  }),
                  (a = function () {
                    var y;
                    return (
                      (y = w.next("[data-image_lightbox]")),
                      y.length || (y = $(r[0])),
                      s(y)
                    );
                  }),
                  g.el.dispatch("click", {
                    lb_screenshot: function (y) {
                      return r.length < 2
                        ? I.Lightbox.close()
                        : (I.event(
                            "view_game",
                            "screenshots",
                            "click_screenshot",
                          ),
                          a());
                    },
                    prev_image_btn: function (y) {
                      return (
                        I.event("view_game", "screenshots", "prev_image_btn"),
                        l()
                      );
                    },
                    next_image_btn: function (y) {
                      return (
                        I.event("view_game", "screenshots", "next_image_btn"),
                        a()
                      );
                    },
                  }),
                  g.el.on("i:lightbox_keydown", function (y, c) {
                    switch (c.keyCode) {
                      case 37:
                        return (
                          I.event("view_game", "screenshots", "keyboard_left"),
                          l()
                        );
                      case 39:
                        return (
                          I.event("view_game", "screenshots", "keyboard_right"),
                          a()
                        );
                      case 32:
                        return (
                          I.event("view_game", "screenshots", "Keyboard_space"),
                          a()
                        );
                    }
                  }),
                  g.el.on("i:lightbox_resize", function () {
                    if (i) return v(i);
                  }),
                  s(w),
                  !1
                );
            };
          })(this),
        );
    }
    return o;
  })();
  var Re = [].slice,
    Q =
      C.ConversionTracker ||
      (C.ConversionTracker = (function () {
        function o() {}
        return (
          (o.types = {
            impression: 1,
            click: 2,
            purchase: 3,
            download: 4,
            join: 5,
          }),
          (o.buffer = []),
          (o.find_click = function (t) {
            var n, e, r, i, s, a;
            for (
              a = new RegExp(":" + t + "$"),
                n = this.get_cookie(),
                r = 0,
                s = n.length;
              r < s;
              r++
            )
              if (((i = n[r]), (e = U.isArray(i) ? i[0] : i), e.match(a)))
                return i;
          }),
          (o.strip_click = function (t) {
            var n, e, r, i, s, a;
            return (
              (s = new RegExp(":" + t + "$")),
              (n = this.get_cookie()),
              (a = 0),
              (i = (function () {
                var l, g, v;
                for (v = [], l = 0, g = n.length; l < g; l++) {
                  if (((r = n[l]), (e = U.isArray(r) ? r[0] : r), e.match(s))) {
                    a += 1;
                    continue;
                  }
                  v.push(r);
                }
                return v;
              })()),
              i.length === n.length ? 0 : (this.write_cookie(i), a)
            );
          }),
          (o.after_click_action = function (t, n) {
            var e, r, i, s;
            if (((e = this.find_click(n)), !!e))
              return (
                (s = null),
                (i = U.isArray(e) ? ((s = e[1]), e[0]) : e),
                (r = i.replace(/^\d+/, this.types[t])),
                this.strip_click(n),
                this.push(r, s),
                !0
              );
          }),
          (o.download = function (t) {
            return this.after_click_action("download", t);
          }),
          (o.purchase = function (t) {
            return this.after_click_action("purchase", t);
          }),
          (o.join = function (t) {
            return this.after_click_action("join", t);
          }),
          (o.click = function (t) {
            var n, e, r, i, s, a;
            (r = this.types.click + ":" + t),
              (i = (a = this.get_active_splits()) ? [r, a] : r),
              this.push(r);
            try {
              for (
                e = function () {
                  var l, g, v, w;
                  for (
                    v = this.get_cookie(), w = [], l = 0, g = v.length;
                    l < g;
                    l++
                  )
                    (n = v[l]),
                      (s = U.isArray(n) ? n[0] : n),
                      s !== r && w.push(n);
                  return w;
                }.call(this),
                  e.push(i);
                e.length > 100;

              )
                e.shift();
              return this.write_cookie(e), !0;
            } catch (l) {}
          }),
          (o.write_cookie = function (t) {
            return C.set_cookie("itchio_ca", JSON.stringify(t), { expires: 1 });
          }),
          (o.get_cookie = function () {
            var t;
            if (((t = window.Cookies.get("itchio_ca")), t))
              try {
                return JSON.parse(t) || [];
              } catch (n) {
                try {
                  return JSON.parse(decodeURIComponent(t)) || [];
                } catch (e) {
                  return [];
                }
              }
            else return [];
          }),
          (o.flush_later = function () {
            return (
              (this.flush_later = U.throttle(this.flush_now, 2e3, {
                leading: !1,
              })),
              $(window).on(
                "beforeunload",
                (function (t) {
                  return function () {
                    t.flush_now();
                  };
                })(this),
              ),
              this.flush_later()
            );
          }),
          (o.encode_buffer = function (t) {
            var n, e, r, i, s, a, l, g, v, w, y, c, h, f, u;
            for (
              t == null && (t = Re.call(this.buffer)),
                t.sort(),
                y = [],
                l = null,
                a = null,
                s = null,
                r = 0,
                g = t.length;
              r < g;
              r++
            )
              (e = t[r]),
                (h = e.match(/^(\d+):(\d+):(\d+):(\d+)$/)),
                (n = h[0]),
                (u = h[1]),
                (f = h[2]),
                (w = h[3]),
                (v = h[4]),
                u &&
                  (u !== l && (y.push("t" + u), (l = u)),
                  f !== a && (y.push("s" + f), (a = f)),
                  w !== s && (y.push("o" + w), (s = w)),
                  (i = (+v).toString(36)),
                  (c = String.fromCharCode("A".charCodeAt(0) + i.length)),
                  y.push("" + c + i));
            return y.join("");
          }),
          (o.get_active_splits = function () {
            return C.active_splits;
          }),
          (o.flush_url = function (t) {
            var n, e, r;
            return (
              (r = this.encode_buffer()),
              (n = [{ name: "x", value: r }]),
              (e = t || this.get_active_splits()) &&
                n.push({ name: "s", value: e.join(",") }),
              C.root_url("ca.gif") + "?" + $.param(n)
            );
          }),
          (o.flush_now_beacon = function (t) {
            var n;
            if (navigator.sendBeacon == null) return this.flush_now(t);
            if (this.buffer.length)
              if (
                (C.in_dev &&
                  console.debug.apply(
                    console,
                    ["ca(beacon)"].concat(Re.call(U.compact([this.buffer, t]))),
                  ),
                (n = this.flush_url(t)),
                navigator.sendBeacon(n))
              )
                this.buffer = [];
              else return this.flush_now();
            return $.when();
          }),
          (o.flush_now = function (t) {
            var n;
            return this.buffer.length
              ? (C.in_dev &&
                  console.debug.apply(
                    console,
                    ["ca"].concat(Re.call(U.compact([this.buffer, t]))),
                  ),
                (n = this.flush_url(t)),
                (this.buffer = []),
                $.Deferred(
                  (function (e) {
                    return function (r) {
                      var i, s;
                      return (
                        (s = new Image()),
                        (s.src = n),
                        (i = function () {
                          return r.resolve();
                        }),
                        (s.onerror = i),
                        (s.onload = i)
                      );
                    };
                  })(this),
                ))
              : $.when();
          }),
          (o.push = function (t, n) {
            var e;
            return (
              (this.buffer = function () {
                var r, i, s, a;
                for (s = this.buffer, a = [], r = 0, i = s.length; r < i; r++)
                  (e = s[r]), e !== t && a.push(e);
                return a;
              }.call(this)),
              this.buffer.push(t),
              this.buffer.length > 50 || n
                ? this.flush_now(n)
                : this.flush_later()
            );
          }),
          o
        );
      })()),
    ae =
      C.ReferrerTracker ||
      (C.ReferrerTracker = (function () {
        function o() {}
        return (
          (o.MAX_ITEMS = 20),
          (o.get_cookie = function () {
            return window.Cookies.getJSON("itchio_refs") || [];
          }),
          (o.write_cookie = function (t) {
            return C.set_cookie("itchio_refs", t, { expires: 14 });
          }),
          (o.has_ref = function (t, n) {
            var e, r, i, s, a, l;
            for (n = +n, a = o.get_cookie(), i = 0, s = a.length; i < s; i++)
              if (((l = a[i]), (r = l[0]), (e = l[1]), r === t && e === n))
                return !0;
            return !1;
          }),
          (o.push = function (t, n, e) {
            var r, i;
            if (e && e.length > 0) {
              for (
                n = +n,
                  i = function () {
                    var s, a, l, g;
                    for (
                      l = this.get_cookie(), g = [], s = 0, a = l.length;
                      s < a;
                      s++
                    )
                      (r = l[s]), !(r[0] === t && r[1] === n) && g.push(r);
                    return g;
                  }.call(o),
                  C.in_dev && console.log("pushing referrer", [t, n, e]),
                  i.unshift([t, n, e]);
                i.length > o.MAX_ITEMS;

              )
                i.pop();
              return o.write_cookie(i);
            }
          }),
          o
        );
      })()),
    qt = function (o, t) {
      for (var n in t) Jt.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    Jt = {}.hasOwnProperty,
    Me = (function (o) {
      qt(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return (
        (t.prototype.first_show = function () {
          return this.el.focus();
        }),
        (t.prototype.init = function (n, e) {
          return (
            (this.game = n),
            (this.buy = new qe(this.el, this.game, e)),
            (this.buy.event_category = e.event_category || "view_game"),
            (this.buy.submit_handler = this.buy.remote_submit),
            this.buy.set_fingerprint(),
            this.el.on(
              "i:loading",
              (function (r) {
                return function (i, s) {
                  return (r.closable = !s);
                };
              })(this),
            ),
            this.el.on(
              "i:buy_start",
              (function (r) {
                return function (i, s) {
                  var a, l, g, v, w, y, c, h;
                  for (
                    c = null, a = null, y = [], l = 0, g = s.length;
                    l < g;
                    l++
                  )
                    switch (((w = s[l]), (v = w.name), (h = w.value), v)) {
                      case "source":
                        y.push((c = h));
                        break;
                      case "price":
                        y.push((a = h));
                        break;
                      default:
                        y.push(void 0);
                    }
                  return y;
                };
              })(this),
            ),
            this.el.on(
              "i:buy_complete",
              (function (r) {
                return function (i) {
                  return (r.closable = !0), j.close();
                };
              })(this),
            )
          );
        }),
        t
      );
    })(j),
    tt = null;
  C.libs.react.done(function () {
    var o, t, n, e, r;
    return (
      (t = L),
      (n = t.a),
      (r = t.p),
      (e = t.button),
      (o = {}),
      (tt = A.component("ConversionLink", {
        pure: !0,
        propTypes: {
          source: T.number,
          object_type: T.number,
          object_id: T.number,
          href: T.string,
          target: T.string,
          class: T.any,
          impression: T.bool,
          on_click: T.func,
          on_impression: T.func,
        },
        getInitialState: function () {
          return { seen: !1 };
        },
        get_suffix: function () {
          return (
            this.props.source +
            ":" +
            this.props.object_type +
            ":" +
            this.props.object_id
          );
        },
        on_click: function (i) {
          var s, a, l, g;
          if (
            i.type === "click" &&
            ((s = this.link_ref.current),
            (l =
              i.metaKey ||
              i.ctrlKey ||
              i.shiftKey ||
              this.props.target === "_blank"),
            (r = this.handle_click()),
            !l && r.state() !== "resolved")
          )
            return (
              i.preventDefault(),
              (g = new Date()),
              (a = (function (v) {
                return function () {
                  if (a) return (a = null), (window.location = v.props.href);
                };
              })(this)),
              setTimeout(
                (function (v) {
                  return function () {
                    return typeof a == "function" ? a() : void 0;
                  };
                })(this),
                200,
              ),
              r.done(a)
            );
        },
        on_mouse_up: function (i) {
          if (i.button === 1) return this.handle_click();
        },
        handle_click: function () {
          var i, s;
          return this.props.object_type &&
            this.props.source &&
            this.props.object_id
            ? this.state.clicked
              ? this.state.clicked
              : ((s = Q.types.click + ":" + this.get_suffix()),
                o[s]
                  ? $.when()
                  : ((o[s] = !0),
                    Q.click(this.get_suffix()),
                    (r = Q.flush_now_beacon()),
                    this.props.track_referrer &&
                      ae.push.apply(ae, this.props.track_referrer),
                    this.setState({ clicked: r }),
                    typeof (i = this.props).on_click == "function" &&
                      i.on_click(),
                    r))
            : $.when();
        },
        componentDidMount: function () {
          var i;
          if (
            this.props.object_type &&
            this.props.source &&
            this.props.object_id &&
            this.props.impression !== !1 &&
            !o[Q.types.impression + ":" + this.get_suffix()]
          )
            return (
              (i = this.link_ref.current),
              (this.unbind_visibility = $(i).lazy_images({
                elements: [i],
                show_images: (function (s) {
                  return function () {
                    var a, l;
                    return (
                      (l = Q.types.impression + ":" + s.get_suffix()),
                      o[l] || (Q.push(l), (o[l] = !0)),
                      s.setState({ seen: !0 }),
                      typeof (a = s.props).on_impression == "function" &&
                        a.on_impression(),
                      typeof s.unbind_visibility == "function" &&
                        s.unbind_visibility(),
                      (s.unbind_visibility = null)
                    );
                  };
                })(this),
              }))
            );
        },
        componentWillUnmount: function () {
          return typeof this.unbind_visibility == "function"
            ? this.unbind_visibility()
            : void 0;
        },
        render: function () {
          var i;
          return n(
            {
              ref: this.link_ref || (this.link_ref = M.createRef()),
              href: this.props.href,
              className: this.props.class || this.props.className,
              onClick: this.on_click,
              onMouseUp: this.on_mouse_up,
              target: this.props.target,
              tabIndex:
                (i = this.props.tabindex) != null ? i : this.props.tabIndex,
              "aria-hidden": this.props["aria-hidden"],
            },
            this.props.children,
          );
        },
      }))
    );
  });
  var de = null;
  C.libs.react.done(function () {
    var o, t;
    return (
      (o = L),
      (t = o.img),
      (de = A.component("LazyImage", {
        pure: !0,
        propTypes: {
          src: T.string,
          src_set: T.string,
          width: T.number,
          height: T.number,
        },
        getInitialState: function () {
          return { visible: !1 };
        },
        componentDidMount: function () {
          var n;
          return (
            (n = this.image_ref.current),
            (this.unbind_lazy_images = $(n).lazy_images({
              elements: [n],
              show_images: (function (e) {
                return function () {
                  var r;
                  return (
                    e.setState({ visible: !0 }),
                    typeof (r = e.props).on_reveal == "function"
                      ? r.on_reveal()
                      : void 0
                  );
                };
              })(this),
            }))
          );
        },
        componentWillUnmount: function () {
          return typeof this.unbind_lazy_images == "function"
            ? this.unbind_lazy_images()
            : void 0;
        },
        render: function () {
          var n, e;
          return t({
            ref: this.image_ref || (this.image_ref = M.createRef()),
            className: H(this.props.class, this.props.className, {
              lazy_loaded: this.state.loaded,
              lazy_visible: this.state.visible,
            }),
            alt: this.props.alt,
            width: this.state.loaded
              ? this.props.width
              : (n = this.props.initial_width) != null
              ? n
              : this.props.width,
            height: this.state.loaded
              ? this.props.height
              : (e = this.props.initial_height) != null
              ? e
              : this.props.height,
            src: this.state.visible ? this.props.src : void 0,
            srcSet: this.state.visible ? this.props.src_set : void 0,
            onLoad:
              this.state.visible && !this.state.loaded
                ? (function (r) {
                    return function () {
                      var i;
                      return (
                        r.setState({ loaded: !0 }),
                        typeof (i = r.props).on_load == "function"
                          ? i.on_load()
                          : void 0
                      );
                    };
                  })(this)
                : void 0,
          });
        },
      }))
    );
  });
  var he,
    Z,
    Ee,
    Pe,
    Ae,
    Le,
    ee,
    rt,
    Fe,
    fe,
    Be,
    De,
    _e,
    nt,
    it,
    Oe,
    Yt = [].slice;
  (fe = function (o, t, n) {
    return (
      o < 0 ? (o += 1) : o > 1 && (o -= 1),
      6 * o < 1
        ? t + (n - t) * 6 * o
        : 2 * o < 1
        ? n
        : 3 * o < 2
        ? t + (n - t) * (2 / 3 - o) * 6
        : t
    );
  }),
    (Ee = function (o, t, n) {
      var e, r, i, s, a;
      return (
        (o = o / 360),
        (t = t / 100),
        (n = n / 100),
        t === 0
          ? ((i = n), (r = n), (e = n))
          : ((a = n < 0.5 ? n * (1 + t) : n + t - n * t),
            (s = 2 * n - a),
            (i = fe(o + 1 / 3, s, a)),
            (r = fe(o, s, a)),
            (e = fe(o - 1 / 3, s, a))),
        [i * 255, r * 255, e * 255]
      );
    }),
    (Be = function (o, t, n) {
      var e, r, i, s, a;
      return (
        (o = o / 255),
        (t = t / 255),
        (n = n / 255),
        (s = Math.min(o, t, n)),
        (i = Math.max(o, t, n)),
        (a = 0),
        (e = 0),
        (r = (s + i) / 2),
        s !== i &&
          ((a = r < 0.5 ? (i - s) / (i + s) : (i - s) / (2 - i - s)),
          (e = (function () {
            switch (i) {
              case o:
                return (t - n) / (i - s);
              case t:
                return 2 + (n - o) / (i - s);
              case n:
                return 4 + (o - t) / (i - s);
            }
          })())),
        e < 0 && (e += 6),
        [e * 60, a * 100, r * 100]
      );
    }),
    (Le = function () {
      var o, t, n, e, r, i, s, a, l, g, v;
      if (
        ((g = arguments[0]),
        (a = 2 <= arguments.length ? Yt.call(arguments, 1) : []),
        (e = "[a-fA-f0-9]"),
        (r = e + e),
        (v = "^#(" + e + ")(" + e + ")(" + e + ")$"),
        (l = "^#(" + r + ")(" + r + ")(" + r + ")$"),
        (i = g.match(new RegExp(v))),
        i)
      )
        (o = i[0]),
          (s = i[1]),
          (n = i[2]),
          (t = i[3]),
          (s += s),
          (n += n),
          (t += t);
      else {
        if (((i = g.match(new RegExp(l))), !i)) return null;
        (o = i[0]), (s = i[1]), (n = i[2]), (t = i[3]);
      }
      return [parseInt(s, 16), parseInt(n, 16), parseInt(t, 16)];
    }),
    (ee = function () {
      var o;
      return (o = Le.apply(null, arguments)), o || [0, 0, 0];
    }),
    (he = function (o) {
      var t;
      return (t = Math.floor(o).toString(16)), t.length === 1 ? "0" + t : t;
    }),
    (Z = function (o, t, n) {
      return (
        (o = Math.min(255, Math.max(0, o))),
        (t = Math.min(255, Math.max(0, t))),
        (n = Math.min(255, Math.max(0, n))),
        "#" + he(o) + he(t) + he(n)
      );
    }),
    (nt = function (o, t, n) {
      var e, r, i, s, a;
      return (
        t == null && (t = 15),
        n == null && (n = 0.8),
        (s = Be.apply(null, ee(o))),
        (e = s[0]),
        (a = s[1]),
        (r = s[2]),
        (i = r > 50 ? r - t : r + t),
        (i = Math.max(0, Math.min(100, i))),
        Z.apply(null, Ee(e, a * n, i))
      );
    }),
    (Pe = function (o, t, n) {
      return (0.299 * o + 0.587 * t + 0.114 * n) / 255;
    }),
    (Fe = function (o, t, n) {
      return (
        (o = o / 255),
        (t = t / 255),
        (n = n / 255),
        (o = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)),
        (t = t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)),
        (n = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)),
        0.2126 * o + 0.7152 * t + 0.0722 * n
      );
    }),
    (De = function (o, t, n) {
      var e, r, i;
      return (
        (i = 0.299 * o + 0.587 * t + 0.114 * n),
        (e = (n - i) * 0.565),
        (r = (o - i) * 0.713),
        [i, e, r]
      );
    }),
    (Oe = function (o, t, n) {
      var e, r, i;
      return (
        (i = o + 1.403 * n),
        (r = o - 0.344 * t - 0.714 * n),
        (e = o + 1.77 * t),
        [i, r, e]
      );
    }),
    (_e = function (o, t, n, e) {
      var r, i, s, a;
      return (
        e == null && (e = 0.1),
        (r = De(o, t, n)),
        (a = r[0]),
        (i = r[1]),
        (s = r[2]),
        e < 0 ? (a += e * a) : (a += e * (255 - a)),
        Oe(a, i, s)
      );
    }),
    (rt = function (o, t, n) {
      var e, r;
      return (
        typeof o == "string" &&
          ((e = ee(o)), (o = e[0]), (t = e[1]), (n = e[2])),
        (r = Fe(o, t, n)),
        r >= 0.45 ? Ae(Z(o, t, n), "#000000", 0.2) : "#ffffff"
      );
    }),
    (it = function (o, t, n) {
      var e, r, i, s, a;
      return (
        t == null && (t = 0.15),
        n == null && (n = 0.5),
        (a = ee(o)),
        (s = a[0]),
        (r = a[1]),
        (e = a[2]),
        (i = Pe(s, r, e)),
        i < n ? Z.apply(null, _e(s, r, e, t)) : Z.apply(null, _e(s, r, e, -t))
      );
    }),
    (Ae = function (o, t, n) {
      var e, r, i, s, a, l, g, v, w;
      return n === 1
        ? o
        : n === 0
        ? t
        : ((v = ee(o)),
          (l = v[0]),
          (s = v[1]),
          (r = v[2]),
          (w = ee(t)),
          (g = w[0]),
          (a = w[1]),
          (i = w[2]),
          (e = 1 - n),
          Z(l * n + g * e, s * n + a * e, r * n + i * e));
    });
  var Qt =
      C.Color ||
      (C.Color = {
        hsl_to_rgb: Ee,
        rgb_to_hsl: Be,
        parse_color: Le,
        parse_color_safe: ee,
        hex_color: Z,
        sub_color: nt,
        luma: Pe,
        relative_luma: Fe,
        rgb_to_yuv: De,
        yuv_to_rgb: Oe,
        scale_luma: _e,
        readable_text_color: rt,
        sub_color2: it,
        mix_color: Ae,
      }),
    ot = null;
  I.libs.react.done(function () {
    var o, t, n, e;
    return (
      (t = L),
      (n = t.a),
      (e = t.div),
      (o = A.package("Index")),
      (ot = o("GridSizer", {
        propTypes: { children: T.array },
        getInitialState: function () {
          return {};
        },
        getDefaultProps: function () {
          return {
            cell_margin: 20,
            min_width: 0,
            expected_width: 315,
            min_columns: 1,
            crop_on_resize: !0,
          };
        },
        componentDidMount: function () {
          return (
            _.defer(
              (function (r) {
                return function () {
                  return r.calculate_cell_sizes();
                };
              })(this),
            ),
            (this.resize_callback = _.debounce(
              (function (r) {
                return function () {
                  return r.calculate_cell_sizes();
                };
              })(this),
              250,
            )),
            $(window).on("resize", this.resize_callback)
          );
        },
        componentWillUnmount: function () {
          return (
            (this.unmounted = !0), $(window).off("resize", this.resize_callback)
          );
        },
        componentDidUpdate: function (r) {
          if (r.children !== this.props.children)
            return _.defer(
              (function (i) {
                return function () {
                  return i.calculate_cell_sizes();
                };
              })(this),
            );
        },
        calculate_cell_sizes: function (r) {
          var i, s, a, l, g, v;
          if (
            (r == null && (r = !1),
            !this.unmounted &&
              ((s = this.get_width()),
              this.state.container_width !== s &&
                ((v = this.props.expected_width + this.props.cell_margin),
                (i = s + this.props.cell_margin),
                (l = i / v),
                (g = Math.ceil(l)),
                g < this.props.min_columns && (g = this.props.min_columns),
                (a = i / g - this.props.cell_margin),
                (a = Math.floor(a)),
                a < this.props.min_width &&
                  g > 1 &&
                  ((g -= 1),
                  (a = i / g - this.props.cell_margin),
                  (a = Math.floor(a))),
                this.setState(
                  { container_width: s, cell_width: a, cells_per_row: g },
                  this.props.on_reshape,
                ),
                r === !1)))
          )
            return _.defer(
              (function (w) {
                return function () {
                  return w.calculate_cell_sizes(!0);
                };
              })(this),
            );
        },
        get_width: function () {
          var r, i, s, a, l;
          return (
            (r = this.container()),
            (i = (l = r[0]) != null ? l.getBoundingClientRect().width : void 0),
            (a = i - Math.floor(i)),
            (s = Math.floor(r.width())),
            a > 0 && (s -= 1),
            s
          );
        },
        get_max_num_visible: function () {
          if (this.props.fit_rows && this.state.cells_per_row)
            return this.state.cells_per_row * this.props.fit_rows;
        },
        get_num_visible: function () {
          var r;
          return (
            (r = this.props.children.length),
            this.props.fit_rows && this.state.cells_per_row
              ? Math.min(r, this.state.cells_per_row * this.props.fit_rows)
              : r
          );
        },
        get_visible_children: function () {
          var r;
          return (
            (r = this.props.children),
            this.props.fit_rows &&
              this.state.cells_per_row &&
              (r = r.slice(0, this.state.cells_per_row * this.props.fit_rows)),
            r
          );
        },
        render: function () {
          var r, i, s, a, l, g;
          return (
            (r = this.get_visible_children()),
            (l = {
              display: "grid",
              alignItems: "start",
              gap: this.props.cell_margin + "px",
            }),
            (i = this.props.crop_on_resize ? { overflowX: "hidden" } : void 0),
            this.props.crop_on_resize &&
              this.state.container_width &&
              (l.width = this.state.container_width + "px"),
            (g =
              this.state.cell_width && this.state.cells_per_row
                ? (l.gridTemplateColumns =
                    "repeat(" +
                    this.state.cells_per_row +
                    ", " +
                    this.state.cell_width +
                    "px)")
                : ((a = window.innerWidth < 400 ? 5 / 9 : 7 / 9),
                  (s = Math.floor(this.props.expected_width * a)),
                  (l.gridTemplateColumns =
                    "repeat(auto-fill, minmax(" + s + "px, 1fr))"))),
            this.enclose(
              { component: this.props.component, style: i },
              React.createElement(
                this.props.sizer_component || "div",
                { className: "grid_sizer_children", style: l },
                r,
              ),
            )
          );
        },
      }))
    );
  });
  var je = [].slice,
    st = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y;
    return (
      (e = L),
      (y = e.span),
      (s = e.div),
      (r = e.a),
      (g = e.label),
      (v = e.p),
      (i = e.button),
      (a = e.fragment),
      (w = e.section),
      (l = e.h2),
      (a = M.createElement.bind(null, M.Fragment)),
      (a.type = M.fragment),
      (o = A.package("Index")),
      (t = {
        linux: "tux",
        osx: "apple",
        windows: "windows8",
        android: "android",
      }),
      (n = {
        linux: "Linux",
        osx: "macOS",
        windows: "Windows",
        android: "Android",
      }),
      o("PlatformList", {
        pure: !0,
        getDefaultProps: function () {
          return { prefix: "Available for" };
        },
        render: function () {
          var c, h, f, u, p;
          if (!(this.props.platforms && this.props.platforms.length))
            return null;
          for (
            u = [], p = this.props.platforms, c = 0, h = p.length;
            c < h;
            c++
          )
            (f = p[c]),
              u.length > 0 && u.push(" "),
              u.push(
                y({
                  key: f,
                  className: "icon icon-" + t[f],
                  "aria-hidden": "true",
                  title: this.props.prefix + " " + n[f],
                }),
              );
          return u;
        },
      }),
      o("StarRating", {
        propTypes: { average: T.number, count: T.number },
        pure: !0,
        render: function () {
          var c, h;
          return (
            (c = this.props.average || 0),
            s(
              { className: "game_rating", title: "Average: " + c.toFixed(2) },
              y(
                { className: "screenreader_only" },
                "Average rating " + c.toFixed(2) + " out of 5",
              ),
              s(
                { className: "star_value" },
                s(
                  {
                    className: "star_fill",
                    style: { width: ((c / 5) * 100).toFixed(5) + "%" },
                  },
                  (function () {
                    var f, u;
                    for (u = [], h = f = 1; f <= 5; h = ++f)
                      u.push(
                        y({
                          key: h,
                          className: "star icon-star",
                          "aria-hidden": "true",
                        }),
                      );
                    return u;
                  })(),
                ),
                s(
                  { className: "star_holes" },
                  (function () {
                    var f, u;
                    for (u = [], h = f = 1; f <= 5; h = ++f)
                      u.push(
                        y({
                          key: h,
                          className: "star icon-star2",
                          "aria-hidden": "true",
                        }),
                      );
                    return u;
                  })(),
                ),
              ),
              " ",
              y(
                { className: "rating_count" },
                "(" + I.format_integer(this.props.count),
                y({ className: "screenreader_only" }, " total ratings"),
                ")",
              ),
            )
          );
        },
      }),
      o("GameCell", {
        pure: !0,
        getDefaultProps: function () {
          return {
            show_price: !0,
            show_short_text: !0,
            show_platforms: !0,
            show_rating: !0,
            show_cell_tools: !0,
          };
        },
        getInitialState: function () {
          return { game: this.build_game() };
        },
        componentDidUpdate: function (c) {
          if (
            c.build_game_object !== this.props.build_game_object ||
            c.game !== this.props.game
          )
            return this.setState({ game: this.build_game() });
        },
        update_focus: function (c) {
          return this.setState({
            cell_tools_focused: c.currentTarget.contains(
              document.activeElement,
            ),
          });
        },
        build_game: function () {
          return this.props.build_game_object
            ? this.props.build_game_object(this.props.game)
            : this.props.game;
        },
        add_to_collection: function (c) {
          if (I.current_user)
            return (
              c.preventDefault(),
              j.open_remote("/game/collections/" + this.state.game.id, ie)
            );
        },
        mark_gif_loaded: function () {
          return this.setState({ gif_loaded: !0 });
        },
        track_grid_referrer: function () {
          if (this.props.grid_referrer)
            return ae.push(
              "game",
              this.state.game.id,
              this.props.grid_referrer,
            );
        },
        game_link: function () {
          var c, h, f;
          return (
            (f = arguments[0]),
            (c = 2 <= arguments.length ? je.call(arguments, 1) : []),
            this.props.conversion_source
              ? ((h = $.extend(
                  {
                    object_type: 1,
                    object_id: this.state.game.id,
                    source: this.props.conversion_source,
                    on_click: this.props.grid_referrer
                      ? this.track_grid_referrer
                      : void 0,
                  },
                  f,
                )),
                tt.apply(null, [h].concat(je.call(c))))
              : r.apply(null, [f].concat(je.call(c)))
          );
        },
        render_user: function (c, h) {
          return (
            h == null && (h = null),
            r(
              {
                key: h,
                className: "user_link",
                href: c.url,
                target: this.props.target,
              },
              c.name,
            )
          );
        },
        render: function () {
          var c, h, f, u, p, d, m, b, x, k, N, B, O;
          return (
            (m = this.state.game),
            (O = m.user),
            (x = m.platforms
              ? (function () {
                  var P, D, V, q;
                  for (V = m.platforms, q = [], P = 0, D = V.length; P < D; P++)
                    (b = V[P]), t[b] && q.push(b);
                  return q;
                })()
              : void 0),
            (p = m.cover_color
              ? ((N = Qt.parse_color(m.cover_color)),
                (k = N[0]),
                (d = N[1]),
                (c = N[2]),
                "rgba(" + k + ", " + d + ", " + c + ", 0.5)")
              : void 0),
            this.enclose(
              {
                "data-game_id": m.id,
                dir: "auto",
                className: H("game_cell", {
                  focused: this.state.cell_tools_focused,
                }),
                onMouseEnter: this.state.game.gif_cover
                  ? (function (P) {
                      return function () {
                        return P.setState({ hovering: !0 });
                      };
                    })(this)
                  : void 0,
                onMouseLeave: this.state.game.gif_cover
                  ? (function (P) {
                      return function () {
                        return P.setState({ hovering: !1 });
                      };
                    })(this)
                  : void 0,
              },
              s(
                { className: "bordered", style: p && { backgroundColor: p } },
                this.game_link(
                  {
                    href: m.url,
                    target: this.props.target,
                    className: "game_thumb",
                    "aria-hidden": "true",
                    tabIndex: -1,
                  },
                  typeof (h = this.props).render_thumb_extras == "function"
                    ? h.render_thumb_extras(m)
                    : void 0,
                  m.cover
                    ? de({ src: m.cover })
                    : s({ className: "missing_image" }, "no image :("),
                  m.gif_cover ? s({ className: "gif_label" }, "GIF") : void 0,
                  (B = this.state) != null && B.hovering && m.gif_cover
                    ? M.createElement(
                        M.Fragment,
                        {},
                        this.state.gif_loaded
                          ? void 0
                          : s({ className: "gif_loading_overlay" }),
                        de({
                          className: "gif_cover",
                          src: m.gif_cover,
                          on_load: this.mark_gif_loaded,
                        }),
                      )
                    : void 0,
                ),
                this.props.show_price && m.sale_rate
                  ? s(
                      {
                        className: H("sale_flag", {
                          reverse_sale: m.sale_rate < 0,
                        }),
                      },
                      s({ className: "rate" }, Math.abs(m.sale_rate) + "%"),
                      s(
                        { className: "mini_label" },
                        m.sale_rate < 0 ? "more" : "off",
                      ),
                    )
                  : void 0,
                x != null && x.length
                  ? s(
                      { className: "p_data fading_data" },
                      o.PlatformList({ platforms: x }),
                    )
                  : void 0,
                this.props.show_cell_tools
                  ? s(
                      {
                        className: "fading_data cell_tools",
                        onFocus: this.update_focus,
                        onBlur: this.update_focus,
                      },
                      typeof (f = this.props).render_cell_extras == "function"
                        ? f.render_cell_extras(m)
                        : void 0,
                      r(
                        {
                          href: m.url + "/add-to-collection",
                          title: this.t("add_to_collection.add_button"),
                          className: "add_to_collection_btn",
                          onClick: this.add_to_collection,
                          role: "button",
                          onKeyDown: (function (P) {
                            return function (D) {
                              if (D.key === " ") return P.add_to_collection(D);
                            };
                          })(this),
                        },
                        y({
                          className: "icon icon-playlist_add",
                          "aria-hidden": "true",
                        }),
                        y(
                          { className: "screenreader_only" },
                          "Add to collection",
                        ),
                      ),
                    )
                  : void 0,
              ),
              s(
                { className: "label" },
                function () {
                  if (this.props.show_price)
                    switch (m.flag) {
                      case "free":
                        return s({ className: "meta_tag free_tag" }, "Free");
                      case "web":
                        return s({ className: "meta_tag free_tag" }, "Web");
                      case "demo":
                        return s({ className: "meta_tag demo_tag" }, "Demo");
                      default:
                        if (m.price)
                          return s(
                            { className: H("price_tag meta_tag") },
                            m.price,
                          );
                    }
                }.call(this),
                this.game_link(
                  {
                    target: this.props.target,
                    className: "title",
                    title: m.title,
                    href: m.url,
                  },
                  m.title,
                ),
              ),
              s(
                { className: "user_row" },
                m.contributors
                  ? m.contributors.map(
                      (function (P) {
                        return function (D, V) {
                          return V > 0
                            ? a({ key: "user-" + V }, ", ", P.render_user(D))
                            : P.render_user(D, "user-" + V);
                        };
                      })(this),
                    )
                  : this.render_user(O),
              ),
              this.props.show_rating && m.rating
                ? o.StarRating(m.rating)
                : void 0,
              m.tags && m.tags.length
                ? s(
                    { className: "sub cell_tags" },
                    m.tags.map(
                      (function (P) {
                        return function (D, V) {
                          return M.createElement(
                            M.Fragment,
                            { key: D.name },
                            V > 0 ? ", " : void 0,
                            r(
                              { href: D.url, target: P.props.target },
                              "#" + D.name,
                            ),
                          );
                        };
                      })(this),
                    ),
                  )
                : void 0,
              this.props.show_short_text && m.short_text
                ? s({ className: "sub short_text" }, m.short_text)
                : void 0,
              typeof (u = this.props).render_cell_below == "function"
                ? u.render_cell_below(m)
                : void 0,
            )
          );
        },
      }),
      (st = o("GameGrid", {
        calculate_cell_sizes: (function (c) {
          return function () {
            var h, f;
            return (h = c.grid_sizer_ref) != null && (f = h.current) != null
              ? f.calculate_cell_sizes()
              : void 0;
          };
        })(this),
        componentDidMount: function () {
          var c;
          if (((c = this.container()), this.props.enable_popups))
            return new I.GamePopups(c, { x_offset: 10 });
        },
        getDefaultProps: function () {
          return {
            cell_width: I.is_mobile() ? 300 : 250,
            enable_popups: !0,
            render_game: function (c) {
              var h;
              return (
                (h = {
                  render_thumb_extras: this.props.render_thumb_extras,
                  render_cell_extras: this.props.render_cell_extras,
                  render_cell_below: this.props.render_cell_below,
                  key: c.id,
                  game: c,
                  build_game_object: this.props.build_game_object,
                  conversion_source: this.props.conversion_source,
                  grid_referrer: this.props.grid_referrer,
                }),
                this.props.cell_props &&
                  (h = $.extend(h, this.props.cell_props)),
                o.GameCell(h)
              );
            },
          };
        },
        render: function () {
          var c, h;
          return (
            (c = {
              ref: this.grid_sizer_ref || (this.grid_sizer_ref = M.createRef()),
              cell_margin: 10,
              expected_width: this.props.cell_width,
              fit_rows: this.props.fit_rows,
              children:
                (h = this.props.games) != null
                  ? h.map(this.props.render_game.bind(this))
                  : void 0,
            }),
            this.props.grid_sizer_props &&
              (c = $.extend(c, this.props.grid_sizer_props)),
            this.enclose({}, ot(c))
          );
        },
      })),
      o("NewFromFollowers", {
        getInitialState: function () {
          return { games: this.props.games };
        },
        componentDidUpdate: function (c, h) {
          var f, u;
          if (
            ((f = h.games) != null ? f.length : void 0) !==
            ((u = this.state.games) != null ? u.length : void 0)
          )
            return $(window).trigger("i:reshape");
        },
        on_dismiss_games: function (c) {
          var h, f, u, p, d, m, b;
          if (
            !((u = this.state) != null && u.loading) &&
            ((f =
              (p = this.game_grid_ref) != null &&
              (d = p.current) != null &&
              (m = d.grid_sizer_ref) != null
                ? m.current
                : void 0),
            !!f &&
              ((b = this.state.games.slice(0, f.get_num_visible())),
              !!b.length))
          )
            return (
              this.setState({ loading: !0 }),
              $.post(
                this.props.dismiss_url,
                I.with_csrf({
                  object_type: "game",
                  object_id: (function () {
                    var x, k, N;
                    for (N = [], x = 0, k = b.length; x < k; x++)
                      (h = b[x]), N.push(h.id);
                    return N;
                  })().join(","),
                }),
              ).done(
                (function (x) {
                  return function (k) {
                    return $.get(x.props.more_results_url).done(function (N) {
                      return x.setState({
                        games: _.toArray(N.games),
                        loading: !1,
                      });
                    });
                  };
                })(this),
              )
            );
        },
        render_cell_extras: function (c) {
          return i(
            {
              type: "button",
              className: "dismiss_btn",
              onClick: (function (h) {
                return function () {
                  var f, u;
                  return (
                    (u = function () {
                      var p, d, m, b;
                      for (
                        m = this.state.games, b = [], p = 0, d = m.length;
                        p < d;
                        p++
                      )
                        (f = m[p]), f !== c && b.push(f);
                      return b;
                    }.call(h)),
                    h.setState({ games: u }),
                    $.post(
                      h.props.dismiss_url,
                      I.with_csrf({ object_type: "game", object_id: c.id }),
                    ).done(function (p) {
                      return h.fetch_more_if_necessary();
                    })
                  );
                };
              })(this),
            },
            "Dismiss",
          );
        },
        fetch_more_if_necessary: function () {
          var c, h, f, u;
          if (
            !this.state.loading &&
            !this.state.exhausted &&
            ((c =
              (h = this.game_grid_ref) != null &&
              (f = h.current) != null &&
              (u = f.grid_sizer_ref) != null
                ? u.current
                : void 0),
            !!c && c.get_max_num_visible() > c.get_num_visible())
          )
            return (
              this.setState({ loading: !0 }),
              $.get(this.props.more_results_url).done(
                (function (p) {
                  return function (d) {
                    return (
                      (d = _.toArray(d != null ? d.games : void 0)),
                      p.setState({
                        exhausted: d.length < c.get_max_num_visible(),
                        games: d,
                        loading: !1,
                      })
                    );
                  };
                })(this),
              )
            );
        },
        render_dismiss_button: function () {
          var c;
          if (((c = this.state.games), !!c.length))
            return i(
              {
                className: "button outline",
                type: "button",
                onClick: this.on_dismiss_games,
              },
              this.state.games.length > 1 ? "Dismiss these" : "Dismiss",
            );
        },
        render: function () {
          var c;
          return this.state.games.length
            ? this.enclose(
                {
                  component: "section",
                  className: H("game_section", {
                    loading: (c = this.state) != null ? c.loading : void 0,
                  }),
                },
                s(
                  { className: "header_split" },
                  s(
                    {},
                    s(
                      { className: "section_header" },
                      l({}, "New From Those You Follow"),
                    ),
                    v(
                      { className: "section_description" },
                      "Projects from those you follow that you haven't seen yet.",
                    ),
                  ),
                  this.render_dismiss_button(),
                ),
                o.GameGrid({
                  ref:
                    this.game_grid_ref || (this.game_grid_ref = M.createRef()),
                  games: this.state.games,
                  fit_rows: this.props.fit_rows,
                  conversion_source: this.props.conversion_source,
                  grid_referrer: this.props.grid_referrer,
                  render_cell_extras: this.render_cell_extras,
                }),
              )
            : null;
        },
      })
    );
  });
  var at = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h;
    return (
      (t = L),
      (n = t.a),
      (c = t.span),
      (r = t.div),
      (a = t.h2),
      (w = t.p),
      (i = t.em),
      (s = t.fragment),
      (h = t.strong),
      (v = t.label),
      (e = t.button),
      (g = t.img),
      (y = t.section),
      (l = t.h3),
      (s = React.createElement.bind(null, React.Fragment)),
      (s.type = React.fragment),
      (o = R.package("Ads")),
      R("ShareButtons", {
        pure: !0,
        render: function () {
          return this.enclose(
            { className: "simple_social_buttons_widget" },
            this.props.twitter
              ? n(
                  {
                    href: this.props.twitter.url,
                    target: "_blank",
                    rel: "noopener nofollow",
                    className: "twitter_link",
                    title: "Share on Twitter...",
                  },
                  c({ className: "icon icon-twitter" }),
                )
              : void 0,
            this.props.facebook
              ? n(
                  {
                    href: this.props.facebook.url,
                    target: "_blank",
                    rel: "noopener nofollow",
                    className: "facebook_link",
                    title: "Share on Facebook...",
                  },
                  c({ className: "icon icon-facebook" }),
                )
              : void 0,
          );
        },
      }),
      o("AfterDownload", {
        pure: !0,
        componentDidMount: function () {
          var f, u;
          return (
            (f = ReactDOM.findDOMNode(this)),
            (u = document.createElement("script")),
            (u.async = !0),
            (u.src =
              "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"),
            f.appendChild(u),
            (window.adsbygoogle || (window.adsbygoogle = [])).push({})
          );
        },
        render: function () {
          return r(
            {},
            React.createElement("ins", {
              className: "adsbygoogle",
              style: { display: "block" },
              "data-ad-client": "ca-pub-4267538250984114",
              "data-ad-slot": "9114825859",
              "data-ad-format": "auto",
              "data-full-width-responsive": "true",
            }),
          );
        },
      }),
      (at = R("AfterDownloadLightbox", {
        componentDidMount: function () {
          var f, u;
          if (this.props.push_state)
            try {
              return (
                (u = {
                  title: document.title,
                  url: window.location.toString(),
                }),
                typeof (f = window.history).replaceState == "function" &&
                  f.replaceState(
                    {},
                    this.props.push_state.title,
                    this.props.push_state.url,
                  ),
                (this.previous_state = u)
              );
            } catch (p) {}
        },
        componentWillUnmount: function () {
          var f;
          if (this.previous_state)
            return (
              typeof (f = window.history).replaceState == "function" &&
                f.replaceState(
                  {},
                  this.previous_state.title,
                  this.previous_state.url,
                ),
              delete this.previous_state
            );
        },
        render: function () {
          return R.Lightbox(
            { className: this.enclosing_class_name() },
            a({}, this.tt("game.after_download.thanks_for_downloading_title")),
            w(
              {},
              this.tt("game.after_download.thanks_project_author", {
                author: this.props.user.name,
                project: i({}, this.props.game.title),
              }),
              this.props.has_more_games
                ? s(
                    {},
                    " ",
                    this.tt("game.after_download.more_from_creator", {
                      profile: n(
                        { href: this.props.user.url },
                        this.props.user.name,
                      ),
                    }),
                  )
                : void 0,
              " ",
              this.tt("game.after_download.check_popup_blocker"),
            ),
            this.props.show_ad ? R.Ads.AfterDownload({}) : void 0,
            this.props.show_app_banner && this.props.app_url
              ? w(
                  {},
                  this.tt("game.after_download.app_learn_more", {
                    s: function (f) {
                      return h({}, f);
                    },
                    a: (function (f) {
                      return function (u) {
                        return n(
                          {
                            href: f.props.app_url,
                            className: "forward_link",
                            "data-action": "download_app",
                            "data-label": "app_notice",
                          },
                          u,
                        );
                      };
                    })(this),
                  }),
                )
              : void 0,
            r(
              { className: "share_row" },
              this.props.user.follow_button
                ? R.FollowButton(this.props.user.follow_button)
                : void 0,
              this.props.share_buttons
                ? c(
                    { className: "share_links" },
                    c({ className: "icon icon-heart" }),
                    " ",
                    I.i18n.locale_is_english()
                      ? "Share this " + this.props.game.noun + ":"
                      : this.tt("game.after_download.share_this_project"),
                    R.ShareButtons(this.props.share_buttons),
                  )
                : void 0,
            ),
            this.render_jam_games() || this.render_rec_games(),
            r(
              { className: "bandwidth_row" },
              this.tt("game.after_download.powered_by", {
                s: function (f) {
                  return c({ className: "powered" }, f);
                },
                itchio_logo: g({ height: 25, src: this.props.logo_url }),
              }),
            ),
          );
        },
        render_jam_games: function () {
          if (this.props.jam_games && this.props.jam_games.length)
            return y(
              { className: "related_games" },
              l(
                {},
                this.tt("game.after_download.check_out_more_from_jam_title", {
                  jam_title: n(
                    { href: this.props.related_jam.url, target: "_blank" },
                    this.props.related_jam.title,
                  ),
                }),
              ),
              this.render_game_grid(this.props.jam_games, { show_rating: !1 }),
              this.props.related_jam.entries_url
                ? r(
                    { className: "browse_footer" },
                    n(
                      {
                        href: this.props.related_jam.entries_url,
                        className: "button outline",
                      },
                      this.tt("game.after_download.view_all_from_jam"),
                    ),
                  )
                : void 0,
            );
        },
        render_rec_games: function () {
          if (this.props.rec_games && this.props.rec_games.length)
            return y(
              { className: "related_games" },
              l(
                {},
                this.props.rec_games_title ||
                  this.tt("game.after_download.more_from_itchio_header"),
              ),
              this.render_game_grid(this.props.rec_games),
              r(
                { className: "browse_footer" },
                n(
                  { href: this.props.browse_url, className: "button outline" },
                  this.tt("game.after_download.see_everything"),
                ),
              ),
            );
        },
        render_game_grid: function (f, u) {
          return st({
            games: f,
            cell_width: 200,
            fit_rows: 3,
            enable_popups: !1,
            conversion_source: this.props.conversion_source,
            grid_referrer: this.props.grid_referrer,
            cell_props: $.extend(
              { target: "_blank", show_rating: !0, show_cell_tools: !1 },
              u,
            ),
          });
        },
      }))
    );
  });
  var Zt = null;
  C.libs.react.done(function () {
    var o, t, n, e;
    return (
      (t = L),
      (e = t.input),
      (n = t.fragment),
      (n = M.createElement.bind(null, M.Fragment)),
      (n.type = M.fragment),
      (o = A.package("Forms")),
      (Zt = o("SubmitChallenge", {
        pure: !0,
        getInitialState: function () {
          return {};
        },
        solve_deferred: function () {
          var r, i;
          return this.props.challenge === this.state.challenge
            ? this.state.deferred
            : ((r = $.Deferred()),
              (i = +new Date()),
              this.setState({
                challenge: this.props.challenge,
                solution: null,
                duration: null,
                busy: !0,
                deferred: r,
              }),
              C.solve_challenge(this.props.challenge).then(
                (function (s) {
                  return function (a) {
                    return s.setState({
                      busy: !1,
                      duration: new Date() - i,
                      solution: a,
                    });
                  };
                })(this),
              ),
              r);
        },
        render: function () {
          var r;
          return (
            (r = this.state.solution || ""),
            n(
              {},
              e({
                type: "hidden",
                name: "challenge",
                value: this.props.challenge,
              }),
              e({
                key: r,
                type: "hidden",
                name: "challenge_response",
                value: r,
                ref: (function (i) {
                  return function (s) {
                    var a;
                    if (s && i.state.solution)
                      return (a = i.state.deferred) != null
                        ? a.resolve()
                        : void 0;
                  };
                })(this),
              }),
            )
          );
        },
      }))
    );
  });
  var Ge = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h;
    return (
      (t = L),
      (s = t.form),
      (a = t.fragment),
      (l = t.h2),
      (w = t.p),
      (n = t.a),
      (i = t.div),
      (g = t.input),
      (v = t.label),
      (c = t.strong),
      (y = t.span),
      (h = t.textarea),
      (e = t.button),
      (r = t.code),
      (a = React.createElement.bind(null, React.Fragment)),
      (a.type = React.fragment),
      (o = A.package("Game")),
      (Ge = o("ReportLightbox", {
        pure: !0,
        render: function () {
          var f;
          return A.Lightbox(
            { className: this.enclosing_class_name() },
            (f = this.state) != null && f.submitted
              ? this.render_after_submit()
              : this.render_report_form(),
          );
        },
        get_report_options: function () {
          var f;
          return (
            (f = [
              ["broken", "Broken", "Doesn't run, download, or crashes"],
              ["offensive", "Offensive material"],
              ["doesnt_own", "Uploader not authorized to distribute"],
              [
                "miscategorized",
                "Miscategorized",
                "Shows up on wrong part of itch.io, incorrect tags, incorrect platforms, etc.",
              ],
              ["spam", "Spam"],
              ["other", this.tt("game.report_form.reason_other")],
            ]),
            this.props.jam &&
              f.unshift([
                "invalid_jam_submission",
                "Invalid jam submission",
                "Empty or incomplete page, breaks rules, etc.",
              ]),
            f
          );
        },
        render_report_form: function () {
          var f, u, p, d, m;
          return a(
            {},
            l(
              {},
              this.tt("game.report_form.title", {
                page_title: this.props.page_title,
              }),
            ),
            s(
              {
                className: "form",
                method: "post",
                action: this.props.submit_url,
                onSubmit: (function (b) {
                  return function (x) {
                    var k, N, B;
                    return (
                      x.preventDefault(),
                      b.setState({ errors: null, loading: !0 }),
                      (k =
                        (N = b.submit_challenge_ref) != null &&
                        (B = N.current) != null
                          ? B.solve_deferred()
                          : void 0),
                      I.remote_submit($(x.target), k).done(function (O) {
                        if (O.errors) {
                          b.setState({ loading: !1, errors: O.errors });
                          return;
                        }
                        return b.setState({
                          submitted: !0,
                          report_id: O.report_id,
                        });
                      })
                    );
                  };
                })(this),
              },
              A.CSRF({}),
              this.props.challenge
                ? A.Forms.SubmitChallenge({
                    ref:
                      this.submit_challenge_ref ||
                      (this.submit_challenge_ref = React.createRef()),
                    challenge: this.props.challenge,
                  })
                : void 0,
              this.props.support_email || this.props.support_link
                ? w(
                    { className: "support_notice" },
                    this.tt("game.report_form.support_from_creator"),
                    " ",
                    this.props.support_link
                      ? n(
                          {
                            rel: "nofollow",
                            target: "blank",
                            className: "forward_link",
                            href: this.props.support_link,
                          },
                          this.tt("game.report_form.support_page_link"),
                        )
                      : n(
                          {
                            rel: "nofollow",
                            target: "blank",
                            className: "forward_link",
                            href: "mailto:" + this.props.support_email,
                          },
                          this.tt("game.report_form.email_creator_link"),
                        ),
                  )
                : void 0,
              (f = this.state) != null && f.errors
                ? A.Forms.FormErrors({
                    errors: this.state.errors,
                    animated: !0,
                    scroll_into_view: !0,
                  })
                : void 0,
              w({}, this.tt("game.report_form.form_description")),
              this.props.jam
                ? w(
                    {},
                    "This report will be made available to hosts of ",
                    n({ href: this.props.jam.url }, this.props.jam.name),
                    ".",
                  )
                : void 0,
              i(
                { className: "input_row" },
                i(
                  { className: "label" },
                  this.tt("game.report_form.reason_label"),
                ),
                A.Forms.RadioButtons({
                  name: "report[reason]",
                  value: ((u = this.state) != null ? u.reason : void 0) || "",
                  onChange: (function (b) {
                    return function (x) {
                      return b.setState({ reason: x.target.value });
                    };
                  })(this),
                  options: this.get_report_options(),
                }),
              ),
              ((p = this.state) != null ? p.reason : void 0) === "doesnt_own"
                ? i(
                    { className: "input_row" },
                    c(
                      {},
                      "Are you the copyright owner and need to file a DMCA notice?",
                    ),
                    " ",
                    n(
                      {
                        target: "_blank",
                        href: this.props.itchio_support_url,
                        className: "forward_link",
                      },
                      "Contact our support team so we can step you through the process",
                    ),
                  )
                : void 0,
              i(
                { className: "input_row" },
                v(
                  {},
                  i(
                    { className: "label" },
                    this.tt("game.report_form.description_label"),
                    y(
                      { className: "sub" },
                      " \u2014 ",
                      this.description_description(),
                    ),
                  ),
                  h({
                    maxLength: "2048",
                    name: "report[description]",
                    required: this.description_required(),
                    placeholder: this.description_required()
                      ? this.t("misc.forms.required")
                      : this.t("misc.forms.optional"),
                  }),
                ),
              ),
              A.Forms.TextInputRow({
                title: "Your email",
                sub: "If your report needs a reply we'll use it to communicate with you",
                name: "report[email]",
                defaultValue: this.props.current_user_email,
                required: this.email_required(),
                placeholder: this.email_required()
                  ? this.t("misc.forms.required")
                  : this.t("misc.forms.optional"),
              }),
              i(
                { callback: "buttons" },
                e(
                  {
                    disabled: (d = this.state) != null ? d.loading : void 0,
                    className: classNames("button", {
                      disabled: (m = this.state) != null ? m.loading : void 0,
                    }),
                  },
                  this.tt("game.report_form.submit_report_button"),
                ),
              ),
            ),
          );
        },
        render_after_submit: function () {
          return i(
            { className: "report_submitted" },
            l({}, this.tt("game.report_form.report_received_header")),
            w(
              {},
              "You report will be reviewed shortly, and action will be taken if necessary. If you have any additional requests then you can ",
              n(
                { href: this.props.itchio_support_url, target: "_blank" },
                "contact our support team",
              ),
              ".",
            ),
            this.state.report_id
              ? w(
                  {},
                  "If you need to talk to itch.io staff about your report please use the following reference code: ",
                  r({}, c({}, "R-" + this.state.report_id)),
                  ".",
                )
              : void 0,
            w(
              {},
              e(
                {
                  type: "button",
                  className: "textlike",
                  onClick: (function (f) {
                    return function (u) {
                      return I.Lightbox.close();
                    };
                  })(this),
                },
                this.tt("misc.lightboxes.close"),
              ),
            ),
          );
        },
        description_description: function () {
          var f;
          switch ((f = this.state) != null ? f.reason : void 0) {
            case "broken":
              return "Please explain what is broken. Include how you tried to run the project, what operating system or browser you're using, and any error messages you saw. We will share your error with the creator to help them fix the issue.";
            case "invalid_jam_submission":
              return "Please explain why this submission should be disqualified or removed";
            case "miscategorized":
              return "Please explain how this project should be categorized.";
            default:
              return "Please provide a summary of your report";
          }
        },
        description_required: function () {
          var f, u;
          return (
            (f = (u = this.state) != null ? u.reason : void 0) === "broken" ||
            f === "miscategorized" ||
            f === "other" ||
            f === "invalid_jam_submission"
          );
        },
        email_required: function () {
          var f, u;
          return (
            (f = (u = this.state) != null ? u.reason : void 0) === "broken" ||
            f === "doesnt_own"
          );
        },
      }))
    );
  });
  var ut = null,
    lt = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h, f, u, p, d, m, b;
    return (
      (t = L),
      (p = t.span),
      (l = t.fragment),
      (y = t.p),
      (d = t.strong),
      (n = t.a),
      (g = t.h2),
      (u = t.section),
      (v = t.h3),
      (b = t.ul),
      (w = t.li),
      (c = t.pre),
      (r = t.button),
      (a = t.div),
      (i = t.code),
      (l = React.createElement.bind(null, React.Fragment)),
      (l.type = React.fragment),
      (o = A.package("Game")),
      (s = L.details),
      (m = L.summary),
      (e = L.abbr),
      (f = function (x) {
        return e(
          { title: x, className: "datetime" },
          p({ className: "icon icon-stopwatch", "aria-hidden": "true" }),
          " ",
          se(x),
        );
      }),
      (h = function (x) {
        return (
          x == null && (x = {}),
          l(
            {},
            y(
              {},
              d(
                {},
                "Our system has flagged this page for additional review due to potential suspicious behavior from the page owner. ",
              ),
            ),
            y(
              {},
              "If someone has asked you to download from this page and you don't fully trust them, or their behavior isn't what you recognize, then we don't recommend downloading this file until our team has reviewed the page.",
            ),
            x.password_protected
              ? y(
                  {},
                  "Password-protecting files or pages is a technique often used by scammers in an attempt to block virus and other security scans from detecting malware. Do not trust password-protected files unless you fully trust the uploader.",
                )
              : void 0,
            y(
              {},
              n(
                {
                  href: "https://itch.io/t/1659440/psa-beware-discord-scammers",
                  className: "forward_link",
                  target: "_blank",
                },
                'Learn more about the "Try my game" Discord scam',
              ),
            ),
          )
        );
      }),
      (lt = o("QuarantineLinkLightbox", {
        pure: !0,
        render: function () {
          return A.Lightbox(
            {
              className: H(
                this.enclosing_class_name(),
                "game_quarantine_lightbox_widget",
              ),
            },
            g({}, "WARNING: This Link Has Been Quarantined"),
            h(),
            u(
              {},
              v({}, "Page and Account Details"),
              b(
                { className: "account_summary" },
                this.props.suspicious_access
                  ? w(
                      {},
                      p({ className: "icon icon-warning" }),
                      " ",
                      "Account shows suspicious activity",
                    )
                  : void 0,
                w({}, "Page created ", f(this.props.game_created_at)),
              ),
            ),
            s(
              {},
              m({}, "I understand the risks, let me access anyway..."),
              y(
                {},
                "You can access the link by copy and pasting into your browser.",
              ),
              c({}, this.props.link_url),
            ),
            y(
              { className: "buttons" },
              this.props.report_url
                ? l(
                    {},
                    r(
                      {
                        type: "button",
                        className: "button",
                        onClick: this.report_page,
                      },
                      "Report this page",
                    ),
                    " ",
                  )
                : void 0,
              r(
                { type: "button", className: "button outline close_btn" },
                "Close",
              ),
            ),
          );
        },
        report_page: function () {
          if (this.props.report_url)
            return j.open_remote_react(this.props.report_url, function (x) {
              return Ge(x);
            });
        },
      })),
      (ut = o("QuarantineLightbox", {
        pure: !0,
        render: function () {
          return A.Lightbox(
            { className: this.enclosing_class_name() },
            g({}, "WARNING: This Page Has Been Quarantined"),
            h({ password_protected: !0 }),
            u(
              {},
              v({}, "Page and Account Details"),
              b(
                { className: "account_summary" },
                w({}, "Page created ", f(this.props.game_created_at)),
                w({}, "Account created ", f(this.props.user_created_at)),
                this.props.user_email_verified
                  ? void 0
                  : w({}, "Account's email is not verified"),
                this.props.user_email_invalid
                  ? w(
                      {},
                      p({ className: "icon icon-warning" }),
                      " ",
                      "Account may have fake email address",
                    )
                  : void 0,
                this.props.user_recent_countries
                  ? w(
                      {},
                      "Regions this account has connected from: ",
                      d(
                        {},
                        new Intl.ListFormat("en").format(
                          this.props.user_recent_countries,
                        ),
                      ),
                    )
                  : void 0,
              ),
            ),
            s(
              {},
              m({}, "I understand the risks, let me download anyway..."),
              a(
                { className: "download_row" },
                r(
                  {
                    type: "button",
                    className: "button",
                    onClick: this.force_download,
                  },
                  "Download ",
                  this.props.upload.name
                    ? i({}, this.props.upload.name)
                    : void 0,
                  this.props.upload.size
                    ? p(
                        { className: "upload_size" },
                        " (" + I.format_bytes(this.props.upload.size) + ")",
                      )
                    : void 0,
                ),
                " Uploaded ",
                f(this.props.upload.created_at),
              ),
            ),
            y(
              { className: "buttons" },
              r(
                {
                  type: "button",
                  className: "button",
                  onClick: this.report_page,
                },
                "Report this page",
              ),
              " ",
              r(
                { type: "button", className: "button outline close_btn" },
                "Close",
              ),
            ),
          );
        },
        report_page: function () {
          return j.open_remote_react(this.props.report_url, function (x) {
            return Ge(x);
          });
        },
        force_download: function () {
          return this.props.on_force_download
            ? this.props.on_force_download()
            : ((I.bypass_quarantine = !0), j.close());
        },
      }))
    );
  });
  var me = null;
  C.libs.react.done(function () {
    var o, t;
    return (
      (o = L),
      (t = o.img),
      (me = function (n) {
        var e, r, i, s, a;
        return (
          n == null && (n = {}),
          (a = (r = n.width) != null ? r : 24),
          (e = (i = n.height) != null ? i : a),
          M.createElement(
            "svg",
            {
              className: "svgicon icon_close",
              strokeLinecap: "round",
              stroke: "currentColor",
              role: "img",
              version: "1.1",
              viewBox: "0 0 24 24",
              strokeWidth: (s = n.stroke_width) != null ? s : "2",
              width: a,
              height: e,
              strokeLinejoin: "round",
              "aria-hidden": !0,
              fill: "none",
            },
            M.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            M.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          )
        );
      }),
      (me = M.createElement.bind(null, M.memo(me)))
    );
  });
  var ne = null,
    ge = null,
    W = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a;
    return (
      (o = L),
      (t = o.a),
      (r = o.div),
      (n = o.button),
      (s = o.label),
      (i = o.h2),
      (a = o.p),
      (e = null),
      (W = function (l) {
        return l.promise
          ? (I.Lightbox.open_loading(),
            l.then(
              (function (g) {
                return function (v) {
                  return I.Lightbox.open(v);
                };
              })(this),
            ))
          : I.Lightbox.open(l);
      }),
      (ne = A.component("Lightbox", {
        is_modal_dialog: function () {
          var l;
          return (
            (l = document.getElementById("lightbox_container")),
            l != null ? l.contains(this.container_ref.current) : void 0
          );
        },
        getInitialState: function () {
          return {};
        },
        componentDidMount: function () {
          if (this.is_modal_dialog())
            return (
              e
                ? console.warn("A dialog already has the focus trap")
                : ((this.detect_focus = (function (l) {
                    return function (g) {
                      var v;
                      if (
                        ((v = l.container_ref.current),
                        v &&
                          "contains" in v &&
                          !(v === g.target || v.contains(g.target)))
                      )
                        return v.focus();
                    };
                  })(this)),
                  $(document.body).on("focusin", this.detect_focus),
                  (e = this)),
              this.setState(
                {
                  previously_focused: document.activeElement,
                  is_modal_dialog: !0,
                },
                function () {
                  return _.defer(
                    (function (l) {
                      return function () {
                        var g;
                        return (g = l.container_ref.current) != null
                          ? g.focus()
                          : void 0;
                      };
                    })(this),
                  );
                },
              )
            );
        },
        componentWillUnmount: function () {
          var l;
          return (
            this.detect_focus &&
              ($(document.body).off("focusin", this.detect_focus),
              (e = null),
              delete this.detect_focus),
            (l = this.state.previously_focused) != null ? l.focus() : void 0
          );
        },
        close: function () {
          return I.Lightbox.close();
        },
        render: function () {
          return r(
            {
              className: classNames("lightbox", this.props.className),
              style: this.props.style,
              role: this.state.is_modal_dialog ? "dialog" : void 0,
              "aria-modal": this.state.is_modal_dialog ? "true" : void 0,
              tabIndex: this.state.is_modal_dialog ? -1 : void 0,
              ref:
                this.container_ref || (this.container_ref = React.createRef()),
            },
            this.props.close !== !1
              ? n(
                  {
                    className: "close_button",
                    type: "button",
                    "aria-label": "Close Dialog",
                  },
                  me({ width: 18 }),
                )
              : void 0,
            this.props.children,
          );
        },
      })),
      (ge = A.component("ErrorLightbox", {
        propTypes: { title: T.string, errors: T.array.isRequired },
        render: function () {
          return ne(
            { className: classNames(this.enclosing_class_name(), "compact") },
            i({}, this.props.title || this.tt("misc.lightboxes.error_title")),
            A.Forms.FormErrors({ title: !1, errors: this.props.errors }),
            a(
              { className: "buttons" },
              n(
                {
                  className: "button",
                  type: "button",
                  onClick: (function (l) {
                    return function () {
                      return I.Lightbox.close();
                    };
                  })(this),
                },
                "Close",
              ),
            ),
          );
        },
      }))
    );
  });
  var er = function (o) {
      return (
        (o = $(o)),
        o.on(
          "click",
          "button.embed_preload[itchio][data-embed_code]",
          (function (t) {
            return function (n) {
              var e, r;
              return (
                (e = $(n.currentTarget)),
                (r = e.data("embed_code")),
                e.replaceWith(r)
              );
            };
          })(this),
        )
      );
    },
    tr = function (o, t, n) {
      return (
        n == null && (n = {}),
        C.proxy_downloads && (n.proxy = !0),
        $.when(
          $.ajax({
            url: "/" + o + "/file/" + t + "?" + $.param(n),
            type: "post",
            data: C.with_csrf(),
          }),
          C.add_react(),
        ).then(
          (function (e) {
            return function (r) {
              var i, s;
              return (
                (s = r[0]),
                s.errors
                  ? ((i = s.errors.join(",")),
                    C.event("game_download", "error", i),
                    W(ge({ errors: s.errors })),
                    $.Deferred().reject(s))
                  : s
              );
            };
          })(this),
        )
      );
    },
    rr = function (o) {
      return o.url
        ? (U.defer(
            (function (t) {
              return function () {
                var n, e;
                if (o.external) {
                  window.open(o.url);
                  return;
                }
                return (
                  (n = window.location.protocol.match(/^https\b/i)),
                  (e = n && !o.url.match(/^https\b/i)),
                  e
                    ? (window.location = o.url)
                    : C.is_ios()
                    ? window.open(o.url)
                    : $(
                        '<iframe frameborder="0" style="width: 0; height: 0; visibility: hidden;"></iframe>',
                      )
                        .attr("src", o.url)
                        .appendTo(document.body)
                );
              };
            })(this),
          ),
          !0)
        : !1;
    },
    ve = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    be = function (o, t) {
      for (var n in t) nr.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    nr = {}.hasOwnProperty;
  (I.ViewGame = (function () {
    o.current = $.Deferred();
    function o(t, n) {
      var e, r;
      (this.opts = n),
        (this.setup_hiding = ve(this.setup_hiding, this)),
        (this.setup_buy_on_top = ve(this.setup_buy_on_top, this)),
        (this.register_play = ve(this.register_play, this)),
        (this.download_upload = ve(this.download_upload, this)),
        (this.el = $(t)),
        (this.game = this.opts.game),
        er(this.el.find(".formatted_description")),
        I.event2("view game", {
          type: this.game.type_name,
          paid: this.game.actual_price > 0,
        }),
        I.ViewGame.current.resolve(this),
        this.opts.queue_url &&
          (r = window.parent) != null &&
          r.postMessage(
            { page_url: window.location.href, queue_url: this.opts.queue_url },
            "*",
          ),
        I.tracked_links($(".jam_banner"), "view_game", "jam_banner"),
        (e = $(".devlog_banner")
          .find("form")
          .remote_submit(
            (function (i) {
              return function (s) {
                return e.end().slideUp("fast");
              };
            })(this),
            null,
            [{ name: "json", value: "1" }],
          )),
        this.setup_uploads(),
        this.setup_buy_on_top(),
        this.setup_quarantine_links(),
        I.tracked_links(this.el, "view_game", "main_column"),
        this.game.hit_url && $.get(this.game.hit_url),
        this.game.play_url && this.register_play(),
        this.el.on(
          "click mouseup",
          ".launch_btn[data-rp]",
          (function (i) {
            return function (s) {
              var a, l;
              if (
                ((a = $(s.currentTarget)),
                (l = a.data("rp")) &&
                  (a.data("rp", null),
                  !(
                    typeof navigator != "undefined" &&
                    navigator !== null &&
                    typeof navigator.sendBeacon == "function" &&
                    navigator.sendBeacon(l)
                  )))
              )
                return $.get(l);
            };
          })(this),
        ),
        this.el.dispatch("click", {
          add_to_collection_btn: (function (i) {
            return function (s) {
              return I.is_mobile() || !I.current_user
                ? "continue"
                : j.open_remote(s.attr("href"), ie);
            };
          })(this),
          toggle_info_btn: (function (i) {
            return function (s) {
              return (
                s.closest(".more_information_toggle").toggleClass("open"),
                i.el.find(".info_panel_wrapper").slideToggle()
              );
            };
          })(this),
          direct_download_btn: (function (i) {
            return function (s) {
              if (i.opts.generate_download_url)
                return $.ajax({
                  url: i.opts.generate_download_url,
                  type: "POST",
                  xhrFields: { withCredentials: !0 },
                  data: I.with_csrf({}),
                  success: function (a) {
                    if (a.url) return (window.top.location = a.url);
                  },
                });
            };
          })(this),
          download_btn: (function (i) {
            return function (s) {
              var a;
              return (
                (a = {}),
                s.closest(".for_demo").length ||
                  (a.after_download_lightbox = !0),
                i.download_upload(s.data("upload_id"), a)
              );
            };
          })(this),
          buy_btn: (function (i) {
            return function (s) {
              return (
                I.event("view_game", "buy", "" + i.game.id),
                I.is_mobile()
                  ? (s.attr(
                      "href",
                      I.add_params(s.attr("href"), { initiator: "mobile" }),
                    ),
                    "continue")
                  : j.open_remote(s.attr("href"), Me, i.game, { is_donate: !1 })
              );
            };
          })(this),
          reward_btn: (function (i) {
            return function (s) {
              var a, l, g;
              return (
                I.event("view_game", "buy_reward", "" + i.game.id),
                (g = s.attr("href")),
                (l = s.closest(".reward_footer")),
                (a = l.find(".quantity_input")),
                a && (g = I.add_params(g, { quantity: a.val() })),
                j.open_remote(g, Me, i.game, { is_donate: !1 })
              );
            };
          })(this),
          donate_btn: (function (i) {
            return function (s) {
              return (
                I.event("view_game", "donate", "" + i.game.id),
                I.is_mobile()
                  ? (s.attr(
                      "href",
                      I.add_params(s.attr("href"), { initiator: "mobile" }),
                    ),
                    "continue")
                  : j.open_remote(s.attr("href"), Me, i.game, {
                      is_donate: s.data("donate"),
                    })
              );
            };
          })(this),
        }),
        (this.image_viewer = new I.ImageViewer(t)),
        this.setup_referrer(),
        this.opts.first_view &&
          j.open_tpl("first_game_lightbox", I.FirstGameLightbox),
        this.opts.show_spam_warning &&
          j.open_tpl("spam_warning_lightbox", I.SpamWarningLightbox);
    }
    return (
      (o.prototype.setup_quarantine_links = function () {
        if (this.opts.quarantine_links)
          return this.el.on(
            "click auxclick",
            ".formatted_description a[rel*=nofollow]",
            (function (t) {
              return function (n) {
                var e;
                return (
                  n.preventDefault(),
                  (e = $(n.currentTarget).attr("href")),
                  I.add_react().then(function () {
                    return W(
                      lt(
                        Object.assign({ link_url: e }, t.opts.quarantine_links),
                      ),
                    );
                  })
                );
              };
            })(this),
          );
      }),
      (o.prototype.download_upload = function (t, n) {
        var e;
        return (
          (e = $.extend({ source: "view_game", as_props: "1" }, n)),
          I.bypass_quarantine && (e.bypass_quarantine = !0),
          tr(this.game.slug, t, e).then(
            (function (r) {
              return function (i) {
                if (i.lightbox)
                  switch (i.lightbox_type) {
                    case "QuarantineLightbox":
                      W(
                        ut(
                          $.extend(
                            {
                              on_force_download: function () {
                                return r.download_upload(
                                  t,
                                  $.extend({}, n, { bypass_quarantine: !0 }),
                                );
                              },
                            },
                            i.lightbox,
                          ),
                        ),
                      );
                      break;
                    default:
                      W(at(i.lightbox));
                  }
                if (rr(i))
                  return (
                    I.event("view_game", "download", "" + r.game.id),
                    Q.download("1:" + r.game.id),
                    Q.flush_now()
                  );
              };
            })(this),
          )
        );
      }),
      (o.prototype.register_play = function () {
        return window.setTimeout(
          (function (t) {
            return function () {
              return $.get(t.game.play_url);
            };
          })(this),
          (this.game.play_after + 3) * 1e3,
        );
      }),
      (o.prototype.setup_buy_on_top = function () {
        var t;
        if (
          ((t = this.el.find(".formatted_description").outerHeight(!0)),
          t < $(window).height() - 100)
        )
          return this.el.removeClass("buy_on_top");
      }),
      (o.prototype.setup_uploads = function () {
        var t, n, e, r, i, s;
        for (
          this.uploads = this.el.find(".uploads"),
            r = this.uploads.find(".upload"),
            i = [],
            n = 0,
            e = r.length;
          n < e;
          n++
        )
          (t = r[n]),
            (s = $(t).find(".file_size_value")),
            i.push(s.html(I.format_bytes(parseInt(s.html()))));
        return i;
      }),
      (o.prototype.setup_hiding = function (t) {
        return (
          $(document.body).on(
            "i:lightbox_open",
            (function (n) {
              return function () {
                return $(t).css({ visibility: "hidden" });
              };
            })(this),
          ),
          $(document.body).on(
            "i:lightbox_close",
            (function (n) {
              return function () {
                return $(t).css({ visibility: "visible" });
              };
            })(this),
          )
        );
      }),
      (o.prototype.fit_to_width = function (t) {
        if (t > 920)
          return this.opts.responsive || I.is_mobile()
            ? $("#inner_column").css({ width: "auto", maxWidth: t + "px" })
            : $("#inner_column").css({ width: t + "px", maxWidth: t + "px" });
      }),
      (o.prototype.setup_referrer = function () {
        var t, n;
        if (
          !ae.has_ref("game", this.game.id) &&
          ((t = $(document.body).data("host")),
          (n = document.referrer),
          !!n && !(n.indexOf(t) >= 0))
        )
          return ae.push("game", this.game.id, "game:" + n);
      }),
      o
    );
  })()),
    (I.ViewFlashGame = (function (o) {
      be(t, o);
      function t(n, e) {
        t.__super__.constructor.call(this, n, e),
          (this.swf = e.embed_data),
          this.embed_game(),
          this.setup_hiding("#swf_drop");
      }
      return (
        (t.prototype.get_size = function (n) {
          return $.get(
            "/" + this.game.slug + "/swf_size/" + this.swf.id,
            (function (e) {
              return function (r) {
                return (
                  (e.swf.data.swf = r.swf),
                  typeof n == "function" ? n() : void 0
                );
              };
            })(this),
          );
        }),
        (t.prototype.embed_game = function (n) {
          var e, r, i, s;
          if (this.swf)
            return !this.swf.data.swf && !n
              ? this.get_size(
                  (function (a) {
                    return function () {
                      return a.embed_game(!0);
                    };
                  })(this),
                )
              : ((i = this.swf.data.swf),
                (s = i.width),
                (r = i.height),
                (e = window.swfobject.getFlashPlayerVersion()),
                (e != null ? e.major : void 0) === 0 &&
                !window.location.hash.match(/\bforce_flash\b/)
                  ? (this.el.addClass("ready no_flash"),
                    $(document.body).addClass("embed_disabled"))
                  : (window.swfobject.embedSWF(
                      this.swf.url,
                      "swf_drop",
                      s,
                      r,
                      "11.0.0",
                      !1,
                      {},
                      { wmode: "direct", allowfullscreen: "true" },
                    ),
                    (this.swf_drop = $("#swf_drop")),
                    this.swf_drop.parent().width(s).height(r),
                    this.fit_to_width(s),
                    this.el.addClass("ready")));
        }),
        t
      );
    })(I.ViewGame)),
    (I.ViewUnityGame = (function (o) {
      be(t, o);
      function t(n, e) {
        t.__super__.constructor.call(this, n, e),
          (this.unity = e.embed_data),
          this.embed_game(),
          this.setup_hiding("#unity_drop embed");
      }
      return (
        (t.prototype.embed_game = function () {
          var n, e, r, i;
          if (this.unity)
            return (
              (n = $("#unity_drop")),
              (i = n.width()),
              i > 920 && $("#inner_column").width(i + 40),
              (r = new window.UnityObject2({
                params: { disableContextMenu: !0 },
              })),
              (e = _.once(function (s) {
                return I.event("view_game", "unity", "" + s);
              })),
              r.observeProgress(
                (function (s) {
                  return function (a) {
                    return (
                      e(a.pluginStatus),
                      a.pluginStatus === "unsupported"
                        ? (n.width("").height(""),
                          $("#inner_column").width(""),
                          s.el.addClass("unity_unsupported"))
                        : $(document.body).removeClass("responsive")
                    );
                  };
                })(this),
              ),
              r.initPlugin(n[0], this.unity.url)
            );
        }),
        t
      );
    })(I.ViewGame)),
    (I.ViewJavaGame = (function (o) {
      be(t, o);
      function t(n, e) {
        t.__super__.constructor.call(this, n, e),
          (this.jar = e.embed_data),
          this.setup_hiding("#jar_drop applet");
      }
      return t;
    })(I.ViewGame)),
    (I.ViewHtmlGame = (function (o) {
      be(t, o);
      function t() {
        return t.__super__.constructor.apply(this, arguments);
      }
      return t;
    })(I.ViewGame)),
    I.libs.react.done(function () {
      var o, t, n, e, r, i, s, a, l, g, v, w, y, c;
      return (
        (t = L),
        (g = t.option),
        (r = t.div),
        (n = t.a),
        (a = t.fragment),
        (w = t.strong),
        (y = t.textarea),
        (v = t.span),
        (s = t.form),
        (i = t.em),
        (l = t.input),
        (e = t.button),
        (a = React.createElement.bind(null, React.Fragment)),
        (a.type = React.fragment),
        (o = R.package("Admin")),
        (c = PropTypes),
        o("RemoteDataList", {
          componentDidMount: function () {
            return $.ajax({
              url: this.props.url,
              dataType: "json",
              xhrFields: { withCredentials: !0 },
            }).done(
              (function (h) {
                return function (f) {
                  return h.setState(f);
                };
              })(this),
            );
          },
          render: function () {
            var h;
            return (h = this.state) != null && h.tag_slugs
              ? React.createElement(
                  "datalist",
                  { id: this.props.id },
                  this.state.tag_slugs.map(
                    (function (f) {
                      return function (u) {
                        return g({ key: u, value: u });
                      };
                    })(this),
                  ),
                )
              : null;
          },
        }),
        o("TagEditor", {
          getInitialState: function () {
            return {
              closed: !1,
              featured_tags: this.props.featured_tags,
              tags: this.props.tags,
            };
          },
          update_from_res: function (h) {
            if (h.errors) {
              this.setState({ errors: h.errors });
              return;
            }
            return (
              h.featured_tags || (h.featured_tags = []),
              h.tags || (h.tags = []),
              this.setState(h)
            );
          },
          feature_tag: function (h, f) {
            return (
              f == null && (f = "add"),
              this.setState({ errors: null }),
              $.ajax({
                url: this.props.submit_url,
                type: "post",
                dataType: "json",
                xhrFields: { withCredentials: !0 },
                data: I.with_csrf({ action: f, tag_slug: h }),
              }).done(this.update_from_res)
            );
          },
          render_queue: function () {
            var h, f;
            return (
              (h =
                ((f = this.props.queue_rating) != null ? f.rating : void 0) ||
                "unrated"),
              r(
                {
                  className: classNames("queue_status", h, {
                    unrated: !this.props.queue_rating,
                  }),
                },
                n({ href: this.props.queue_url }, h),
              )
            );
          },
          render_suggested_tweet: function () {
            if (this.props.suggested_tweet)
              return a(
                {},
                React.createElement("hr", {}),
                React.createElement(
                  "details",
                  {},
                  React.createElement("summary", {}, w({}, "Tweet builder")),
                  y({
                    className: "tweet_preview",
                    defaultValue: this.props.suggested_tweet,
                  }),
                  v({}, "Len: " + this.props.suggested_tweet.length),
                  this.props.cover_url
                    ? r({}, n({ href: this.props.cover_url }, "Original cover"))
                    : void 0,
                ),
              );
          },
          has_featured_tag: function (h) {
            var f, u, p, d;
            if (!this.state.featured_tags) return !1;
            for (p = this.state.featured_tags, f = 0, u = p.length; f < u; f++)
              if (((d = p[f]), d.tag_slug === h)) return !0;
            return !1;
          },
          render: function () {
            var h, f, u;
            return this.state.closed
              ? null
              : this.enclose(
                  {},
                  this.state.errors
                    ? r(
                        { className: "form_errors" },
                        this.state.errors.join(", "),
                      )
                    : void 0,
                  this.render_queue(),
                  r(
                    { className: "panel_inside" },
                    w({}, "User tags"),
                    (h = this.state.tags) != null && h.length
                      ? ((u = {}),
                        this.state.tags.map(
                          (function (p) {
                            return function (d) {
                              if (!u[d.tag_slug])
                                return (
                                  (u[d.tag_slug] = !0),
                                  r(
                                    { className: "tag_row", key: d.tag_slug },
                                    r(
                                      {},
                                      n(
                                        { href: d.url },
                                        d.featured
                                          ? w({}, d.tag_slug)
                                          : d.tag_slug,
                                      ),
                                      p.has_featured_tag(d.tag_slug)
                                        ? " \u2611"
                                        : a(
                                            {},
                                            " (",
                                            n(
                                              {
                                                href: "#",
                                                className: "feature_tag_btn",
                                                onClick: function (m) {
                                                  return (
                                                    m.preventDefault(),
                                                    p.feature_tag(d.tag_slug)
                                                  );
                                                },
                                              },
                                              "add",
                                            ),
                                            ")",
                                          ),
                                    ),
                                  )
                                );
                            };
                          })(this),
                        ))
                      : r({ className: "tag_row" }, i({}, "None")),
                    React.createElement("hr", {}),
                    w({}, "Featured tags"),
                    s(
                      {
                        method: "POST",
                        action: this.props.submit_url,
                        className: "new_tag_form",
                        onSubmit: (function (p) {
                          return function (d) {
                            return (
                              d.preventDefault(),
                              I.remote_submit($(d.target))
                                .done(p.update_from_res)
                                .done(function () {
                                  var m;
                                  return (m = p.tag_input_ref.current) != null
                                    ? (m.value = "")
                                    : void 0;
                                })
                            );
                          };
                        })(this),
                      },
                      R.CSRF({}),
                      l({ type: "hidden", name: "action", value: "add" }),
                      l({
                        ref:
                          this.tag_input_ref ||
                          (this.tag_input_ref = React.createRef()),
                        onMouseEnter: (function (p) {
                          return function () {
                            if (!p.state.focused)
                              return p.setState({ focused: !0 });
                          };
                        })(this),
                        onFocus: (function (p) {
                          return function () {
                            if (!p.state.focused)
                              return p.setState({ focused: !0 });
                          };
                        })(this),
                        type: "text",
                        name: "tag_slug",
                        list: "tag-options",
                      }),
                      this.state.focused
                        ? o.RemoteDataList({
                            url: this.props.submit_url,
                            id: "tag-options",
                          })
                        : void 0,
                      e({}, "Add"),
                    ),
                    (f = this.state.featured_tags) != null
                      ? f.map(
                          (function (p) {
                            return function (d) {
                              return r(
                                { className: "tag_row", key: d.tag_slug },
                                r(
                                  {},
                                  n({ href: d.url }, d.tag_slug),
                                  " (",
                                  n(
                                    {
                                      href: "#",
                                      className: "feature_tag_btn",
                                      onClick: function (m) {
                                        return (
                                          m.preventDefault(),
                                          p.feature_tag(d.tag_slug, "delete")
                                        );
                                      },
                                    },
                                    "remove",
                                  ),
                                  ")",
                                ),
                              );
                            };
                          })(this),
                        )
                      : void 0,
                    this.render_suggested_tweet(),
                  ),
                  e(
                    {
                      className: "close_btn",
                      onClick: (function (p) {
                        return function () {
                          return p.setState({ closed: !0 });
                        };
                      })(this),
                    },
                    "\xD7",
                  ),
                );
          },
        })
      );
    });
  var ir = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    or = function (o, t) {
      for (var n in t) sr.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    sr = {}.hasOwnProperty;
  I.CommunityArchiveTopicLightbox = (function (o) {
    or(t, o);
    function t() {
      return (
        (this.init = ir(this.init, this)),
        t.__super__.constructor.apply(this, arguments)
      );
    }
    return (
      (t.prototype.init = function () {
        var n;
        return (
          this.with_redactor(
            (function (e) {
              return function () {
                return re(e.el.find("textarea"), {
                  minHeight: 100,
                  source: !1,
                });
              };
            })(this),
          ),
          (n = this.el.find("form").remote_submit(
            (function (e) {
              return function (r) {
                if ((n.set_form_errors(r.errors), !r.errors))
                  return window.location.reload();
              };
            })(this),
          ))
        );
      }),
      t
    );
  })(I.Lightbox);
  var ar = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    ur = function (o, t) {
      for (var n in t) lr.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    lr = {}.hasOwnProperty;
  (I.CommunityBanLightbox = (function (o) {
    ur(t, o);
    function t() {
      return (
        (this.init = ar(this.init, this)),
        t.__super__.constructor.apply(this, arguments)
      );
    }
    return (
      (t.prototype.init = function () {
        var n;
        return (
          this.with_redactor(
            (function (e) {
              return function () {
                return re(e.el.find("textarea"), {
                  minHeight: 100,
                  source: !1,
                });
              };
            })(this),
          ),
          (n = this.el.find("form").remote_submit(
            (function (e) {
              return function (r) {
                if ((n.set_form_errors(r.errors), !r.errors))
                  return e.el.addClass("after_ban");
              };
            })(this),
          ))
        );
      }),
      t
    );
  })(I.Lightbox)),
    (I.CommunityCategoryBans = (function () {
      function o(t) {
        (this.el = $(t)),
          this.el.remote_link(
            (function (n) {
              return function (e) {
                if (e.errors) {
                  alert(
                    e.errors.join(`
`),
                  );
                  return;
                }
                return window.location.reload();
              };
            })(this),
          );
      }
      return o;
    })()),
    (I.CommunityProfile = (function () {
      function o(t, n) {
        var e;
        (this.el = $(t)),
          new I.FilterPickers(this.el),
          (this.carousels = function () {
            var r, i, s, a;
            for (
              s = this.el.find(".game_carousel_widget"),
                a = [],
                r = 0,
                i = s.length;
              r < i;
              r++
            )
              (e = s[r]), a.push(new I.GameCarousel($(e)));
            return a;
          }.call(this)),
          new I.CommunityViewTopic(this.el.find(".recent_posts"), n);
      }
      return o;
    })()),
    (I.CommunityEditCategory = (function () {
      function o(t) {
        var n;
        (this.el = $(t)),
          (n = this.el.find("form").remote_submit(
            (function (e) {
              return function (r) {
                if (r.errors) {
                  n.set_form_errors(r.errors);
                  return;
                }
                if (r.redirect_to) return (window.location = r.redirect_to);
              };
            })(this),
          ));
      }
      return o;
    })()),
    (I.GameCommunityCategory = (function () {
      function o(t) {
        var n;
        (this.el = $(t)),
          (n = this.el.find(".blog_post_grid_widget")),
          n.lazy_images({ horizontal: !0, target: n });
      }
      return o;
    })()),
    (I.GameCommunityHeader = (function () {
      function o(t) {
        (this.el = X(t)),
          this.el.dispatch("click", {
            add_to_collection_btn: (function (n) {
              return function (e) {
                return I.current_user
                  ? j.open_remote(e.attr("href"), ie)
                  : "continue";
              };
            })(this),
          });
      }
      return o;
    })());
  var cr = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    pr = function (o, t) {
      for (var n in t) dr.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    dr = {}.hasOwnProperty;
  I.CommunityLockTopicLightbox = (function (o) {
    pr(t, o);
    function t() {
      return (
        (this.init = cr(this.init, this)),
        t.__super__.constructor.apply(this, arguments)
      );
    }
    return (
      (t.prototype.init = function () {
        var n;
        return (
          this.with_redactor(
            (function (e) {
              return function () {
                return re(e.el.find("textarea"), {
                  minHeight: 100,
                  source: !1,
                });
              };
            })(this),
          ),
          (n = this.el.find("form").remote_submit(
            (function (e) {
              return function (r) {
                if ((n.set_form_errors(r.errors), !r.errors))
                  return window.location.reload();
              };
            })(this),
          ))
        );
      }),
      t
    );
  })(I.Lightbox);
  var ct = We(Xe()),
    Or = (function () {
      function o(t, n) {
        var e;
        this.el = $(t);
        try {
          this.el
            .find("input[name=offset]")
            .val(new Date().getTimezoneOffset());
        } catch (r) {}
        this.set_fingerprint(),
          (e = this.el.find("form").remote_submit(
            (function (r) {
              return function (i) {
                if (i.redirect_to) {
                  window.location = i.redirect_to;
                  return;
                }
                if (i.errors) {
                  if (I.add_recaptcha_if_necessary(e, i.errors)) return;
                  e.set_form_errors(i.errors);
                }
              };
            })(this),
          )),
          e.on(
            "submit",
            (function (r) {
              return function () {
                return e.set_form_errors([]);
              };
            })(this),
          );
      }
      return (
        (o.prototype.set_fingerprint = function () {
          return ct.default
            ? ((this.set_fingerprint = function () {}),
              new ct.default().get(
                (function (t) {
                  return function (n) {
                    if (n) return t.el.find("input[name=bfp]").val(n);
                  };
                })(this),
              ))
            : !1;
        }),
        o
      );
    })(),
    jr = (function () {
      function o(t, n) {
        var e;
        n == null && (n = {}),
          (this.el = $(t)),
          (e = this.el.find("form").remote_submit(
            (function (r) {
              return function (i) {
                if (i.redirect_to) {
                  window.location = i.redirect_to;
                  return;
                }
                if (i.errors) {
                  if (I.add_recaptcha_if_necessary(e, i.errors)) return;
                  e.set_form_errors(i.errors);
                  return;
                }
                if (i.flash) return I.flash(i.flash);
              };
            })(this),
          ));
      }
      return o;
    })(),
    hr = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    fr = function (o, t) {
      for (var n in t) _r.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    _r = {}.hasOwnProperty;
  I.CommunityReportPostLightbox = (function (o) {
    fr(t, o);
    function t() {
      return (
        (this.init = hr(this.init, this)),
        t.__super__.constructor.apply(this, arguments)
      );
    }
    return (
      (t.prototype.init = function () {
        var n;
        return (n = this.el.find("form").remote_submit(
          (function (e) {
            return function (r) {
              if (r.errors) {
                n.set_form_errors(r.errors);
                return;
              }
              return e.el.addClass("submitted_report");
            };
          })(this),
        ));
      }),
      t
    );
  })(I.Lightbox);
  var mr = function (o, t) {
      return function () {
        return o.apply(t, arguments);
      };
    },
    gr = function (o, t) {
      for (var n in t) vr.call(t, n) && (o[n] = t[n]);
      function e() {
        this.constructor = o;
      }
      return (
        (e.prototype = t.prototype),
        (o.prototype = new e()),
        (o.__super__ = t.prototype),
        o
      );
    },
    vr = {}.hasOwnProperty;
  I.CommunityStickTopicLightbox = (function (o) {
    gr(t, o);
    function t() {
      return (
        (this.init = mr(this.init, this)),
        t.__super__.constructor.apply(this, arguments)
      );
    }
    return (
      (t.prototype.init = function () {
        var n;
        return (
          this.with_redactor(
            (function (e) {
              return function () {
                return re(e.el.find("textarea"), {
                  minHeight: 100,
                  source: !1,
                });
              };
            })(this),
          ),
          (n = this.el.find("form").remote_submit(
            (function (e) {
              return function (r) {
                if ((n.set_form_errors(r.errors), !r.errors))
                  return window.location.reload();
              };
            })(this),
          ))
        );
      }),
      t
    );
  })(j);
  var br = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  (I.CommunityTopicHeader = (function () {
    function o(t, n) {
      var e;
      (this.opts = n),
        (this.render_topic_voter = br(this.render_topic_voter, this)),
        (this.el = $(t)),
        (e = this.el.find(".moderation_tools")),
        e.length &&
          new I.CommunityTopicModerationTools(e, this.opts.moderation),
        this.render_topic_voter();
    }
    return (
      (o.prototype.render_topic_voter = function () {
        var t, n, e;
        if (
          typeof R != "undefined" &&
          R !== null &&
          (n = R.Community) != null &&
          n.TopicVoter &&
          ((e = this.el.find(".community_topic_voter_widget")), !!e.length)
        )
          return (
            (t = e.data("p")),
            (t.vote_url = this.opts.vote_url),
            ReactDOM.render(R.Community.TopicVoter(t), e[0])
          );
      }),
      o
    );
  })()),
    (I.CommunityTopicList = (function () {
      function o(t, n) {
        (this.opts = n),
          (this.el = $(t)),
          new I.CommunityTopicModerationTools(t, this.opts),
          this.el.lazy_images({ selector: "[data-background_image]" }),
          this.render_topic_voters(),
          this.el.has_tooltips(),
          new I.GamePopups(this.el);
      }
      return (
        (o.prototype.render_topic_voters = function () {
          var t, n, e, r, i, s, a;
          if (
            typeof R != "undefined" &&
            R !== null &&
            (r = R.Community) != null &&
            r.TopicVoter
          ) {
            for (
              i = this.el.find(".community_topic_voter_widget"),
                s = [],
                t = 0,
                n = i.length;
              t < n;
              t++
            )
              (a = i[t]),
                (e = $(a).data("p")),
                (e.vote_url = this.opts.vote_url),
                s.push(ReactDOM.render(R.Community.TopicVoter(e), a));
            return s;
          }
        }),
        o
      );
    })());
  var yr = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  I.CommunityTopicModerationTools = (function () {
    o.prototype.topic_url = function (t, n) {
      return this.opts.urls[t].replace(/:topic_id\b/, n);
    };
    function o(t, n) {
      (this.opts = n),
        (this.topic_url = yr(this.topic_url, this)),
        (this.el = $(t)),
        new I.FilterPickers(t),
        this.el.on(
          "click",
          ".filter_option",
          (function (e) {
            return function (r) {
              var i, s, a;
              switch (
                ((i = $(r.currentTarget).trigger("i:close_filter_pickers")),
                (s = i.closest("[data-topic_id]").data("topic_id")),
                (a = i != null ? i.data("value") : void 0),
                a)
              ) {
                case "purge":
                  if (
                    (r.preventDefault(),
                    confirm(
                      "This will delete all the users posts and spam their account. No undo. Are you sure?",
                    ))
                  )
                    return $.post(
                      $(r.currentTarget).attr("href"),
                      I.with_csrf(),
                    ).done(function (l) {
                      if (l.errors) {
                        alert(l.errors.join(","));
                        return;
                      }
                      if (l.redirect_to)
                        return (window.location = l.redirect_to);
                    });
                  break;
                case "feature":
                case "unfeature":
                case "bump":
                  return (
                    r.preventDefault(),
                    $.post($(r.currentTarget).attr("href"), I.with_csrf()).done(
                      function (l) {
                        if (l.errors) {
                          alert(l.errors.join(","));
                          return;
                        }
                        if (l.redirect_to)
                          return (window.location = l.redirect_to);
                      },
                    )
                  );
                case "archive":
                case "unarchive":
                  return (
                    r.preventDefault(),
                    I.Lightbox.open_remote(
                      e.topic_url("archive_topic", s),
                      I.CommunityArchiveTopicLightbox,
                    )
                  );
                case "lock":
                case "unlock":
                  return (
                    r.preventDefault(),
                    I.Lightbox.open_remote(
                      e.topic_url("lock_topic", s),
                      I.CommunityLockTopicLightbox,
                    )
                  );
                case "stick":
                case "unstick":
                  return (
                    r.preventDefault(),
                    I.Lightbox.open_remote(
                      e.topic_url("stick_topic", s),
                      I.CommunityStickTopicLightbox,
                    )
                  );
                case "delete":
                  if (
                    (r.preventDefault(),
                    confirm("Are you sure you want to delete this topic?"))
                  )
                    return $.ajax({
                      url: e.topic_url("delete_topic", s),
                      data: I.with_csrf(),
                      type: "post",
                      xhrFields: { withCredentials: !0 },
                    }).done(function (l) {
                      return l.errors
                        ? alert(l.errors.join())
                        : window.location.reload();
                    });
              }
            };
          })(this),
        );
    }
    return o;
  })();
  var wr = function (o, t) {
    return function () {
      return o.apply(t, arguments);
    };
  };
  (I.CommunityViewTopic = (function () {
    o.prototype.vote_counts_template = I.lazy_template(o, "vote_counts");
    function o(t, n) {
      var e;
      (this.opts = n),
        (this.update_votes = wr(this.update_votes, this)),
        (this.el = $(t)),
        this.el.find("code[class*=language-]").exists() &&
          (e = $("#lib_prism_src").data("inject")) &&
          $(document.body).append(e),
        this.el.remote_link(
          (function (r) {
            return function (i, s) {
              if (s.is(".vote_btn")) {
                if (i.errors) {
                  alert(i.errors.join(", "));
                  return;
                }
                r.update_votes(s, i);
                return;
              }
              if (i.redirect_to) return (window.location = i.redirect_to);
            };
          })(this),
        ),
        this.el.dispatch("click", {
          ban_user_btn: (function (r) {
            return function (i) {
              var s, a;
              return (
                (a = i.closest(".community_post").data("post")),
                (s = r.opts.ban_url + ("?banned_user_id=" + a.user_id)),
                I.Lightbox.open_remote(s, I.CommunityBanLightbox)
              );
            };
          })(this),
          stick_topic_btn: (function (r) {
            return function (i) {
              return I.Lightbox.open_remote(
                i.data("href"),
                I.CommunityStickTopicLightbox,
              );
            };
          })(this),
          lock_topic_btn: (function (r) {
            return function (i) {
              return I.Lightbox.open_remote(
                i.data("href"),
                I.CommunityLockTopicLightbox,
              );
            };
          })(this),
          report_post_btn: (function (r) {
            return function (i) {
              var s, a;
              return (
                (s = i.closest(".community_post").data("post")),
                (a = r.opts.report_url.replace(/:post_id/, s.id)),
                I.Lightbox.open_remote(a, I.CommunityReportPostLightbox)
              );
            };
          })(this),
          embed_preload: (function (r) {
            return function (i) {
              var s;
              if (i[0].hasAttribute("itchio"))
                return (s = i.data("embed_code")), i.replaceWith(s);
            };
          })(this),
        });
    }
    return (
      (o.prototype.update_votes = function (t, n) {
        var e, r, i, s, a, l;
        for (
          s = t.closest(".community_post"),
            l = s.find(".vote_btn"),
            i = l.filter(".post_action"),
            i.removeClass("animate_bounce animate_drop_down"),
            setTimeout(
              (function (g) {
                return function () {
                  return i.removeClass("animate_bounce animate_drop_down");
                };
              })(this),
              500,
            ),
            t.is(".voted")
              ? (_.defer(
                  (function (g) {
                    return function () {
                      return i.addClass("animate_drop_down");
                    };
                  })(this),
                ),
                t.removeClass("voted"))
              : (_.defer(
                  (function (g) {
                    return function () {
                      return i.addClass("animate_bounce");
                    };
                  })(this),
                ),
                l.removeClass("voted").filter(t).addClass("voted")),
            e = 0,
            r = l.length;
          e < r;
          e++
        )
          (a = l[e]),
            (a = $(a)),
            a.is(".voted")
              ? (a.data("params").action = "remove")
              : delete a.data("params").action;
        return s
          .find(".vote_counts")
          .html(
            this.vote_counts_template({
              up_score: n.up_score + Math.max(0, n.score_adjustment),
              down_score:
                n.down_score + Math.abs(Math.min(0, n.score_adjustment)),
            }),
          );
      }),
      o
    );
  })()),
    I.libs.react.done(function () {
      var o, t, n, e, r, i, s, a, l, g, v, w, y;
      return (
        (t = L),
        (i = t.label),
        (r = t.input),
        (s = t.span),
        (e = t.button),
        (o = R.package("Community")),
        (y = PropTypes),
        (a = L.table),
        (v = L.thead),
        (l = L.tbody),
        (w = L.tr),
        (g = L.td),
        (n = L.abbr),
        o("CategoryEditTags", {
          propTypes: {
            tags: y.arrayOf(
              y.shape({
                id: y.number.isRequired,
                label: y.string.isRequired,
                color: y.string,
              }),
            ),
          },
          getInitialState: function () {
            return { tags: _.toArray(this.props.tags) };
          },
          push_tag: function (c) {
            if (((c = $.trim(c)), c !== ""))
              return this.setState(function (h) {
                return { tags: h.tags.concat({ label: c }) };
              });
          },
          remove_tag: function (c) {
            return this.state.tags.splice(c, 1), this.forceUpdate();
          },
          input_name: function (c, h) {
            return "category_tags[" + (h + 1) + "][" + c + "]";
          },
          render: function () {
            return this.enclose(
              {},
              this.state.tags.length
                ? a(
                    { className: "tag_list" },
                    l(
                      {},
                      this.state.tags.map(
                        (function (c) {
                          return function (h, f) {
                            return w(
                              {
                                className: "tag_row",
                                key: h.id + "-" + h.label,
                              },
                              g(
                                {},
                                h.id != null
                                  ? r({
                                      type: "hidden",
                                      name: c.input_name("id", f),
                                      value: "" + h.id,
                                    })
                                  : void 0,
                                h.color != null
                                  ? r({
                                      type: "hidden",
                                      name: c.input_name("color", f),
                                      value: h.color,
                                    })
                                  : void 0,
                                r({
                                  type: "hidden",
                                  name: c.input_name("label", f),
                                  value: h.label,
                                }),
                                s({ className: "tag_label" }, h.label),
                              ),
                              g(
                                {},
                                r({
                                  type: "text",
                                  name: c.input_name("description", f),
                                  defaultValue: h.description,
                                  placeholder: "Description, optional",
                                }),
                              ),
                              g(
                                {},
                                e(
                                  {
                                    className: "textlike remove_tag_btn",
                                    onClick: function (u) {
                                      if (
                                        confirm(
                                          "Are you sure you want to remove this tag?",
                                        )
                                      )
                                        return (
                                          u.preventDefault(), c.remove_tag(f)
                                        );
                                    },
                                  },
                                  "remove",
                                ),
                              ),
                            );
                          };
                        })(this),
                      ),
                    ),
                  )
                : void 0,
              r({
                type: "text",
                placeholder: "Type tag name and press enter to add tag",
                maxLength: 30,
                onKeyDown: (function (c) {
                  return function (h) {
                    if (h.keyCode === 13)
                      return (
                        h.preventDefault(),
                        c.push_tag(h.target.value),
                        (h.target.value = "")
                      );
                  };
                })(this),
              }),
            );
          },
        })
      );
    });
  var pt = [].slice,
    xr = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y;
    return (
      (t = L),
      (s = t.form),
      (a = t.h2),
      (r = t.div),
      (w = t.p),
      (i = t.em),
      (e = t.button),
      (l = t.input),
      (v = t.label),
      (y = t.span),
      (n = t.a),
      (o = R.package("Community")),
      (g = 0),
      (xr = o("EditCategories", {
        propTypes: { category: T.object },
        getInitialState: function () {
          return { children: _.toArray(this.props.category.children) };
        },
        componentDidMount: function () {
          return this.dispatch("category", {
            create: (function (c) {
              return function () {
                return (
                  c.state.children.push({ key: (g += 1) }), c.forceUpdate()
                );
              };
            })(this),
            set_property: (function (c) {
              return function (h, f, u, p) {
                return (f[u] = p), c.forceUpdate();
              };
            })(this),
            create_child: (function (c) {
              return function (h, f) {
                return (
                  f.children || (f.children = []),
                  f.children.push({ key: (g += 1) }),
                  c.forceUpdate()
                );
              };
            })(this),
            remove_child: (function (c) {
              return function (h, f, u) {
                var p;
                return (
                  (p = f === c.props.category ? c.state.children : f.children),
                  p.splice(u, 1),
                  c.forceUpdate()
                );
              };
            })(this),
            toggle: (function (c) {
              return function (h, f, u) {
                return (f[u] = !f[u]), c.forceUpdate();
              };
            })(this),
            move_up: (function (c) {
              return function (h, f, u) {
                var p, d, m, b;
                if (
                  ((d = f === c.props.category ? c.state.children : f.children),
                  (b = u - 1),
                  !!d[b])
                )
                  return (
                    (p = d),
                    (m = [p[b], p[u]]),
                    (p[u] = m[0]),
                    (p[b] = m[1]),
                    c.forceUpdate()
                  );
              };
            })(this),
            move_down: (function (c) {
              return function (h, f, u) {
                var p, d, m, b;
                if (
                  ((d = f === c.props.category ? c.state.children : f.children),
                  (b = u + 1),
                  !!d[b])
                )
                  return (
                    (p = d),
                    (m = [p[b], p[u]]),
                    (p[u] = m[0]),
                    (p[b] = m[1]),
                    c.forceUpdate()
                  );
              };
            })(this),
          });
        },
        render: function () {
          return s(
            { method: "POST", className: "edit_categories form" },
            R.CSRF({}),
            a({}, "Subcategories"),
            this.state.children.length
              ? r({
                  className: "category_list",
                  children: _.map(
                    this.state.children,
                    (function (c) {
                      return function (h, f) {
                        return o.CategoryRow({
                          is_first: f === 0,
                          is_last: f === c.state.children.length - 1,
                          key: h.key || "cat" + h.id,
                          parent_category: c.props.category,
                          category: h,
                          position: f + 1,
                        });
                      };
                    })(this),
                  ),
                })
              : w(
                  {},
                  i(
                    { className: "empty_message" },
                    "There are no categories. You must have at least one non-directory category for your community to be usable.",
                  ),
                ),
            r(
              { className: "button_row" },
              e(
                {
                  className: "button",
                  onClick: (function (c) {
                    return function (h) {
                      return h.preventDefault(), c.trigger("category:create");
                    };
                  })(this),
                },
                "New category",
              ),
              " ",
              e({ className: "button" }, "Save"),
            ),
          );
        },
      })),
      o("CategoryRow", {
        propTypes: {
          is_first: T.bool,
          is_last: T.bool,
          position: T.number,
          category: T.shape({ id: T.number, title: T.string }),
          input_prefix: T.string,
        },
        input_name: function (c) {
          var h;
          return (
            (h = this.props.input_prefix || "categories"),
            h + "[" + (this.props.position || "") + "][" + c + "]"
          );
        },
        render: function () {
          var c, h;
          return r(
            { className: "category_row" },
            this.props.category.id
              ? l({
                  type: "hidden",
                  name: this.input_name("id"),
                  value: this.props.category.id,
                })
              : void 0,
            r.apply(
              null,
              [{ className: "category_primary_inputs" }].concat(
                pt.call(this.render_title_inputs()),
              ),
            ),
            r.apply(
              null,
              [{ className: "category_secondary_inputs" }].concat(
                pt.call(this.render_button_inputs()),
              ),
            ),
            r(
              { className: "category_secondary_inputs" },
              v(
                {},
                l({
                  type: "checkbox",
                  name: this.input_name("archived"),
                  checked: this.props.category.archived || !1,
                  onChange: (function (f) {
                    return function (u) {
                      return f.trigger(
                        "category:toggle",
                        f.props.category,
                        "archived",
                      );
                    };
                  })(this),
                }),
                y({ className: "label" }, "Archive"),
              ),
              v(
                {},
                l({
                  type: "checkbox",
                  name: this.input_name("hidden"),
                  checked: this.props.category.hidden || !1,
                  onChange: (function (f) {
                    return function (u) {
                      return f.trigger(
                        "category:toggle",
                        f.props.category,
                        "hidden",
                      );
                    };
                  })(this),
                }),
                y({ className: "label" }, "Hidden"),
              ),
              v(
                {},
                l({
                  type: "checkbox",
                  name: this.input_name("directory"),
                  checked: this.props.category.directory || !1,
                  onChange: (function (f) {
                    return function (u) {
                      return f.trigger(
                        "category:toggle",
                        f.props.category,
                        "directory",
                      );
                    };
                  })(this),
                }),
                y({ className: "label" }, "Directory"),
              ),
              this.props.category.created_at
                ? y(
                    {
                      className: "created_at",
                      title: this.props.category.created_at,
                    },
                    se(this.props.category.created_at, "calendar"),
                  )
                : void 0,
              !this.props.category.directory &&
                this.props.category.topics_count != null
                ? ((c = this.props.category.topics_count),
                  y(
                    { className: "topics_count" },
                    c + " topic" + ((c === 1 && "") || "s"),
                  ))
                : void 0,
              this.props.category.url
                ? n(
                    {
                      className: "category_link",
                      href: this.props.category.url,
                    },
                    "View",
                  )
                : void 0,
              this.props.category.edit_url
                ? n(
                    {
                      className: "category_link",
                      href: this.props.category.edit_url,
                    },
                    "Edit",
                  )
                : void 0,
            ),
            (h = this.props.category.children) != null && h.length
              ? r({
                  className: "child_categories",
                  children: _.map(
                    this.props.category.children,
                    (function (f) {
                      return function (u, p) {
                        return o.CategoryRow({
                          is_first: p === 0,
                          is_last: p === f.props.category.children - 1,
                          key: u.key || "cat" + u.id,
                          input_prefix:
                            (f.props.input_prefix || "categories") +
                            "[" +
                            f.props.position +
                            "][children]",
                          parent_category: f.props.category,
                          category: u,
                          position: p + 1,
                        });
                      };
                    })(this),
                  ),
                })
              : void 0,
          );
        },
        render_title_inputs: function () {
          return [
            this.props.category.id
              ? void 0
              : y({ className: "new_flag" }, "New"),
            l({
              type: "text",
              className: "title_input text_input",
              name: this.input_name("title"),
              required: "required",
              value: this.props.category.title || "",
              placeholder: "Title",
              onChange: (function (c) {
                return function (h) {
                  return c.trigger(
                    "category:set_property",
                    c.props.category,
                    "title",
                    h.target.value,
                  );
                };
              })(this),
            }),
            this.props.category.directory
              ? void 0
              : l({
                  type: "text",
                  className: "short_description_input text_input",
                  name: this.input_name("short_description"),
                  value: this.props.category.short_description || "",
                  placeholder: "Short description",
                  onChange: (function (c) {
                    return function (h) {
                      return c.trigger(
                        "category:set_property",
                        c.props.category,
                        "short_description",
                        h.target.value,
                      );
                    };
                  })(this),
                }),
          ];
        },
        render_button_inputs: function () {
          return [
            e(
              {
                className: "button small",
                onClick: (function (c) {
                  return function (h) {
                    return (
                      h.preventDefault(),
                      c.trigger("category:create_child", c.props.category)
                    );
                  };
                })(this),
              },
              "Add child",
            ),
            this.props.is_first
              ? void 0
              : n(
                  {
                    href: "#",
                    className: "move_btn move_up_btn",
                    onClick: (function (c) {
                      return function (h) {
                        return (
                          h.preventDefault(),
                          c.trigger(
                            "category:move_up",
                            c.props.parent_category,
                            c.props.position - 1,
                          )
                        );
                      };
                    })(this),
                  },
                  "Move up",
                ),
            this.props.is_last
              ? void 0
              : n(
                  {
                    href: "#",
                    className: "move_btn move_down_btn",
                    onClick: (function (c) {
                      return function (h) {
                        return (
                          h.preventDefault(),
                          c.trigger(
                            "category:move_down",
                            c.props.parent_category,
                            c.props.position - 1,
                          )
                        );
                      };
                    })(this),
                  },
                  "Move down",
                ),
            n(
              {
                href: "#",
                className: "remove_btn",
                onClick: (function (c) {
                  return function (h) {
                    if (
                      (h.preventDefault(),
                      confirm("Are you sure you want to remove?"))
                    )
                      return c.trigger(
                        "category:remove_child",
                        c.props.parent_category,
                        c.props.position - 1,
                      );
                  };
                })(this),
              },
              "Remove",
            ),
          ];
        },
      })
    );
  });
  var ye = null;
  C.libs.react.done(function () {
    var o, t;
    return (
      (o = L),
      (t = o.div),
      (ye = A.component("SlideDown", {
        getInitialState: function () {
          return {};
        },
        getDefaultProps: function () {
          return { duration: 200, delay: 1 };
        },
        componentDidMount: function () {
          return (this.timer = window.setTimeout(
            (function (n) {
              return function () {
                var e;
                return (
                  (e = n.wrapper_ref.current),
                  n.setState({ height: e.scrollHeight || !1 }),
                  (n.timer = window.setTimeout(function () {
                    return n.setState({ animated: !0 });
                  }, n.props.duration + 50)),
                  (e.scrollTop = 0)
                );
              };
            })(this),
            this.props.delay,
          ));
        },
        componentWillUnmount: function () {
          if (this.timer)
            return window.clearTimeout(this.timer), delete this.timer;
        },
        render: function () {
          var n;
          return (
            (n =
              this.state.height === !1
                ? null
                : this.state.height
                ? this.state.animated
                  ? null
                  : {
                      height: this.state.height + "px",
                      overflow: "hidden",
                      transition:
                        "height " + this.props.duration / 1e3 + "s ease",
                    }
                : {
                    height: 0,
                    overflow: "scroll",
                    transition: "height 0.2s ease",
                  }),
            t(
              {
                style: n,
                className: this.props.className,
                ref: this.wrapper_ref || (this.wrapper_ref = M.createRef()),
              },
              this.props.children,
            )
          );
        },
      }))
    );
  });
  var He = null;
  C.libs.react.done(function () {
    return (He = A("LoadOnScroll", {
      componentWillUnmount: function () {
        return typeof this.unbind_visibility == "function"
          ? this.unbind_visibility()
          : void 0;
      },
      componentDidMount: function () {
        var o;
        return (
          (o = pe.findDOMNode(this)),
          (this.unbind_visibility = $(o).lazy_images({
            elements: [o],
            show_images: (function (t) {
              return function () {
                var n;
                return (n = t.props) != null ? n.on_seen() : void 0;
              };
            })(this),
          }))
        );
      },
      render: function () {
        return this.props.children;
      },
    }));
  });
  var we = [].slice,
    kr = {}.hasOwnProperty,
    dt = null;
  C.libs.react.done(function () {
    var o,
      t,
      n,
      e,
      r,
      i,
      s,
      a,
      l,
      g,
      v,
      w,
      y,
      c,
      h,
      f,
      u,
      p,
      d,
      m,
      b,
      x,
      k,
      N,
      B,
      O,
      P,
      D,
      V,
      q,
      Ar,
      yt,
      wt,
      Ue,
      xt,
      kt,
      St;
    return (
      (l = L),
      (b = l.input),
      (q = l.select),
      (y = l.code),
      (St = l.ul),
      (k = l.li),
      (w = l.button),
      (xt = l.textarea),
      (m = l.img),
      (g = l.a),
      (d = l.iframe),
      (p = l.h2),
      (u = l.form),
      (h = l.div),
      (x = l.label),
      (D = l.pre),
      (O = l.p),
      (v = l.br),
      (Ar = l.span),
      (f = l.em),
      (s = A.package("Forms")),
      (yt = L.table),
      (wt = L.tbody),
      (kt = L.tr),
      (Ue = L.td),
      (dt = s("MarkdownInput", {
        pure: !0,
        propTypes: { name: T.string, value: T.string },
        getDefaultProps: function () {
          return { max_default_height: 400 };
        },
        componentWillUnmount: function () {
          return (this.unmounted = !0);
        },
        componentDidMount: function () {
          var S, E;
          if (
            ((E = this.input_ref.current.scrollHeight),
            (S = this.input_ref.current.clientHeight),
            E > S &&
              this.setState({
                default_height: Math.min(E, this.props.max_default_height),
              }),
            this.props.autofocus)
          )
            return U.defer(
              (function (F) {
                return function () {
                  var G;
                  return (G = F.input_ref.current) != null ? G.focus() : void 0;
                };
              })(this),
            );
        },
        get_value: function () {
          var S;
          return (S = this.input_ref.current) != null ? S.value : void 0;
        },
        set_value: function (S) {
          return (this.input_ref.current.value = S);
        },
        click_bold_text: function (S) {
          return this.wrap_selection("**", "**");
        },
        click_italic_text: function (S) {
          return this.wrap_selection("*", "*");
        },
        click_insert_link: function (S) {
          var E, F, G;
          if (
            ((G = this.get_selected_text()),
            (E = this.input_ref.current),
            G.match(/^https?:\/\/[^\s]+$/))
          )
            return (
              this.wrap_selection("[](", ")"),
              (E.selectionStart = E.selectionStart - 2),
              (E.selectionEnd = E.selectionStart)
            );
          if ((this.wrap_selection("[", "](url)"), G.length > 0))
            return (
              (F = E.selectionEnd),
              (E.selectionStart = F + 2),
              (E.selectionEnd = F + 5)
            );
        },
        click_insert_video: function (S) {
          return W(
            s.MarkdownVideoEmbedLightbox({
              on_submit: (function (E) {
                return function (F) {
                  return E.insert_line(F);
                };
              })(this),
            }),
          );
        },
        click_insert_image: function (S) {
          return C.Lightbox.open_remote(
            C.root_url("dashboard/upload-image"),
            Je,
            (function (E) {
              return function (F) {
                var G;
                if (
                  (C.Lightbox.close(),
                  !E.unmounted && (G = E.input_ref.current))
                )
                  return E.insert_line("![](" + F + ")");
              };
            })(this),
          );
        },
        click_show_help: function (S) {
          return W(s.MarkdownHelpLightbox({}));
        },
        get_selected_text: function () {
          var S;
          return (S = this.input_ref.current)
            ? S.value.substring(S.selectionStart, S.selectionEnd)
            : "";
        },
        wrap_selection: function (S, E) {
          var F, G, z, Y, J, Lr, Fr, Ct, ce;
          return (
            (F = this.input_ref.current),
            (J = F.selectionStart),
            (Y = F.selectionEnd),
            (ce = F.value),
            (Fr = ce.substring(0, F.selectionStart)),
            (Lr = ce.substring(F.selectionEnd, ce.length)),
            (Ct = ce.substring(F.selectionStart, F.selectionEnd)),
            F.focus(),
            (z = "" + S + (Ct || "") + E),
            (G = document.execCommand("insertText", !1, z)),
            G || (typeof F.setRangeText == "function" && F.setRangeText(z)),
            (F.selectionStart = J + S.length),
            (F.selectionEnd = Y + S.length)
          );
        },
        insert_line: function (S) {
          var E, F;
          if (
            ((E = this.input_ref.current),
            E.focus(),
            (F = document.execCommand("insertText", !1, S)),
            !F)
          )
            return (
              typeof E.setRangeText == "function" && E.setRangeText(S),
              (E.selectionStart = E.selectionStart + S.length),
              (E.selectionEnd = E.selectionEnd)
            );
        },
        on_hotkey_keydown: function (S) {
          var E;
          if (S.metaKey || S.ctrlKey) {
            switch (S.key) {
              case "b":
                this.click_bold_text(S);
                break;
              case "i":
                this.click_italic_text(S);
                break;
              case "k":
                this.click_insert_link(S);
                break;
              case "Enter":
                typeof (E = this.props).on_submit_hotkey == "function" &&
                  E.on_submit_hotkey();
                break;
              default:
                return;
            }
            return S.preventDefault();
          }
        },
        render: function () {
          var S;
          return this.enclose(
            {},
            St(
              { className: "markdown_toolbar" },
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    onClick: this.click_show_help,
                    title: "Markdown Help",
                  },
                  i({}),
                ),
              ),
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    onClick: this.click_bold_text,
                    title: "Bold",
                  },
                  o({}),
                ),
              ),
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    onClick: this.click_italic_text,
                    title: "Italic",
                  },
                  t({}),
                ),
              ),
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    title: "Insert link",
                    onClick: this.click_insert_link,
                  },
                  e({}),
                ),
              ),
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    title: "Insert image",
                    onClick: this.click_insert_image,
                  },
                  n({}),
                ),
              ),
              k(
                {},
                w(
                  {
                    tabIndex: -1,
                    type: "button",
                    title: "Insert video",
                    onClick: this.click_insert_video,
                  },
                  r({}),
                ),
              ),
            ),
            xt({
              name: this.props.name,
              ref: this.input_ref || (this.input_ref = M.createRef()),
              defaultValue: this.get_default_value(),
              className: "markdown_textarea",
              onKeyDown: this.on_hotkey_keydown,
              placeholder: this.props.placeholder,
              required: this.props.required,
              style:
                (S = this.state) != null && S.default_height
                  ? { height: this.state.default_height + "px" }
                  : void 0,
              onChange: (function (E) {
                return function (F) {
                  var G, z;
                  if (
                    ((z = F.target.value),
                    typeof (G = E.props).on_change == "function" &&
                      G.on_change(z),
                    E.props.remember_key)
                  )
                    return (
                      E.set_memory ||
                        (E.set_memory = U.throttle(function (Y) {
                          return C.store_memory(this.remember_key(), Y);
                        }, 500)),
                      E.set_memory(z)
                    );
                };
              })(this),
            }),
          );
        },
        get_default_value: function () {
          var S;
          if (
            (S = this.props.value || this.props.defaultValue) ||
            (this.props.remember_key &&
              (S =
                typeof localStorage != "undefined" && localStorage !== null
                  ? localStorage.getItem(this.remember_key())
                  : void 0))
          )
            return S;
        },
        remember_key: function () {
          return "inputmemory:" + this.props.remember_key;
        },
        clear_memory: function () {
          return C.clear_memory(this.remember_key());
        },
      })),
      (P = L.path),
      (N = L.line),
      (V = L.rect),
      (B = function (S) {
        return M.createElement.bind(null, M.memo(S));
      }),
      (i = function () {
        return M.createElement(
          "svg",
          {
            className: H("svgicon markdown_icon"),
            role: "img",
            version: "1.1",
            viewBox: "0 0 208 128",
            fill: "currentColor",
          },
          P({
            d: "M193 128H15a15 15 0 0 1-15-15V15A15 15 0 0 1 15 0h178a15 15 0 0 1 15 15v98a15 15 0 0 1-15 15zM50 98V59l20 25 20-25v39h20V30H90L70 55 50 30H30v68zm134-34h-20V30h-20v34h-20l30 35z",
          }),
        );
      }),
      (i = B(i)),
      (c = function () {
        var S, E, F;
        return (
          (E = arguments[0]),
          (S = 2 <= arguments.length ? we.call(arguments, 1) : []),
          M.createElement.apply(
            M,
            [
              "svg",
              {
                className: H("svgicon", E.className),
                role: "img",
                version: "1.1",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                fill: (F = E != null ? E.fill : void 0) != null ? F : "none",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinejoin: "round",
                "aria-hidden": !0,
              },
            ].concat(we.call(S)),
          )
        );
      }),
      (o = function () {
        return c(
          { className: "icon_format_bold" },
          P({ d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
          P({ d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
        );
      }),
      (o = B(o)),
      (t = function () {
        return c(
          { className: "icon_format_italic" },
          N({ x1: "19", y1: "4", x2: "10", y2: "4" }),
          N({ x1: "14", y1: "20", x2: "5", y2: "20" }),
          N({ x1: "15", y1: "4", x2: "9", y2: "20" }),
        );
      }),
      (t = B(t)),
      (e = function () {
        return c(
          { className: "icon_insert_link" },
          P({
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          }),
          P({
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          }),
        );
      }),
      (e = B(e)),
      (n = function () {
        return c(
          { className: "icon_insert_image" },
          V({ x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
          M.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
          M.createElement("polyline", { points: "21 15 16 10 5 21" }),
        );
      }),
      (n = B(n)),
      (r = function () {
        return c(
          { className: "icon_insert_video" },
          P({
            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
          }),
          M.createElement("polygon", {
            points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
          }),
        );
      }),
      (r = B(r)),
      (a = {
        youtube:
          /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:\-nocookie)?\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,
        vimeo: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
        sketchfab_old:
          /https?:\/\/(?:www\.)?sketchfab\.com\/models\/([\w]+)($|\/)/,
        sketchfab:
          /https?:\/\/(?:www\.)?sketchfab\.com\/3d-models\/.*?-([^-]+)$/,
      }),
      s("MarkdownVideoEmbedLightbox", {
        pure: !0,
        getInitialState: function () {
          return { is_valid: !1 };
        },
        componentDidMount: function () {
          return U.defer(
            (function (S) {
              return function () {
                var E;
                return (E = S.input_ref.current) != null ? E.focus() : void 0;
              };
            })(this),
          );
        },
        generate_youtube_embed_code: function (S) {
          return (
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
            S +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          );
        },
        generate_vimeo_embed_code: function (S) {
          return (
            '<iframe src="https://player.vimeo.com/video/' +
            S +
            '" width="560" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
          );
        },
        generate_sketchfab_embed_code: function (S) {
          return (
            '<iframe width="560" height="315" src="https://sketchfab.com/models/' +
            S +
            '/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
          );
        },
        parse_input_value: function () {
          var S, E, F, G, z, Y, J;
          if (
            ((Y = $.trim(
              ((F = this.input_ref.current) != null ? F.value : void 0) || "",
            )),
            Y.match(/<iframe/i))
          )
            return Y;
          for (z in a)
            if (kr.call(a, z) && ((E = a[z]), (S = Y.match(E)), !!S))
              switch (z) {
                case "youtube":
                  if (
                    ((J =
                      (G = S[0].match(/v=([^>"'&]+)/)) ||
                      (G = S[0].match(/embed\/([^>"'&\/]+)/))
                        ? G[1]
                        : void 0),
                    J)
                  )
                    return this.generate_youtube_embed_code(J);
                  break;
                case "vimeo":
                  if ((J = S[2])) return this.generate_vimeo_embed_code(J);
                  break;
                case "sketchfab":
                case "sketchfab_old":
                  if ((J = S[1])) return this.generate_sketchfab_embed_code(J);
                  break;
                default:
                  console.log(z, S);
              }
        },
        render: function () {
          return ne(
            {
              className: H(this.enclosing_class_name(), "compact"),
              ref: this.lightbox_ref || (this.lightbox_ref = M.createRef()),
            },
            p({}, "Embed Video"),
            u(
              {
                className: "form",
                onSubmit:
                  this.on_submit ||
                  (this.on_submit = (function (S) {
                    return function (E) {
                      var F, G;
                      if (
                        (E.preventDefault(),
                        !!(S.state.is_valid && S.state.embed_code))
                      )
                        return (
                          typeof (F = S.props).on_submit == "function" &&
                            F.on_submit(S.state.embed_code),
                          (G = S.lightbox_ref.current) != null
                            ? G.close()
                            : void 0
                        );
                    };
                  })(this)),
              },
              h(
                { className: "label" },
                "Youtube/Vimeo/Sketchfab URL or ",
                y({}, "<iframe>"),
                " embed code",
              ),
              h(
                { className: "input_split" },
                b({
                  type: "text",
                  required: "required",
                  placeholder: "Please paste a valid URL or embed code",
                  ref: this.input_ref || (this.input_ref = M.createRef()),
                  onChange:
                    this.on_change ||
                    (function (S) {
                      return function (E) {
                        var F;
                        return (
                          (F = S.parse_input_value()),
                          S.setState({ embed_code: F, is_valid: !!F })
                        );
                      };
                    })(this),
                }),
                " ",
                w(
                  {
                    disabled: !this.state.is_valid,
                    className: H("button", { disabled: !this.state.is_valid }),
                  },
                  "Insert",
                ),
              ),
            ),
          );
        },
      }),
      s("MarkdownHelpLightbox", {
        pure: !0,
        render: function () {
          var S;
          return (
            (S = function () {
              var E, F;
              return (
                (E = arguments[0]),
                (F = 2 <= arguments.length ? we.call(arguments, 1) : []),
                kt(
                  {},
                  Ue({ className: "format_type" }, E),
                  Ue.apply(
                    null,
                    [{ className: "format_example" }].concat(we.call(F)),
                  ),
                )
              );
            }),
            ne(
              { className: H(this.enclosing_class_name(), "compact") },
              p({}, "Quick Markdown Guide"),
              O({}, "Markdown is a writing format that converts into HTML."),
              h(
                { className: "table_wrapper" },
                yt(
                  { className: "nice_table" },
                  wt(
                    {},
                    S("Bold", "**Bolded text here**"),
                    S("Italic", "*Emphasized text here*"),
                    S("Bullet list", "* First item", v({}), "* Second item"),
                    S("Link", "[Linked text](http://example.com)"),
                    S(
                      "Blockquote",
                      "> Quoted text here",
                      v({}),
                      "> Can span multiple lines",
                    ),
                    S(
                      "Code",
                      "```",
                      v({}),
                      'print("Hello world")',
                      v({}),
                      "```",
                    ),
                    S("Video embeds", f({}, "Paste embed code directly")),
                  ),
                ),
              ),
              O(
                {},
                g(
                  { href: "https://commonmark.org/help/", target: "_blank" },
                  "Extended tutorial \u2197",
                ),
                ". You can also use a subset of HTML directly for advanced formatting.",
              ),
            )
          );
        },
      })
    );
  });
  var Sr =
      [].indexOf ||
      function (o) {
        for (var t = 0, n = this.length; t < n; t++)
          if (t in this && this[t] === o) return t;
        return -1;
      },
    xe = null,
    ht = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g;
    return (
      (t = L),
      (a = t.input),
      (i = t.form),
      (g = t.pre),
      (e = t.button),
      (r = t.div),
      (l = t.label),
      (s = t.h3),
      (n = t.a),
      (o = A.package("Community")),
      (xe = o("PostForm", {
        getInitialState: function () {
          return { open: this.props.open || !1 };
        },
        componentDidCatch: function (v, w) {
          return I.event("error", "react", "Community.PostForm");
        },
        render: function () {
          return this.enclose(
            {},
            this.state.open ? this.render_form() : this.render_pre_form(),
          );
        },
        render_pre_form: function () {
          return i(
            { className: classNames("form post_form", this.props.className) },
            a({
              className: "click_input",
              type: "text",
              placeholder: this.t("game.comments.write_your_comment"),
              onFocus: (function (v) {
                return function () {
                  return v.setState({ open: !0, focus: !0 });
                };
              })(this),
            }),
          );
        },
        render_form: function () {
          var v, w, y;
          return i(
            {
              action: this.props.submit_url,
              ref: this.form_ref || (this.form_ref = React.createRef()),
              className: classNames("form post_form", this.props.className),
              onSubmit: (function (c) {
                return function (h) {
                  var f;
                  if (!((f = c.state) != null && f.loading))
                    return (
                      h.preventDefault(),
                      c.setState({ loading: !0 }),
                      I.remote_submit($(h.target), [
                        { name: "format", value: "props" },
                      ]).done(function (u) {
                        var p, d, m;
                        if (u.redirect_to) {
                          (d = c.body_input_ref.current) != null &&
                            d.clear_memory(),
                            (window.location = u.redirect_to);
                          return;
                        }
                        if (u.errors) {
                          c.setState({
                            needs_recaptcha:
                              Sr.call(u.errors, "recaptcha") >= 0,
                            errors: u.errors,
                            loading: !1,
                          });
                          return;
                        }
                        if (
                          ((m = c.body_input_ref.current) != null &&
                            m.clear_memory(),
                          u.redirect_to)
                        ) {
                          window.location = u.redirect_to;
                          return;
                        }
                        if (
                          (u.flash && I.flash(u.flash),
                          c.setState({
                            loading: !1,
                            needs_recaptcha: !1,
                            errors: null,
                          }),
                          u.post)
                        )
                          return typeof (p = c.props).on_create_post ==
                            "function"
                            ? p.on_create_post(u.post)
                            : void 0;
                      })
                    );
                };
              })(this),
            },
            (v = this.state) != null && v.errors
              ? A.Forms.FormErrors({
                  errors: this.state.errors,
                  animated: !0,
                  scroll_into_view: !0,
                })
              : void 0,
            A.CSRF({}),
            this.props.body_format
              ? a({
                  type: "hidden",
                  name: "post[body_format]",
                  value: this.props.body_format,
                })
              : void 0,
            function () {
              switch (this.props.body_format || "html") {
                case "html":
                  return Te({
                    placeholder: "Required",
                    ref:
                      this.body_input_ref ||
                      (this.body_input_ref = React.createRef()),
                    remember_key: this.props.remember_key,
                    name: "post[body]",
                    required: !0,
                    defaultValue: this.props.defaultValue,
                    redactor_opts: $.extend(
                      {
                        minHeight: 50,
                        focus: this.props.autofocus || this.state.focus,
                      },
                      this.props.redactor_opts,
                    ),
                  });
                case "markdown":
                  return dt({
                    ref:
                      this.body_input_ref ||
                      (this.body_input_ref = React.createRef()),
                    remember_key: this.props.remember_key,
                    placeholder: "Required",
                    defaultValue: this.props.defaultValue,
                    name: "post[body]",
                    autofocus: this.props.autofocus || this.state.focus,
                    required: !0,
                    on_submit_hotkey:
                      this.on_submit_hotkey_callback ||
                      (this.on_submit_hotkey_callback = (function (c) {
                        return function () {
                          var h, f;
                          return (h = c.submit_button_ref) != null &&
                            (f = h.current) != null
                            ? f.click()
                            : void 0;
                        };
                      })(this)),
                  });
                default:
                  return A.Forms.FormErrors({
                    animated: !0,
                    scroll_into_view: !0,
                    errors: [
                      "Don't know how to edit post with format " +
                        this.state.body_format,
                    ],
                  });
              }
            }.call(this),
            (w = this.state) != null && w.needs_recaptcha
              ? A.Forms.RecaptchaInput({
                  sitekey: this.props.recaptcha_sitekey,
                })
              : void 0,
            r(
              { className: "buttons" },
              e(
                {
                  className: "button",
                  disabled: (y = this.state) != null ? y.loading : void 0,
                  ref:
                    this.submit_button_ref ||
                    (this.submit_button_ref = React.createRef()),
                },
                this.props.post_label || this.tt("community.post_form.post"),
              ),
              this.props.more_buttons,
            ),
          );
        },
      })),
      (ht = o("PostEditForm", {
        propTypes: { edit_url: T.string.isRequired },
        componentDidCatch: function (v, w) {
          return (
            I.event("error", "react", "Community.PostEditForm"),
            this.setState({ critical_error: !0 })
          );
        },
        getInitialState: function () {
          return { loading: !0 };
        },
        componentDidMount: function () {
          return $.ajax({
            type: "GET",
            dataType: "json",
            url: this.props.edit_url,
            xhrFields: { withCredentials: !0 },
          })
            .done(
              (function (v) {
                return function (w) {
                  return v.setState({
                    loading: !1,
                    errors: w.errors,
                    body_format: w.body_format,
                    body: w.body,
                  });
                };
              })(this),
            )
            .fail(
              (function (v) {
                return function (w) {
                  return v.setState({ critical_error: !0, loading: !1 });
                };
              })(this),
            );
        },
        render: function () {
          var v;
          return (v = this.state) != null && v.critical_error
            ? s(
                {},
                "There was an error editing this post, please ",
                n({ href: "https://itch.io/support" }, "contact support"),
                " with a link to this page.",
              )
            : this.state.body
            ? xe(
                $.extend({}, this.props.reply_form_params, {
                  submit_url: this.props.edit_url,
                  autofocus: !0,
                  open: !0,
                  className: "inline_edit",
                  defaultValue: this.state.body,
                  body_format: this.state.body_format,
                  post_label: this.tt("misc.forms.save"),
                  more_buttons: this.props.more_buttons,
                  on_create_post: this.props.on_create_post,
                }),
              )
            : r({}, "");
        },
      }))
    );
  });
  var ft = [].slice,
    te = null,
    ue = null,
    $e = null,
    Cr = null,
    Tr = null,
    Nr = null,
    Ir = null;
  C.libs.react.done(function () {
    var o, t, n;
    return (
      (o = L),
      (t = o.a),
      (n = o.img),
      (te = function () {
        var e, r, i;
        return (
          (i = arguments[0]),
          (r = 2 <= arguments.length ? ft.call(arguments, 1) : []),
          i == null && (i = {}),
          M.createElement.bind(
            null,
            M.memo(
              (e = function (s) {
                var a, l, g, v;
                return M.createElement.apply(
                  M,
                  [
                    "svg",
                    {
                      className: H("svgicon", s.className, i.className),
                      role: "img",
                      version: "1.1",
                      viewBox: "0 0 24 24",
                      width: (a = s.width) != null ? a : "24",
                      height: (l = s.height) != null ? l : "24",
                      fill:
                        (g = (v = s.fill) != null ? v : i.fill) != null
                          ? g
                          : "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinejoin: "round",
                      strokeLinecap: "round",
                      "aria-hidden": !0,
                    },
                  ].concat(ft.call(r)),
                );
              }),
            ),
          )
        );
      }),
      (ue = te(
        { className: "icon_tri_up", fill: "currentColor" },
        M.createElement("polygon", { points: "2 18 12 6 22 18" }),
      )),
      ($e = te(
        { className: "icon_tri_down", fill: "currentColor" },
        M.createElement("polygon", { points: "2 6 12 18 22 6" }),
      )),
      (Cr = te(
        { className: "icon_filter" },
        M.createElement("polygon", {
          points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
        }),
      )),
      (Tr = te(
        { className: "icon_edit" },
        M.createElement("path", {
          d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34",
        }),
        M.createElement("polygon", {
          points: "18 2 22 6 12 16 8 16 8 12 18 2",
        }),
      )),
      (Nr = te(
        { className: "icon_external_link" },
        M.createElement("path", {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        }),
        M.createElement("polyline", { points: "15 3 21 3 21 9" }),
        M.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
      )),
      (Ir = te(
        { className: "icon_help" },
        M.createElement("circle", { cx: "12", cy: "12", r: "10" }),
        M.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
        M.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ))
    );
  });
  var Rr = {}.hasOwnProperty,
    _t = null,
    Ve = null,
    mt = null,
    gt = null,
    le = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h, f;
    return (
      (t = L),
      (a = t.form),
      (n = t.a),
      (e = t.button),
      (w = t.img),
      (r = t.code),
      (l = t.fragment),
      (i = t.div),
      (s = t.em),
      (h = t.span),
      (f = t.strong),
      (y = t.label),
      (v = t.h3),
      (g = t.h2),
      (c = t.p),
      (l = React.createElement.bind(null, React.Fragment)),
      (l.type = React.fragment),
      (o = A.package("Community")),
      (_t = o("PostLiker", {
        pure: !0,
        getDefaultProps: function () {
          return { animation_duration: 500 };
        },
        componentDidCatch: function (u, p) {
          return I.event("error", "react", "Community.PostLiker");
        },
        componentWillUnmount: function () {
          if (this.animation_timer)
            return (
              window.clearTimeout(this.animation_timer),
              (this.animation_timer = null)
            );
        },
        componentDidUpdate: function (u, p) {
          var d;
          if (
            (d = this.state) != null &&
            d.animation &&
            (p != null ? p.animation : void 0) !== this.state.animation
          )
            return (this.animation_timer = window.setTimeout(
              (function (m) {
                return function () {
                  return m.setState({ animation: null });
                };
              })(this),
              this.props.animation_duration,
            ));
        },
        like: function () {
          var u, p, d, m, b;
          return (
            (d = { direction: "up" }),
            (m = this.props.vote) != null &&
              m.positive &&
              (d.action = "remove"),
            (u =
              d.action === "remove" ? "animate_drop_down" : "animate_bounce"),
            (b = this.state) != null &&
              b.animation &&
              ((p = u),
              _.defer(
                (function (x) {
                  return function () {
                    return x.setState({ animation: p });
                  };
                })(this),
              ),
              (u = null)),
            this.setState({
              loading: !0,
              pending_vote: d.action !== "remove",
              animation: u,
            }),
            $.ajax({
              type: "POST",
              dataType: "json",
              url: this.props.urls.vote_url({ id: this.props.post_id }),
              data: I.with_csrf(d),
              xhrFields: { withCredentials: !0 },
            })
              .done(
                (function (x) {
                  return function (k) {
                    var N;
                    return (
                      x.setState({ loading: !1, pending_vote: void 0 }),
                      typeof (N = x.props).on_vote == "function"
                        ? N.on_vote(k)
                        : void 0
                    );
                  };
                })(this),
              )
              .fail(
                (function (x) {
                  return function (k) {
                    var N;
                    if (
                      (x.setState({ loading: !1 }),
                      (N = (function () {
                        try {
                          return JSON.parse(k.responseText);
                        } catch (B) {}
                      })()),
                      N != null &&
                        N.errors &&
                        x.setState({ pending_vote: null }),
                      N != null && N.login_url)
                    )
                      return (window.location = N.login_url);
                  };
                })(this),
              )
          );
        },
        render: function () {
          var u, p, d, m, b;
          return this.props.current_user
            ? this.enclose(
                {
                  component: "button",
                  type: "button",
                  className: classNames(
                    "post_action vote_btn",
                    (u = this.state) != null ? u.animation : void 0,
                    this.props.classNames,
                    {
                      loading: (p = this.state) != null ? p.loading : void 0,
                      voted:
                        (d =
                          (m = this.state) != null ? m.pending_vote : void 0) !=
                        null
                          ? d
                          : (b = this.props.vote) != null
                          ? b.positive
                          : void 0,
                    },
                  ),
                  onClick:
                    this.on_click ||
                    (this.on_click = (function (x) {
                      return function (k) {
                        return k.preventDefault(), x.like();
                      };
                    })(this)),
                },
                ue({}),
                " ",
                this.tt("community.post_list.like"),
              )
            : (this.props.login_url ||
                console.warn(
                  "Rendering a logged out PostLiker but we don't have the login_url",
                ),
              this.enclose(
                {
                  component: "a",
                  className: classNames(
                    "post_action vote_btn",
                    this.props.classNames,
                  ),
                  href: this.props.login_url,
                  target: "_blank",
                },
                ue({}),
                " ",
                this.tt("community.post_list.like"),
              ));
        },
      })),
      (mt = o("PostVoter", {
        pure: !0,
        propTypes: { urls: T.object, post_id: T.number, vote: T.object },
        componentDidCatch: function (u, p) {
          return I.event("error", "react", "Community.PostVoter");
        },
        vote: function (u) {
          var p, d, m;
          if (!((d = this.state) != null && d.loading))
            return (
              (p = { direction: u }),
              u === "up" &&
                (m = this.props.vote) != null &&
                m.positive &&
                (p.action = "remove"),
              u === "down" &&
                this.props.vote &&
                !this.props.vote.positive &&
                (p.action = "remove"),
              this.setState({ loading: !0 }),
              $.ajax({
                type: "POST",
                url: this.props.urls.vote_url({ id: this.props.post_id }),
                data: I.with_csrf(p),
                dataType: "json",
                xhrFields: { withCredentials: !0 },
              })
                .done(
                  (function (b) {
                    return function (x) {
                      var k;
                      return (
                        b.setState({ loading: !1 }),
                        typeof (k = b.props).on_vote == "function"
                          ? k.on_vote(x)
                          : void 0
                      );
                    };
                  })(this),
                )
                .fail(
                  (function (b) {
                    return function (x) {
                      var k;
                      if (
                        (b.setState({ loading: !1 }),
                        (k = (function () {
                          try {
                            return JSON.parse(x.responseText);
                          } catch (N) {}
                        })()),
                        k != null && k.login_url)
                      )
                        return (window.location = k.login_url);
                    };
                  })(this),
                )
            );
        },
        render: function () {
          var u;
          return (
            !this.props.current_user &&
              !this.props.login_url &&
              console.warn(
                "Rendering a logged out PostVoter but we don't have the login_url",
              ),
            this.enclose(
              {
                className: classNames("post_votes", {
                  loading: (u = this.state) != null ? u.loading : void 0,
                }),
              },
              this.props.current_user
                ? e(
                    {
                      type: "button",
                      disabled: this.props.disabled,
                      className: classNames("vote_up_btn vote_btn", {
                        voted: this.props.vote && this.props.vote.positive,
                      }),
                      onClick:
                        this.on_vote_up ||
                        (this.on_vote_up = (function (p) {
                          return function () {
                            return p.vote("up");
                          };
                        })(this)),
                    },
                    ue({}),
                  )
                : n(
                    {
                      className: "vote_up_btn vote_btn",
                      target: "_blank",
                      rel: "nofollow",
                      href: this.props.login_url,
                    },
                    ue({}),
                  ),
              this.props.current_user
                ? e(
                    {
                      type: "button",
                      disabled: this.props.disabled,
                      className: classNames("vote_down_btn vote_btn", {
                        voted: this.props.vote && !this.props.vote.positive,
                      }),
                      onClick:
                        this.on_vote_down ||
                        (this.on_vote_down = (function (p) {
                          return function () {
                            return p.vote("down");
                          };
                        })(this)),
                    },
                    $e({}),
                  )
                : n(
                    {
                      className: "vote_down_btn vote_btn",
                      target: "_blank",
                      rel: "nofollow",
                      href: this.props.login_url,
                    },
                    $e({}),
                  ),
            )
          );
        },
      })),
      (gt = o("PostBody", {
        pure: !0,
        getDefaultProps: function () {
          return { max_height: 300 };
        },
        componentDidMount: function () {
          return _.defer(
            (function (u) {
              return function () {
                var p, d;
                return (
                  (d = $(u.wrapper_ref.current)
                    .find("img")
                    .on("load", function () {
                      return u.refresh_sizes();
                    })),
                  (p = d.length ? void 0 : 50),
                  u.refresh_sizes(p)
                );
              };
            })(this),
          );
        },
        reveal: function () {
          return this.setState({ open: !0, has_more: !1 });
        },
        on_click: function (u) {
          var p, d, m;
          if (
            ((d = this.state) != null && d.has_more && this.reveal(),
            (p = $(u.target).closest(".embed_preload")),
            p.length &&
              ((r = p.data("embed_code")),
              p.replaceWith(r),
              !((m = this.state) != null && m.open)))
          )
            return this.setState({ open: !0 });
        },
        refresh_sizes: function (u) {
          var p;
          if (
            this.wrapper_ref.current &&
            ((p = this.wrapper_ref.current.scrollHeight),
            p > this.props.max_height && this.setState({ has_more: !0 }),
            u && p < this.props.max_height + u)
          )
            return this.setState({ open: !0, has_more: !1 });
        },
        render: function () {
          var u, p, d;
          return (
            (d =
              (u = this.state) != null && u.open
                ? void 0
                : {
                    overflowY: "hidden",
                    maxHeight: this.props.max_height + "px",
                  }),
            l(
              {},
              i({
                className: "post_body user_formatted",
                ref: this.wrapper_ref || (this.wrapper_ref = React.createRef()),
                style: d,
                onClick: this.on_click,
                dangerouslySetInnerHTML: { __html: this.props.body_html },
              }),
              (p = this.state) != null && p.has_more
                ? e(
                    {
                      type: "button",
                      onClick: this.reveal,
                      className: "reveal_full_post_btn",
                    },
                    "View rest \u2193",
                  )
                : void 0,
            )
          );
        },
      })),
      (le = o("Post", {
        pure: !0,
        propTypes: {
          post: T.object,
          urls: T.object,
          current_user: T.object,
          reply_form_params: T.object,
          len_posts: T.number,
          idx: T.number,
          readonly: T.bool,
          display_post_footer: T.bool,
        },
        edit_post: function (u) {
          return this.props.edit_post(this.props.post, u);
        },
        get_visible_vote_types: function () {
          return this.props.readonly ? null : this.props.post.vote_types;
        },
        is_redacted: function () {
          var u, p, d, m, b;
          return (
            (u = this.props.post),
            (b = this.props.post.user),
            u.deleted || ((p = u.user) != null && p.deleted)
              ? !0
              : ((d = u.user) != null && d.suspended) || u.blocked
              ? !((m = this.state) != null && m.show_blocked)
              : !1
          );
        },
        render: function () {
          var u, p;
          return (
            (u = this.props.post),
            l(
              {},
              this.render_current_post(),
              (p = u.replies) != null && p.length
                ? this.render_children()
                : u.view_replies_url
                ? i(
                    { className: "view_more_replies" },
                    n(
                      {
                        href: u.view_replies_url,
                        className: "button outline forward_link",
                      },
                      this.tt("community.post_list.view_more_in_thread"),
                    ),
                  )
                : void 0,
            )
          );
        },
        render_children: function () {
          var u;
          return (
            (u = this.props.post),
            i(
              {
                className: classNames("community_post_replies", {
                  top_level_replies: u.depth === 1,
                }),
              },
              u.replies.map(
                (function (p) {
                  return function (d, m) {
                    return le({
                      key: d.id,
                      readonly: p.props.readonly,
                      idx: m,
                      post: d,
                      current_user: p.props.current_user,
                      edit_post:
                        p.edit_child_post ||
                        (p.edit_child_post = function (b, x) {
                          var k;
                          return p.edit_post({
                            replies: function () {
                              var N, B, O, P;
                              for (
                                O = this.props.post.replies,
                                  P = [],
                                  N = 0,
                                  B = O.length;
                                N < B;
                                N++
                              )
                                if (((k = O[N]), k === b)) {
                                  if (x === "remove") continue;
                                  P.push($.extend({}, b, x));
                                } else P.push(k);
                              return P;
                            }.call(p),
                          });
                        }),
                      urls: p.props.urls,
                      reply_form_params: p.props.reply_form_params,
                    });
                  };
                })(this),
              ),
            )
          );
        },
        update_vote: function (u) {
          var p, d, m;
          return (
            (d = u.score_adjustment || 0),
            (m = Math.max(d, 0)),
            (p = Math.min(d, 0)),
            this.edit_post({
              up_votes: u.up_score + m,
              down_votes: u.down_score - p,
              vote: u.score_adjustment
                ? { positive: u.score_adjustment > 0 }
                : null,
            })
          );
        },
        delete_post: function (u) {
          var p, d, m, b, x;
          if (
            (u == null && (u = null),
            (b = this.props.post),
            (d =
              u === "hard"
                ? "Purging post will delete it permanently, along with any replies. Continue?"
                : "Are you sure you want to delete this post?"),
            !!confirm(d) && !((x = this.state) != null && x.deleting))
          )
            return (
              this.setState({ deleting: !0 }),
              (p = this.props.urls.delete_url({ id: b.id })),
              (m = {}),
              u === "hard" && (m.hard = "1"),
              $.ajax({
                type: "POST",
                url: p,
                data: I.with_csrf(m),
                dataType: "json",
                xhrFields: { withCredentials: !0 },
              })
                .done(
                  (function (k) {
                    return function (N) {
                      return k.edit_post({
                        deleted: !0,
                        hard_deleted: N.type === "hard",
                      });
                    };
                  })(this),
                )
                .always(
                  (function (k) {
                    return function () {
                      return k.setState({ deleting: !1 });
                    };
                  })(this),
                )
            );
        },
        render_current_post_moderation_event: function () {
          var u, p, d;
          return (
            (p = this.props.post),
            (d = this.props.post.user),
            (u = p.moderation_event),
            p.deleted
              ? i(
                  { className: "post_content" },
                  i(
                    { className: "post_body" },
                    s(
                      { className: "deleted_message" },
                      this.tt("community.post_list.deleted_post"),
                    ),
                  ),
                )
              : l(
                  {},
                  h(
                    { className: "post_author" },
                    d.url && d.name
                      ? n({ href: d.url }, d.name)
                      : h({ className: "name_placeholder" }, "Unknown account"),
                  ),
                  h(
                    { className: "moderation_action" },
                    f({}, u.action),
                    u.target_name
                      ? l({}, " ", n({ href: u.target_url }, u.target_name))
                      : void 0,
                    " ",
                    h(
                      { className: "post_date", title: p.created_at + " UTC" },
                      n({ href: p.url }, se(p.created_at)),
                    ),
                    p.can_delete && !p.deleted && !this.props.readonly
                      ? e(
                          {
                            className: "textlike delete_post_btn post_action",
                            type: "button",
                            onClick: (function (m) {
                              return function (b) {
                                return b.preventDefault(), m.delete_post();
                              };
                            })(this),
                          },
                          this.tt("community.post_list.delete"),
                        )
                      : void 0,
                  ),
                )
          );
        },
        render_current_post_contents: function () {
          var u, p, d, m, b, x, k, N, B, O, P;
          return (
            (d = this.props.post),
            (P = this.props.post.user),
            (u = de({
              className: "post_avatar",
              width: 25,
              height: 25,
              src: P.avatar_url,
              src_set: P.avatar_url2x
                ? P.avatar_url + " 1x, " + P.avatar_url2x + " 2x"
                : void 0,
            })),
            (d.just_added ? ye : i)(
              { className: "post_grid" },
              this.get_visible_vote_types() === "ud"
                ? mt({
                    post_id: d.id,
                    vote: d.vote,
                    disabled: this.is_redacted(),
                    urls: this.props.urls,
                    on_vote: this.update_vote,
                    current_user: this.props.current_user,
                    login_url:
                      typeof (p = this.props.urls).login_url == "function"
                        ? p.login_url()
                        : void 0,
                  })
                : void 0,
              P.url
                ? n({ href: P.url, className: "avatar_container" }, u)
                : i({ className: "avatar_container" }, u),
              i(
                { className: "post_header" },
                h(
                  { className: "post_author" },
                  d.deleted
                    ? h({ className: "name_placeholder" }, "Deleted post")
                    : P.deleted
                    ? h(
                        { className: "name_placeholder" },
                        this.tt("community.post_list.deleted_account"),
                      )
                    : d.blocked && !((m = this.state) != null && m.show_blocked)
                    ? h({ className: "name_placeholder" }, "Blocked account")
                    : P.suspended
                    ? h(
                        { className: "name_placeholder" },
                        this.tt("community.post_list.suspended_account"),
                      )
                    : P.url && P.name
                    ? n({ href: P.url }, P.name)
                    : void 0,
                ),
                h(
                  { className: "post_date", title: d.created_at + " UTC" },
                  n({ href: d.url }, se(d.created_at)),
                ),
                !this.is_redacted() && (d.edits_count || 0) > 0
                  ? l(
                      {},
                      " ",
                      h(
                        {
                          className: "edit_message",
                          title: d.edited_at + " (" + d.edits_count + ")",
                        },
                        this.tt("community.post_list.edited"),
                      ),
                    )
                  : void 0,
                !this.is_redacted() &&
                  d.vote_types &&
                  (d.up_votes || d.down_votes)
                  ? h(
                      { className: "vote_counts" },
                      d.up_votes
                        ? h({ className: "upvotes" }, "(+" + d.up_votes + ")")
                        : void 0,
                      d.down_votes
                        ? h(
                            { className: "downvotes" },
                            "(-" + d.down_votes + ")",
                          )
                        : void 0,
                    )
                  : void 0,
              ),
              i(
                { className: "post_content" },
                d.deleted || ((b = d.user) != null && b.deleted)
                  ? i(
                      { className: "post_body" },
                      s(
                        { className: "deleted_message" },
                        this.tt("community.post_list.deleted_post"),
                      ),
                      (d.can_moderate || d.admin_url) && !d.hard_deleted
                        ? l(
                            {},
                            " (",
                            e(
                              {
                                className: "textlike",
                                onClick:
                                  this.purge_post ||
                                  (this.purge_post = (function (D) {
                                    return function (V) {
                                      return (
                                        V.preventDefault(),
                                        D.delete_post("hard").done(function () {
                                          return D.edit_post("remove");
                                        })
                                      );
                                    };
                                  })(this)),
                              },
                              "Purge",
                            ),
                            ")",
                          )
                        : void 0,
                    )
                  : (x = d.user) != null &&
                    x.suspended &&
                    !((k = this.state) != null && k.show_blocked)
                  ? i(
                      { className: "post_body" },
                      s(
                        {},
                        this.tt(
                          "community.post_list.post_from_suspended_account",
                        ),
                      ),
                      " (",
                      e(
                        {
                          className: "textlike",
                          onClick:
                            this.show_blocked_post ||
                            (this.show_blocked_post = (function (D) {
                              return function () {
                                return D.setState({ show_blocked: !0 });
                              };
                            })(this)),
                        },
                        "Show post",
                      ),
                      ")",
                    )
                  : d.blocked && !((N = this.state) != null && N.show_blocked)
                  ? i(
                      { className: "post_body" },
                      s(
                        {},
                        this.tt(
                          "community.post_list.post_from_blocked_account",
                        ),
                      ),
                      " (",
                      e(
                        {
                          className: "textlike",
                          onClick:
                            this.show_blocked_post ||
                            (this.show_blocked_post = (function (D) {
                              return function () {
                                return D.setState({ show_blocked: !0 });
                              };
                            })(this)),
                        },
                        "Show post",
                      ),
                      ", ",
                      n(
                        {
                          href: this.props.urls.blocks_url(),
                          target: "_blank",
                        },
                        this.tt("community.post_list.edit_blocks"),
                      ),
                      ")",
                    )
                  : (B = this.state) != null && B.editing
                  ? this.render_edit_form()
                  : gt({ key: d.body_html, body_html: d.body_html }),
                this.render_post_footer(),
                (O = this.state) != null && O.replying_to
                  ? this.render_reply_form()
                  : void 0,
              ),
            )
          );
        },
        render_post_footer: function () {
          var u, p, d, m;
          if (this.props.display_post_footer !== !1)
            return (
              (d = this.props.post),
              (m = this.props.post.user),
              i(
                { className: "post_footer" },
                !this.is_redacted() && this.get_visible_vote_types() === "u"
                  ? _t({
                      post_id: d.id,
                      vote: d.vote,
                      urls: this.props.urls,
                      on_vote: this.update_vote,
                      current_user: this.props.current_user,
                      login_url:
                        typeof (u = this.props.urls).login_url == "function"
                          ? u.login_url()
                          : void 0,
                    })
                  : void 0,
                !this.is_redacted() && !this.props.readonly
                  ? d.can_reply
                    ? n(
                        {
                          href: this.props.urls.reply_url({ id: d.id }),
                          className: "post_action reply_btn",
                          onClick: this.props.reply_form_params
                            ? this.on_click_reply ||
                              (this.on_click_reply = (function (b) {
                                return function (x) {
                                  return (
                                    x.preventDefault(),
                                    b.setState(function (k) {
                                      return (
                                        k == null && (k = {}),
                                        { replying_to: !k.replying_to }
                                      );
                                    })
                                  );
                                };
                              })(this))
                            : void 0,
                        },
                        this.tt("community.post_list.reply"),
                      )
                    : !this.props.current_user && this.props.urls.login_url
                    ? n(
                        {
                          href:
                            typeof (p = this.props.urls).login_url == "function"
                              ? p.login_url()
                              : void 0,
                          className: "post_action reply_btn",
                          rel: "nofollow",
                          target: "_blank",
                        },
                        this.tt("community.post_list.reply"),
                      )
                    : void 0
                  : void 0,
                d.can_edit && !this.props.readonly
                  ? n(
                      {
                        href: this.props.urls.edit_url({ id: d.id }),
                        className: "post_action edit_btn",
                        onClick: this.props.reply_form_params
                          ? this.on_click_edit ||
                            (this.on_click_edit = (function (b) {
                              return function (x) {
                                return (
                                  x.preventDefault(),
                                  b.setState(function (k) {
                                    return (
                                      k == null && (k = {}),
                                      { editing: !k.editing, replying_to: !1 }
                                    );
                                  })
                                );
                              };
                            })(this))
                          : void 0,
                      },
                      this.tt("community.post_list.edit"),
                    )
                  : void 0,
                d.can_delete && !d.deleted && !this.props.readonly
                  ? n(
                      {
                        href: "#",
                        className: "post_action delete_post_btn",
                        onClick: (function (b) {
                          return function (x) {
                            return x.preventDefault(), b.delete_post();
                          };
                        })(this),
                      },
                      d.is_topic
                        ? this.tt("community.post_list.delete_topic")
                        : this.tt("community.post_list.delete"),
                    )
                  : void 0,
                !this.is_redacted() && d.can_report && !this.props.readonly
                  ? n(
                      {
                        href: "#",
                        className: "post_action report_btn",
                        onClick: (function (b) {
                          return function (x) {
                            var k;
                            return (
                              x.preventDefault(),
                              (k = b.props.urls.report_url({ id: d.id })),
                              I.Lightbox.open_remote(
                                k,
                                I.CommunityReportPostLightbox,
                              )
                            );
                          };
                        })(this),
                      },
                      this.tt("community.post_list.report"),
                    )
                  : void 0,
                m.id && d.ban_target && !this.props.readonly
                  ? n(
                      {
                        href: "#",
                        className: "post_action ban_user_btn",
                        onClick: (function (b) {
                          return function (x) {
                            var k;
                            return (
                              x.preventDefault(),
                              (k = b.props.urls.ban_url(d.ban_target)),
                              (k += "?banned_user_id=" + m.id),
                              I.Lightbox.open_remote(k, I.CommunityBanLightbox)
                            );
                          };
                        })(this),
                      },
                      f({}, this.tt("community.post_list.ban")),
                    )
                  : void 0,
                d.admin_url ? n({ href: d.admin_url }, "Admin") : void 0,
              )
            );
        },
        render_edit_form: function () {
          var u;
          return (
            (u = this.props.post),
            this.edit_form_cancel ||
              (this.edit_form_cancel = l(
                {},
                " ",
                e(
                  {
                    type: "button",
                    className: "textlike",
                    onClick: (function (p) {
                      return function () {
                        return p.setState({ editing: !1 });
                      };
                    })(this),
                  },
                  "Cancel",
                ),
              )),
            ht({
              edit_url: this.props.urls.edit_url({ id: u.id }),
              more_buttons: this.edit_form_cancel,
              reply_form_params: this.props.reply_form_params,
              on_create_post: (function (p) {
                return function (d) {
                  return p.edit_post(d), p.setState({ editing: !1 });
                };
              })(this),
            })
          );
        },
        render_reply_form: function () {
          var u;
          return ye(
            {},
            xe(
              $.extend(
                {
                  submit_url: this.props.urls.reply_url({
                    id: this.props.post.id,
                  }),
                  autofocus: !0,
                  open: !0,
                  className: "inline_reply",
                  key:
                    "post-" +
                    (((u = this.state) != null ? u.post_counter : void 0) || 0),
                  post_label: this.tt("community.post_form.post_reply"),
                  remember_key: "reply:" + this.props.post.id,
                  on_create_post:
                    this.on_add_reply ||
                    (this.on_add_reply = (function (p) {
                      return function (d) {
                        return (
                          (d.just_added = !0),
                          p.setState(function (m) {
                            return {
                              replying_to: !1,
                              post_counter: (m.post_counter || 0) + 1,
                            };
                          }),
                          p.edit_post({
                            replies: [d].concat(p.props.post.replies || []),
                          })
                        );
                      };
                    })(this)),
                },
                this.props.reply_form_params,
              ),
            ),
          );
        },
        render_current_post: function () {
          var u, p, d, m;
          return (
            (u = this.props.post),
            this.enclose(
              {
                className: classNames("community_post", {
                  disabled:
                    u.deleted ||
                    ((p = u.user) != null ? p.suspended : void 0) ||
                    ((d = u.user) != null ? d.deleted : void 0) ||
                    u.blocked,
                  is_deleted: u.deleted,
                  is_reply: u.depth > 1,
                  is_blocked: u.blocked,
                  is_suspended: (m = u.user) != null ? m.suspended : void 0,
                  has_replies: u.replies && u.replies.length,
                  has_vote_column: this.get_visible_vote_types() === "ud",
                  moderation_event: u.moderation_event,
                }),
                id: "post-" + u.id,
              },
              this.props.len_posts && this.props.idx === 0
                ? i({ className: "post_anchor", id: "first-post" })
                : void 0,
              this.props.len_posts &&
                this.props.idx === this.props.len_posts - 1
                ? i({ className: "post_anchor", id: "last-post" })
                : void 0,
              u.moderation_event
                ? this.render_current_post_moderation_event()
                : this.render_current_post_contents(),
            )
          );
        },
      })),
      (Ve = o("PostList", {
        pure: !0,
        propTypes: { children: T.array, urls: T.object },
        componentDidCatch: function (u, p) {
          return (
            I.event("error", "react", "Community.PostList"),
            this.setState({ critical_error: !0 })
          );
        },
        render: function () {
          var u;
          return (u = this.state) != null && u.critical_error
            ? v(
                {},
                "There was an error rendering the comments, please ",
                n({ href: "https://itch.io/support" }, "contact support"),
                " with a link to this page.",
              )
            : this.props.posts
            ? (this.url_templates ||
                (this.url_templates = (function (p) {
                  return function () {
                    var d, m, b, x;
                    (m = {}), (b = p.props.urls);
                    for (d in b)
                      Rr.call(b, d) && ((x = b[d]), (m[d] = _.template(x)));
                    return m;
                  };
                })(this)()),
              this.enclose(
                {},
                this.props.posts.map(
                  (function (p) {
                    return function (d, m) {
                      var b;
                      return (
                        (b =
                          m === 0
                            ? p.first_post_ref ||
                              (p.first_post_ref = React.createRef())
                            : void 0),
                        le({
                          ref: b,
                          key: d.id,
                          readonly: p.props.readonly,
                          idx: m,
                          edit_post: p.props.edit_post,
                          len_posts: p.props.posts.length,
                          post: d,
                          current_user: p.props.current_user,
                          urls: p.url_templates,
                          reply_form_params: p.props.reply_form_params,
                        })
                      );
                    };
                  })(this),
                ),
              ))
            : null;
        },
      })),
      A.package("Game")("Comments", {
        pure: !0,
        getDefaultProps: function () {
          return { autoload_count: 1 };
        },
        getInitialState: function () {
          return {
            posts: this.props.posts,
            pagination: this.props.pagination,
            autoload_count: this.props.autoload_count,
          };
        },
        create_scroll_restore: function (u) {
          var p, d, m;
          return (
            (u = $(u).find(".post_grid")),
            u.length
              ? ((d = u.offsetParent()),
                (m = window.document.documentElement.scrollTop),
                (p = u.position().top - m),
                function () {
                  return (window.document.documentElement.scrollTop =
                    u.position().top - p);
                })
              : function () {}
          );
        },
        load_page: function (u) {
          var p;
          if (
            (u == null && (u = "next_page"),
            !!((p = this.state.pagination) != null && p[u]))
          )
            return (
              this.setState({ loading: !0 }),
              $.getJSON(this.props.topic.url, this.state.pagination[u]).done(
                (function (d) {
                  return function (m) {
                    var b, x, k, N, B, O, P, D, V;
                    return m.posts
                      ? ((k = Object.assign({}, d.props.pagination)),
                        (k[u] = (O = m.pagination) != null ? O[u] : void 0),
                        (B = function () {
                          switch (u) {
                            case "prev_page":
                              return m.posts.concat(this.state.posts);
                            case "next_page":
                              return this.state.posts.concat(m.posts);
                          }
                        }.call(d)),
                        (V =
                          u === "prev_page"
                            ? ((N =
                                (P = d.post_list_ref) != null
                                  ? P.current
                                  : void 0),
                              (x =
                                N != null && (D = N.first_post_ref) != null
                                  ? D.current
                                  : void 0)
                                ? ((b = ReactDOM.findDOMNode(x)),
                                  d.create_scroll_restore(b))
                                : void 0)
                            : void 0),
                        d.setState({ loading: !1, posts: B, pagination: k }, V))
                      : d.setState({ loading: !1, pagination: null });
                  };
                })(this),
              )
            );
        },
        render: function () {
          var u, p, d, m, b;
          return this.enclose(
            {},
            g({}, this.tt("game.comments.comments_header")),
            xe({
              key:
                "post-" +
                (((p = this.state) != null ? p.post_counter : void 0) || 0),
              submit_url: this.props.post_form.submit_url,
              post_label: this.tt("game.comments.post_comment"),
              recaptcha_sitekey: this.props.recaptcha_sitekey,
              remember_key:
                this.props.remember_key || "topic:" + this.props.topic.id,
              redactor_opts: this.props.post_form.redactor_opts,
              body_format: this.props.body_format,
              on_create_post:
                this.on_create_post ||
                (this.on_create_post = (function (x) {
                  return function (k) {
                    return x.setState(function (N) {
                      return (
                        (k.just_added = !0),
                        {
                          post_counter: (N.post_counter || 0) + 1,
                          posts: [k].concat(N.posts || []),
                        }
                      );
                    });
                  };
                })(this)),
            }),
            this.state.pagination && this.state.pagination.prev_page
              ? c(
                  { className: "pagination_buttons" },
                  n(
                    {
                      href:
                        this.props.topic.url +
                        "?" +
                        $.param(this.state.pagination.prev_page),
                      className: "load_posts_before",
                      disabled: (d = this.state) != null ? d.loading : void 0,
                      onClick:
                        this.load_prev_page ||
                        (this.load_prev_page = (function (x) {
                          return function (k) {
                            return k.preventDefault(), x.load_page("prev_page");
                          };
                        })(this)),
                    },
                    "Show previous posts \u2191",
                  ),
                )
              : void 0,
            Ve({
              ref:
                this.post_list_ref || (this.post_list_ref = React.createRef()),
              posts: this.state.posts,
              urls: this.props.urls,
              current_user: this.props.current_user || I.current_user,
              reply_form_params:
                this.reply_form_params ||
                (this.reply_form_params = {
                  recaptcha_sitekey: this.props.recaptcha_sitekey,
                  redactor_opts: this.props.post_form.redactor_opts,
                  body_format: this.props.body_format,
                }),
              edit_post:
                this.edit_post ||
                (this.edit_post = (function (x) {
                  return function (k, N) {
                    return x.setState(function (B) {
                      var O;
                      return {
                        posts: (function () {
                          var P, D, V, q;
                          for (
                            V = B.posts, q = [], P = 0, D = V.length;
                            P < D;
                            P++
                          )
                            if (((O = V[P]), O === k)) {
                              if (N === "remove") continue;
                              q.push($.extend({}, k, N));
                            } else q.push(O);
                          return q;
                        })(),
                      };
                    });
                  };
                })(this)),
            }),
            this.state.pagination && this.state.pagination.next_page
              ? ((u = i(
                  { className: "pagination_buttons" },
                  n(
                    {
                      href:
                        this.props.topic.url +
                        "?" +
                        $.param(this.state.pagination.next_page),
                      className: classNames("load_posts_after", {
                        loading: (m = this.state) != null ? m.loading : void 0,
                      }),
                      onClick:
                        this.load_next_page ||
                        (this.load_next_page = (function (x) {
                          return function (k) {
                            var N;
                            if (
                              (k.preventDefault(),
                              !((N = x.state) != null && N.loading))
                            )
                              return x.load_page("next_page");
                          };
                        })(this)),
                    },
                    (b = this.state) != null && b.loading
                      ? "Loading..."
                      : "Load more",
                  ),
                )),
                this.state.autoload_count > 0
                  ? He(
                      {
                        key: JSON.stringify(this.state.pagination),
                        on_seen: (function (x) {
                          return function () {
                            return (
                              x.setState(function (k) {
                                return { autoload_count: k.autoload_count - 1 };
                              }),
                              x.load_page("next_page")
                            );
                          };
                        })(this),
                      },
                      u,
                    )
                  : u)
              : void 0,
          );
        },
      })
    );
  });
  var vt = null;
  I.libs.react.done(function () {
    var o, t, n, e;
    return (
      (t = L),
      (e = t.h2),
      (n = t.div),
      (o = A.package("Community")),
      (vt = o("PostLightbox", {
        render: function () {
          return ne(
            { className: H(this.enclosing_class_name(), "compact") },
            e({}, "Preview post"),
            n(
              { className: "community_post_list_widget" },
              le({
                readonly: !0,
                urls: this.props.urls,
                post: this.props.post,
                current_user: I.current_user,
              }),
            ),
          );
        },
      }))
    );
  });
  var ke = null;
  C.libs.react.done(function () {
    var o, t;
    return (
      (o = L),
      (t = o.img),
      (ke = function (n) {
        return M.createElement(
          "svg",
          {
            className: "svgicon icon_down_tick2",
            strokeLinecap: "round",
            stroke: "currentColor",
            role: "img",
            version: "1.1",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            width: "22",
            height: "22",
            strokeLinejoin: "round",
            "aria-hidden": !0,
            fill: "none",
          },
          M.createElement("polyline", { points: "6 9 12 15 18 9" }),
        );
      }),
      (ke = M.createElement.bind(null, M.memo(ke)))
    );
  });
  var Mr = [].slice,
    bt = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h, f;
    return (
      (t = L),
      (i = t.input),
      (e = t.div),
      (s = t.label),
      (c = t.span),
      (v = t.p),
      (g = t.option),
      (l = t.optgroup),
      (y = t.select),
      (f = t.ul),
      (a = t.li),
      (w = t.section),
      (r = t.form),
      (h = t.strong),
      (n = (function (u) {
        return function () {
          return A.component.apply(A, arguments);
        };
      })(this)),
      n("CSRF", {
        pure: !0,
        render: function () {
          return i({
            type: "hidden",
            name: "csrf_token",
            value: $("meta[name=csrf_token]").attr("value"),
          });
        },
      }),
      (o = A.package("Forms")),
      o("InputRow", {
        pure: !0,
        propTypes: { title: T.string, sub: T.any },
        render: function () {
          var u;
          return (
            (u = M.createElement(
              M.Fragment,
              {},
              e(
                { className: "label", key: "label" },
                this.props.title,
                this.props.sub
                  ? c({ className: "sub" }, " \u2014 ", this.props.sub)
                  : void 0,
              ),
              this.props.children,
            )),
            this.props.multi || (u = s({ children: u })),
            e(
              {
                className: H("input_row", this.props.className),
                id: this.props.id,
              },
              u,
            )
          );
        },
      }),
      o("TextInputRow", {
        pure: !0,
        propTypes: {
          title: T.string,
          sub: T.any,
          name: T.string.isRequired,
          value: T.any,
        },
        focus: function () {
          return this.input_ref.current.focus();
        },
        get_input_el: function () {
          return this.input_ref.current;
        },
        get_value: function () {
          return this.input_ref.current.value;
        },
        componentDidMount: function () {
          var u;
          if (this.props.money_input) {
            if (!this.props.currency) throw new Error("missing currency");
            I.money_input(this.input_ref.current, {
              currency: this.props.currency,
            });
          }
          if (
            (this.props.slug_input && I.slug_input($(this.input_ref.current)),
            this.props.integer_input)
          )
            return (
              (u = /[0-9]/g),
              $(this.input_ref.current).on(
                "keypress",
                (function (p) {
                  return function (d) {
                    var m;
                    if (
                      d.keyCode >= 32 &&
                      ((m = String.fromCharCode(d.keyCode)), !m.match(u))
                    )
                      return !1;
                  };
                })(this),
              )
            );
        },
        render: function () {
          var u;
          return (
            (u = [
              e(
                { className: "label", key: "label" },
                this.props.title,
                this.props.sub
                  ? c({ className: "sub" }, " \u2014 ", this.props.sub)
                  : void 0,
              ),
              i({
                type: "text",
                key: "input",
                name: this.props.name,
                ref: this.input_ref || (this.input_ref = M.createRef()),
                value: this.props.value,
                defaultValue: this.props.defaultValue,
                onChange: this.props.onChange,
                onKeyUp: this.props.onKeyUp,
                onFocus: this.props.onFocus,
                onBlur: this.props.onBlur,
                onClick: this.props.onClick,
                readOnly: this.props.readonly,
                className: H({ has_error: this.props.has_error }),
                required: this.props.required,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                pattern: this.props.pattern,
              }),
              this.props.error_message
                ? v(
                    { key: "error", className: "input_error" },
                    this.props.error_message,
                  )
                : void 0,
            ]),
            this.props.multi || (u = s({ children: u })),
            e({ className: H("input_row", this.props.className) }, u)
          );
        },
      }),
      o("SimpleSelect", {
        pure: !0,
        propTypes: { options: T.array.isRequired, name: T.string },
        getInitialState: function () {
          return {
            value: this.props.defaultValue ? this.props.defaultValue : void 0,
          };
        },
        render: function () {
          var u, p, d, m, b;
          return (
            (p = this.current_option()),
            (b = this.props.render_current_option),
            b ||
              (b = (function (x) {
                return function (k) {
                  return k.short_name || k.name;
                };
              })(this)),
            (u = []),
            (d = null),
            (m = function () {
              if (d)
                return (
                  u.push(
                    l.apply(
                      null,
                      [{ label: d.label, key: "group-" + u.length }].concat(
                        Mr.call(d.children),
                      ),
                    ),
                  ),
                  (d = null)
                );
            }),
            this.props.options.map(
              (function (x) {
                return function (k, N) {
                  var B;
                  return (
                    (B = g({ key: "" + N, value: k.value }, k.name)),
                    k.group
                      ? ((d != null ? d.label : void 0) !== k.group && m(),
                        d || (d = { label: k.group, children: [] }),
                        d.children.push(B))
                      : (m(), u.push(B))
                  );
                };
              })(this),
            ),
            m(),
            this.enclose(
              {
                className: H({
                  focused: this.state.focused,
                  disabled: this.props.disabled,
                  has_value: p !== this.props.options[0],
                }),
              },
              e(
                { className: "selected_option" },
                c({ className: "selected_option_name" }, b(p)),
                ke({}),
              ),
              y({
                ref: this.select_ref || (this.select_ref = M.createRef()),
                disabled: this.props.disabled,
                value: p.value,
                name: this.props.name,
                onFocus: (function (x) {
                  return function (k) {
                    return x.setState({ focused: !0 });
                  };
                })(this),
                onBlur: (function (x) {
                  return function (k) {
                    return x.setState({ focused: !1 });
                  };
                })(this),
                onChange: this.on_change,
                children: u,
              }),
            )
          );
        },
        on_change: function (u) {
          var p;
          return (
            (p = u.target.value),
            this.props.onChange
              ? p === this.props.value
                ? void 0
                : this.props.onChange(p)
              : p === this.state.value
              ? void 0
              : this.setState({ value: p })
          );
        },
        find_option: function (u) {
          var p, d, m, b;
          for (b = this.props.options, p = 0, d = b.length; p < d; p++)
            if (((m = b[p]), m.value === u)) return m;
        },
        current_option: function () {
          var u, p;
          return (
            (p = this.props.value || this.state.value),
            (u = p != null ? this.find_option(p) : void 0),
            u || this.props.options[0]
          );
        },
      }),
      o("Select", {
        propTypes: {
          name: T.string.isRequired,
          value: T.any,
          options: T.array.isRequired,
        },
        componentDidMount: function () {
          var u, p;
          if (
            this.props.selectize &&
            ((p = this.props.selectize === !0 ? {} : this.props.selectize),
            (u = $(this.input_ref.current)),
            u.selectize(p),
            this.props.onChange)
          )
            return u.on(
              "change",
              (function (d) {
                return function (m) {
                  return d.props.onChange(m);
                };
              })(this),
            );
        },
        render: function () {
          return y({
            ref: this.input_ref || (this.input_ref = M.createRef()),
            name: this.props.name,
            onChange: this.props.onChange,
            value: this.props.value,
            defaultValue: this.props.defaultValue,
            children: this.props.options.map(
              (function (u) {
                return function (p) {
                  var d, m;
                  return (
                    (m = p[0]), (d = p[1]), g({ key: m, value: m }, d || m)
                  );
                };
              })(this),
            ),
          });
        },
      }),
      o("RadioButtons", {
        propTypes: {
          name: T.string.isRequired,
          value: T.any,
          options: T.array.isRequired,
        },
        getValue: function () {
          var u, p, d, m, b, x;
          for (
            m = this.container().find("input").serializeArray(),
              u = 0,
              p = m.length;
            u < p;
            u++
          )
            return (b = m[u]), (d = b.name), (x = b.value), x;
        },
        render: function () {
          return f({
            className: "radio_list",
            children: this.props.options.map(
              (function (u) {
                return function (p, d) {
                  var m, b, x, k;
                  return (
                    (k = p[0]),
                    (m = p[1]),
                    (x = p[2]),
                    (b = p[3]),
                    a(
                      {
                        key: k != null ? k : d,
                        className: H({
                          disabled: b != null ? b.disabled : void 0,
                        }),
                      },
                      s(
                        {},
                        i(
                          $.extend(
                            {
                              type: "radio",
                              name: u.props.name,
                              value: k,
                              defaultChecked: u.props.defaultValue
                                ? k === u.props.defaultValue
                                : void 0,
                              checked:
                                u.props.value != null
                                  ? k === u.props.value
                                  : void 0,
                              onChange: u.props.onChange,
                            },
                            b,
                          ),
                        ),
                        c({ className: "radio_label" }, m),
                        x ? c({ className: "sub" }, " \u2014 ", x) : void 0,
                      ),
                    )
                  );
                };
              })(this),
            ),
          });
        },
      }),
      (bt = o("FormErrors", {
        pure: !0,
        getDefaultProps: function () {
          return { animated: !1, scroll_into_view: !1 };
        },
        propTypes: { title: T.string, errors: T.array.isRequired },
        render: function () {
          var u;
          return (
            (u = this.props.animated ? ye : w),
            u(
              {
                className: H(this.enclosing_class_name(), "form_errors"),
                role: "alert",
              },
              e(
                {
                  ref: this.props.scroll_into_view
                    ? function (p) {
                        if (p)
                          return typeof p.scrollIntoView == "function"
                            ? p.scrollIntoView()
                            : void 0;
                      }
                    : void 0,
                },
                this.props.title !== !1
                  ? v(
                      {},
                      h(
                        {},
                        this.props.title || this.tt("misc.forms.form_errors"),
                      ),
                    )
                  : void 0,
                f(
                  {},
                  this.props.errors.map(
                    (function (p) {
                      return function (d) {
                        var m;
                        return (
                          (m =
                            d === "recaptcha"
                              ? "Please complete the CAPTCHA to continue"
                              : d),
                          a({ key: d }, m)
                        );
                      };
                    })(this),
                  ),
                ),
                this.props.children,
              ),
            )
          );
        },
      })),
      o("RecaptchaInput", {
        propTypes: { sitekey: T.string.isRequired },
        componentDidMount: function () {
          return I.with_recaptcha(
            (function (u) {
              return function () {
                var p;
                return (
                  I.event("recaptcha", "show", I.page_name()),
                  (p = pe.findDOMNode(u)),
                  grecaptcha.render(p, { sitekey: u.props.sitekey })
                );
              };
            })(this),
          );
        },
        render: function () {
          return e({ className: "g-recaptcha" });
        },
      })
    );
  });
  var Er = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s, a, l, g, v, w, y, c, h, f, u, p, d;
    return (
      (e = L),
      (f = e.select),
      (v = e.h2),
      (l = e.form),
      (w = e.input),
      (s = e.div),
      (y = e.label),
      (d = e.ul),
      (c = e.li),
      (u = e.span),
      (i = e.button),
      (g = e.fragment),
      (r = e.a),
      (p = e.strong),
      (a = e.em),
      (h = e.p),
      (g = React.createElement.bind(null, React.Fragment)),
      (g.type = React.fragment),
      (t = A.package("Community")),
      (o = t("DismissPendingPostLightbox", {
        on_submit: function (m) {
          return (
            m.preventDefault(),
            this.setState({ loading: !0 }),
            I.remote_submit($(m.target)).then(
              (function (b) {
                return function (x) {
                  var k, N, B;
                  if (x.errors) {
                    b.setState({ errors: x.errors, loading: !1 });
                    return;
                  }
                  return (
                    typeof (k = b.props).on_dismiss == "function" &&
                      k.on_dismiss(x),
                    (N = b.lightbox_ref) != null && (B = N.current) != null
                      ? B.close()
                      : void 0
                  );
                };
              })(this),
            )
          );
        },
        getInitialState: function () {
          return { mark_as_spam: !1 };
        },
        render: function () {
          var m;
          return (
            (m = this.props.pending_post),
            ne(
              {
                className: classNames(this.enclosing_class_name(), "compact"),
                ref:
                  this.lightbox_ref || (this.lightbox_ref = React.createRef()),
              },
              v({}, "Dismiss Post"),
              this.state.errors ? bt({ errors: this.state.errors }) : void 0,
              l(
                {
                  action: this.props.update_url,
                  method: "post",
                  className: "form",
                  onSubmit: this.on_submit,
                },
                A.CSRF({}),
                w({ type: "hidden", name: "pending_post_id", value: m.id }),
                w({ type: "hidden", name: "action", value: "set_status" }),
                w({
                  type: "hidden",
                  name: "status",
                  value: this.state.mark_as_spam ? "spam" : "ignored",
                }),
                s(
                  { className: "input_row" },
                  s({ className: "label" }, "Options"),
                  d(
                    { className: "check_list" },
                    c(
                      {},
                      y(
                        {},
                        w({
                          type: "checkbox",
                          checked: this.state.mark_as_spam,
                          onChange: (function (b) {
                            return function () {
                              return b.setState(function (x) {
                                return { mark_as_spam: !x.mark_as_spam };
                              });
                            };
                          })(this),
                        }),
                        "Report as Spam",
                        u(
                          { className: "sub" },
                          " \u2014 ",
                          "Notify itch.io staff about this post. It may be used to train the spam detector",
                        ),
                      ),
                    ),
                    c(
                      {},
                      y(
                        {},
                        w({ type: "checkbox", name: "ban_user" }),
                        "Ban account",
                        u(
                          { className: "sub" },
                          " \u2014 ",
                          "Account will no longer be allowed to make posts in this category",
                        ),
                      ),
                    ),
                  ),
                ),
                i(
                  {
                    className: classNames("button", {
                      disabled: this.state.loading,
                    }),
                    disabled: this.state.loading,
                  },
                  "Dismiss",
                ),
              ),
            )
          );
        },
      })),
      (n = t("PendingPost", {
        pure: !0,
        getInitialState: function () {
          return {};
        },
        remote_submit: function (m) {
          return (
            this.setState({ loading: !0 }),
            I.remote_submit($(m)).then(
              (function (b) {
                return function (x) {
                  return (
                    b.setState({ loading: !1 }),
                    x.errors
                      ? (W(ge({ errors: x.errors })), $.Deferred().reject(x))
                      : x
                  );
                };
              })(this),
            )
          );
        },
        approve_post: function (m) {
          return (
            m.preventDefault(),
            this.remote_submit(m.target).then(
              (function (b) {
                return function (x) {
                  if (x.post) return b.setState({ approved_post: x.post });
                };
              })(this),
            )
          );
        },
        render: function () {
          var m, b, x, k;
          return (
            (x = this.props.pending_post),
            this.enclose(
              { className: classNames({ loading: this.state.loading }) },
              s(
                { className: "post_location" },
                (m = x.category)
                  ? g(
                      {},
                      r({ href: m.url, target: "_blank" }, m.title),
                      " \xBB ",
                    )
                  : void 0,
                x.is_topic
                  ? g({}, "New topic", " ", p({}, x.topic_title))
                  : (k = x.topic)
                  ? g(
                      {},
                      r({ href: k.url, target: "_blank" }, k.title),
                      k.deleted
                        ? g({}, " ", a({ className: "sub" }, "(deleted)"))
                        : void 0,
                      " \xBB ",
                      (b = x.parent_post)
                        ? g(
                            {},
                            "Replying to ",
                            r(
                              {
                                href: b.url,
                                onClick: (function (N) {
                                  return function (B) {
                                    if (
                                      !event.altKey &&
                                      !event.ctrlKey &&
                                      !event.metaKey &&
                                      !event.shiftKey
                                    )
                                      return (
                                        B.preventDefault(),
                                        W(
                                          $.getJSON(b.url).then(function (O) {
                                            return vt(O);
                                          }),
                                        )
                                      );
                                  };
                                })(this),
                              },
                              "Post by " + b.user.name,
                            ),
                            b.deleted
                              ? g({}, " ", a({ className: "sub" }, "(deleted)"))
                              : void 0,
                          )
                        : "New reply",
                    )
                  : void 0,
              ),
              s(
                { className: "community_post_list_widget" },
                le({ readonly: !0, post: x, display_post_footer: !1 }),
              ),
              this.render_post_tools(),
            )
          );
        },
        render_post_tools: function () {
          var m, b;
          return (
            (b = this.props.pending_post),
            (m = this.state.approved_post)
              ? s(
                  { className: "post_tools" },
                  u(
                    { className: "approval_message" },
                    p({}, "Post Approved"),
                    " ",
                    r(
                      {
                        href: m.url,
                        className: "forward_link",
                        target: "_blank",
                      },
                      "View post",
                    ),
                  ),
                )
              : s(
                  { className: "post_tools" },
                  b.can_promote
                    ? l(
                        {
                          action: this.props.update_url,
                          method: "post",
                          onSubmit: this.approve_post,
                        },
                        A.CSRF({}),
                        w({
                          type: "hidden",
                          name: "pending_post_id",
                          value: b.id,
                        }),
                        w({
                          type: "hidden",
                          name: "action",
                          value: "promote_post",
                        }),
                        i(
                          {
                            className: classNames("button", {
                              disabled: this.state.loading,
                            }),
                            disabled: this.state.loading,
                          },
                          "Approve Post",
                        ),
                      )
                    : i(
                        {
                          className: "button disabled",
                          disabled: !0,
                          title:
                            "The account or category can not accept new posts",
                        },
                        "Can't approve post",
                      ),
                  b.admin_url
                    ? r({ href: b.admin_url, target: "_blank" }, "Admin")
                    : void 0,
                  b.mod_url
                    ? r({ href: b.mod_url, target: "_blank" }, "Mod")
                    : void 0,
                  b.can_promote
                    ? void 0
                    : l(
                        {
                          action: this.props.update_url,
                          method: "post",
                          onSubmit: (function (x) {
                            return function (k) {
                              if (
                                (k.preventDefault(),
                                !!confirm(
                                  "A deleted pending post can not be recovered, are you sure?",
                                ))
                              )
                                return x
                                  .remote_submit(k.target)
                                  .then(function (N) {
                                    return x.props.remove_pending_post(b);
                                  });
                            };
                          })(this),
                        },
                        A.CSRF({}),
                        w({
                          type: "hidden",
                          name: "action",
                          value: "set_status",
                        }),
                        w({ type: "hidden", name: "status", value: "deleted" }),
                        w({
                          type: "hidden",
                          name: "pending_post_id",
                          value: b.id,
                        }),
                        i(
                          {
                            className: classNames("button outline", {
                              disabled: this.state.loading,
                            }),
                            disabled: this.state.loading,
                          },
                          "Delete",
                        ),
                      ),
                  i(
                    {
                      className: classNames("button outline", {
                        disabled: this.state.loading,
                      }),
                      type: "button",
                      disabled: this.state.loading,
                      onClick: (function (x) {
                        return function () {
                          return W(
                            o({
                              update_url: x.props.update_url,
                              pending_post: b,
                              on_dismiss: function (k) {
                                if (k.status !== b.status)
                                  return x.props.remove_pending_post(b);
                              },
                            }),
                          );
                        };
                      })(this),
                    },
                    "Dismiss...",
                  ),
                )
          );
        },
      })),
      (Er = t("EditPendingPosts", {
        getInitialState: function () {
          return {
            pending_posts: this.props.pending_posts,
            next_page: this.props.next_page,
          };
        },
        get_next_page: function () {
          if (this.state.next_page)
            return (
              this.setState({ loading: !0 }),
              $.getJSON("", this.state.next_page).then(
                (function (m) {
                  return function (b) {
                    if ((m.setState({ loading: !1 }), b.errors)) {
                      W(ge({ errors: b.errors }));
                      return;
                    }
                    return m.setState(function (x) {
                      return {
                        next_page: b.next_page,
                        pending_posts: x.pending_posts.concat(b.pending_posts),
                      };
                    });
                  };
                })(this),
              )
            );
        },
        remove_pending_post: function (m) {
          return this.setState(function (b) {
            return {
              pending_posts: b.pending_posts.filter(
                (function (x) {
                  return function (k) {
                    return k !== m;
                  };
                })(this),
              ),
            };
          });
        },
        render: function () {
          var m;
          return this.enclose(
            {},
            s(
              { className: "pending_post_list" },
              (m = this.state.pending_posts) != null && m.length
                ? this.state.pending_posts.map(
                    (function (b) {
                      return function (x) {
                        return n({
                          key: x.id,
                          pending_post: x,
                          update_url: b.props.update_url,
                          remove_pending_post: b.remove_pending_post,
                        });
                      };
                    })(this),
                  )
                : h(
                    { className: "sub empty_message" },
                    "There are no pending posts",
                  ),
            ),
            this.state.next_page
              ? He(
                  {
                    key: JSON.stringify(this.state.next_page),
                    on_seen: (function (b) {
                      return function () {
                        return b.get_next_page();
                      };
                    })(this),
                  },
                  s(
                    { className: "loading_container" },
                    i(
                      { disabled: !0, className: "button outline disabled" },
                      this.tt("misc.loading_more_ellip"),
                    ),
                  ),
                )
              : void 0,
          );
        },
      }))
    );
  });
  var Pr = null;
  I.libs.react.done(function () {
    var o, t, n, e, r, i, s;
    return (
      (t = L),
      (r = t.div),
      (s = t.strong),
      (n = t.a),
      (i = t.em),
      (e = t.button),
      (o = R.package("Community")),
      (Pr = o("PostPreview", {
        pure: !0,
        render: function () {
          var a, l;
          return (
            (a = this.props.posts[0]),
            console.log(a),
            this.enclose(
              {},
              a.parent_post
                ? ((l = a.parent_post.user),
                  r(
                    { className: "replying_to" },
                    s(
                      {},
                      "Replying to ",
                      l
                        ? n({ target: "_blank", href: l.url }, l.name)
                        : i({}, "Unknown user"),
                    ),
                    " \xB7 ",
                    n(
                      {
                        href: a.parent_post.url,
                        className: "show_parent_link",
                        target: "_blank",
                      },
                      "\u2191 Show parent",
                    ),
                  ))
                : void 0,
              Ve(Object.assign({ current_user: I.current_user }, this.props)),
              a.has_children
                ? r(
                    { className: "load_replies" },
                    e(
                      {
                        type: "button",
                        className: "textlike",
                        onClick: (function (g) {
                          return function (v) {
                            return v.preventDefault(), g.load_replies();
                          };
                        })(this),
                      },
                      "\u2193 Show replies",
                    ),
                  )
                : void 0,
            )
          );
        },
      }))
    );
  }),
    I.libs.react.done(function () {
      var o, t, n, e, r, i;
      return (
        (t = L),
        (n = t.button),
        (e = t.div),
        (r = t.label),
        (o = R.package("Community")),
        (i = PropTypes),
        o("TopicVoter", {
          propTypes: {
            post_id: i.number.isRequired,
            vote: i.string,
            vote_url: i.string.isRequired,
            score: i.number.isRequired,
            adjustment: i.number,
            dir: i.string,
          },
          getInitialState: function () {
            return { vote: this.props.vote };
          },
          vote: function (s) {
            var a, l, g;
            if (!I.current_user) {
              window.location = this.login_url();
              return;
            }
            return (
              this.setState({ loading: !0 }),
              (g = _.template(this.props.vote_url)({
                post_id: this.props.post_id,
              })),
              (l = !1),
              (a =
                s === this.state.vote
                  ? ((l = !0), { action: "remove" })
                  : { direction: s }),
              $.ajax({
                url: g,
                type: "POST",
                dataType: "json",
                data: I.with_csrf(a),
                xhrFields: { withCredentials: !0 },
              })
                .done(
                  (function (v) {
                    return function (w) {
                      if ((v.setState({ loading: !1 }), w.success))
                        return (
                          v.setState({
                            vote: !l && s,
                            adjustment: w.score_adjustment,
                          }),
                          $(ReactDOM.findDOMNode(v))
                            .find("button")
                            .trigger("i:refresh_tooltip")
                        );
                    };
                  })(this),
                )
                .fail(
                  (function (v) {
                    return function (w) {
                      return v.setState({ loading: !1, has_error: !0 });
                    };
                  })(this),
                )
            );
          },
          login_url: function () {
            return (
              "/login?" +
              $.param({
                return_to: window.location.toString(),
                intent: "community",
              })
            );
          },
          render: function () {
            var s, a, l;
            return (
              (a = this.props.score),
              this.state.vote &&
                (a +=
                  (s = this.state.adjustment) != null
                    ? s
                    : this.props.adjustment),
              (l = "vote_btn button small"),
              e(
                {},
                n({
                  type: "button",
                  "aria-label":
                    this.state.vote === "up" ? "Remove up vote" : "Vote up",
                  className: classNames(l, "vote_up_btn icon-caret-up", {
                    outline: this.state.vote !== "up",
                    disabled: this.state.loading,
                  }),
                  disabled: this.state.loading,
                  onClick: (function (g) {
                    return function () {
                      return g.vote("up");
                    };
                  })(this),
                }),
                e({ className: "vote_score" }, a),
                this.props.dir !== "up"
                  ? n({
                      type: "button",
                      "aria-label":
                        this.state.vote === "down"
                          ? "Remove down vote"
                          : "Vote down",
                      className: classNames(
                        l,
                        "vote_down_btn icon-caret-down",
                        {
                          outline: this.state.vote !== "down",
                          disabled: this.state.loading,
                        },
                      ),
                      disabled: this.state.loading,
                      onClick: (function (g) {
                        return function () {
                          return g.vote("down");
                        };
                      })(this),
                    })
                  : void 0,
              )
            );
          },
        })
      );
    });
})();
