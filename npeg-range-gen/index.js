// [["a", "Z"], "?"]!["B"]

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

function allChars(lst) {
  var output = [];
  for (var i in lst) {
    let item = lst[i];
    if (item instanceof Array) {
      let itemNum = [item[0].codePointAt(0), item[1].codePointAt(0)].sort(
        (a, b) => a - b
      );

      let irange = range(itemNum[0], itemNum[1] + 1);

      for (let x in irange) {
        let item = irange[x];
        output.push(item); //String.fromCharCode
      }
    } else {
      output.push(item.codePointAt(0));
    }
  }
  return output;
}

function makeRange(nums) {
  let len = nums.length;
  nums.push(0);
  var output = "{";
  var tail = "";
  var last = null;
  for (let i = 0; i < len; i++) {
    let item = nums[i];
    let lookahead = nums[i + 1];
    // console.log(item, lookahead, String.fromCharCode(item))
    if (item + 1 === lookahead) {
      if (last == null) {
        last = String.fromCharCode(item);
      } else {
        continue;
      }
    } else {
      if (last != null) {
        output += `'${last}'..'${String.fromCharCode(item)}', `;
        last = null;
      } else {
        tail += `'${String.fromCharCode(item)}', `;
      }
    }
  }
  output += tail + "}";
  return output;
}

function convert(event) {
  let val = document.getElementById("input").value;
  //console.log(val[0].codePointAt(0));
  var use = JSON.parse(val.split("!")[0]);
  var not = JSON.parse(val.split("!")[1]);
  use = allChars(use);
  not = allChars(not);
  for (let i in not) {
    let item = not[i];
    const index = use.indexOf(item);
    if (index > -1) {
      use.splice(index, 1);
    }
  }
  use = use.sort((a, b) => a - b);
  document.getElementById("output").textContent = makeRange(use);
}
