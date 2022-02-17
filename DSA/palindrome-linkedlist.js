var isPalindrome = function (head) {
    // Get the middle node
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the LL from middle to end
    let prev = null;
    let next = null;
    let temp = slow;
    while (temp != null) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    // Compare the LL from start to mid && end to mid
    let current1 = head;
    let current2 = prev;
    while (current1 !== null && current2 !== null) {
        if (current1.val !== current2.val) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return true;
};
