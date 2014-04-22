// This file was automatically generated from common.soy.
if (typeof apps == 'undefined') { var apps = {}; }

apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">' +
            '<span id="subtitle">görsel bir programlama ortamı</span>' +
            '<span id="blocklyMessage">Blockly</span>' +
            '<span id="codeTooltip">Oluşturulan JavaScript kodunu görüntüle.</span>' +
            '<span id="linkTooltip">Blokları ve bağlantı adresini kaydet.</span>' +
            '<span id="runTooltip">Çalışma alanında bloklar tarafından tanımlanan \\nprogramını çalıştırın.</span>' +
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
  return '<div id="dialogCode" class="dialogHiddenContent">' +
           '<pre id="containerCode"></pre>' +
         '</div>';
};
apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">TAMAM</button></div>';
};
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) +
    '<div style="display: none">' +
      '<span id="Maze_moveForward">ileri git</span>' +
      '<span id="Maze_turnLeft">sola dön</span>' +
      '<span id="Maze_turnRight">sağa dön</span>' +
      '<span id="Maze_doCode">yap</span>' +
      '<span id="Maze_elseCode">değilse</span>' +
      '<span id="Maze_helpIfElse">Eğer-değilse ifadeleri ya bir şeyi ya da diğerini yapar.</span>' +
      '<span id="Maze_pathAhead">eğer önde yol varsa</span>' +
      '<span id="Maze_pathLeft">eğer solda yol varsa</span>' +
      '<span id="Maze_pathRight">eğer sağda yol varsa</span>' +
      '<span id="Maze_repeatUntil">kadar tekrar et</span>' +
      '<span id="Maze_moveForwardTooltip">Oyuncuyu bir boşluk ileri götürür.</span>' +
      '<span id="Maze_turnTooltip">Oyuncuyu sola veya sağa döndürür.</span>' +
      '<span id="Maze_ifTooltip">Eğer belirtilen yönde yol varsa, \\nbelirtilen hareketleri yap.</span>' +
      '<span id="Maze_ifelseTooltip">Eğer belirtilen yönde yol varsa, \\nbelirtilen hareketlerin ilk bloğunu \\nyap, yoksa ikinci bloğu yap.</span>' +
      '<span id="Maze_whileTooltip">Bitiş noktasına ulaşana kadar kapsanan \\nhareketleri yap. </span>' +
      '<span id="Maze_capacity0">%0 adet bloğun kaldı.</span>' +
      '<span id="Maze_capacity1">%1 adet bloğun kaldı.</span>' +
      '<span id="Maze_capacity2">%2 adet bloğun kaldı.</span>' +
      '<span id="Maze_nextLevel">Tebrikler! %1. seviyeye geçmeye hazır mısın?</span>' +
      '<span id="Maze_finalLevel">Tebrikler! Son seviyeyi de tamamladın!</span>' +
    '</div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var levels = '';
  var iLimit130 = opt_ijData.maxLevel + 1;
   for (var i130 = 1; i130 < iLimit130; i130++) {
     levels +=  ' ' + ((i130 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i130) + '</span>' : (i130 < opt_ijData.level) ? '<span><a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a></span>' : '<span><a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a></span>');
  }

  var output = mazepage.messages(null, null, opt_ijData) +
      '<header>' +
        '<div class="home-menu pure-menu pure-menu-open pure-menu-horizontal">' +
          '<a style="float:left;" class="pure-menu-heading" id="title">Labirent</a>' +
         '<div id="div-header-levels">'+ levels +'</div>' +
          '<ul>' +
            '<li class="pure-menu-selected"><a href="index.html">Anasayfa</a></li>' +
            '<li class="pure-menu-selected"><a href="about.html">Hakkında</a></li>' +
          '</ul>' +
        '</div>' +
      '</header>' +
      '<main class="content-wrapper" style="background-color: #f2f2f2; min-height:600px; padding:0.5em; color:#000; height:92%">' +
        '<div class="pure-g-r">' +
          '<div class="pure-u-1"><div id="div-info-box"></div></div>' +
        '</div>';

  output +=
        '<div style="max-height: 600px">' +
          '<div class="pure-g">' +
            '<div style="background:#FF9900; width:400px; letter-spacing:normal; float:left; ">' +
              '<div id="visualization">' +
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px">' +
                  '<g id="look">' +
                    '<path d="M 0,-15 a 15 15 0 0 1 15 15" />' +
                    '<path d="M 0,-35 a 35 35 0 0 1 35 35" />' +
                    '<path d="M 0,-55 a 55 55 0 0 1 55 55" />' +
                  '</g>' +
                '</svg>' +
                '<div id="capacityBubble">' +
                  '<div id="capacity"></div>' +
                '</div>' +
              '</div>' +
              '<table width="400">' +
                '<tr>' +
                  '<td style="width: 190px; text-align: center; vertical-align: top;">' +
                    '<button id="codeButton" class="notext" title="Oluşturulan JavaScript kodunu görüntüle."><img src="assets/image/1x1.gif" class="code icon21">Kodu Görüntüle</button>' +
                  '</td>' +
                  '<td>' +
                    '<button id="runButton" class="primary" title="Oyuncuya bloklar ne diyorsa onu yaptırır."><img src="./assets/image/1x1.gif" class="run icon21">Programı Çalıştır</button>' +
                    '<button id="resetButton" class="primary" style="display: none" title="Oyuncuyu labirentin başlangıcına geri koy."><img src="./assets/image/1x1.gif" class="stop icon21">Tekrar</button>' +
                  '</td>' +
                '</tr>' +
              '</table>' +
            '</div>' +
            '<div id="div-blockly" style="float:left;">' +
            '<div id="div-blockly-header" style="background-color:#FF9900; display:block; padding:0.25em 0;">'+
              '<div id="div-blockly-header-first" style="width:172px; border-right:1px solid #f2f2f2; color:#fff; text-align:center; float:left; font-weight:700;">Bloklar</div>'+
              '<div style="color:#fff; text-align:center; font-weight:700;">Bloklarını Buraya Topla</div>'+
            '</div>'+ mazepage.toolbox(null, null, opt_ijData) +
            '<div id="blockly" style="position: relative;"></div>' +
              '<svg version="1.1" height="1px" width="1px">' +
                '<text id="arrowTest" style="font-family: sans-serif; font-size: 11pt;">' + '⟲⟳</text>' +
              '</svg>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) +
              '<div id="dialogDone" class="dialogHiddenContent">' +
                '<span id="dialogDoneText" style="font-size: large; margin: 0.25em; float:left;"></span>' +
                '<img style="floaT:left; position:relative; margin:0; "src="./assets/image/1x1.gif" id="pegSpin">'+
                '<span>'+
                '<div id="dialogDoneButtons" class="farSide" style="padding-left: 1em; float:left;"></div></span>' +
              '</div>' +
              '<div id="dialogHelpStack" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                    '<td>&nbsp;</td>' +
                    '<td>Bir kaç \'ileri git\' bloğunu bir araya getirerek beni hedefe ulaştır.</td>' +
                    '<td valign="top"><img src="./assets/image/help_stack.png" class="mirrorImg" height=63 width=136></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpOneTopBlock" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                    '<td>&nbsp;</td>' +
                    '<td>Bu bölümde beyaz çalışma alanındaki bütün blokları bir araya getirmelisin.</td>' +
                    '<td><img src="./assets/image/labyrinth_example.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpRun" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td>Ne olacağını görmek için programınızı çalıştırın.</td>' +
                    '<td rowspan=2><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                  '<tr>' +
                    '<td>' +
                      '<div><img src="./assets/image/help_run.png" class="mirrorImg" height=27 width=141></div>' +
                    '</td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpReset" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td>Programınız labirenti çözemedi. \'Tekrar\' butonuna basın ve yeniden deneyin.</td>' +
                    '<td rowspan=2><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                  '<tr>' +
                    '<td><div><img src="./assets/image/help_run.png" class="mirrorImg" height=27 width=141></div></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpRepeat" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                      '<td><img src="./assets/image/help_up.png"></td>' +
                      '<td>Sadece iki blok kullanarak bu yolun sonuna ulaşın. Bir bloğu birden fazla çalıştırmak için \'döngü\' kullanın.</td>' +
                      '<td><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpCapacity" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                    '<td>&nbsp;</td>' +
                    '<td>Bu seviye için tüm blokları kullandınız. Yeni bir blok oluşturmak için, öncelikle varolan bir bloğu silmeniz gerekir.</td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpRepeatMany" class="dialogHiddenContent">' +
                '<table>' +
                '<tr>' +
                  '<td><img src="./assets/image/help_up.png"></td>' +
                  '<td>\'döngü\' bloğunun içerisine birden fazla blok yerleştirebilirsiniz.</td>' +
                  '<td><img src="./assets/image/help.png"></td>' +
                '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpSkins" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                  // '<td><img src="help.png"></td><td>Favori oyuncunu bu menüden seç.</td>' +
                  '<td>&nbsp;</td>' +
                  // '<td><img src="help_up.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpIf" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help_up.png"></td>' +
                    '<td>Bir \'eğer\' bloğu sadece koşul doğru olduğunda birşeyler yapar. Sola dönmeyi eğer sola bir yol varsa deneyin.</td>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpMenu" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help_up.png"></td>' +
                    '<td id="helpMenuText">\'Eğer\' blokunun durumunu değiştirmek için %1 ikonuna tıkla.</td>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpIfElse" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help_down.png"></td>' +
                    '<td>Eğer-değilse ifadeleri ya bir şeyi ya da diğerini yapar.</td> ' +
                    '<td><img src="./assets/image/help.png"></td>' +
                  '</tr>' +
                '</table>' +
              '</div>' +
              '<div id="dialogHelpWallFollow" class="dialogHiddenContent">' +
                '<table>' +
                  '<tr>' +
                    '<td><img src="./assets/image/help.png"></td>' +
                    '<td>&nbsp;</td>' +
                    '<td>Bu karışık labirenti çözebilir misin? Sol taraftaki duvarı izlemeyi deneyin. Sadece gelişmiş programcılar!'+ apps.ok(null, null, opt_ijData) +'</td>'+
                  '</tr>' +
                '</table>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</main>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};