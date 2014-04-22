// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">' +
    '<span id="subtitle">görsel bir programlama ortamı</span>' +
    '<span id="blocklyMessage">Blockly</span>' +
    '<span id="codeTooltip">Oluşturulan JavaScript kodunu görüntüle.</span>' +
    '<span id="linkTooltip">Blokları ve bağlantı adresini kaydet.</span>' +
    '<span id="runTooltip">Çalışma alanında bloklar tarafından tanımlanan \\nprogramını çalıştırın. </span>' +
    '<span id="runProgram">Programı Çalıştır</span>' +
    '<span id="resetProgram">Tekrar</span>' +
    '<span id="dialogOk">TAMAM</span>' +
    '<span id="dialogCancel">İptal</span>' +
    '<span id="catLogic">Mantık</span>' +
    '<span id="catLoops">Döngüler</span>' +
    '<span id="catMath">Matematik</span>' +
    '<span id="catText">Metin</span>' +
    '<span id="catLists">Listeler</span>' +
    '<span id="catColour">Renk</span>' +
    '<span id="catVariables">Değişkenler</span>' +
    '<span id="catProcedures">Prosedürler</span>' +
    '<span id="httpRequestError">İstek ile ilgili bir problem var.</span>' +
    '<span id="linkAlert">Bloklarını bu bağlantı ile paylaş:\n\n%1</span>' +
    '<span id="hashError">Üzgünüz, \'%1\' hiç bir kaydedilmiş program ile uyuşmuyor.</span>' +
    '<span id="xmlError">Kaydedilen dosyanız yüklenemiyor\nBlockly\'nin önceki sürümü ile kaydedilmiş olabilir mi?</span>' +
    '<span id="listVariable">liste</span>' +
    '<span id="textVariable">metin</span>' +
  '</div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};

apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">TAMAM</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">' +
    '<span id="Puzzle_country1">Avustralya</span>' +
    '<span id="Puzzle_country1Flag">assets/image/flag_au.png</span>' +
    '<span id="Puzzle_country1FlagHeight">50</span>' +
    '<span id="Puzzle_country1FlagWidth">100</span>' +
    '<span id="Puzzle_country1Language">İngilizce</span>' +
    '<span id="Puzzle_country1City1">Melbourne</span>' +
    '<span id="Puzzle_country1City2">Sidney</span>' +
    '<span id="Puzzle_country1HelpUrl">https://tr.wikipedia.org/wiki/Avustralya</span>' +
    '<span id="Puzzle_country2">Almanya</span>' +
    '<span id="Puzzle_country2Flag">assets/image/flag_de.png</span>' +
    '<span id="Puzzle_country2FlagHeight">60</span>' +
    '<span id="Puzzle_country2FlagWidth">100</span>' +
    '<span id="Puzzle_country2Language">Almanca</span>' +
    '<span id="Puzzle_country2City1">Berlin</span>' +
    '<span id="Puzzle_country2City2">Münih</span>' +
    '<span id="Puzzle_country2HelpUrl">https://tr.wikipedia.org/wiki/Almanya</span>' +
    '<span id="Puzzle_country3">Çin</span>' +
    '<span id="Puzzle_country3Flag">assets/image/flag_cn.png</span>' +
    '<span id="Puzzle_country3FlagHeight">66</span>' +
    '<span id="Puzzle_country3FlagWidth">100</span>' +
    '<span id="Puzzle_country3Language">Çince</span>' +
    '<span id="Puzzle_country3City1">Pekin</span>' +
    '<span id="Puzzle_country3City2">Şangay</span>' +
    '<span id="Puzzle_country3HelpUrl">https://tr.wikipedia.org/wiki/Çin_Halk_Cumhuriyeti</span>' +
    '<span id="Puzzle_country4">Brezilya</span>' +
    '<span id="Puzzle_country4Flag">assets/image/flag_br.png</span>' +
    '<span id="Puzzle_country4FlagHeight">70</span>' +
    '<span id="Puzzle_country4FlagWidth">100</span>' +
    '<span id="Puzzle_country4Language">Portekizce</span>' +
    '<span id="Puzzle_country4City1">Rio de Janeiro</span>' +
    '<span id="Puzzle_country4City2">São Paulo</span>' +
    '<span id="Puzzle_country4HelpUrl">https://tr.wikipedia.org/wiki/Brezilya</span>' +
    '<span id="Puzzle_country5">Türkiye</span>' +
    '<span id="Puzzle_country5Flag">assets/image/flag_tr.png</span>' +
    '<span id="Puzzle_country5FlagHeight">70</span>' +
    '<span id="Puzzle_country5FlagWidth">100</span>' +
    '<span id="Puzzle_country5Language">Türkçe</span>' +
    '<span id="Puzzle_country5City1">Ankara</span>' +
    '<span id="Puzzle_country5City2">İstanbul</span>' +
    '<span id="Puzzle_country5HelpUrl">https://tr.wikipedia.org/wiki/Türkiye</span>' +
    '<span id="Puzzle_flag">bayrak:</span>' +
    '<span id="Puzzle_language">dil:</span>' +
    '<span id="Puzzle_languageChoose">seçim yapın...</span>' +
    '<span id="Puzzle_cities">şehirler:</span>' +
    '<span id="Puzzle_error0">Muhteşem!\n%1 bloğun hepsi de doğru.</span>' +
    '<span id="Puzzle_error1">Neredeyse oluyordu! Bir blok yanlış.</span>' +
    '<span id="Puzzle_error2">%1 blok yanlış.</span>' +
    '<span id="Puzzle_tryAgain">Vurgulanan blok yanlış.\nDenemeye devam.</span>' +
  '</div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) +
    '<header>' +
      '<div class="home-menu pure-menu pure-menu-open pure-menu-horizontal">' +
        '<a style="float:left;" class="pure-menu-heading" id="title">Bulmaca</a>' +
          '<ul>' +
            '<li class="pure-menu-selected"><a href="index.html">Anasayfa</a></li>' +
            '<li class="pure-menu-selected"><a href="about.html">Hakkında</a></li>' +
          '</ul>' +
        '</div>' +
    '</header>' +
    '<main class="content-wrapper" style="background-color: #f2f2f2; min-height:600px; padding:0.5em; color:#fff; height:92%">' +
      '<div class="pure-g-r">' +
        '<div class="pure-u-1">' +
          '<div id="div-info-box">' +
            '<p style="float:left; color:#000; ">Komutları bir araya getirmeyi öğrenmek için harika bir oyun. Parçaları doğru yerleştirdiği kontrol etmek için "Kontrol et" butonu kullanabilirsin.</p>' +
            '<button id="checkButton" class="primary" style="float:right;">Yanıtları Kontrol Et</button>' +
            '<button id="helpButton" style="float:right;">Yardım</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="pure-g">' +
          '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) +
          '<div id="help" class="dialogHiddenContent">' +
            '<div style="padding:20px;">'+
              '<img style="float:left; margin-right:35px" src="assets/image/example.png"/>'+
              '<p>Her ülkenin (yeşil), bayrağını ekle, dilini seç ve şehirlerinden bir yığın oluştur.</p>'+
            '</div>' + apps.ok(null, null, opt_ijData) +
          '</div>' +
          '<div id="answers" class="dialogHiddenContent">' +
            '<div id="answerMessage"></div>' +
            '<div id="graph">' +
              '<div id="graphValue"></div>' +
            '</div>' +
            apps.ok(null, null, opt_ijData) +
          '</div>' +
        '</div>' +
      '</div>' +
    '</main>';
};