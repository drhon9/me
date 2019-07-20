Dr.Api = new function() {
    var that = this;

    // Dr.Api.navReset();
    this.mainSet= function(){
        let mainPage =$("#contentsId");
        $.get("./view/contents/_bandSection.html?check=" + Date.now(), function (data) {
            mainPage.append(data);
        });
        $.get("./view/contents/_tourSection.html?check=" + Date.now(), function (data) {
            mainPage.append(data);
        });
        
        
        
    }
}