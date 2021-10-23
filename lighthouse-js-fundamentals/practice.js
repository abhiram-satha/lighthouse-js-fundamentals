var arr1 = [
    {1: "", name: "hello"},
    {2:"", name: "hi" },
    {3: "",name: "hey"}
  ];

  //console.log(Object.keys(arr1[2]['name']));
  console.log((arr1[2].name));

var obj = {};


for (var i = 0; i < arr1.length; i++) {
  //var x = arr1[i].name;
  obj[arr1[i].name] = [];
}



//console.log(obj);