$("document").ready(function () {
    $("#page-home").show();
    $("#page-archive").hide();
    $("#page-about").hide();
    $("#dialog-cmnt").hide();
})

$("#btn-home").click(function () {
    $("#page-home").show();
    $("#page-archive").hide();
    $("#page-about").hide();
})
$("#btn-archive").click(function () {
    $("#page-home").hide();
    $("#page-archive").show();
    $("#page-about").hide();
})
$("#btn-about").click(function () {
    $("#page-home").hide();
    $("#page-archive").hide();
    $("#page-about").show();
})

$("#btn-search").click(function () {
    $("#dialog-cmnt").show();
})
$("#btn-close").click(function () {
    $("#dialog-cmnt").hide();
})