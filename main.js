function sub(obj,name){
return obj.field("link").filter(x=>x.field("name")==name)[0]
}
