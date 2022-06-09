function toggleController(classBlock, classButton, classBox){
    $(classBlock + ' > ' + classButton).click(function(event){
        $(this).parent().find(classBox).slideToggle();
        $(this).toggleClass('active');
    });
}

toggleController('.spoiler','.spoiler__header','.spoiler__content');

$('.wiki').MVisionToggleClass({
    classButton: 'wiki__nav-item',
    toggleClassButton: 'active',
    dataButtonAttr: 'data-open-tab',
    classBox: 'wiki__content',
    toggleClassBox: 'active',
    dataBoxAttr: 'data-name-tab',
    defaultElement: true,
    defaultIndexElement: 0,
    ancoreLinks: true,
});
