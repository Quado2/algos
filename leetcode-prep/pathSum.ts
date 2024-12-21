function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
   
  function traverse(currSum: number, node: TreeNode | null):boolean {
      if(!node) return false;
      currSum += node.val
      if(!node.left && !node.right) return currSum === targetSum

      return traverse(currSum, node.left) || traverse(currSum, node.right)
  }

  return traverse(0, root)
};