var h = ["B09","O67","I21","B04","B13","N34","N43","O74","O75","I26"];
e = [];

for (var i = 0; i < h.length; ++i) {
    if ((parseInt(h[i].substring(1)) % 2) == 0)
     {
        e.push(h[i]);
    }
}
alert(e);

o = [];

for (var i = 0; i < h.length; ++i) {
    if ((parseInt(h[i].substring(1)) % 2) == 1) 
     {
        o.push(h[i]);
    }
}

alert(o);