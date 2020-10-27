// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  if(!root) return -1;
  return  1 + Math.max(getHeight(root.left),getHeight(root.right))
  // let height = 0;
  // while(root.left){
  //   root = root.left;
  //   height++
  // }
  // while(root.right){
  //   root = root.right;
  //   height++
  // }

}


module.exports = {
  getHeight
};