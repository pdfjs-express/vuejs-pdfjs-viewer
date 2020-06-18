//create a new style sheet
let sheet = (function() {
    let style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
   })();
   function editToolBar(){
    //when the page is resized, the viewer hides and move some buttons around.
    //this function forcibly show all buttons so none of them disappear or re-appear on page resize
    removeGrowRules();
  
    /* Reorganizing the UI */
    // the 'addElemFromSecondaryToPrimary' function moves items from the secondary nav into the primary nav
    // there are 3 primary nav regions (toolbarViewerLeft, toolbarViewerMiddle, toolbarViewerRight)
  
    //adding elements to left part of toolbar
    addElemFromSecondaryToPrimary('pageRotateCcw', 'toolbarViewerLeft')
    addElemFromSecondaryToPrimary('pageRotateCw', 'toolbarViewerLeft')
    addElemFromSecondaryToPrimary('zoomIn', 'toolbarViewerLeft')
    addElemFromSecondaryToPrimary('zoomOut', 'toolbarViewerLeft')
  
    //adding elements to middle part of toolbar
    addElemFromSecondaryToPrimary('previous', 'toolbarViewerMiddle')
    addElemFromSecondaryToPrimary('pageNumber', 'toolbarViewerMiddle')
    addElemFromSecondaryToPrimary('numPages', 'toolbarViewerMiddle')
    addElemFromSecondaryToPrimary('next', 'toolbarViewerMiddle')
  
    //adding elements to right part of toolbar
    addElemFromSecondaryToPrimary('secondaryOpenFile', 'toolbarViewerRight')
  
    /* Changing icons */
    changeIcon('previous', 'icons/baseline-navigate_before-24px.svg')
    changeIcon('next', 'icons/baseline-navigate_next-24px.svg')
    changeIcon('pageRotateCcw', 'icons/baseline-rotate_left-24px.svg')
    changeIcon('pageRotateCw', 'icons/baseline-rotate_right-24px.svg')
    changeIcon('viewFind', 'icons/baseline-search-24px.svg');
    changeIcon('zoomOut', 'icons/baseline-zoom_out-24px.svg')
    changeIcon('zoomIn', 'icons/baseline-zoom_in-24px.svg')
    changeIcon('sidebarToggle', 'icons/baseline-toc-24px.svg')
    changeIcon('secondaryOpenFile', './icons/baseline-open_in_browser-24px.svg')
  
    /* Hiding elements */
    removeElement('secondaryToolbarToggle')
    removeElement('scaleSelectContainer')
    removeElement('presentationMode')
    removeElement('openFile')
    removeElement('print')
    removeElement('download')
    removeElement('viewBookmark')
   }
   function changeIcon(elemID, iconUrl){
    let element = document.getElementById(elemID);
    let classNames = element.className;
    classNames = elemID.includes('Toggle')? 'toolbarButton#'+elemID :
   classNames.split(' ').join('.');
    classNames = elemID.includes('view')? '#'+elemID+'.toolbarButton' : '.'+classNames
    classNames+= "::before";
    addCSSRule(sheet, classNames, `content: url(${iconUrl}) !important`, 0)
   }
   function addElemFromSecondaryToPrimary(elemID, parentID){
    let element = document.getElementById(elemID);
    let parent = document.getElementById(parentID);
    element.style.minWidth = "0px";
    element.innerHTML =''
    parent.append(element);
   }
   function removeElement(elemID){
    let element = document.getElementById(elemID);
    element.parentNode.removeChild(element);
   }
   function removeGrowRules(){
    addCSSRule(sheet, '.hiddenSmallView *', 'display:block !important');
    addCSSRule(sheet, '.hiddenMediumView', 'display:block !important');
    addCSSRule(sheet, '.hiddenLargeView', 'display:block !important');
    addCSSRule(sheet, '.visibleSmallView', 'display:block !important');
    addCSSRule(sheet, '.visibleMediumView', 'display:block !important');
    addCSSRule(sheet, '.visibleLargeView', 'display:block !important');
   }
   function addCSSRule(sheet, selector, rules, index) {
    if("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
    }
    else if("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
    }
   }
   window.onload = editToolBar