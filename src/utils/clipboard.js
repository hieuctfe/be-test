export const copyToClipboard = textToClipboard => {
  if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", textToClipboard);
  } else {
    // create a temporary element for the execCommand method
    var forExecElement = CreateElementForExecCommand(textToClipboard);

    /* Select the contents of the element 
                  (the execCommand for 'copy' method works on the selection) */
    SelectContent(forExecElement);

    // UniversalXPConnect privilege is required for clipboard access in Firefox
    if (window.netscape && window.netscape.security) {
      window.netscape.security.PrivilegeManager.enablePrivilege(
        "UniversalXPConnect"
      );
    }

    // Copy the selected content to the clipboard
    // Works in Firefox and in Safari before version 5
    document.execCommand("copy", false, null);

    // remove the temporary element
    document.body.removeChild(forExecElement);
  }
};

function CreateElementForExecCommand(textToClipboard) {
  var forExecElement = document.createElement("div");
  // place outside the visible area
  forExecElement.style.position = "absolute";
  forExecElement.style.left = "-10000px";
  forExecElement.style.top = "-10000px";
  // write the necessary text into the element and append to the document
  forExecElement.textContent = textToClipboard;
  document.body.appendChild(forExecElement);
  // the contentEditable mode is necessary for the  execCommand method in Firefox
  forExecElement.contentEditable = true;

  return forExecElement;
}

function SelectContent(element) {
  // first create a range
  var rangeToSelect = document.createRange();
  rangeToSelect.selectNodeContents(element);

  // select the contents
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(rangeToSelect);
}
