class Utils {

  /*
   * Returns current text selection
   */
  getSelection() {
    return (document.selection && document.selection.createRange().text) ||
         (window.getSelection && window.getSelection().toString()) || null;
  }
}

const utils = new Utils();
export default utils;
