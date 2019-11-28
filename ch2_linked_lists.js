////////
// 2.1
// iterate through list keeping a set of all the values seen. if a seen value is seen again in the list then skip over it

export function removeDuplicatesSent(list) {
  if (!list) {
    return list;
  }

  let seen = new Set(),
  node = list;

  seen.add(node.val);
  while (node.next) {
    if (seen.has(node.next.val)) {
      node.next = node.next.next;
    }
    else {
      seen.add(node.next.val);
      node = node.next;
    }
  }

  return list;
}
