
function Clipboard(loadPath) {

	var snippets = document.querySelectorAll('.snippet'); [].forEach.call(snippets,
	function(snippet) {
		snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src="' + loadPath + 'clippy.svg" alt="Copy to clipboard"></button>');
	});

	snipperAction();
}

function snipperAction() {
	var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
		target: function(trigger) {
			return trigger.nextElementSibling;
		}
	});
	
	clipboardSnippets.on('success',
	function(e) {
		e.clearSelection();
		showTooltip(e.trigger, '已复制');
	});
	
	clipboardSnippets.on('error',
	function(e) {
		showTooltip(e.trigger, fallbackMessage(e.action));
	});
	
	var btns = document.querySelectorAll('.btn');
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('mouseleave', clearTooltip);
		btns[i].addEventListener('blur', clearTooltip);
	}
	
	function clearTooltip(e) {
		e.currentTarget.setAttribute('class', 'btn');
		e.currentTarget.removeAttribute('aria-label');
	}
	
	function showTooltip(elem, msg) {
		elem.setAttribute('class', 'btn tooltipped tooltipped-s');
		elem.setAttribute('aria-label', msg);
	}
	
	function fallbackMessage(action) {
		var actionMsg = '';
		var actionKey = (action === 'cut' ? 'X': 'C');
		if (/iPhone|iPad/i.test(navigator.userAgent)) {
			actionMsg = 'No support :(';
		} else if (/Mac/i.test(navigator.userAgent)) {
			actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
		} else {
			actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
		}
		return actionMsg;
	}
}
