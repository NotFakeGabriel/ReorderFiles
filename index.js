const fs = require('fs');

 function list(dir,arch) {
  arch = []
  arch = fs.readdirSync(dir);
  return arch;
};

let oldDirectory = 'path of old directory';
let newDirectory = 'path of new directory';
let  info  = list(oldDirectory);

function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath,function(err) {
    if(err) {
      throw err;
    } else {}
  });
};

let max = info.length
let arr = []
for (let i = 0; i < max; i++) {
   arr[i] = i + 1;
}
let tmp, n
for (let p = arr.length; p;) {
  n = Math.random() * p-- | 0;
  tmp = arr[n];
  arr[n] = arr[p];
  arr[p] = tmp;
}

function order(oldDir,newDir, arr, info) {
  arr.forEach( (x,i) => {
    rename(`${oldDir}/${info[i]}`, `${newDir}/${x} ${info[i]}`);
  })
}

order(oldDirectory, newDirectory, arr, info)