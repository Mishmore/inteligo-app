var fecha, fechaPdf;
function setDate() {
	Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

  var d = new Date;
      fecha = [d.getFullYear(),
            (d.getMonth()+1).padLeft(),
               d.getDate().padLeft()].join('-') +' ' +
              [d.getHours().padLeft(),
               d.getMinutes().padLeft(),
               d.getSeconds().padLeft()].join(':');
}

function setNamePdf(){
  Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

  var d = new Date;
      fechaPdf = [d.getFullYear(),
            (d.getMonth()+1).padLeft(),
               d.getDate().padLeft()] +'-' +
              [d.getHours().padLeft(),
               d.getMinutes().padLeft(),
               d.getSeconds().padLeft()];
}