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

export function kthToLastTwoPointers(list, k) {
  if (!list) {
    throw new Error("invalid list");
  }

  let last = list,
  kth = list;

  for (let i = 0; i < k; ++i) {
    last = last.next;
    if (!last) {
      throw new Error("list is not long enough");
    }
  }

  while (last.next) {
    last = last.next;
    kth = kth.next;
  }

  return kth.val;
}

// determine the length of the input list. subtract k from the calculated length and skip that many nodes from the start of the list. that node is the kth to last.
