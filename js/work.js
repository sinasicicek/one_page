const fr=document.querySelector(".fra")

let dosya=
[
    "./pages/1/index.html",
    "./pages/2/index.html",
    "./pages/3/index.html",
    "./pages/4/index.html",
    "./pages/5/index.html",
    "./pages/6/index.html",
    "./pages/7/index.html",
    "./pages/8/index.html",
    "./pages/9/index.html",
    "./pages/10/index.html",
    "./pages/11/index.html",
    "./pages/12/index.html",
    "./pages/13/index.html",
    "./pages/14/index.html",
]




const ekle=document.getElementById("conta")


 /*img create */
function img_cre(img_num){
    const img=document.createElement("img")
    img.src=`./assest/${img_num}.jpg`
    return img
}

 /*a create */
function a_crea(page_name) {
    const a_href=document.createElement("a")
    a_href.href=page_name
    return a_href
}

 /*fra_item */
 function fra_item(page_name,img_num) {

    /*get a */
    let a_h=a_crea(page_name)

    /*get img */
    let img=img_cre(img_num)

    a_h.appendChild(img)


    const fra_item=document.createElement("div")
    fra_item.classList.add("fra-item")

    if(img_num !=null){
        fra_item.setAttribute("name",img_num)
    }

    fra_item.appendChild(a_h)
    return fra_item

}

let num=1;

dosya.forEach(element => {
    if(element!=null){
        let fr=fra_item(element,num)
        num=num+1;
        ekle.appendChild(fr)
    }
});

