// This file was automatically generated from common.soy.
if (typeof apps == 'undefined') { var apps = {}; }

apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">'+
            '<span id="subtitle">görsel bir programlama ortamı</span>'+
            '<span id="blocklyMessage">Blockly</span>'+
            '<span id="codeTooltip">Oluşturulan JavaScript kodunu görüntüle.</span>'+
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
            '<span id="listVariable">liste</span>'+
            '<span id="textVariable">metin</span>'+
          '</div>';
};

apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};
// This file was automatically generated from template.soy.

if (typeof codepage == 'undefined') { var codepage = {}; }

codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) +
    '<div style="display: none">'+
      '<span id="Code_badXml">XML ayrıştırma hatası:\n%1\n\nDeğişikliklerden vazgeçmek için \'Tamam\'ı, düzenlemeye devam etmek için \'İptal\' seçeneğini seçiniz.</span>'+
      '<span id="Code_badCode">Program hatası:\n %1</span>'+
      '<span id="Code_timeout">Maksimum yürütme yinelemeleri aşıldı.</span>'+
      '<span id="Code_discard">Tüm %1 blok silinsin mi?</span>'+
    '</div>';
};

codepage.start = function(opt_data, opt_ignored, opt_ijData) {
 return codepage.messages(null, null, opt_ijData) +
  '<div style="letter-spacing:normal; float:left; width:400px; height:456px; background:#FF9900;">'+
    '<div id="div-content-javascript"><pre id="pre-js"></pre></div>'+
      '<table width="400">'+
        '<tr>'+
          '<td style="width: 190px; text-align:center; vertical-align: top;">'+
            '<button id="trashButton" class="notext" title="Bütün blokları at.">'+
              '<img src="assets/image/1x1.gif" class="trash icon21">Kodu Temizle'+
            '</button>'+
          '</td>'+
          '<td>'+
            '<button id="runButton" class="notext primary" title="Çalışma alanında bloklar tarafından tanımlanan &#013;programını çalıştırın. ">'+
              '<img src="assets/image/1x1.gif" class="run icon21">Programı Çalıştır'+
            '</button>'+
          '</td>'+
        '</tr>'+
      '</table>'+
    '</div>'+
    '<div id="div-blockly" style="float:left;">'+
    '<div id="div-blockly-header" style="background-color:#FF9900; display:block; padding:0.25em 0;">'+
      '<div id="div-blockly-header-first" style="border-right:1px solid #f2f2f2; color:#fff; text-align:center; float:left; font-weight:700;">Bloklar</div>'+
      '<div style="color:#fff; text-align:center; font-weight:700;">Bloklarını Buraya Topla</div>'+
    '</div>'+
    codepage.toolbox(null, null, opt_ijData) + '<div id="blockly" style="position: relative; height:421px;"></div>' +
  '</div>';
};
