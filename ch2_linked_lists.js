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

////////
// 2.2
// walk one pointer ahead k nodes first then create a second pointer to the start of the list. walk both pointers until the first one hits the end of the list, at that point the second pointer will be pointing to the kth to the last node 
