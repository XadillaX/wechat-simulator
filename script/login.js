/**
 * Created with JetBrains WebStorm.
 * User: XadillaX
 * Date: 13-10-9
 * Time: 下午3:39
 * The login window script.
 */
function setCloseButton() {
    /** close button */
    $("#top-titlebar-close-button").click(function() {
        window.close();
    });
    $("#top-titlebar-close-button").hover(
        function() {
            $(this).attr("src", "../assets/button_close_hover.png");
        },
        function() {
            $(this).attr("src", "../assets/button_close.png");
        }
    );
}

function login() {
    var requestor = require("wxRequestGenerator").create($("#srvaddress").val(), $("#token").val());
    requestor.verifyUrl(function(status, msg) {
        if(!status) {
            alert(msg);
        } else {
            alert("登录成功！");
        }
    });

    return false;
}

$(function() {
    setCloseButton();

    require("nw.gui").Window.get().show();
});
