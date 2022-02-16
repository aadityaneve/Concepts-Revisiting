let node = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
    },
    right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: {
            value: 7,
            left: null,
            right: { value: 8, left: null, right: null },
        },
    },
};

let arr = [];
function treeRightView(root) {
    if (root === null) {
        return;
    }

    // treeRightView(root.left);
    arr.push(root.value);
    treeRightView(root.right);
}
treeRightView(node);
console.log('arr:', arr);
