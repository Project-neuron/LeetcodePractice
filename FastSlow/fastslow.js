class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
} 

let node1 = new ListNode(3);
let node2 = new ListNode(2); 
let node3 = new ListNode(0);  
let node4 = new ListNode(-4);  

node1.next = node2; 
node2.next = node3; 
node3.next = node4; 
node4.next = node2;  

function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}



