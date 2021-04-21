interface TreeNode {
    val: number;
    right: TreeNode | null;
    left: TreeNode | null;
}

const depthFirstSearch = (root: TreeNode | null): number[] => {
    const leftVal = depthFirstSearch(root.left)
    const rightVal = depthFirstSearch(root.right)

    return [...leftVal, root.val, ...rightVal]
}