function label_create(tagname,attrname,attrvalue,content) {
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML = content;
return ele;
}

//<label type="email">Email</label>

function break_create(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
var ele1 = document.createElement(tagname);
ele1.setAttribute(attrname,attrvalue);
ele1.setAttribute(attrname1,attrvalue1);
ele1.innerHTML = content;
return ele1;
}

var f_name = label_create("label","for","fname","FirstName");
var input_fname = input_create("input","type","text","id","fname");

var m_name = label_create("label","for","mname","MiddleName");
var input_mname = input_create("input","type","text","id","mname");

var l_name = label_create("label","for","lname","LastName");
var input_lname = input_create("input","type","text","id","lname");

var pwd = label_create("label","for","pwd","Password");
var input_pwd = input_create("input","type","password","id","pwd");

var file = label_create("label","for","mfile","Select a file:");
var input_file = input_create("input","type","file","id","mfile");

var break_add = break_create();


document.body.append(f_name,break_add,input_fname,break_add,m_name,break_add,break_add,input_mname,break_add,l_name,break_add,input_lname,break_add,pwd,break_add,input_pwd,break_add,
    file,break_add,input_file
