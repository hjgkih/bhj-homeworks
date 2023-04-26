const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function closeTabs() {
  tab.forEach((i) => {
    if (i.className == 'tab tab_active') {
      i.className = 'tab';
    }
  })
}

function closeTabsContent() {
  tabContent.forEach((i) => {
    if (i.className == 'tab__content tab__content_active') {
      i.className = 'tab__content';
    }
  })
}

tab.forEach((i) => {
  i.onclick = () => {
    closeTabs();

    if (i.className == 'tab tab_active') {
      i.className == 'tab';
      return false;
    }

    i.className += ' tab_active';

    let counter = tab.findIndex(i => i.className.includes('tab tab_active'));

    closeTabsContent(); 

    if(tabContent[counter].className == 'tab__content tab__content_active'){
      tabContent[counter].className = 'tab__conent';
    }

    tabContent[counter].className += ' tab__content_active';
    
    return false;

  }
})