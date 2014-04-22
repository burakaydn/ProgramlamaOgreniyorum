// This file was automatically generated from common.soy.

if (typeof apps == 'undefined') { var apps = {}; }

apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">'+
      '<span id="subtitle">görsel bir programlama ortamı</span>'+
      '<span id="blocklyMessage">Blockly</span><span id="codeTooltip">Oluşturulan JavaScript kodunu görüntüle.</span>'+
      '<span id="linkTooltip">Blokları ve bağlantı adresini kaydet.</span>'+
      '<span id="runTooltip">Çalışma alanında bloklar tarafından tanımlanan \\nprogramını çalıştırın. </span>'+
      '<span id="runProgram">Programı Çalıştır</span>'+
      '<span id="resetProgram">Tekrar</span>'+
      '<span id="dialogOk">TAMAM</span>'+
      '<span id="dialogCancel">İptal</span>'+
      '<span id="catLogic">Mantık</span>'+
      '<span id="catLoops">Döngüler</span>'+
      '<span id="catMath">Matematik</span>'+
      '<span id="catText">Metin</span>'+
      '<span id="catLists">Listeler</span>'+
      '<span id="catColour">Renk</span>'+
      '<span id="catVariables">Değişkenler</span>'+
      '<span id="catProcedures">Prosedürler</span>'+
      '<span id="httpRequestError">İstek ile ilgili bir problem var.</span>'+
      '<span id="linkAlert">Bloklarını bu bağlantı ile paylaş:\n\n%1</span>'+
      '<span id="hashError">Üzgünüz, \'%1\' hiç bir kaydedilmiş program ile uyuşmuyor.</span>'+
      '<span id="xmlError">Kaydedilen dosyanız yüklenemiyor\nBlockly\'nin önceki sürümü ile kaydedilmiş olabilir mi?</span>'+
      '<span id="listVariable">liste</span><span id="textVariable">metin</span>'+
    '</div>';
};

apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};
// This file was automatically generated from template.soy.

if (typeof planepage == 'undefined') { var planepage = {}; }

planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none">'+
      '<span id="Plane_rows">Sıralar: %1</span>'+
      '<span id="Plane_getRows">sıralar (%1)</span>'+
      '<span id="Plane_rows1">Birinci sınıf sıralar: (%1)</span>'+
      '<span id="Plane_getRows1">Birinci sınıf sıralar (%1)</span>'+
      '<span id="Plane_rows2">İkinci sınıf sıralar: %1</span>'+
      '<span id="Plane_getRows2">İkinci sınıf sıralar (%1)</span>'+
      '<span id="Plane_seats">Koltuklar: %1</span>'+
      '<span id="Plane_placeholder">?</span>'+
      '<span id="Plane_setSeats">koltuklar =</span>'+
    '</div>';
};

planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var levels = '';
  var iLimit130 = opt_ijData.maxLevel + 1;
   for (var i130 = 1; i130 < iLimit130; i130++) {
     levels +=  ' ' + ((i130 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i130) + '</span>' : (i130 < opt_ijData.level) ? '<span><a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a></span>' : '<span><a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a></span>');
  }

  var output = planepage.messages(null, null, opt_ijData) +
    '<header>' +
      '<div class="home-menu pure-menu pure-menu-open pure-menu-horizontal">' +
        '<a style="float:left;" class="pure-menu-heading" id="title">Uçak</a>' +
         '<div id="div-header-levels">'+ levels +'</div>' +
          '<ul>' +
            '<li class="pure-menu-selected"><a href="index.html">Anasayfa</a></li>' +
            '<li class="pure-menu-selected"><a href="about.html">Hakkında</a></li>' +
          '</ul>' +
        '</div>' +
    '</header>' +
    '<main class="content-wrapper" style="background-color: #f2f2f2; min-height:600px; padding:0.5em; color:#fff; height:92%" ">' +
      '<div class="pure-g-r">' +
        '<div class="pure-u-1"><div id="div-info-box" style="height:100px; color:#000;"><p>';


  switch (opt_ijData.level) {
    case 1:
      output += 'Pilot yolcuları uçağa almadan önce kaç boş koltuk olduğunu öğrenmek istiyor. Pilotun bilgisayarının bu hesaplamayı yapmasını sağlayacak programı ancak sen oluşturabilirsin.';
      break;
    case 2:
      output += 'Havalimanı kalkıştan hemen önce pilottan uçakta kaç kişi olduğunu söylemesini istiyor. Uçağın uçuş güvertesinde iki koltuğu (pilot ve yardımcı pilot için), ve belirli sayıda koltuk sırası var ve her sıra dört koltuk bulunuyor.';
      break;
    case 3:
      output += 'Pilot bu kez büyük bir uçak kullanıyor. Bu uçağın uçuş güvertesinde iki koltuğu (pilot ve yardımcı pilot için), ve belirli sayıda birinci sınıf ve ikinci sınıf yolcu koltuğu sırası var. Her birinci sınıf sırada dört koltuk, her ikinci sınıf sırada beş koltuk bulunuyor.';
      break;
  }

  output += '</p><p>Uçaktaki sıralar değişebiliyor programını yazarken buna dikkat etmelisin. Uçaktaki toplam koltuk sayısını hesaplayan bir formülü oluşturmak senin elinde.</p></div></div></div>';

  output +=
      '<div style="max-height: 600px;">' +
        '<div class="pure-g">' +
          '<div style="letter-spacing:normal; float:left; width:425px; background-color: #F2F2F2; background: url(./assets/image/cloud_0.jpg) no-repeat scroll 0 0 / 425px 334px transparent; border: 1px solid #DDDDDD; height:334px; ">' +
            '<svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="335" viewBox="0 142 600 256"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="245" /><rect class="seat1st" width="10" height="10" x="75" y="256" /><rect class="seat1st" width="10" height="10" x="75" y="274" /><rect class="seat1st" width="10" height="10" x="75" y="285" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="245" /><rect class="seat2nd" width="10" height="8" x="75" y="253" /><rect class="seat2nd" width="10" height="8" x="75" y="271" /><rect class="seat2nd" width="10" height="8" x="75" y="279" /><rect class="seat2nd" width="10" height="8" x="75" y="287" /></g>'+
          // '<linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient>'+

            '</defs><path d="M 404,1 373,15 230,244 230,297 373,524 404,542 330,351 330,189 z" id="wing" /><path d="m 577,269 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 481,301 h -407 c -24,0 -65,-15 -71,-24 c 0,-4 -16,-26 75,-39 h 407 l 92,31 z" id="fuselage" /><text id="row1stText" x="30" y="400"></text><text id="row2ndText" x="350" y="402"></text><text x="30" y="160"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="2" dx="4">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="2" dx="4">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="256" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="274" />' : '') + '</svg>'+
          '</div>' +
          '<div id="div-blockly" style="float:left;">'+
          '<div id="div-blockly-header" style="background-color:#FF9900; display:block; padding:0.25em 0;">'+
            '<div id="div-blockly-header-first" style="width:172px; border-right:1px solid #f2f2f2; color:#fff; text-align:center; float:left; font-weight:700;">Bloklar</div>'+
            '<div style="color:#fff; text-align:center; font-weight:700;">Blokların Buraya Topla</div>'+
          '</div>' + planepage.toolbox(null, null, opt_ijData) +
          '<div id="blockly" style="position: relative;"></div>'+
          '</div>'
        '</div>'+
      '</div>'+
    '</main>';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
