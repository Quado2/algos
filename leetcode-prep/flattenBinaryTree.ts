class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function flatten(root: TreeNode | null): void {
  let prev: TreeNode | null = null;
  function connect(node: TreeNode | null) {
    if (!node) return null;

    connect(node.right);
    connect(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  }

  connect(root);
}

function flatten2(root: TreeNode | null): void {
  if (!root) return;

  let stack = [root];
  while (stack.length > 0) {
    let curr = stack.pop() as TreeNode;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    curr.left = null;
    if (stack.length > 0) curr.right = stack[stack.length - 1];
  }
}
