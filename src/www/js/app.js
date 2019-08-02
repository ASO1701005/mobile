function addmainTodo(){
  var title = $("#todo-title").val();
  var body = $("#todo-body").val();
  var img_tag = "";
  $.mobile.changePage($("#main-page"));
  $("#todo-list2").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p><a href='#' onclick='detail(title);'></li>")
  $("#todo-list2").listview('refresh');
};
function detail(a){
  //var a = $("#todo-title").val();
 $.mobile.changePage($("#detail-page"));
 List.equalTo("title",a)
    .fetchAll()
    .then(function(results){
        var tit = document.getElementById("tit");
        tit.innerHTML = results[1];
    })
    .catch(function(err){
        alert('取得に失敗しました');
    });
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth()+1;
      document.write(year + "年" + month + "月")
 //var test = document.getElementById("ttl");
 //test.innerHTML = $("#todo-title").val();
 //document.body.appendChild(test);
}
function addTodo() {
    $.mobile.changePage($("#list-page"));
};
function listTodo() {
    $.mobile.changePage($("#add-page"));
};
function shareTodo() {
  var title = $("#todo-title").val();
  var body = $("#todo-body").val();
  var img_tag = "";

  list.set("title",title)
        .set("body",body)
        .save()
        .then(function(list){
          // 保存後の処理
          console.log("保存成功");
         })
         .catch(function(err){
          // エラー処理
          console.log(err);
         });

  $.mobile.changePage($("#list-page"));
  $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p><a href='#' onclick='addmainTodo();'></li>")
  $("#todo-list").listview('refresh');
};
/*
function paint(id) {
  var canvas = document.getElementById(id);
  var canvas = document.getElementsByTagName("canvas")[0];
  var context = canvas.getContext('2d');
  context.fillRect(10,100,40,50);
  //context.fillRect(0,0,canvas.width,canvas.height); 

  //var obj = document.getElementById(id);
  //obj.style.color = '#ffffff';            //文字色を白にする
  //obj.style.backgroundColor = '#ff0000';  //背景色を赤にする
  //obj.style.width = '10px';
  //obj.style.height = '10px'
};
*/