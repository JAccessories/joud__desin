
        var copybtn = document.getElementById("copy-btn");
        var link = document.getElementById("link");

        copybtn.onclick = function () {
            navigator.clipboard.writeText(link.innerHTML);
            copybtn.innerHTML = "تم النسخ"
            setTimeout(function (){
                copybtn.innerHTML = "نسخ"
            }, 2000)
        }

