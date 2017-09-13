$(document).ready(function() {



    //Agents and Agency .......................................................   
    $("#suspend-modal-agency").on('click', function() {
        console.log("suspend-modal-agency");
        $("#suretyUpdate").removeClass("reinstate-default");
        $("#suretyUpdate").addClass("suspend-default");

        $("#state-action-chk").prop('checked', false);
        $("#state-action-label").text("Suspended Statewided?");
        $("#state-reason-label").text("State's Suspension Reason");
        $("#county-reason-label").text("Suspension Reason");

        $("#history1-date-label").text("Suspension Date:");
        $("#history1-state-label").text("State’s Suspension Reason:");
        $("#history1-county-label").text("County Suspension Reason:");
        $("#history2-date-label").text("Suspension Date:");
        $("#history2-state-label").text("State’s Suspension Reason:");
        $("#history2-county-label").text("County Suspension Reason:");

        $(".modal-suspend-title").text("Regulate Agency");


    });
    $("#suspend-modal-agent").on('click', function() {
        console.log("suspend-modal-agent");
        $("#suretyUpdate").removeClass("reinstate-default");
        $("#suretyUpdate").addClass("suspend-default");

        $("#state-action-chk").prop('checked', false);
        $("#state-action-label").text("Suspended Statewided?");
        $("#state-reason-label").text("State's Suspension Reason");
        $("#county-reason-label").text("Suspension Reason");

        $("#history1-date-label").text("Suspension Date:");
        $("#history1-state-label").text("State’s Suspension Reason:");
        $("#history1-county-label").text("County Suspension Reason:");
        $("#history2-date-label").text("Suspension Date:");
        $("#history2-state-label").text("State’s Suspension Reason:");
        $("#history2-county-label").text("County Suspension Reason:");

        $(".modal-suspend-title").text("Regulate Agent");
    });




    $("#suspend-modal").on('click', function() {

        $("#suretyUpdate").removeClass("reinstate-default");
        $("#suretyUpdate").addClass("suspend-default");

        $("#state-action-chk").prop('checked', false);
        $("#state-action-label").text("Suspended Statewided?");
        $("#state-reason-label").text("State's Suspension Reason");
        $("#county-reason-label").text("Suspension Reason");

        $("#history1-date-label").text("Suspension Date:");
        $("#history1-state-label").text("State’s Suspension Reason:");
        $("#history1-county-label").text("County Suspension Reason:");
        $("#history2-date-label").text("Suspension Date:");
        $("#history2-state-label").text("State’s Suspension Reason:");
        $("#history2-county-label").text("County Suspension Reason:");
    });


    $("#reinstate-modal").on('click', function() {

        $("#suretyUpdate").removeClass("suspend-default");
        $("#suretyUpdate").addClass("reinstate-default");

        $("#state-action-chk").prop('checked', false);
        $("#state-action-label").text("Reinstate Statewided?");
        $("#state-reason-label").text("State's Reinstate Reason");
        $("#county-reason-label").text("Reinstate Reason");

        $("#history1-date-label").text("Reinstatement Date:");
        $("#history1-state-label").text("State’s Reinstatement Reason:");
        $("#history1-county-label").text("County Reinstatement Reason:");
        $("#history2-date-label").text("Reinstatement Date:");
        $("#history2-state-label").text("State’s Reinstatement Reason:");
        $("#history2-county-label").text("County Reinstatement Reason:");

    });
    $(".today").text(getCurrentDate("mm-dd-yyyy", "/"));
    //.......................................................   



    //.......................................................  
    bondRequestDfault();

    function bondRequestDfault() {
        $("#bond-printed-date-chk").prop('checked', false);
        $("#bond-requested-date-chk").prop('checked', false);
        $("#bond-details-save").prop('disabled', true);

        $("#bond-printed-date-input").toggle(this.checked);
        $("#bond-requested-date-input").toggle(this.checked);
        $("#bond-requested-chks-holder").toggle(this.checked);
    }

    $('#bond-printed-date-chk').click(function() {
        $("#bond-printed-date-input").toggle(this.checked);
    });
    $('#bond-requested-date-chk').click(function() {
        $("#bond-requested-date-input").toggle(this.checked);
        $("#bond-requested-chks-holder").toggle(this.checked);
    });

    $('#bond-requested-chks-holder input').on('change', function() {
        if ($('input[name=bond-requested-chk]:checked', '#bond-requested-chks-holder').val() === "p") {
            $("#bond-details-save").prop('disabled', true);
        } else {
            $("#bond-details-save").prop('disabled', false);
        }
    });
    //.......................................................  


    //....................................................... 
    $("#show-increase-request").on('click', function() {
        var $radios = $('input:radio[name=bond-requested-chk]');
        if ($radios.is(':checked') === false) {
            $radios.filter('[value=APPROVE]').prop('checked', true);
        }
    });
    //....................................................... 



    //.......................................................   
    function setModalMaxHeight(element) {
        this.$element = $(element);
        this.$content = this.$element.find('.modal-content');
        var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
        var dialogMargin = $(window).width() < 768 ? 20 : 60;
        var contentHeight = $(window).height() - (dialogMargin + borderWidth);
        var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
        var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
        var maxHeight = contentHeight - (headerHeight + footerHeight);

        this.$content.css({
            'overflow': 'hidden'
        });

        this.$element
            .find('.modal-body').css({ 'max-height': maxHeight, 'overflow-y': 'auto' });
    }

    $('.modal').on('show.bs.modal', function() {
        $(this).show();
        setModalMaxHeight(this);
    });

    $(window).resize(function() {
        if ($('.modal.in').length != 0) {
            setModalMaxHeight($('.modal.in'));
        }
    });

    $(".toggle-btn").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('ul.nav.nav-tabs  a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
    //.......................................................   



    //.......................................................   
    var response = false;

    function responsiveTabs() {
        if (response) {
            return false;
        }
        response = true;
        fakewaffle.responsiveTabs(['xs']);
    }
    //.......................................................   



    //.......................................................   
    function chartRender() {
        console.log("dfgdfgdf")
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",
            title: {
                text: ""
            },
            animationEnabled: true,
            axisX: {
                valueFormatString: "MMM",
                interval: 1,
                intervalType: "month"

            },
            axisY: {
                includeZero: false,
                gridColor: "#F2EFF5"

            },
            data: [{
                    lineColor: "#55426D",
                    type: "line",
                    markerColor: "#31253F",
                    //lineThickness: 3,        
                    dataPoints: [
                        { x: new Date(2012, 00, 1), y: 450 },
                        { x: new Date(2012, 01, 1), y: 414 },
                        { x: new Date(2012, 02, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle", borderColor: "red" },
                        { x: new Date(2012, 03, 1), y: 460 },
                        { x: new Date(2012, 04, 1), y: 450 },
                        { x: new Date(2012, 05, 1), y: 500 },
                        { x: new Date(2012, 06, 1), y: 480 },
                        { x: new Date(2012, 07, 1), y: 480 },
                        { x: new Date(2012, 08, 1), y: 410, indexLabel: "lowest", markerColor: "#55426D", markerType: "cross" },
                        { x: new Date(2012, 09, 1), y: 500 },
                        { x: new Date(2012, 10, 1), y: 480 },
                        { x: new Date(2012, 11, 1), y: 510 }

                    ]
                }

            ]
        });
        chart.render();
    }

    $('#agencyQuotaTab').on('shown.bs.tab', function(e) { chartRender(); })
        //.......................................................   



    //.......................................................   
    $('.clickable-row').on('click', function(e) {

        $('.clickable-row').removeClass('active');
        $(this).addClass('active');

        responsiveTabs();

        if ($(e.currentTarget).hasClass('agent')) {
            $('#agencyDetails').hide();
            $('#bondDetails').hide();
            $('#agentDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#agentDetails").offset().top - 90 }, 800);

        } else if ($(e.currentTarget).hasClass('agency')) {
            $("#agentDetails").hide();
            $('#bondDetails').hide();
            $('#agencyDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#agencyDetails").offset().top - 90 }, 800);

        } else if ($(e.currentTarget).hasClass('bond')) {
            $("#agentDetails").hide();
            $("#agencyDetails").hide();

            $('.increase-pending-yes-label').hide();
            $('.increase-pending-no-label').show();

            $('.increase-pending-yes-Table-label').hide();
            $('.increase-pending-no-Table-label').show();

            $('#bondDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#bondDetails").offset().top - 90 }, 800);
        }


        $('.clickable-row-toggle').removeClass('active')
        $('.suspended-text').show();
        $('.surety-status.active').show();
        $('.surety-status.in-active').hide();

        $('.bond').prop('checked', 'checked');
        $(".bond").prop('disabled', true);
        $('.bond').css('cursor', 'default');
        $('.bonded-agent-chk-label').css('cursor', 'default');
        $('.bonded-agency-chk-label').css('cursor', 'default');
        $(".bonded-agent-chk-label").html("Agent Bonded on <b>06/12/2017</b>");
        $(".bonded-agency-chk-label").html("Agency Bonded on <b>06/12/2017</b>");

    });

    function hidePageDetails() {
        $('#agencyDetails').hide();
        $("#agentDetails").hide();
        $("#bondDetails").hide();
        $('.clickable-row').removeClass('active');
        $('.clickable-row-toggle').removeClass('active');
    }

    $('.cancel-detail').click(function() {
        hidePageDetails();
    });


    $('.clickable-row-toggle').on('click', function(e) {

        $('.clickable-row').removeClass('active');
        $(this).addClass('active');

        responsiveTabs();

        if ($(e.currentTarget).hasClass('agent')) {
            $('#agencyDetails').hide();
            $('#bondDetails').hide();
            $('#agentDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#agentDetails").offset().top - 90 }, 800);

        } else if ($(e.currentTarget).hasClass('agency')) {
            $("#agentDetails").hide();
            $('#bondDetails').hide();
            $('#agencyDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#agencyDetails").offset().top - 90 }, 800);

        } else if ($(e.currentTarget).hasClass('bond')) {
            $("#agentDetails").hide();
            $("#agencyDetails").hide();

            $('.increase-pending-yes-label').hide();
            $('.increase-pending-no-label').show();

            $('.increase-pending-yes-Table-label').hide();
            $('.increase-pending-no-Table-label').show();

            $('#bondDetails').fadeIn();
            $('#page-content-wrapper').animate({ scrollTop: $("#bondDetails").offset().top - 90 }, 800);
        }


        $('.suspended-text').hide();
        $('.surety-status.active').hide();
        $('.surety-status.in-active').show();
        $('.checked').hide();
        $('.unchecked').show();

        $('.bond').removeAttr('checked');
        $(".bond").prop('disabled', false);
        $('.bond').css('cursor', 'pointer');
        $('.bonded-agent-chk-label').css('cursor', 'pointer');
        $('.bonded-agency-chk-label').css('cursor', 'pointer');
        $(".bonded-agent-chk-label").text("Bond Agent");
        $(".bonded-agency-chk-label").text("Bond Agency");
    });
    //.......................................................  




    //....................................................... 
    $('.increase-pending-yes').on('click', function(e) {

        $('.increase-pending-yes').removeClass('active');
        $(this).addClass('active');
        responsiveTabs();

        $('.increase-pending-yes-label').show();
        $('.increase-pending-no-label').hide();

        $('.increase-pending-yes-Table-label').show();
        $('.increase-pending-no-Table-label').hide();

        $('#bondDetails').fadeIn();
        $('#page-content-wrapper').animate({ scrollTop: $("#bondDetails").offset().top - 90 }, 800);
        $('.increase-pending-no').removeClass('active');
    });

    $('.increase-pending-no').on('click', function(e) {

        $('.increase-pending-no').removeClass('active');
        $(this).addClass('active');

        responsiveTabs();

        $('.increase-pending-yes-label').hide();
        $('.increase-pending-no-label').show();

        $('.increase-pending-yes-Table-label').hide();
        $('.increase-pending-no-Table-label').show();

        $('#bondDetails').fadeIn();
        $('#page-content-wrapper').animate({ scrollTop: $("#bondDetails").offset().top - 90 }, 800);
        $('.increase-pending-yes').removeClass('active');
    });


    $('.bond-cancel-detail').click(function() {
        $('#bondDetails').hide();
        $('.increase-pending-yes').removeClass('active');
        $('.increase-pending-no').removeClass('active');
        $('.clickable-row').removeClass('active');
        $('.clickable-row-toggle').removeClass('active');
    });
    //....................................................... 
    $('.suspension-history-cancel-detail').click(function() {
        $('#suspension-history-Details').hide();
        
    });


    //....................................................... 
    $('body').on('click', '.graph-filter .btn', function(e) {
        chartRender();
    });
    //....................................................... 



    //....................................................... 
    $(".select-box").change(function() {
        if (this.value == 'active') {
            $('.suspension-history-table').hide();
        } else {
            $('.suspension-history-table').show();
        }
    });
    //.......................................................   



    //.......................................................   
    $('body').on('click', '.dropdown.filter-dropdown .dropdown-toggle', function(event) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', function(e) {
        if (!$('.dropdown.filter-dropdown').is(e.target) && $('.dropdown.filter-dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
            $('.dropdown.filter-dropdown').removeClass('open');
        }
    });
    //.......................................................   


    $('[data-toggle="tooltip"]').tooltip();



    //.......................................................      
    function getCurrentDate(format, daySplit, timeFormat, isAMPM) {
        var d = new Date();
        daySplit = daySplit || "/";

        var myTime = getFormattedTime(timeFormat, isAMPM);

        if (format === "dd-mm-yyyy") {
            return getFormattedDate(d.getDate()) + daySplit + getIndexedMonth(d.getMonth()) + daySplit + d.getFullYear() + myTime;
        } else if (format === "dd-month-yyyy") {
            return getFormattedDate(d.getDate()) + daySplit + getFullNamedMonth(d.getMonth()) + daySplit + d.getFullYear() + myTime;
        } else if (format === "dd-mon-yyyy") {
            return getFormattedDate(d.getDate()) + daySplit + getShortNamedMonth(d.getMonth()) + daySplit + d.getFullYear() + myTime;

        } else if (format === "mm-dd-yyyy") {
            return getIndexedMonth(d.getMonth()) + daySplit + getFormattedDate(d.getDate()) + daySplit + d.getFullYear() + myTime;
        } else if (format === "yyyy-mm-dd") {
            return d.getFullYear() + daySplit + getIndexedMonth(d.getMonth()) + daySplit + getFormattedDate(d.getDate()) + myTime;

        } else {
            return getFormattedDate(d.getDate()) + daySplit + getIndexedMonth(d.getMonth()) + daySplit + d.getFullYear() + myTime;
        }
    }

    function getFormattedDate(myVal) {
        var myResult = addZeroToLessthanTen(myVal);
        return myResult;
    }

    function getIndexedMonth(myVal) {
        var myResult = myVal + 1;
        myResult = addZeroToLessthanTen(myResult);
        return myResult;
    }

    function getFullNamedMonth(myVal) {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[myVal];
    }

    function getShortNamedMonth(myVal) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];
        return monthNames[myVal];
    }

    function addZeroToLessthanTen(i) {
        return (i < 10) ? i = "0" + i : i;
    }

    function getFormattedTime(format, isAMPM) {
        var d = new Date();
        var hours = d.getHours();
        isAMPM = isAMPM || false;
        var ampm = "";
        if (isAMPM) {
            ampm = hours >= 12 ? ' pm' : ' am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12' 
        }
        var h = getFormattedDate(hours);
        var m = getFormattedDate(d.getMinutes());
        var s = getFormattedDate(d.getSeconds());
        if (format === "hh") {
            return " " + h + ampm;
        } else if (format === "hh:mm") {
            return " " + h + ":" + m + ampm;
        } else if (format === "hh:mm:ss") {
            return " " + h + ":" + m + ":" + s + ampm;
        } else {
            return "";
        }
    }
    //.................................................


    
   
    //....................................................
    setTimeout(function(){    
        var whichDOISuspend = getQueryStringValue("key")
        updateDOISuspendLabels(whichDOISuspend);       
    }, 10);  
   
    function updateDOISuspendLabels(whichDOISuspend){ 
        if (whichDOISuspend === "sureties"){
            $("#doi-suspend-Label1").text("Surety Name");
            $("#doi-suspend-Label2").text("Surety License #"); 
            $("#doi-suspend-header").text("Suspensions - Sureties");

        } else if (whichDOISuspend === "agencies"){
            $("#doi-suspend-Label1").text("Agency Name");
            $("#doi-suspend-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Suspensions - Agencies");

        } else if (whichDOISuspend === "agents"){
            $("#doi-suspend-Label1").text("Agent Name");
            $("#doi-suspend-Label2").text("Agent License #");
            $("#doi-suspend-header").text("Suspensions - Agents");

        } else if (whichDOISuspend === "dashboard-liability"){
            $("#doi-suspend-Label1").text("Surety Name");
            $("#doi-suspend-Label2").text("Surety License #");
            $("#doi-suspend-header").text("Total Liabilities");


        } else if (whichDOISuspend === "dashboard-forfeiture"){
            $("#doi-suspend-Label1").text("Agent Name");
            $("#doi-suspend-Label2").text("Agent License #");
            $("#doi-suspend-header").text("Bonds in Forfeiture");

        } else if (whichDOISuspend === "dashboard-summary"){
            $("#doi-suspend-Label1").text("Agency Name");
            $("#doi-suspend-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Summary Judgments Unpaid");
        } else if (whichDOISuspend === "liability-agencies"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("liabilities");  
        }
        else if (whichDOISuspend === "forfeiture-agencies"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Bonds in Forfeiture for Agencies");  
        }
        else if (whichDOISuspend === "unpaid-judgements-agencies"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Summary Judgments Unpaid - Agencies");  
        }else if (whichDOISuspend === "liability-agents"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("liabilities");  
        }
        else if (whichDOISuspend === "forfeiture-agents"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Bonds in Forfeiture for Agents");  
        }
        else if (whichDOISuspend === "unpaid-judgements-agents"){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Summary Judgments Unpaid - Agents");  
        }else if (whichDOISuspend === "dashboard-doi-suspended"){
            $("#doi-suspend-Label1").text("Agency Name");
            $("#doi-suspend-Label2").text("Agency License #");
            $("#doi-suspend-header").text("Summary Judgments Unpaid");
        } 
    }   

    function getQueryStringValue (key) {  
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    } 
    //............................................
    


    //............................................   
    var isDOIStatusReinstate1 = true;
    var isDOIStatusReinstate2 = true;
    var isDOIStatusReinstate3 = true;
    var isDOIStatusReinstate4 = true;
    var isDOIStatusReinstate5 = true;
    var whichDOI = 1;
    doiStatusDefault1();
    doiStatusDefault2();
    doiStatusDefault3();
    doiStatusDefault4();
    doiStatusDefault5();

    function doiStatusDefault1(){   
        $("#doi-status-value1").text("Suspended");//Active/Suspended  
        $("#doi-status-value1").removeClass("active-text txt-bold");
        $("#doi-status-value1").addClass("in-active-text txt-bold");          
        isDOIStatusReinstate1 = true;
    }
    function doiStatusDefault2(){   
        $("#doi-status-value2").text("Suspended");//Active/Suspended  
        $("#doi-status-value2").removeClass("active-text txt-bold");
        $("#doi-status-value2").addClass("in-active-text txt-bold");       
        isDOIStatusReinstate2 = true;
    }
    function doiStatusDefault3(){   
        $("#doi-status-value3").text("Suspended");//Active/Suspended  
        $("#doi-status-value3").removeClass("active-text txt-bold");
        $("#doi-status-value3").addClass("in-active-text txt-bold");       
        isDOIStatusReinstate3 = true;
    }
    function doiStatusDefault4(){   
        $("#doi-status-value4").text("Suspended");//Active/Suspended  
        $("#doi-status-value4").removeClass("active-text txt-bold");
        $("#doi-status-value4").addClass("in-active-text txt-bold");       
        isDOIStatusReinstate4 = true;
    }
    function doiStatusDefault5(){   
        $("#doi-status-value5").text("Suspended");//Active/Suspended  
        $("#doi-status-value5").removeClass("active-text txt-bold");
        $("#doi-status-value5").addClass("in-active-text txt-bold");       
        isDOIStatusReinstate5 = true;
    }

    $('#doi-status-value1').on('click', function(e) { 
        whichDOI = 1;
        if (isDOIStatusReinstate1){
            alertWithoutInput(); 
        } else {
            alertWithInput();  
        }                    
    });
    function doiStatusChange1(){
        if (isDOIStatusReinstate1){
            $("#doi-status-value1").text("Active");//Active/Suspended           
            isDOIStatusReinstate1 = false;       
            $("#doi-status-value1").removeClass("in-active-text txt-bold");
            $("#doi-status-value1").addClass("active-text txt-bold");                  
        } else {           
            doiStatusDefault1();  
        }  
    }

    $('#doi-status-value2').on('click', function(e) {  
        whichDOI = 2;
        if (isDOIStatusReinstate2){
            alertWithoutInput(); 
        } else {
            alertWithInput();  
        }         
    });
    function doiStatusChange2(){
        if (isDOIStatusReinstate2){
            $("#doi-status-value2").text("Active");//Active/Suspended           
            isDOIStatusReinstate2 = false;       
            $("#doi-status-value2").removeClass("in-active-text txt-bold");
            $("#doi-status-value2").addClass("active-text txt-bold");                  
        } else {           
            doiStatusDefault2();  
        }  
    }

    $('#doi-status-value3').on('click', function(e) {   
        whichDOI = 3;    
        if (isDOIStatusReinstate3){
            alertWithoutInput(); 
        } else {
            alertWithInput();  
        }                  
    });
    function doiStatusChange3(){
        if (isDOIStatusReinstate3){
            $("#doi-status-value3").text("Active");//Active/Suspended           
            isDOIStatusReinstate3 = false;       
            $("#doi-status-value3").removeClass("in-active-text txt-bold");
            $("#doi-status-value3").addClass("active-text txt-bold");                  
        } else {           
            doiStatusDefault3();  
        }  
    }

    $('#doi-status-value4').on('click', function(e) {   
        whichDOI = 4;    
        if (isDOIStatusReinstate4){
            alertWithoutInput(); 
        } else {
            alertWithInput();  
        }                  
    });
    function doiStatusChange4(){
        if (isDOIStatusReinstate4){
            $("#doi-status-value4").text("Active");//Active/Suspended           
            isDOIStatusReinstate4 = false;       
            $("#doi-status-value4").removeClass("in-active-text txt-bold");
            $("#doi-status-value4").addClass("active-text txt-bold");                  
        } else {           
            doiStatusDefault4();  
        }  
    }

    $('#doi-status-value5').on('click', function(e) {   
        whichDOI = 5;    
        if (isDOIStatusReinstate5){
            alertWithoutInput(); 
        } else {
            alertWithInput();  
        }                  
    });
    function doiStatusChange5(){
        if (isDOIStatusReinstate5){
            $("#doi-status-value5").text("Active");//Active/Suspended           
            isDOIStatusReinstate5 = false;       
            $("#doi-status-value5").removeClass("in-active-text txt-bold");
            $("#doi-status-value5").addClass("active-text txt-bold");                  
        } else {           
            doiStatusDefault5();  
        }  
    }
    //............................................


    //............................................
    function alertWithInput(){
        swal({
              title: "Suspend?",
              text: "<textarea>Reason Suspended</textarea>",
              
              confirmButtonText: "Save",
              cancelButtonText: "Cancel",
              confirmButtonColor: "#55426D",
              showCancelButton: true,
              closeOnConfirm: false,
              animation: "slide-from-top",
              inputPlaceholder: "Reason for Suspension",
              html: true
        },
        function(inputValue){
            if (inputValue === false) return false;      
            if (inputValue === "") {
                swal.showInputError("You need to write reason for suspension");
                return false;
            } 
            if (whichDOI === 1) {
                doiStatusChange1();   
            } else if (whichDOI === 2) { 
                doiStatusChange2();   
            } else if (whichDOI === 3) {
                doiStatusChange3(); 
            } else if (whichDOI === 4) {
                doiStatusChange4(); 
            } else if (whichDOI === 5) {
                doiStatusChange5();     
            }                  
            swal({
              title: "<h3 style='color:#f00'>Suspended</h3>",
              text: "",
              html: true,
              timer: 1000,
              showConfirmButton: false
            }); 
        });       
    }

    function alertWithoutInput(){
        swal({
              title: "",
              text: "Reactivate?",
              type1: "warning",
              showCancelButton: true,
              confirmButtonColor: "#55426D",
              confirmButtonText: "Save",
              cancelButtonText: "Cancel",
              closeOnConfirm: true,
              closeOnCancel: true
        },
        function(isConfirm){
              if (isConfirm) {                
                if (whichDOI === 1) {
                    doiStatusChange1();   
                } else if (whichDOI === 2) { 
                    doiStatusChange2();   
                } else if (whichDOI === 3) {
                    doiStatusChange3(); 
                } else if (whichDOI === 4) {
                    doiStatusChange4(); 
                } else if (whichDOI === 5) {
                    doiStatusChange5();     
                } 

              } else {
                //swal("Cancel Action");
              }
        });
    }
    //............................................



    //............................................
    doiSearchDefault();
    function doiSearchDefault(){
        $("#panel-search-show").show();
        $("#panel-search-close").hide();
        $("#doi-panel-search").hide();
    }
    $('#panel-search-show').on('click', function(e) {       
        $("#panel-search-show").hide();
        $("#panel-search-close").show();
        $("#doi-panel-search").show();
    });
    $('#panel-search-close').on('click', function(e) {       
        doiSearchDefault();
    });
     //....................................................


    $('.public-search').click(function(){
        $('.public-search-result').toggle(1000);
    });


    //.......................................................   
    changeSelectOption();  
    $("select.drop-entity-types").change(function(){
        changeSelectOption();
    });
    function changeSelectOption(){
        var val = $(".drop-entity-types option:selected").val();
        //console.log('selected option', val);
        if (val === 'sureties'){
            $("#entity-type-Label1").text("Surety Name");
            $("#entity-type-Label2").text("Surety License #"); 
        } else if (val === 'agencies'){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");
        } else if (val === 'agents'){
            $("#entity-type-Label1").text("Agent Name");
            $("#entity-type-Label2").text("Agent License #");
        }   

        var myKey = getQueryStringValue("key");        
        changeSelectOptionText(myKey);
    }
        
    function changeSelectOptionText(val){        
        if (val === 'sureties'){
            $("#entity-type-Label1").text("Surety Name");
            $("#entity-type-Label2").text("Surety License #"); 
            $(".drop-entity-types").val("sureties").change();    
        } else if (val === 'agencies'){
            $("#entity-type-Label1").text("Agency Name");
            $("#entity-type-Label2").text("Agency License #");           
             $(".drop-entity-types").val("agencies").change(); 
        } else if (val === 'agents'){
            $("#entity-type-Label1").text("Agent Name");
            $("#entity-type-Label2").text("Agent License #");          
            $(".drop-entity-types").val("agents").change();            
        }        
    }  
    //.......................................................   
   
    

    $(".dash-tiles.liability").hover(function(){
        $('.drop-list.liability').removeClass('hidden');
        },function(){
            $('.drop-list.liability').addClass('hidden');
    });
    $(".dash-tiles.forfeiture").hover(function(){
        $('.drop-list.forfeiture').removeClass('hidden');
        },function(){
            $('.drop-list.forfeiture').addClass('hidden');
    });
    $(".dash-tiles.summary").hover(function(){
        $('.drop-list.summary').removeClass('hidden');
        },function(){
            $('.drop-list.summary').addClass('hidden');
    });
    $(".dash-tiles.doi-suspended").hover(function(){
        $('.drop-list.doi-suspended').removeClass('hidden');
        },function(){
            $('.drop-list.doi-suspended').addClass('hidden');
    });
    //.......................................................



    //.......................................................
    $('#login-btn').click(function(){
       roleLoginChangeSelectOption();
    });

    //$(".role-login-types select").val("surety");     
    $("select.role-login-types").change(function(){
        //roleLoginChangeSelectOption();
    });
    function roleLoginChangeSelectOption(){
        var val = $(".role-login-types option:selected").val();       
        if (val === 'surety'){
           window.open("dashboard1.html", "_self");
        } else if (val === 'doi'){
          window.open("dashboard.html", "_self");
        } else if (val === 'court'){
           window.open("dashboard1.html", "_self");
        } else if (val === 'agents'){
           window.open("agents1.html", "_self");
        } else if (val === 'detention'){
           window.open("dashboard1.html", "_self");
        }   
    }
    //----------------------------------------------------





    //18Aug2017 START--------------------------------------
    hideApproveRejectPopup();
    var approveRejectChkID;  
    function hideApproveRejectPopup(){
        $('.popup-approve').hide(); 
        $('.popup-reject').hide(); 
    }
    $('.check-approve-reject .approve-reject-chk').click(function(e){  
        //var posY = e.pageY; var posY2 = $(this).position().top;
        var posY1 = $(this).offset().top - 70; 
        approveRejectChkID = this; 
        hideApproveRejectPopup();  
        if (this.checked){
            $('.popup-approve').show(); 
            $(".popup-approve").css({top: posY1}); 
        } else {
            $('.popup-reject').show(); 
            $(".popup-reject").css({top: posY1});
        }        
    });

    $('#approve-close-btn').click(function(e){        
        hideApproveRejectPopup();  
        approveRejectChkID.checked = false;
    }); 

    $('#reject-close-btn').click(function(e){        
        hideApproveRejectPopup(); 
        approveRejectChkID.checked = true; 
    }); 
    $('#approve-cancel-btn').click(function(e){        
        hideApproveRejectPopup();  
        approveRejectChkID.checked = false;
    }); 

    $('#reject-cancel-btn').click(function(e){        
        hideApproveRejectPopup(); 
        approveRejectChkID.checked = true; 
    }); 

    $('#approve-btn').click(function(e){ 
        hideApproveRejectPopup(); 
    });  

    $('#reject-btn').click(function(e){        
        hideApproveRejectPopup();          
    });      
    //18Aug2017 END--------------------------------------




    //24 Aug 2017 START---------------------------------    
    searchLicenseDefault();
    function searchLicenseDefault(){       
        $('#name').val('');
        $('#address').val('');
        $('#city').val('');
        $('#contact').val('');  
        $('#phone').val(''); 
        $('#email').val('');  
        $('#search-license-clear-btn').hide();
        $('#search-license').val('');
    }
    $('#search-license-btn').click(function(e){ 
        $('#name').val('John Smith');
        $('#address').val('Technopark');
        $('#city').val('Trivandrum');
        $('#contact').val('121 Nila');  
        $('#phone').val('1234567890'); 
        $('#email').val('email@email.com');  
        $('#search-license-clear-btn').show();
    }); 
    $('#search-license-clear-btn').click(function(e){        
       searchLicenseDefault();
    }); 


    suretyStatusDefault();
    var isSuretyStatusReinstate = false;
    function suretyStatusDefault(){  
        isSuretyStatusReinstate = false;
        $("#surety-status-value").text("Active");//Active/Suspended
        $("#surety-status-value").addClass("active-text txt-bold");
        $("#surety-status-value").removeClass("in-active-text txt-bold");
       
        $("#reason-th").hide(); 
        $("#reason-td").hide(); 

        $("#suspension-th").hide(); 
        $("#suspension-td").hide();        
    }

    $('#surety-status-value').on('click', function(e) {       
        
        if (!isSuretyStatusReinstate){
            isSuretyStatusReinstate = true;   
            $("#surety-status-value").text("Suspended");//Active/Suspended
            $("#surety-status-value").addClass("in-active-text txt-bold");
            $("#surety-status-value").removeClass("active-text txt-bold");        
                    

            $('#suretyUpdate').modal('show');
            $('#state-suspension-detail').show();
            $('#county-suspension-detail').hide();
            $("#state-radio").prop('checked', true);   
            $("#state-reason-input").val('Liability Controls');  

            defaultPopupForCountySelection();
           
        } else {           
            suretyStatusDefault();  
        }          
    });   

    $('#suspension-update-btn').on('click', function(e) {   
          $('#suretyUpdate').modal('hide'); 
          suspensionPopupClose();
     });  

    function suspensionPopupClose(){
        $("#reason-th").show(); 
        $("#reason-td").show();        

        $("#suspension-th").show(); 
        $("#suspension-td").show();  

        if ($("#state-radio").is(":checked")) {           
            $("#reason-td").text($("#state-reason-input").val());  
            $("#suspension-td").text('State');
        }else {
            $("#reason-td").text($("#county-reason-input").val());  
            $("#suspension-td").text('County (Alameda, Alpine, Lassen)');           
        }       
    }

    $("#state-radio, #county-radio").change(function () {
        if ($("#state-radio").is(":checked")) {
            $('#state-suspension-detail').show();
            $('#county-suspension-detail').hide();
            
            $("#reason-td").text($("#state-reason-input").val());  
            $("#suspension-td").text('State');

        } else {
            $('#county-suspension-detail').show();
            $('#state-suspension-detail').hide();

           
            $("#reason-td").text($("#county-reason-input").val());  
             $("#suspension-td").text('County');
        }
    }); 

    /*function getSelectValues(select) {
      var result = [];
      var options = select && select.options;
      var opt;
      for (var i=0, iLen=options.length; i<iLen; i++) {
        opt = options[i];
        if (opt.selected) {
          result.push(opt.value || opt.text);
        }
      }
      return result;
    }*/
    //..............................................



    //Header Toggle...........................................

     if ($( "#wrapper" ).hasClass("toggled")){
            $("#header-wrap").removeClass("colp");
            $("#header-wrap").addClass("exp");     
            $(".navbar-left").fadeIn("slow");
        } else {
            $("#header-wrap").removeClass("exp");
            $("#header-wrap").addClass("colp");
            $(".navbar-left").hide();
        }
   

    $('#menu-toggle1').click(function(e){   
        if ($( "#header-wrap" ).hasClass("colp")){
            $(".navbar-left").fadeIn("slow");
            $("#header-wrap").removeClass("colp");
            $("#header-wrap").addClass("exp");           
        } else {
            $("#header-wrap").removeClass("exp");
            $("#header-wrap").addClass("colp");
            $(".navbar-left").hide();
        }  
    });
    //Header Toggle...........................................
    //24 Aug 2017 END-----------------------------------


    
    //29 Aug 2017 START-----------------------------------
    var selectedCounties = [];
    var selectedCountiesRemove = [];  
    $('#county-suspension-selected-list').empty(); 
    $("#county-suspension-list").val([]);

    function defaultPopupForCountySelection(){
        $('#county-suspension-selected-list').empty(); 
        $("#county-suspension-list").val([]);
        selectedCounties = [];
        selectedCountiesRemove = []; 
        $('#list-add-btn').hide();
        $('#list-remove-btn').hide();
    }

    $( "#county-suspension-list")
      .change(function() {
        selectedCounties = [];        
        $( "#county-suspension-list option:selected").each(function() {        
          selectedCounties.push($( this ).text());
        });  
        //console.log(selectedCounties);
        $('#list-add-btn').show();
        $('#list-remove-btn').hide();
        $("#county-suspension-selected-list").val([]);

    }).trigger( "change" );

    $( "#county-suspension-selected-list")
      .change(function() {
        selectedCountiesRemove = [];        
        $( "#county-suspension-selected-list option:selected").each(function() {        
          selectedCountiesRemove.push($( this ).text());
        });  
        //console.log(selectedCountiesRemove);
        $('#list-add-btn').hide();        
        $('#list-remove-btn').show();  
        $("#county-suspension-list").val([]);      
        
    }).trigger( "change" );


    $('#list-add-btn').click(function(e){ 
        var tmpArray = [];     
        $("#county-suspension-selected-list option").each(function() {           
            tmpArray.push($( this ).text());
        });
        //console.log('1..', tmpArray);

        for (var i = 0; i < selectedCounties.length; i++){ 
            tmpArray = tmpArray.filter(function(item) { 
                return item !== selectedCounties[i];
            })
        } 
        //console.log('2..', tmpArray);

        var newArray = tmpArray.concat(selectedCounties);        
        //console.log('3..', newArray);

        $('#county-suspension-selected-list').empty(); 
        for (var i = 0; i < newArray.length; i++){ 
            $('#county-suspension-selected-list').append( '<option value="'+i+'">' + newArray[i] + '</option>' );
        }

        $("#county-suspension-list").val([]); 
        $("#county-suspension-selected-list").val([]); 
    }); 


    $('#list-remove-btn').click(function(e){         
        var tmpArray = [];     
        $("#county-suspension-selected-list option").each(function() {           
            tmpArray.push($( this ).text());
        });
        //console.log('1..', tmpArray);

        for (var i = 0; i < selectedCountiesRemove.length; i++){ 
            tmpArray = tmpArray.filter(function(item) { 
                return item !== selectedCountiesRemove[i];
            })
        } 
        //console.log('2.. ', tmpArray);
        $('#county-suspension-selected-list').empty(); 
        for (var i = 0; i < tmpArray.length; i++){ 
            $('#county-suspension-selected-list').append( '<option value="'+i+'">' + tmpArray[i] + '</option>' );
        }

        if (tmpArray.length>0){
            $('#list-remove-btn').show();
        } else {
            $('#list-remove-btn').hide();
        }

        $("#county-suspension-list").val([]); 
        $("#county-suspension-selected-list").val([]); 

    });     
    //29 Aug 2017 END-----------------------------------   
});  
        


/*
//.......................................................
 //$("#wrapper").toggleClass("toggled"); 
 //$("#wrapper").removeClass("toggled");   

$('#menu-home-btn').click(function(){
    
   $("#menu-agencies-btn").removeClass("active");
    $("#menu-agents-btn").removeClass("active");
    $("#menu-bonds-btn").removeClass("active");
    $("#menu-admin-btn").removeClass("active");
    $("#menu-home-btn").addClass("active");
   
    $("#wrapper").toggleClass("toggled"); 
    //window.open("dashboard1.html", "_self");    
});

$('#menu-agencies-btn').click(function(){        
    $("#menu-agencies-btn").addClass("active");
    $("#menu-agents-btn").removeClass("active");
    $("#menu-bonds-btn").removeClass("active");
    $("#menu-admin-btn").removeClass("active");        
    $("#menu-home-btn").removeClass("active");

    $("#wrapper").toggleClass("toggled");  
    //window.open("agencies1.html", "_self");
});

$('#menu-agents-btn').click(function(){        
    $("#menu-agencies-btn").removeClass("active");
    $("#menu-agents-btn").addClass("active");
    $("#menu-bonds-btn").removeClass("active");
    $("#menu-admin-btn").removeClass("active");        
    $("#menu-home-btn").removeClass("active");

    $("#wrapper").toggleClass("toggled");  
    //window.open("agents1.html", "_self");
});

$('#menu-bonds-btn').click(function(){       
    $("#menu-agencies-btn").removeClass("active");
    $("#menu-agents-btn").removeClass("active");
    $("#menu-bonds-btn").addClass("active");
    $("#menu-admin-btn").removeClass("active");        
    $("#menu-home-btn").removeClass("active");
    
    //window.open("sureties1.html", "_self");
    $("#wrapper-sureties1").toggleClass("toggled");   
});

$('#menu-admin-btn').click(function(){      
    $("#menu-agencies-btn").removeClass("active");
    $("#menu-agents-btn").removeClass("active");
    $("#menu-bonds-btn").removeClass("active");
    $("#menu-admin-btn").addClass("active");        
    $("#menu-home-btn").removeClass("active");

    $("#wrapper").toggleClass("toggled"); 
    //window.open("#", "_self");
});
//.......................................................
*/
