/**
 * Blockly Apps: Code
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code application.
 * @author fraser@google.com (Neil Fraser)
 */

BlocklyApps.LANG = 'tr';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // If the XML tab was open, save and render the content.
  // if (document.getElementById('tab_xml').className == 'tabon') {
  //   var xmlTextarea = document.getElementById('content_xml');
  //   var xmlText = xmlTextarea.value;
  //   var xmlDom = null;
  //   try {
  //     xmlDom = Blockly.Xml.textToDom(xmlText);
  //   } catch (e) {
  //     var q =
  //         window.confirm(BlocklyApps.getMsg('Code_badXml').replace('%1', e));
  //     if (!q) {
  //       // Leave the user on the XML tab.
  //       return;
  //     }
  //   }
  //   if (xmlDom) {
  //     Blockly.mainWorkspace.clear();
  //     Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
  //   }
  //}

  // Deselect all tabs and hide all panes.
  // for (var i = 0; i < Code.TABS_.length; i++) {
  //   var name = Code.TABS_[i];
  //   document.getElementById('tab_' + name).className = 'taboff';
  //  document.getElementById('content_' + name).style.visibility = 'hidden';
  // }

  // Select the active tab.
  // Code.selected = clickedName;
  // document.getElementById('tab_' + clickedName).className = 'tabon';
  // // Show the selected pane.
  // document.getElementById('content_' + clickedName).style.visibility =
  //     'visible';
  Code.renderContent();
  Blockly.fireUiEvent(window, 'resize');
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('div-content-javascript');
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'div-content-javascript') {
    var code = Blockly.JavaScript.workspaceToCode();
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'js');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_python') {
    code = Blockly.Python.workspaceToCode();
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_dart') {
    code = Blockly.Dart.workspaceToCode();
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'dart');
      content.innerHTML = code;
    }
  }
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  BlocklyApps.init();

  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {path: '../../',
       toolbox: toolbox,
       trashcan: true});

  // Add to reserved word list: Local variables in execution evironment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  var blocklyDiv = document.getElementById('div-blockly');
  
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 470) + 'px';
  };
  window.addEventListener('scroll', function() {
      onresize();
      Blockly.fireUiEvent(window, 'resize');
    });
  window.addEventListener('resize', onresize);
  onresize();
  Blockly.fireUiEvent(window, 'resize');   
  
  BlocklyApps.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload();
  }

  //Code.tabClick(Code.selected);
  Blockly.fireUiEvent(window, 'resize');

  BlocklyApps.bindClick('trashButton',
      function() {Code.discard(); Code.renderContent();});
  BlocklyApps.bindClick('runButton', Code.runJS);

  // for (var i = 0; i < Code.TABS_.length; i++) {
  //   var name = Code.TABS_[i];
  //   BlocklyApps.bindClick('tab_' + name,
  //       function(name_) {return function() {Code.tabClick(name_);};}(name));
  // }

  // Lazy-load the syntax-highlighting.
  window.setTimeout(BlocklyApps.importPrettify, 1);
};

if (window.location.pathname.match(/readonly.html$/)) {
  window.addEventListener('load', BlocklyApps.initReadonly);
} else {
  window.addEventListener('load', Code.init);
}

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Code.runJS = function() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw BlocklyApps.getMsg('Code_timeout');
    }
  };
  var code = Blockly.JavaScript.workspaceToCode();
  var PrettifiedCode = BlocklyApps.stripCode(code);
console.log(PrettifiedCode);
  var pre = document.getElementById('pre-js');
  pre.textContent = PrettifiedCode;

  if (typeof prettyPrintOne == 'function') {
    PrettifiedCode = pre.innerHTML;
    PrettifiedCode = prettyPrintOne(PrettifiedCode, 'js');
    pre.innerHTML = PrettifiedCode;
  }
  
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(BlocklyApps.getMsg('Code_badCode').replace('%1', e));
  }
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 ||
      window.confirm(BlocklyApps.getMsg('Code_discard').replace('%1', count))) {
    Blockly.mainWorkspace.clear();
    window.location.hash = '';
  }
};
