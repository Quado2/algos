/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  if(!preorder.length || !inorder.length) return null;
  const tree = new TreeNode(preorder[0])
  const valIndex = inorder.findIndex(val => val === preorder[0])
  const inorderLeft = inorder.slice(0,valIndex)
  const inorderRight = inorder.slice(valIndex+1, inorder.length)
  const preorderLeft = preorder.slice(1, inorderLeft.length+1)
  const preorderRight = preorder.slice(inorderLeft.length+1, preorder.length)
  
  tree.left = buildTree1(preorderLeft, inorderLeft);
  tree.right = buildTree1(preorderRight, inorderRight);
  return tree
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if(!postorder.length) return null;
  const val = postorder.pop();
  const root = new TreeNode(val);
  const valIndex = inorder.findIndex(inval => val === inval )
  

  root.left = buildTree(inorder.slice(0,valIndex), postorder.slice(0,valIndex) )
  root.right = buildTree(inorder.slice(valIndex+1, inorder.length), postorder.slice(valIndex, postorder.length))

  return root;
  
};