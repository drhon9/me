Dr.Api = new function() {
    var that = this;

    // Dr.Api.navReset();
    this.navReset= function(id){
        let idData = id;
        $('#contentsId').empty();

        switch(idData){
            case "tourEvent" : 
            console.log("tourEvent")
                $("#contentsId").html("<iframe src='./view/contents/_Tour.html'></iframe>");  
                //$('#contentsId').load("./view/contents/_Tour.html");
            break;

            case "bandEvent" : 
                $('#contentsId').load("./view/contents/_Band.html");
            break;

        }
        
    }
}