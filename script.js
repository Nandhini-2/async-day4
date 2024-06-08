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
var f_name_break = break_create();
var input_fname = input_create("input","type","text","id","fname");
var f1_name_break = break_create();

var m_name = label_create("label","for","mname","MiddleName");
var m_name_break = break_create();
var input_mname = input_create("input","type","text","id","mname");
var m1_name_break = break_create();

var l_name = label_create("label","for","lname","LastName");
var l_name_break = break_create();
var input_lname = input_create("input","type","text","id","lname");
var l1_name_break = break_create();

var pwd = label_create("label","for","pwd","Password");
var pwd_break = break_create();
var input_pwd = input_create("input","type","password","id","pwd");
var pwd1_break = break_create();

var file = label_create("label","for","mfile","Select a file:");
var file_break = break_create();
var input_file = input_create("input","type","file","id","mfile");
var file1_break = break_create();

var break_add = break_create();


document.body.append(f_name,f_name_break,input_fname,f1_name_break,
    m_name,m_name_break,input_mname,m1_name_break,
    l_name,l_name_break,input_lname,l1_name_break,
    pwd,pwd_break,input_pwd,pwd1_break,
    file,file_break,input_file)
